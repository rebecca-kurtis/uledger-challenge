import { ULedgerTransactionInputV2, ULedgerTransactionSessionV2 } from '@uledger/uledger-sdk';


const Test = () => {


    
    const testbutton = () => {
        console.log('test')
        async function main() {
            try {
                (async () => {
                const txnSession = new ULedgerTransactionSessionV2(
                    {
                        nodeUrl: "https://node1.network.uledger.io/",
                        // url is a parameter coming from ULedger Team, make sure you specify the version.
                        atomicClockUrl: "https://uledger.net/api/v1/acs",
                        nodeId: "51c7be67796f168548f0e82306095aeec58989940a9b1aedf1e758df8746d508"
                    }
                );
        
                // Customize the payload to be sent
                const txnInputData: ULedgerTransactionInputV2 = {
                    blockchainId: "33db26930b45c2e1e2e239f71d430b76b58eb46190ca31e02bf4bc1c9fb104af",
                    to: "2d2d2d2d2d424547494e204543205055424c4943204b45592d2d2d2d2d0a4d465177446759464b34454541416f47425375424241414b41304941424c774d704a6a4b59723151612b486f7931336341797845383946372b64756d5257564f0a634f4748394c4e386e61434a52454962523065666a6a5643353579354d4e755430416f6e686f31353835696545442f637a72593d0a2d2d2d2d2d454e44204543205055424c4943204b45592d2d2d2d2d0a", 
                    from: "2d2d2d2d2d424547494e204543205055424c4943204b45592d2d2d2d2d0a4d465177446759464b34454541416f47425375424241414b4130494142464c487a3742306a5162492f435a794f71484e68336265746255784e6c724f35334b5a0a6358696d6949344f336f50792b443235546d7577382f5744776a36444a397731327444746f734f4a306b32334948714f35444d3d0a2d2d2d2d2d454e44204543205055424c4943204b45592d2d2d2d2d0a", 
                    payload: { 
                        myPayload: "Hello World!" 
                    }, 
                    payloadType: "DATA",
                    senderSignature: "71e0d1725a8238736a3314428a5ea6a8b0bca329d5f7ca2692cb7e092f94ec5e65e6e56a496f3105dcff3a1a2552c7cc8dd117998605ee807be1403f862bc4d9"
                }
        
                // Send the request to the node
                const txn = await txnSession.createTransaction(txnInputData);
                // Show the result
                console.log(txn);
        
                })();
            } catch (error) {
                console.log("Fail ", error);
            }
        }
        main()
    }

    return (
        <div>
            <button onClick={testbutton}>Test</button>
        </div>
    )

}

export default Test