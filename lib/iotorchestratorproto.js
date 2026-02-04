/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.nipc = (function() {

    /**
     * Namespace nipc.
     * @exports nipc
     * @namespace
     */
    var nipc = {};

    nipc.DataSubscription = (function() {

        /**
         * Properties of a DataSubscription.
         * @memberof nipc
         * @interface IDataSubscription
         * @property {string|null} [deviceId] DataSubscription deviceId
         * @property {Uint8Array|null} [data] DataSubscription data
         * @property {google.protobuf.ITimestamp|null} [timestamp] DataSubscription timestamp
         * @property {string|null} [apMacAddress] DataSubscription apMacAddress
         * @property {nipc.DataSubscription.IBLESubscription|null} [bleSubscription] DataSubscription bleSubscription
         * @property {nipc.DataSubscription.IBLEAdvertisement|null} [bleAdvertisement] DataSubscription bleAdvertisement
         * @property {nipc.DataSubscription.IZigbeeSubscription|null} [zigbeeSubscription] DataSubscription zigbeeSubscription
         * @property {nipc.DataSubscription.IRawPayload|null} [rawPayload] DataSubscription rawPayload
         * @property {nipc.DataSubscription.IBLEConnectionStatus|null} [bleConnectionStatus] DataSubscription bleConnectionStatus
         * @property {nipc.DataSubscription.IApplicationEvent|null} [applicationEvent] DataSubscription applicationEvent
         */

        /**
         * Constructs a new DataSubscription.
         * @memberof nipc
         * @classdesc Represents a DataSubscription.
         * @implements IDataSubscription
         * @constructor
         * @param {nipc.IDataSubscription=} [properties] Properties to set
         */
        function DataSubscription(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataSubscription deviceId.
         * @member {string|null|undefined} deviceId
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.deviceId = null;

        /**
         * DataSubscription data.
         * @member {Uint8Array} data
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.data = $util.newBuffer([]);

        /**
         * DataSubscription timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.timestamp = null;

        /**
         * DataSubscription apMacAddress.
         * @member {string|null|undefined} apMacAddress
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.apMacAddress = null;

        /**
         * DataSubscription bleSubscription.
         * @member {nipc.DataSubscription.IBLESubscription|null|undefined} bleSubscription
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.bleSubscription = null;

        /**
         * DataSubscription bleAdvertisement.
         * @member {nipc.DataSubscription.IBLEAdvertisement|null|undefined} bleAdvertisement
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.bleAdvertisement = null;

        /**
         * DataSubscription zigbeeSubscription.
         * @member {nipc.DataSubscription.IZigbeeSubscription|null|undefined} zigbeeSubscription
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.zigbeeSubscription = null;

        /**
         * DataSubscription rawPayload.
         * @member {nipc.DataSubscription.IRawPayload|null|undefined} rawPayload
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.rawPayload = null;

        /**
         * DataSubscription bleConnectionStatus.
         * @member {nipc.DataSubscription.IBLEConnectionStatus|null|undefined} bleConnectionStatus
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.bleConnectionStatus = null;

        /**
         * DataSubscription applicationEvent.
         * @member {nipc.DataSubscription.IApplicationEvent|null|undefined} applicationEvent
         * @memberof nipc.DataSubscription
         * @instance
         */
        DataSubscription.prototype.applicationEvent = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DataSubscription.prototype, "_deviceId", {
            get: $util.oneOfGetter($oneOfFields = ["deviceId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DataSubscription.prototype, "_apMacAddress", {
            get: $util.oneOfGetter($oneOfFields = ["apMacAddress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * DataSubscription subscription.
         * @member {"bleSubscription"|"bleAdvertisement"|"zigbeeSubscription"|"rawPayload"|"bleConnectionStatus"|"applicationEvent"|undefined} subscription
         * @memberof nipc.DataSubscription
         * @instance
         */
        Object.defineProperty(DataSubscription.prototype, "subscription", {
            get: $util.oneOfGetter($oneOfFields = ["bleSubscription", "bleAdvertisement", "zigbeeSubscription", "rawPayload", "bleConnectionStatus", "applicationEvent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DataSubscription instance using the specified properties.
         * @function create
         * @memberof nipc.DataSubscription
         * @static
         * @param {nipc.IDataSubscription=} [properties] Properties to set
         * @returns {nipc.DataSubscription} DataSubscription instance
         */
        DataSubscription.create = function create(properties) {
            return new DataSubscription(properties);
        };

        /**
         * Encodes the specified DataSubscription message. Does not implicitly {@link nipc.DataSubscription.verify|verify} messages.
         * @function encode
         * @memberof nipc.DataSubscription
         * @static
         * @param {nipc.IDataSubscription} message DataSubscription message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataSubscription.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.apMacAddress != null && Object.hasOwnProperty.call(message, "apMacAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.apMacAddress);
            if (message.bleSubscription != null && Object.hasOwnProperty.call(message, "bleSubscription"))
                $root.nipc.DataSubscription.BLESubscription.encode(message.bleSubscription, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.bleAdvertisement != null && Object.hasOwnProperty.call(message, "bleAdvertisement"))
                $root.nipc.DataSubscription.BLEAdvertisement.encode(message.bleAdvertisement, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.zigbeeSubscription != null && Object.hasOwnProperty.call(message, "zigbeeSubscription"))
                $root.nipc.DataSubscription.ZigbeeSubscription.encode(message.zigbeeSubscription, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.rawPayload != null && Object.hasOwnProperty.call(message, "rawPayload"))
                $root.nipc.DataSubscription.RawPayload.encode(message.rawPayload, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.bleConnectionStatus != null && Object.hasOwnProperty.call(message, "bleConnectionStatus"))
                $root.nipc.DataSubscription.BLEConnectionStatus.encode(message.bleConnectionStatus, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.applicationEvent != null && Object.hasOwnProperty.call(message, "applicationEvent"))
                $root.nipc.DataSubscription.ApplicationEvent.encode(message.applicationEvent, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DataSubscription message, length delimited. Does not implicitly {@link nipc.DataSubscription.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nipc.DataSubscription
         * @static
         * @param {nipc.IDataSubscription} message DataSubscription message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataSubscription.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataSubscription message from the specified reader or buffer.
         * @function decode
         * @memberof nipc.DataSubscription
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nipc.DataSubscription} DataSubscription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataSubscription.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.apMacAddress = reader.string();
                        break;
                    }
                case 11: {
                        message.bleSubscription = $root.nipc.DataSubscription.BLESubscription.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.bleAdvertisement = $root.nipc.DataSubscription.BLEAdvertisement.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.zigbeeSubscription = $root.nipc.DataSubscription.ZigbeeSubscription.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.rawPayload = $root.nipc.DataSubscription.RawPayload.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.bleConnectionStatus = $root.nipc.DataSubscription.BLEConnectionStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.applicationEvent = $root.nipc.DataSubscription.ApplicationEvent.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DataSubscription message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nipc.DataSubscription
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nipc.DataSubscription} DataSubscription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataSubscription.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataSubscription message.
         * @function verify
         * @memberof nipc.DataSubscription
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataSubscription.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.deviceId != null && message.hasOwnProperty("deviceId")) {
                properties._deviceId = 1;
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.apMacAddress != null && message.hasOwnProperty("apMacAddress")) {
                properties._apMacAddress = 1;
                if (!$util.isString(message.apMacAddress))
                    return "apMacAddress: string expected";
            }
            if (message.bleSubscription != null && message.hasOwnProperty("bleSubscription")) {
                properties.subscription = 1;
                {
                    var error = $root.nipc.DataSubscription.BLESubscription.verify(message.bleSubscription);
                    if (error)
                        return "bleSubscription." + error;
                }
            }
            if (message.bleAdvertisement != null && message.hasOwnProperty("bleAdvertisement")) {
                if (properties.subscription === 1)
                    return "subscription: multiple values";
                properties.subscription = 1;
                {
                    var error = $root.nipc.DataSubscription.BLEAdvertisement.verify(message.bleAdvertisement);
                    if (error)
                        return "bleAdvertisement." + error;
                }
            }
            if (message.zigbeeSubscription != null && message.hasOwnProperty("zigbeeSubscription")) {
                if (properties.subscription === 1)
                    return "subscription: multiple values";
                properties.subscription = 1;
                {
                    var error = $root.nipc.DataSubscription.ZigbeeSubscription.verify(message.zigbeeSubscription);
                    if (error)
                        return "zigbeeSubscription." + error;
                }
            }
            if (message.rawPayload != null && message.hasOwnProperty("rawPayload")) {
                if (properties.subscription === 1)
                    return "subscription: multiple values";
                properties.subscription = 1;
                {
                    var error = $root.nipc.DataSubscription.RawPayload.verify(message.rawPayload);
                    if (error)
                        return "rawPayload." + error;
                }
            }
            if (message.bleConnectionStatus != null && message.hasOwnProperty("bleConnectionStatus")) {
                if (properties.subscription === 1)
                    return "subscription: multiple values";
                properties.subscription = 1;
                {
                    var error = $root.nipc.DataSubscription.BLEConnectionStatus.verify(message.bleConnectionStatus);
                    if (error)
                        return "bleConnectionStatus." + error;
                }
            }
            if (message.applicationEvent != null && message.hasOwnProperty("applicationEvent")) {
                if (properties.subscription === 1)
                    return "subscription: multiple values";
                properties.subscription = 1;
                {
                    var error = $root.nipc.DataSubscription.ApplicationEvent.verify(message.applicationEvent);
                    if (error)
                        return "applicationEvent." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DataSubscription message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nipc.DataSubscription
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nipc.DataSubscription} DataSubscription
         */
        DataSubscription.fromObject = function fromObject(object) {
            if (object instanceof $root.nipc.DataSubscription)
                return object;
            var message = new $root.nipc.DataSubscription();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".nipc.DataSubscription.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.apMacAddress != null)
                message.apMacAddress = String(object.apMacAddress);
            if (object.bleSubscription != null) {
                if (typeof object.bleSubscription !== "object")
                    throw TypeError(".nipc.DataSubscription.bleSubscription: object expected");
                message.bleSubscription = $root.nipc.DataSubscription.BLESubscription.fromObject(object.bleSubscription);
            }
            if (object.bleAdvertisement != null) {
                if (typeof object.bleAdvertisement !== "object")
                    throw TypeError(".nipc.DataSubscription.bleAdvertisement: object expected");
                message.bleAdvertisement = $root.nipc.DataSubscription.BLEAdvertisement.fromObject(object.bleAdvertisement);
            }
            if (object.zigbeeSubscription != null) {
                if (typeof object.zigbeeSubscription !== "object")
                    throw TypeError(".nipc.DataSubscription.zigbeeSubscription: object expected");
                message.zigbeeSubscription = $root.nipc.DataSubscription.ZigbeeSubscription.fromObject(object.zigbeeSubscription);
            }
            if (object.rawPayload != null) {
                if (typeof object.rawPayload !== "object")
                    throw TypeError(".nipc.DataSubscription.rawPayload: object expected");
                message.rawPayload = $root.nipc.DataSubscription.RawPayload.fromObject(object.rawPayload);
            }
            if (object.bleConnectionStatus != null) {
                if (typeof object.bleConnectionStatus !== "object")
                    throw TypeError(".nipc.DataSubscription.bleConnectionStatus: object expected");
                message.bleConnectionStatus = $root.nipc.DataSubscription.BLEConnectionStatus.fromObject(object.bleConnectionStatus);
            }
            if (object.applicationEvent != null) {
                if (typeof object.applicationEvent !== "object")
                    throw TypeError(".nipc.DataSubscription.applicationEvent: object expected");
                message.applicationEvent = $root.nipc.DataSubscription.ApplicationEvent.fromObject(object.applicationEvent);
            }
            return message;
        };

        /**
         * Creates a plain object from a DataSubscription message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nipc.DataSubscription
         * @static
         * @param {nipc.DataSubscription} message DataSubscription
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataSubscription.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.timestamp = null;
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId")) {
                object.deviceId = message.deviceId;
                if (options.oneofs)
                    object._deviceId = "deviceId";
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.apMacAddress != null && message.hasOwnProperty("apMacAddress")) {
                object.apMacAddress = message.apMacAddress;
                if (options.oneofs)
                    object._apMacAddress = "apMacAddress";
            }
            if (message.bleSubscription != null && message.hasOwnProperty("bleSubscription")) {
                object.bleSubscription = $root.nipc.DataSubscription.BLESubscription.toObject(message.bleSubscription, options);
                if (options.oneofs)
                    object.subscription = "bleSubscription";
            }
            if (message.bleAdvertisement != null && message.hasOwnProperty("bleAdvertisement")) {
                object.bleAdvertisement = $root.nipc.DataSubscription.BLEAdvertisement.toObject(message.bleAdvertisement, options);
                if (options.oneofs)
                    object.subscription = "bleAdvertisement";
            }
            if (message.zigbeeSubscription != null && message.hasOwnProperty("zigbeeSubscription")) {
                object.zigbeeSubscription = $root.nipc.DataSubscription.ZigbeeSubscription.toObject(message.zigbeeSubscription, options);
                if (options.oneofs)
                    object.subscription = "zigbeeSubscription";
            }
            if (message.rawPayload != null && message.hasOwnProperty("rawPayload")) {
                object.rawPayload = $root.nipc.DataSubscription.RawPayload.toObject(message.rawPayload, options);
                if (options.oneofs)
                    object.subscription = "rawPayload";
            }
            if (message.bleConnectionStatus != null && message.hasOwnProperty("bleConnectionStatus")) {
                object.bleConnectionStatus = $root.nipc.DataSubscription.BLEConnectionStatus.toObject(message.bleConnectionStatus, options);
                if (options.oneofs)
                    object.subscription = "bleConnectionStatus";
            }
            if (message.applicationEvent != null && message.hasOwnProperty("applicationEvent")) {
                object.applicationEvent = $root.nipc.DataSubscription.ApplicationEvent.toObject(message.applicationEvent, options);
                if (options.oneofs)
                    object.subscription = "applicationEvent";
            }
            return object;
        };

        /**
         * Converts this DataSubscription to JSON.
         * @function toJSON
         * @memberof nipc.DataSubscription
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataSubscription.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DataSubscription
         * @function getTypeUrl
         * @memberof nipc.DataSubscription
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DataSubscription.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/nipc.DataSubscription";
        };

        DataSubscription.BLESubscription = (function() {

            /**
             * Properties of a BLESubscription.
             * @memberof nipc.DataSubscription
             * @interface IBLESubscription
             * @property {string|null} [serviceUuid] BLESubscription serviceUuid
             * @property {string|null} [characteristicUuid] BLESubscription characteristicUuid
             */

            /**
             * Constructs a new BLESubscription.
             * @memberof nipc.DataSubscription
             * @classdesc Represents a BLESubscription.
             * @implements IBLESubscription
             * @constructor
             * @param {nipc.DataSubscription.IBLESubscription=} [properties] Properties to set
             */
            function BLESubscription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BLESubscription serviceUuid.
             * @member {string|null|undefined} serviceUuid
             * @memberof nipc.DataSubscription.BLESubscription
             * @instance
             */
            BLESubscription.prototype.serviceUuid = null;

            /**
             * BLESubscription characteristicUuid.
             * @member {string|null|undefined} characteristicUuid
             * @memberof nipc.DataSubscription.BLESubscription
             * @instance
             */
            BLESubscription.prototype.characteristicUuid = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BLESubscription.prototype, "_serviceUuid", {
                get: $util.oneOfGetter($oneOfFields = ["serviceUuid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BLESubscription.prototype, "_characteristicUuid", {
                get: $util.oneOfGetter($oneOfFields = ["characteristicUuid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BLESubscription instance using the specified properties.
             * @function create
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {nipc.DataSubscription.IBLESubscription=} [properties] Properties to set
             * @returns {nipc.DataSubscription.BLESubscription} BLESubscription instance
             */
            BLESubscription.create = function create(properties) {
                return new BLESubscription(properties);
            };

            /**
             * Encodes the specified BLESubscription message. Does not implicitly {@link nipc.DataSubscription.BLESubscription.verify|verify} messages.
             * @function encode
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {nipc.DataSubscription.IBLESubscription} message BLESubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BLESubscription.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serviceUuid != null && Object.hasOwnProperty.call(message, "serviceUuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceUuid);
                if (message.characteristicUuid != null && Object.hasOwnProperty.call(message, "characteristicUuid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.characteristicUuid);
                return writer;
            };

            /**
             * Encodes the specified BLESubscription message, length delimited. Does not implicitly {@link nipc.DataSubscription.BLESubscription.verify|verify} messages.
             * @function encodeDelimited
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {nipc.DataSubscription.IBLESubscription} message BLESubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BLESubscription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BLESubscription message from the specified reader or buffer.
             * @function decode
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {nipc.DataSubscription.BLESubscription} BLESubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BLESubscription.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription.BLESubscription();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.serviceUuid = reader.string();
                            break;
                        }
                    case 2: {
                            message.characteristicUuid = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BLESubscription message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {nipc.DataSubscription.BLESubscription} BLESubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BLESubscription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BLESubscription message.
             * @function verify
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BLESubscription.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid")) {
                    properties._serviceUuid = 1;
                    if (!$util.isString(message.serviceUuid))
                        return "serviceUuid: string expected";
                }
                if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid")) {
                    properties._characteristicUuid = 1;
                    if (!$util.isString(message.characteristicUuid))
                        return "characteristicUuid: string expected";
                }
                return null;
            };

            /**
             * Creates a BLESubscription message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {nipc.DataSubscription.BLESubscription} BLESubscription
             */
            BLESubscription.fromObject = function fromObject(object) {
                if (object instanceof $root.nipc.DataSubscription.BLESubscription)
                    return object;
                var message = new $root.nipc.DataSubscription.BLESubscription();
                if (object.serviceUuid != null)
                    message.serviceUuid = String(object.serviceUuid);
                if (object.characteristicUuid != null)
                    message.characteristicUuid = String(object.characteristicUuid);
                return message;
            };

            /**
             * Creates a plain object from a BLESubscription message. Also converts values to other types if specified.
             * @function toObject
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {nipc.DataSubscription.BLESubscription} message BLESubscription
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BLESubscription.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.serviceUuid != null && message.hasOwnProperty("serviceUuid")) {
                    object.serviceUuid = message.serviceUuid;
                    if (options.oneofs)
                        object._serviceUuid = "serviceUuid";
                }
                if (message.characteristicUuid != null && message.hasOwnProperty("characteristicUuid")) {
                    object.characteristicUuid = message.characteristicUuid;
                    if (options.oneofs)
                        object._characteristicUuid = "characteristicUuid";
                }
                return object;
            };

            /**
             * Converts this BLESubscription to JSON.
             * @function toJSON
             * @memberof nipc.DataSubscription.BLESubscription
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BLESubscription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BLESubscription
             * @function getTypeUrl
             * @memberof nipc.DataSubscription.BLESubscription
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BLESubscription.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/nipc.DataSubscription.BLESubscription";
            };

            return BLESubscription;
        })();

        DataSubscription.BLEAdvertisement = (function() {

            /**
             * Properties of a BLEAdvertisement.
             * @memberof nipc.DataSubscription
             * @interface IBLEAdvertisement
             * @property {string|null} [macAddress] BLEAdvertisement macAddress
             * @property {number|null} [rssi] BLEAdvertisement rssi
             */

            /**
             * Constructs a new BLEAdvertisement.
             * @memberof nipc.DataSubscription
             * @classdesc Represents a BLEAdvertisement.
             * @implements IBLEAdvertisement
             * @constructor
             * @param {nipc.DataSubscription.IBLEAdvertisement=} [properties] Properties to set
             */
            function BLEAdvertisement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BLEAdvertisement macAddress.
             * @member {string} macAddress
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @instance
             */
            BLEAdvertisement.prototype.macAddress = "";

            /**
             * BLEAdvertisement rssi.
             * @member {number|null|undefined} rssi
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @instance
             */
            BLEAdvertisement.prototype.rssi = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BLEAdvertisement.prototype, "_rssi", {
                get: $util.oneOfGetter($oneOfFields = ["rssi"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BLEAdvertisement instance using the specified properties.
             * @function create
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {nipc.DataSubscription.IBLEAdvertisement=} [properties] Properties to set
             * @returns {nipc.DataSubscription.BLEAdvertisement} BLEAdvertisement instance
             */
            BLEAdvertisement.create = function create(properties) {
                return new BLEAdvertisement(properties);
            };

            /**
             * Encodes the specified BLEAdvertisement message. Does not implicitly {@link nipc.DataSubscription.BLEAdvertisement.verify|verify} messages.
             * @function encode
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {nipc.DataSubscription.IBLEAdvertisement} message BLEAdvertisement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BLEAdvertisement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.macAddress != null && Object.hasOwnProperty.call(message, "macAddress"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.macAddress);
                if (message.rssi != null && Object.hasOwnProperty.call(message, "rssi"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rssi);
                return writer;
            };

            /**
             * Encodes the specified BLEAdvertisement message, length delimited. Does not implicitly {@link nipc.DataSubscription.BLEAdvertisement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {nipc.DataSubscription.IBLEAdvertisement} message BLEAdvertisement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BLEAdvertisement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BLEAdvertisement message from the specified reader or buffer.
             * @function decode
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {nipc.DataSubscription.BLEAdvertisement} BLEAdvertisement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BLEAdvertisement.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription.BLEAdvertisement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.macAddress = reader.string();
                            break;
                        }
                    case 2: {
                            message.rssi = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BLEAdvertisement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {nipc.DataSubscription.BLEAdvertisement} BLEAdvertisement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BLEAdvertisement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BLEAdvertisement message.
             * @function verify
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BLEAdvertisement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.macAddress != null && message.hasOwnProperty("macAddress"))
                    if (!$util.isString(message.macAddress))
                        return "macAddress: string expected";
                if (message.rssi != null && message.hasOwnProperty("rssi")) {
                    properties._rssi = 1;
                    if (!$util.isInteger(message.rssi))
                        return "rssi: integer expected";
                }
                return null;
            };

            /**
             * Creates a BLEAdvertisement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {nipc.DataSubscription.BLEAdvertisement} BLEAdvertisement
             */
            BLEAdvertisement.fromObject = function fromObject(object) {
                if (object instanceof $root.nipc.DataSubscription.BLEAdvertisement)
                    return object;
                var message = new $root.nipc.DataSubscription.BLEAdvertisement();
                if (object.macAddress != null)
                    message.macAddress = String(object.macAddress);
                if (object.rssi != null)
                    message.rssi = object.rssi | 0;
                return message;
            };

            /**
             * Creates a plain object from a BLEAdvertisement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {nipc.DataSubscription.BLEAdvertisement} message BLEAdvertisement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BLEAdvertisement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.macAddress = "";
                if (message.macAddress != null && message.hasOwnProperty("macAddress"))
                    object.macAddress = message.macAddress;
                if (message.rssi != null && message.hasOwnProperty("rssi")) {
                    object.rssi = message.rssi;
                    if (options.oneofs)
                        object._rssi = "rssi";
                }
                return object;
            };

            /**
             * Converts this BLEAdvertisement to JSON.
             * @function toJSON
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BLEAdvertisement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BLEAdvertisement
             * @function getTypeUrl
             * @memberof nipc.DataSubscription.BLEAdvertisement
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BLEAdvertisement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/nipc.DataSubscription.BLEAdvertisement";
            };

            return BLEAdvertisement;
        })();

        DataSubscription.ZigbeeSubscription = (function() {

            /**
             * Properties of a ZigbeeSubscription.
             * @memberof nipc.DataSubscription
             * @interface IZigbeeSubscription
             * @property {number|null} [endpointId] ZigbeeSubscription endpointId
             * @property {number|null} [clusterId] ZigbeeSubscription clusterId
             * @property {number|null} [attributeId] ZigbeeSubscription attributeId
             * @property {number|null} [attributeType] ZigbeeSubscription attributeType
             */

            /**
             * Constructs a new ZigbeeSubscription.
             * @memberof nipc.DataSubscription
             * @classdesc Represents a ZigbeeSubscription.
             * @implements IZigbeeSubscription
             * @constructor
             * @param {nipc.DataSubscription.IZigbeeSubscription=} [properties] Properties to set
             */
            function ZigbeeSubscription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ZigbeeSubscription endpointId.
             * @member {number|null|undefined} endpointId
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @instance
             */
            ZigbeeSubscription.prototype.endpointId = null;

            /**
             * ZigbeeSubscription clusterId.
             * @member {number|null|undefined} clusterId
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @instance
             */
            ZigbeeSubscription.prototype.clusterId = null;

            /**
             * ZigbeeSubscription attributeId.
             * @member {number|null|undefined} attributeId
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @instance
             */
            ZigbeeSubscription.prototype.attributeId = null;

            /**
             * ZigbeeSubscription attributeType.
             * @member {number|null|undefined} attributeType
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @instance
             */
            ZigbeeSubscription.prototype.attributeType = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ZigbeeSubscription.prototype, "_endpointId", {
                get: $util.oneOfGetter($oneOfFields = ["endpointId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ZigbeeSubscription.prototype, "_clusterId", {
                get: $util.oneOfGetter($oneOfFields = ["clusterId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ZigbeeSubscription.prototype, "_attributeId", {
                get: $util.oneOfGetter($oneOfFields = ["attributeId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ZigbeeSubscription.prototype, "_attributeType", {
                get: $util.oneOfGetter($oneOfFields = ["attributeType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ZigbeeSubscription instance using the specified properties.
             * @function create
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {nipc.DataSubscription.IZigbeeSubscription=} [properties] Properties to set
             * @returns {nipc.DataSubscription.ZigbeeSubscription} ZigbeeSubscription instance
             */
            ZigbeeSubscription.create = function create(properties) {
                return new ZigbeeSubscription(properties);
            };

            /**
             * Encodes the specified ZigbeeSubscription message. Does not implicitly {@link nipc.DataSubscription.ZigbeeSubscription.verify|verify} messages.
             * @function encode
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {nipc.DataSubscription.IZigbeeSubscription} message ZigbeeSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZigbeeSubscription.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.endpointId != null && Object.hasOwnProperty.call(message, "endpointId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.endpointId);
                if (message.clusterId != null && Object.hasOwnProperty.call(message, "clusterId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clusterId);
                if (message.attributeId != null && Object.hasOwnProperty.call(message, "attributeId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.attributeId);
                if (message.attributeType != null && Object.hasOwnProperty.call(message, "attributeType"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.attributeType);
                return writer;
            };

            /**
             * Encodes the specified ZigbeeSubscription message, length delimited. Does not implicitly {@link nipc.DataSubscription.ZigbeeSubscription.verify|verify} messages.
             * @function encodeDelimited
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {nipc.DataSubscription.IZigbeeSubscription} message ZigbeeSubscription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZigbeeSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ZigbeeSubscription message from the specified reader or buffer.
             * @function decode
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {nipc.DataSubscription.ZigbeeSubscription} ZigbeeSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZigbeeSubscription.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription.ZigbeeSubscription();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.endpointId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.clusterId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.attributeId = reader.int32();
                            break;
                        }
                    case 4: {
                            message.attributeType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ZigbeeSubscription message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {nipc.DataSubscription.ZigbeeSubscription} ZigbeeSubscription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZigbeeSubscription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ZigbeeSubscription message.
             * @function verify
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ZigbeeSubscription.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.endpointId != null && message.hasOwnProperty("endpointId")) {
                    properties._endpointId = 1;
                    if (!$util.isInteger(message.endpointId))
                        return "endpointId: integer expected";
                }
                if (message.clusterId != null && message.hasOwnProperty("clusterId")) {
                    properties._clusterId = 1;
                    if (!$util.isInteger(message.clusterId))
                        return "clusterId: integer expected";
                }
                if (message.attributeId != null && message.hasOwnProperty("attributeId")) {
                    properties._attributeId = 1;
                    if (!$util.isInteger(message.attributeId))
                        return "attributeId: integer expected";
                }
                if (message.attributeType != null && message.hasOwnProperty("attributeType")) {
                    properties._attributeType = 1;
                    if (!$util.isInteger(message.attributeType))
                        return "attributeType: integer expected";
                }
                return null;
            };

            /**
             * Creates a ZigbeeSubscription message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {nipc.DataSubscription.ZigbeeSubscription} ZigbeeSubscription
             */
            ZigbeeSubscription.fromObject = function fromObject(object) {
                if (object instanceof $root.nipc.DataSubscription.ZigbeeSubscription)
                    return object;
                var message = new $root.nipc.DataSubscription.ZigbeeSubscription();
                if (object.endpointId != null)
                    message.endpointId = object.endpointId | 0;
                if (object.clusterId != null)
                    message.clusterId = object.clusterId | 0;
                if (object.attributeId != null)
                    message.attributeId = object.attributeId | 0;
                if (object.attributeType != null)
                    message.attributeType = object.attributeType | 0;
                return message;
            };

            /**
             * Creates a plain object from a ZigbeeSubscription message. Also converts values to other types if specified.
             * @function toObject
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {nipc.DataSubscription.ZigbeeSubscription} message ZigbeeSubscription
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ZigbeeSubscription.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.endpointId != null && message.hasOwnProperty("endpointId")) {
                    object.endpointId = message.endpointId;
                    if (options.oneofs)
                        object._endpointId = "endpointId";
                }
                if (message.clusterId != null && message.hasOwnProperty("clusterId")) {
                    object.clusterId = message.clusterId;
                    if (options.oneofs)
                        object._clusterId = "clusterId";
                }
                if (message.attributeId != null && message.hasOwnProperty("attributeId")) {
                    object.attributeId = message.attributeId;
                    if (options.oneofs)
                        object._attributeId = "attributeId";
                }
                if (message.attributeType != null && message.hasOwnProperty("attributeType")) {
                    object.attributeType = message.attributeType;
                    if (options.oneofs)
                        object._attributeType = "attributeType";
                }
                return object;
            };

            /**
             * Converts this ZigbeeSubscription to JSON.
             * @function toJSON
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ZigbeeSubscription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ZigbeeSubscription
             * @function getTypeUrl
             * @memberof nipc.DataSubscription.ZigbeeSubscription
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ZigbeeSubscription.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/nipc.DataSubscription.ZigbeeSubscription";
            };

            return ZigbeeSubscription;
        })();

        DataSubscription.BLEConnectionStatus = (function() {

            /**
             * Properties of a BLEConnectionStatus.
             * @memberof nipc.DataSubscription
             * @interface IBLEConnectionStatus
             * @property {string|null} [macAddress] BLEConnectionStatus macAddress
             * @property {boolean|null} [connected] BLEConnectionStatus connected
             * @property {number|null} [reason] BLEConnectionStatus reason
             */

            /**
             * Constructs a new BLEConnectionStatus.
             * @memberof nipc.DataSubscription
             * @classdesc Represents a BLEConnectionStatus.
             * @implements IBLEConnectionStatus
             * @constructor
             * @param {nipc.DataSubscription.IBLEConnectionStatus=} [properties] Properties to set
             */
            function BLEConnectionStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BLEConnectionStatus macAddress.
             * @member {string} macAddress
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @instance
             */
            BLEConnectionStatus.prototype.macAddress = "";

            /**
             * BLEConnectionStatus connected.
             * @member {boolean} connected
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @instance
             */
            BLEConnectionStatus.prototype.connected = false;

            /**
             * BLEConnectionStatus reason.
             * @member {number|null|undefined} reason
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @instance
             */
            BLEConnectionStatus.prototype.reason = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BLEConnectionStatus.prototype, "_reason", {
                get: $util.oneOfGetter($oneOfFields = ["reason"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BLEConnectionStatus instance using the specified properties.
             * @function create
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {nipc.DataSubscription.IBLEConnectionStatus=} [properties] Properties to set
             * @returns {nipc.DataSubscription.BLEConnectionStatus} BLEConnectionStatus instance
             */
            BLEConnectionStatus.create = function create(properties) {
                return new BLEConnectionStatus(properties);
            };

            /**
             * Encodes the specified BLEConnectionStatus message. Does not implicitly {@link nipc.DataSubscription.BLEConnectionStatus.verify|verify} messages.
             * @function encode
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {nipc.DataSubscription.IBLEConnectionStatus} message BLEConnectionStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BLEConnectionStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.macAddress != null && Object.hasOwnProperty.call(message, "macAddress"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.macAddress);
                if (message.connected != null && Object.hasOwnProperty.call(message, "connected"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.connected);
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reason);
                return writer;
            };

            /**
             * Encodes the specified BLEConnectionStatus message, length delimited. Does not implicitly {@link nipc.DataSubscription.BLEConnectionStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {nipc.DataSubscription.IBLEConnectionStatus} message BLEConnectionStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BLEConnectionStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BLEConnectionStatus message from the specified reader or buffer.
             * @function decode
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {nipc.DataSubscription.BLEConnectionStatus} BLEConnectionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BLEConnectionStatus.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription.BLEConnectionStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.macAddress = reader.string();
                            break;
                        }
                    case 2: {
                            message.connected = reader.bool();
                            break;
                        }
                    case 3: {
                            message.reason = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BLEConnectionStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {nipc.DataSubscription.BLEConnectionStatus} BLEConnectionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BLEConnectionStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BLEConnectionStatus message.
             * @function verify
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BLEConnectionStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.macAddress != null && message.hasOwnProperty("macAddress"))
                    if (!$util.isString(message.macAddress))
                        return "macAddress: string expected";
                if (message.connected != null && message.hasOwnProperty("connected"))
                    if (typeof message.connected !== "boolean")
                        return "connected: boolean expected";
                if (message.reason != null && message.hasOwnProperty("reason")) {
                    properties._reason = 1;
                    if (!$util.isInteger(message.reason))
                        return "reason: integer expected";
                }
                return null;
            };

            /**
             * Creates a BLEConnectionStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {nipc.DataSubscription.BLEConnectionStatus} BLEConnectionStatus
             */
            BLEConnectionStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.nipc.DataSubscription.BLEConnectionStatus)
                    return object;
                var message = new $root.nipc.DataSubscription.BLEConnectionStatus();
                if (object.macAddress != null)
                    message.macAddress = String(object.macAddress);
                if (object.connected != null)
                    message.connected = Boolean(object.connected);
                if (object.reason != null)
                    message.reason = object.reason | 0;
                return message;
            };

            /**
             * Creates a plain object from a BLEConnectionStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {nipc.DataSubscription.BLEConnectionStatus} message BLEConnectionStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BLEConnectionStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.macAddress = "";
                    object.connected = false;
                }
                if (message.macAddress != null && message.hasOwnProperty("macAddress"))
                    object.macAddress = message.macAddress;
                if (message.connected != null && message.hasOwnProperty("connected"))
                    object.connected = message.connected;
                if (message.reason != null && message.hasOwnProperty("reason")) {
                    object.reason = message.reason;
                    if (options.oneofs)
                        object._reason = "reason";
                }
                return object;
            };

            /**
             * Converts this BLEConnectionStatus to JSON.
             * @function toJSON
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BLEConnectionStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BLEConnectionStatus
             * @function getTypeUrl
             * @memberof nipc.DataSubscription.BLEConnectionStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BLEConnectionStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/nipc.DataSubscription.BLEConnectionStatus";
            };

            return BLEConnectionStatus;
        })();

        DataSubscription.RawPayload = (function() {

            /**
             * Properties of a RawPayload.
             * @memberof nipc.DataSubscription
             * @interface IRawPayload
             * @property {string|null} [contextId] RawPayload contextId
             */

            /**
             * Constructs a new RawPayload.
             * @memberof nipc.DataSubscription
             * @classdesc Represents a RawPayload.
             * @implements IRawPayload
             * @constructor
             * @param {nipc.DataSubscription.IRawPayload=} [properties] Properties to set
             */
            function RawPayload(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RawPayload contextId.
             * @member {string|null|undefined} contextId
             * @memberof nipc.DataSubscription.RawPayload
             * @instance
             */
            RawPayload.prototype.contextId = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(RawPayload.prototype, "_contextId", {
                get: $util.oneOfGetter($oneOfFields = ["contextId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RawPayload instance using the specified properties.
             * @function create
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {nipc.DataSubscription.IRawPayload=} [properties] Properties to set
             * @returns {nipc.DataSubscription.RawPayload} RawPayload instance
             */
            RawPayload.create = function create(properties) {
                return new RawPayload(properties);
            };

            /**
             * Encodes the specified RawPayload message. Does not implicitly {@link nipc.DataSubscription.RawPayload.verify|verify} messages.
             * @function encode
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {nipc.DataSubscription.IRawPayload} message RawPayload message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RawPayload.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contextId != null && Object.hasOwnProperty.call(message, "contextId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.contextId);
                return writer;
            };

            /**
             * Encodes the specified RawPayload message, length delimited. Does not implicitly {@link nipc.DataSubscription.RawPayload.verify|verify} messages.
             * @function encodeDelimited
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {nipc.DataSubscription.IRawPayload} message RawPayload message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RawPayload.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RawPayload message from the specified reader or buffer.
             * @function decode
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {nipc.DataSubscription.RawPayload} RawPayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RawPayload.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription.RawPayload();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.contextId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RawPayload message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {nipc.DataSubscription.RawPayload} RawPayload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RawPayload.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RawPayload message.
             * @function verify
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RawPayload.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.contextId != null && message.hasOwnProperty("contextId")) {
                    properties._contextId = 1;
                    if (!$util.isString(message.contextId))
                        return "contextId: string expected";
                }
                return null;
            };

            /**
             * Creates a RawPayload message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {nipc.DataSubscription.RawPayload} RawPayload
             */
            RawPayload.fromObject = function fromObject(object) {
                if (object instanceof $root.nipc.DataSubscription.RawPayload)
                    return object;
                var message = new $root.nipc.DataSubscription.RawPayload();
                if (object.contextId != null)
                    message.contextId = String(object.contextId);
                return message;
            };

            /**
             * Creates a plain object from a RawPayload message. Also converts values to other types if specified.
             * @function toObject
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {nipc.DataSubscription.RawPayload} message RawPayload
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RawPayload.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.contextId != null && message.hasOwnProperty("contextId")) {
                    object.contextId = message.contextId;
                    if (options.oneofs)
                        object._contextId = "contextId";
                }
                return object;
            };

            /**
             * Converts this RawPayload to JSON.
             * @function toJSON
             * @memberof nipc.DataSubscription.RawPayload
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RawPayload.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RawPayload
             * @function getTypeUrl
             * @memberof nipc.DataSubscription.RawPayload
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RawPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/nipc.DataSubscription.RawPayload";
            };

            return RawPayload;
        })();

        DataSubscription.ApplicationEvent = (function() {

            /**
             * Properties of an ApplicationEvent.
             * @memberof nipc.DataSubscription
             * @interface IApplicationEvent
             * @property {string|null} [message] ApplicationEvent message
             */

            /**
             * Constructs a new ApplicationEvent.
             * @memberof nipc.DataSubscription
             * @classdesc Represents an ApplicationEvent.
             * @implements IApplicationEvent
             * @constructor
             * @param {nipc.DataSubscription.IApplicationEvent=} [properties] Properties to set
             */
            function ApplicationEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApplicationEvent message.
             * @member {string} message
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @instance
             */
            ApplicationEvent.prototype.message = "";

            /**
             * Creates a new ApplicationEvent instance using the specified properties.
             * @function create
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {nipc.DataSubscription.IApplicationEvent=} [properties] Properties to set
             * @returns {nipc.DataSubscription.ApplicationEvent} ApplicationEvent instance
             */
            ApplicationEvent.create = function create(properties) {
                return new ApplicationEvent(properties);
            };

            /**
             * Encodes the specified ApplicationEvent message. Does not implicitly {@link nipc.DataSubscription.ApplicationEvent.verify|verify} messages.
             * @function encode
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {nipc.DataSubscription.IApplicationEvent} message ApplicationEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplicationEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified ApplicationEvent message, length delimited. Does not implicitly {@link nipc.DataSubscription.ApplicationEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {nipc.DataSubscription.IApplicationEvent} message ApplicationEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApplicationEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApplicationEvent message from the specified reader or buffer.
             * @function decode
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {nipc.DataSubscription.ApplicationEvent} ApplicationEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplicationEvent.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataSubscription.ApplicationEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApplicationEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {nipc.DataSubscription.ApplicationEvent} ApplicationEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApplicationEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApplicationEvent message.
             * @function verify
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApplicationEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an ApplicationEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {nipc.DataSubscription.ApplicationEvent} ApplicationEvent
             */
            ApplicationEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.nipc.DataSubscription.ApplicationEvent)
                    return object;
                var message = new $root.nipc.DataSubscription.ApplicationEvent();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an ApplicationEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {nipc.DataSubscription.ApplicationEvent} message ApplicationEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApplicationEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this ApplicationEvent to JSON.
             * @function toJSON
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApplicationEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApplicationEvent
             * @function getTypeUrl
             * @memberof nipc.DataSubscription.ApplicationEvent
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApplicationEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/nipc.DataSubscription.ApplicationEvent";
            };

            return ApplicationEvent;
        })();

        return DataSubscription;
    })();

    nipc.DataBatch = (function() {

        /**
         * Properties of a DataBatch.
         * @memberof nipc
         * @interface IDataBatch
         * @property {Array.<nipc.IDataSubscription>|null} [messages] DataBatch messages
         */

        /**
         * Constructs a new DataBatch.
         * @memberof nipc
         * @classdesc Represents a DataBatch.
         * @implements IDataBatch
         * @constructor
         * @param {nipc.IDataBatch=} [properties] Properties to set
         */
        function DataBatch(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataBatch messages.
         * @member {Array.<nipc.IDataSubscription>} messages
         * @memberof nipc.DataBatch
         * @instance
         */
        DataBatch.prototype.messages = $util.emptyArray;

        /**
         * Creates a new DataBatch instance using the specified properties.
         * @function create
         * @memberof nipc.DataBatch
         * @static
         * @param {nipc.IDataBatch=} [properties] Properties to set
         * @returns {nipc.DataBatch} DataBatch instance
         */
        DataBatch.create = function create(properties) {
            return new DataBatch(properties);
        };

        /**
         * Encodes the specified DataBatch message. Does not implicitly {@link nipc.DataBatch.verify|verify} messages.
         * @function encode
         * @memberof nipc.DataBatch
         * @static
         * @param {nipc.IDataBatch} message DataBatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataBatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.nipc.DataSubscription.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DataBatch message, length delimited. Does not implicitly {@link nipc.DataBatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nipc.DataBatch
         * @static
         * @param {nipc.IDataBatch} message DataBatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataBatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataBatch message from the specified reader or buffer.
         * @function decode
         * @memberof nipc.DataBatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nipc.DataBatch} DataBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataBatch.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nipc.DataBatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.nipc.DataSubscription.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DataBatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nipc.DataBatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nipc.DataBatch} DataBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataBatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataBatch message.
         * @function verify
         * @memberof nipc.DataBatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataBatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.nipc.DataSubscription.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DataBatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nipc.DataBatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nipc.DataBatch} DataBatch
         */
        DataBatch.fromObject = function fromObject(object) {
            if (object instanceof $root.nipc.DataBatch)
                return object;
            var message = new $root.nipc.DataBatch();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".nipc.DataBatch.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".nipc.DataBatch.messages: object expected");
                    message.messages[i] = $root.nipc.DataSubscription.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DataBatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nipc.DataBatch
         * @static
         * @param {nipc.DataBatch} message DataBatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataBatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.nipc.DataSubscription.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this DataBatch to JSON.
         * @function toJSON
         * @memberof nipc.DataBatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataBatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DataBatch
         * @function getTypeUrl
         * @memberof nipc.DataBatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DataBatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/nipc.DataBatch";
        };

        return DataBatch;
    })();

    return nipc;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
