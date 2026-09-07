barnowl-cisco
=============

__barnowl-cisco__ converts the decodings of _any_ Bluetooth Low Energy devices by [Cisco](https://www.cisco.com/) access points into standard developer-friendly JSON that is vendor/technology/application-agnostic.


Quick Start
-----------

Clone this repository, install package dependencies with `npm install`, and then from the root folder run at any time:

    npm start

__barnowl-cisco__ will attempt to connect to a MQTT broker on localhost and subscribe to the topic `cisco/iotorchestrator/v1/#`.  Any messages published by IoT Orchestrator will be processed and output as (flattened) __raddec__ JSON to the console.


Hello barnowl-cisco!
--------------------

Developing an application directly from __barnowl-cisco__?  Start by pasting the code below into a file called server.js:

```javascript
const Barnowl = require('barnowl');
const BarnowlCisco = require('barnowl-cisco');

let barnowl = new Barnowl({ enableMixing: true });

barnowl.addListener(BarnowlCisco, {}, BarnowlCisco.TestListener, {});

barnowl.on('raddec', (raddec) => {
  console.log(raddec);
  // Trigger your application logic here
});
```

From the same folder as the server.js file, install package dependencies with the commands `npm install barnowl-cisco` and `npm install barnowl`.  Then run the code with the command `node server.js` and observe the _simulated_ data stream of radio decodings (raddec objects) output to the console:

```javascript
{
  transmitterId: "fee150bada55",
  transmitterIdType: 2,
  rssiSignature: [
    {
      receiverId: "ffff80ff0000",
      receiverIdType: 2,
      rssi: -77,
      numberOfDecodings: 1
    }
  ],
  packets: [ '...' ],
  timestamp: 1645568542222
}
```

See the [Supported Listener Interfaces](#supported-listener-interfaces) below to adapt the code to listen for your AP(s).


Supported Listener Interfaces
-----------------------------

The following listener interfaces are supported.

### MQTT

```javascript
barnowl.addListener(BarnowlCisco, {}, BarnowlCisco.MqttListener,
                    { url: "mqtt://localhost", topic: "specify/topic/here" });
```

### Serial
```javascript
barnowl.addListener(BarnowlCisco, {}, BarnowlCisco.SerialListener,
                    { path: "/dev/ttyiot0" });
```

### Test

Provides a steady stream of simulated messages for testing purposes.

```javascript
barnowl.addListener(BarnowlCisco, {}, BarnowlCisco.TestListener, {});
```


Compiling Protocol Buffer JavaScript bundles
--------------------------------------------

Cisco IoT Orchestrator v1.x encodes data using [Protocol Buffers](https://protobuf.dev/), and, to decode the data, __barnowl-cisco__ uses a JavaScript bundle of the proto definitions.  The proto definition can be found in the [Cisco Sensor Connect for IoT Services: Partner Developer Guide](https://developer.cisco.com/docs/spaces-connect-for-iot-services/subscribing-to-advertisements-and-notifications/#telemetry-message-format-for-onboarded-advertisements-and-notifications), and also in the /proto folder of this repository.

Compiling the proto definitions into a JavaScript bundle requires __pbjs__ from the [protobufjs-cli](https://www.npmjs.com/package/protobufjs-cli), which must first be installed as follows:

    npm install -g protobufjs-cli

Then compile the IoT Orchestrator proto definition with the following command:

    npm run iotorchestratorproto

which will compile and bundle, using __pbjs__, the defintions from /proto into the file /lib/iotorchestratorproto.js.


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.


License
-------

MIT License

Copyright (c) 2026 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.


