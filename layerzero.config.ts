import { EndpointId } from '@layerzerolabs/lz-definitions'
const arbitrumOneContract = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'OGLM',
}
const baseContract = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'OGLM',
}
const bscContract = {
    eid: EndpointId.BSC_V2_MAINNET,
    contractName: 'OGLM',
}
const ethereumContract = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'GLMAdapter',
}
const polygonContract = {
    eid: EndpointId.POLYGON_V2_MAINNET,
    contractName: 'OGLM',
}
const celoContract = {
    eid: EndpointId.CELO_V2_MAINNET,
    contractName: 'OGLM',
}
export default {
    contracts: [
        { contract: arbitrumOneContract },
        { contract: baseContract },
        { contract: bscContract },
        { contract: ethereumContract },
        { contract: polygonContract },
        { contract: celoContract },
    ],
    connections: [
        {
            from: arbitrumOneContract,
            to: baseContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: bscContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: celoContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbitrumOneContract,
            to: polygonContract,
            config: {
                sendLibrary: '0x975bcD720be66659e3EB3C0e4F1866a3020E493A',
                receiveLibraryConfig: { receiveLibrary: '0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x31CAe3B7fB82d847621859fb1585353c5720660D' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x2f55C492897526677C5B68fb199ea31E2c126416',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: bscContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: celoContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: polygonContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: baseContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: celoContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: polygonContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: baseContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: bscContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: celoContract,
            to: polygonContract,
            config: {
                sendLibrary: '0x42b4E9C6495B4cFDaE024B1eC32E09F28027620e',
                receiveLibraryConfig: { receiveLibrary: '0xaDDed4478B423d991C21E525Cd3638FBce1AaD17', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x1dDbaF8b75F2291A97C22428afEf411b7bB19e28' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0x75b073994560a5c03cd970414d9170be0c6e5c36',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: baseContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: bscContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: celoContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethereumContract,
            to: polygonContract,
            config: {
                sendLibrary: '0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1',
                receiveLibraryConfig: { receiveLibrary: '0xc02Ab410f0734EFa3F14628780e6e695156024C2', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x173272739Bd7Aa6e4e214714048a9fE699453059' },
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x589dEDbD617e0CBcB916A9223F4d1300c294236b',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polygonContract,
            to: arbitrumOneContract,
            config: {
                sendLibrary: '0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3',
                receiveLibraryConfig: { receiveLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xCd3F213AD101472e1713C72B1697E727C803885b' },
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polygonContract,
            to: baseContract,
            config: {
                sendLibrary: '0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3',
                receiveLibraryConfig: { receiveLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xCd3F213AD101472e1713C72B1697E727C803885b' },
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polygonContract,
            to: bscContract,
            config: {
                sendLibrary: '0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3',
                receiveLibraryConfig: { receiveLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xCd3F213AD101472e1713C72B1697E727C803885b' },
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polygonContract,
            to: celoContract,
            config: {
                sendLibrary: '0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3',
                receiveLibraryConfig: { receiveLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xCd3F213AD101472e1713C72B1697E727C803885b' },
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polygonContract,
            to: ethereumContract,
            config: {
                sendLibrary: '0x6c26c61a97006888ea9E4FA36584c7df57Cd9dA3',
                receiveLibraryConfig: { receiveLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xCd3F213AD101472e1713C72B1697E727C803885b' },
                    ulnConfig: {
                        confirmations: 50,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 15,
                        requiredDVNs: [
                            '0x23DE2FE932d9043291f870324B74F820e11dc81A',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
    ],
}
