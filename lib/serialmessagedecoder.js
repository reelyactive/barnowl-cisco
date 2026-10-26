/**
 * Copyright reelyActive 2026
 * We believe in an open Internet of Things
 */

const Raddec = require('raddec');


/**
 * Decode the given serial message.
 * @param {Buffer} message The message.
 * @param {String} origin Origin of the data stream.
 * @param {Number} time The time of the data capture.
 */
function decode(message, origin, time) {
  let transmitterId = message.readUIntLE(5, 6).toString(16).padStart(12, '0');
  let transmitterIdType = (message.readUInt8(4) === 0x00) ?
                                              Raddec.identifiers.TYPE_EUI48 :
                                              Raddec.identifiers.TYPE_RND48;
  let receiverId = 'c15c05957e35'; // TODO: from environment variable?
  let rssi = message.readInt8(13);
  let payloadLength = message.readUInt8(22);
  let payload = message.subarray(23).toString('hex');
  let packet = (transmitterIdType === Raddec.identifiers.TYPE_EUI48) ? '0':'4';
  packet += '0';                                            // Type (ADV_IND)
  packet += ('0' + (payload.length / 2).toString(16)).substr(-2); // Length
  packet += message.toString('hex', 5, 11);                 // Address
  packet += payload;                                        // PDU

  let raddec = new Raddec({ transmitterId: transmitterId,
                            transmitterIdType: transmitterIdType,
                            rssiSignature: [{
                              receiverId: receiverId,
                              receiverIdType: Raddec.identifiers.TYPE_EUI48,
                              rssi: rssi
                            }],
                            timestamp: time,
                            packets: [ packet ] });
console.log(raddec);
  return raddec;
}


module.exports.decode = decode;
