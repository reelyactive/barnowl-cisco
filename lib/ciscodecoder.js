/**
 * Copyright reelyActive 2026
 * We believe in an open Internet of Things
 */


const protobuf = require('protobufjs/minimal');
const dataBatchDecoder = require('./databatchdecoder.js');
const iotOrchestratorProto = require('./iotorchestratorproto.js');
const serialMessageDecoder = require('./serialmessagedecoder.js');

const MIN_SERIAL_MESSAGE_BYTES = 23;
const SERIAL_START_MARKER = 0x0a;
const SERIAL_MIDDLE_MARKER = 0xff;


/**
 * CiscoDecoder Class
 * Decodes data streams from one or more Cisco IoT Orchestrators and forwards
 * the packets to the given BarnowlCisco instance.
 */
class CiscoDecoder {

  /**
   * CiscoDecoder constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    let self = this;
    options = options || {};

    this.barnowl = options.barnowl;
    this.serialQueue = Buffer.alloc(0);
  }

  /**
   * Handle protobuf data from a given device, specified by the origin
   * @param {Buffer} data The data as a protocol buffer.
   * @param {String} origin The unique origin identifier of the device.
   * @param {Number} time The time of the data capture.
   * @param {Object} decodingOptions The packet decoding options.
   */
  handleProtobuf(data, origin, time, decodingOptions) {
    let self = this;
    let raddecs = [];
    decodingOptions = decodingOptions || {};

    try {
      let dataBatch = iotOrchestratorProto.nipc.DataBatch.decode(data);
      dataBatch.toJSON();

      let decoded = dataBatchDecoder.decode(dataBatch, origin, time,
                                            decodingOptions);
      decoded.raddecs.forEach((raddec) => {
        self.barnowl.handleRaddec(raddec);
      });
      decoded.infrastructureMessages.forEach((infrastructureMessage) => {
        self.barnowl.handleInfrastructureMessage(infrastructureMessage);
      });
    }
    catch(error) {
      console.log('Error handling Cisco IoT Orchestrator data\r\n', error);
    }
  }

  /**
   * Handle data from a serial stream, specified by the origin
   * @param {Buffer} data The serial data.
   * @param {String} origin The unique origin identifier of the source.
   * @param {Number} time The time of the data capture.
   * @param {Object} decodingOptions The packet decoding options.
   */
  handleSerialData(data, origin, time, decodingOptions) {
    let self = this;
    let queue = Buffer.concat([ self.serialQueue, data ]);
    let messages = [];
    let isPossibleQueuedMessage = (queue.length >= MIN_SERIAL_MESSAGE_BYTES);

    // Extract individual serial messages from the data queue
    while(isPossibleQueuedMessage) {
      let isValid = ((queue.readUInt8() === SERIAL_START_MARKER) &&
                     (queue.readUInt8(12) === SERIAL_MIDDLE_MARKER));
      let messageLength = queue.readUInt8(1);
      let payloadLength = queue.readUInt8(22);
      let isValidMessageLength = (messageLength === (MIN_SERIAL_MESSAGE_BYTES +
                                                     payloadLength));

      if(queue.length >= messageLength) {
        if(isValid && isValidMessageLength) {
          messages.push(queue.subarray(0, messageLength));
        }

        queue = queue.subarray(messageLength);
        isPossibleQueuedMessage = (queue.length >= MIN_SERIAL_MESSAGE_BYTES);
      }
      else {
        isPossibleQueuedMessage = false;
      }
    }

    self.serialQueue = queue;

    messages.forEach((message) => {
      let raddec = serialMessageDecoder.decode(message, origin, time);

      self.barnowl.handleRaddec(raddec);
    });
  }

}


module.exports = CiscoDecoder;
