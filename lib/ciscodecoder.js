/**
 * Copyright reelyActive 2026
 * We believe in an open Internet of Things
 */


const protobuf = require('protobufjs/minimal');
const dataBatchDecoder = require('./databatchdecoder.js');
const iotOrchestratorProto = require('./iotorchestratorproto.js');


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

}


module.exports = CiscoDecoder;
