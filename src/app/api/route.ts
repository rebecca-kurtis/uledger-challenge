import {
  ULedgerTransactionInputV2,
  ULedgerTransactionSessionV2,
} from "@uledger/uledger-sdk";

import crypto from 'crypto'

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Adjust the key size as needed
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

function sha256Hash(data: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex'); // Returns a 64-character hexadecimal string (32 bytes)
}

function printEncodedStringLength(data: string): void {
    // Create a new TextEncoder object
    const encoder = new TextEncoder();

    // Encode the string as UTF-8
    const encodedString = encoder.encode(data);

    // The length of the encoded string gives you the number of bytes
    console.log('Encoded String Length (in bytes):', encodedString.length);
}

export async function GET() {
    console.log(publicKey)
    printEncodedStringLength(publicKey)

    console.log(sha256Hash(publicKey))
    printEncodedStringLength(sha256Hash(publicKey))

    const my_address = sha256Hash(publicKey)

    try {
        (async () => {
        const txnSession = new ULedgerTransactionSessionV2(
            {
                nodeUrl: "https://node1.network.uledger.io",
                // url is a parameter coming from ULedger Team, make sure you specify the version.
                atomicClockUrl: "https://uledger.net/api/v1/acs",
                nodeId: "51c7be67796f168548f0e82306095aeec58989940a9b1aedf1e758df8746d508"
            }
        );

        // Customize the payload to be sent
        const txnInputData: ULedgerTransactionInputV2 = {
            blockchainId: "33db26930b45c2e1e2e239f71d430b76b58eb46190ca31e02bf4bc1c9fb104af",
            to: my_address, 
            from: my_address, 
            payload: { 
                myPayload: "Hello World!",
                foo: "bar",
                sampleData: 100
            },
            payloadType: "DATA",
            senderSignature: "UPDATE THIS AFTER SIGNING AND BEFORE UPLOADING"
        }

        // Create a JSON string based off of the transaction payload
        const inputString = JSON.stringify(txnInputData.payload)

        // Calculate the Keccak (SHA-3) hash using js-sha3
        const hash = sha256Hash(inputString);

        console.log('Keccak (SHA-3) Hash of Transaction Payload:', hash);

        // Sign the hash with the private key
        const sign = crypto.createSign('RSA-SHA256');
        sign.update(hash);
        const signature = sign.sign(privateKey, 'base64');

        // Update the transaction
        txnInputData.senderSignature = sha256Hash(signature);
        printEncodedStringLength(sha256Hash(signature))
        console.log(sha256Hash(signature))

        // Send the request to the node
        const txn = await txnSession.createTransaction(txnInputData);
        // Show the result
        console.log(txn);
        })();
    } catch (error) {
        console.log("Fail ", error);
    }
    return new Response("Success! check console log on terminal!", {
          status: 200,
        });
}

// main();

// export async function GET() {
//   try {
//     (async () => {
//       const txnSession = new ULedgerTransactionSessionV2({
//         // PUT NODE URL HERE
//         nodeUrl: "https://node1.network.uledger.io/",
//         // url is a parameter coming from ULedger Team, make sure you specify the version.
//         atomicClockUrl: "https://uledger.net/api/v1/acs",
//         // PUT NODE ID HERE
//         nodeId: "51c7be67796f168548f0e82306095aeec58989940a9b1aedf1e758df8746d508",
//       });

//       // Customize the payload to be sent
//       const txnInputData: ULedgerTransactionInputV2 = {
//         blockchainId: "33db26930b45c2e1e2e239f71d430b76b58eb46190ca31e02bf4bc1c9fb104af",
//         to: "2d2d2d2d2d424547494e204543205055424c4943204b45592d2d2d2d2d0a4d465177446759464b34454541416f47425375424241414b41304941424c774d704a6a4b59723151612b486f7931336341797845383946372b64756d5257564f0a634f4748394c4e386e61434a52454962523065666a6a5643353579354d4e755430416f6e686f31353835696545442f637a72593d0a2d2d2d2d2d454e44204543205055424c4943204b45592d2d2d2d2d0a",
//         from: "2d2d2d2d2d424547494e204543205055424c4943204b45592d2d2d2d2d0a4d465177446759464b34454541416f47425375424241414b4130494142464c487a3742306a5162492f435a794f71484e68336265746255784e6c724f35334b5a0a6358696d6949344f336f50792b443235546d7577382f5744776a36444a397731327444746f734f4a306b32334948714f35444d3d0a2d2d2d2d2d454e44204543205055424c4943204b45592d2d2d2d2d0a",
//         payload: {
//           myPayload: "Hello World!",
//         },
//         payloadType: "DATA",
//         senderSignature:
//         "71e0d1725a8238736a3314428a5ea6a8b0bca329d5f7ca2692cb7e092f94ec5e65e6e56a496f3105dcff3a1a2552c7cc8dd117998605ee807be1403f862bc4d9",
//       };

//       // Send the request to the node
//       const txn = await txnSession.createTransaction(txnInputData);
//       // Show the result
//       console.log("Here's your transaction: ", txn);
//     })();
//   } catch (error) {
//     console.log("Fail ", error);
//   }

//   return new Response("Success! check console log on terminal!", {
//     status: 200,
//   });
// }