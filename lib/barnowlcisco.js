/**
 * Copyright reelyActive 2026
 * We believe in an open Internet of Things
 */


const EventEmitter = require('events').EventEmitter;
const CiscoDecoder = require('./ciscodecoder.js');
const MqttListener = require('./mqttlistener.js');
const TestListener = require('./testlistener.js');


/**
 * BarnowlCisco Class
 * Converts Cisco IoT Orchestrator radio decodings into standard raddec events.
 * @param {Object} options The options as a JSON object.
 */
class BarnowlCisco extends EventEmitter {

  /**
   * BarnowlCisco constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    super();
    options = options || {};
    options.barnowl = this;

    this.listeners = [];
    this.ciscoDecoder = new CiscoDecoder({ barnowl: this });
  }

  /**
   * Add a listener to the given hardware interface.
   * @param {Class} ListenerClass The (uninstantiated) listener class.
   * @param {Object} options The options as a JSON object.
   */
  addListener(ListenerClass, options) {
    options = options || {};
    options.decoder = this.ciscoDecoder;

    let listener = new ListenerClass(options);
    this.listeners.push(listener);
  }

  /**
   * Handle and emit the given raddec.
   * @param {Raddec} raddec The given Raddec instance.
   */
  handleRaddec(raddec) {
    // TODO: observe options to normalise raddec
    this.emit("raddec", raddec);
  }

  /**
   * Handle and emit the given infrastructure message.
   * @param {Object} message The given infrastructure message.
   */
  handleInfrastructureMessage(message) {
    this.emit("infrastructureMessage", message);
  }
}


module.exports = BarnowlCisco;
module.exports.MqttListener = MqttListener;
module.exports.TestListener = TestListener;
