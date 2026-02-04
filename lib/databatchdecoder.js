/**
 * Copyright reelyActive 2026
 * We believe in an open Internet of Things
 */


const Raddec = require('raddec');


/**
 * Decode the given northbound IoT Operations data.
 * @param {Object} dataBatch The dataBatch to decode.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 * @param {Object} options The packet decoding options.
 */
function decode(dataBatch, origin, time, options) {
  options = options || {};
  let isValidDataBatch = Array.isArray(dataBatch?.messages);

  if(!isValidDataBatch) {
    return { raddecs: [], infrastructureMessages: [] };
  }

  let raddecs = [];

  dataBatch.messages.forEach((dataSubscription) => {
    let isValidBleAdvertisement =
                       (dataSubscription.hasOwnProperty('bleAdvertisement') &&
                        dataSubscription.hasOwnProperty('apMacAddress'));

    if(isValidBleAdvertisement) {
      let timestamp = dataSubscription.timestamp.seconds.low * 1000 +
                      Math.round(dataSubscription.timestamp.nanos / 1000000);

      let raddec = new Raddec({
        transmitterId: dataSubscription.bleAdvertisement.macAddress,
        transmitterIdType: Raddec.identifiers.TYPE_UNKNOWN,
        packets: [ dataSubscription.data.toString('hex') ],
        timestamp: timestamp
      });
      raddec.addDecoding({ receiverId: dataSubscription.apMacAddress,
                           receiverIdType: Raddec.identifiers.TYPE_EUI48,
                           rssi: dataSubscription.bleAdvertisement.rssi });
      raddecs.push(raddec);
    }
  });

  return { raddecs: raddecs, infrastructureMessages: [] };
}


module.exports.decode = decode;