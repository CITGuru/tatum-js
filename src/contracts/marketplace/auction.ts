export const abi = [
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'feeRecipient',
                'type': 'address'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'buyer',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            }
        ],
        'name': 'AuctionBid',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'AuctionCancelled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'indexed': true,
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'endedAt',
                'type': 'uint256'
            }
        ],
        'name': 'AuctionCreated',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'AuctionSettled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'Paused',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'Unpaused',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'internalType': 'uint256',
                'name': 'bidValue',
                'type': 'uint256'
            }
        ],
        'name': 'bid',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'cancelAuction',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            },
            {
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'seller',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'endedAt',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'createAuction',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'getAuction',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'seller',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'nftAddress',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isErc721',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'endedAt',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'startedAt',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'erc20Address',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'amount',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'endingPrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'bidder',
                        'type': 'address'
                    }
                ],
                'internalType': 'struct NftAuction.Auction',
                'name': '',
                'type': 'tuple'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getAuctionFee',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getAuctionFeeRecipient',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'paused',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            }
        ],
        'name': 'setAuctionFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            }
        ],
        'name': 'setAuctionFeeRecipient',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'id',
                'type': 'string'
            }
        ],
        'name': 'settleAuction',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
];

export const data = '0x608060405260006002553480156200001657600080fd5b50604051620025b7380380620025b78339810160408190526200003991620000cb565b600062000045620000c7565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506000805460ff60a01b19169055600391909155600480546001600160a01b0319166001600160a01b0390921691909117905562000108565b3390565b60008060408385031215620000de578182fd5b825160208401519092506001600160a01b0381168114620000fd578182fd5b809150509250929050565b61249f80620001186000396000f3fe6080604052600436106100f75760003560e01c8063b60e7a3b1161008a578063edd8184911610059578063edd8184914610264578063f23a6e6114610291578063f2fde38b146102b1578063f59e754c146102d1576100fe565b8063b60e7a3b146101fc578063bc197c811461020f578063d602173c1461022f578063e81f6f0314610244576100fe565b80635f483313116100c65780635f4833131461019f578063715018a6146101b25780638da5cb5b146101c7578063a13d4e6b146101e9576100fe565b80631031ca4414610103578063150b7a021461012e5780633eac3f851461015b5780635c975abb1461017d576100fe565b366100fe57005b600080fd5b34801561010f57600080fd5b506101186102f1565b6040516101259190612337565b60405180910390f35b34801561013a57600080fd5b5061014e61014936600461198f565b6102f7565b6040516101259190611ccc565b34801561016757600080fd5b5061017b6101763660046118a6565b610307565b005b34801561018957600080fd5b50610192610371565b6040516101259190611cc1565b61017b6101ad366004611b5c565b610381565b3480156101be57600080fd5b5061017b610897565b3480156101d357600080fd5b506101dc610920565b6040516101259190611c1e565b61017b6101f7366004611a7c565b61092f565b61017b61020a366004611a7c565b610b1e565b34801561021b57600080fd5b5061014e61022a3660046118e5565b610d70565b34801561023b57600080fd5b506101dc610d81565b34801561025057600080fd5b5061017b61025f366004611ab7565b610d90565b34801561027057600080fd5b5061028461027f366004611a7c565b610fe5565b604051610125919061229b565b34801561029d57600080fd5b5061014e6102ac3660046119f9565b611097565b3480156102bd57600080fd5b5061017b6102cc3660046118a6565b6110a8565b3480156102dd57600080fd5b5061017b6102ec366004611b9f565b611168565b60035490565b630a85bd0160e11b949350505050565b61030f6111cc565b6001600160a01b0316610320610920565b6001600160a01b03161461034f5760405162461bcd60e51b815260040161034690611f70565b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600054600160a01b900460ff1690565b610389610371565b156103a65760405162461bcd60e51b815260040161034690611e63565b60006001836040516103b89190611be2565b9081526040805191829003602090810183206101408401835280546001600160a01b039081168552600182015481169285019290925260028101549284019290925260038083015460ff161515606085015260048301546080850152600583015460a08501526006830154821660c0850152600783015460e08501526008830154610100850152600990920154166101208301525490915060009061045f9061271061238e565b61046990846123a6565b610475906127106123c6565b90504382608001511161049a5760405162461bcd60e51b815260040161034690612011565b80826101000151106104be5760405162461bcd60e51b81526004016103469061206e565b60c08201516001600160a01b03166104ef573483146104ef5760405162461bcd60e51b815260040161034690611d3e565b60c08201516001600160a01b0316156105a45760c0820151604051636eb1769f60e11b815284916001600160a01b03169063dd62ed3e906105369033903090600401611c32565b60206040518083038186803b15801561054e57600080fd5b505afa158015610562573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105869190611bb7565b10156105a45760405162461bcd60e51b815260040161034690612192565b600060405180610140016040528084600001516001600160a01b0316815260200184602001516001600160a01b0316815260200184604001518152602001846060015115158152602001846080015181526020014381526020018460c001516001600160a01b031681526020018460e00151815260200184610100015181526020018461012001516001600160a01b0316815250905060018560405161064a9190611be2565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff1916905560048301819055600583018190556006830180548316905560078301819055600883015560099091018054909116905560c08101516001600160a01b0316156107705760c08101516040516323b872dd60e01b81526001600160a01b038216906323b872dd9061070090339030908a90600401611c4c565b602060405180830381600087803b15801561071a57600080fd5b505af115801561072e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107529190611a60565b61076e5760405162461bcd60e51b815260040161034690612135565b505b6101008101829052336101208201526040518190600190610792908890611be2565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e08501516007820155610100850151600882015561012090940151600990940180549093169390911692909217905582903390610860908890611be2565b604051908190038120907f1e0ab2a3d99525c0ac6ad4af8309c0c64e02621f17b6333695c6ee19235fedac90600090a45050505050565b61089f6111cc565b6001600160a01b03166108b0610920565b6001600160a01b0316146108d65760405162461bcd60e51b815260040161034690611f70565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b60006001826040516109419190611be2565b9081526040805191829003602090810183206101408401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff1615156060840152600482015460808401819052600583015460a08501526006830154821660c0850152600783015460e085015260088301546101008501526009909201541661012083015290915043116109f75760405162461bcd60e51b8152600401610346906120e2565b6060810151602082015160e083015160408085015160c0860151610100870151610120880151935192939192909190600190610a34908b90611be2565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff19169055600483018190556005830181905560068301805483169055600783018190556008830155600990910180549091169055610aaf87878387896111d0565b610ac083838a6000015160016112a8565b60028054906000610ad0836123e5565b919050555088604051610ae39190611be2565b604051908190038120907fafdc429d8d197c8769e7a13a5bcd959b9f8dade051086aac5fbcba8e8d7f3a5e90600090a2505050505050505050565b6000600182604051610b309190611be2565b90815260408051602092819003830181206101408201835280546001600160a01b039081168084526001830154821695840195909552600282015493830193909352600381015460ff161515606083015260048101546080830152600581015460a08301526006810154831660c0830152600781015460e08301526008810154610100830152600901549091166101208201529150610be15760405162461bcd60e51b815260040161034690611ed8565b80516001600160a01b0316331480610c115750610bfc610920565b6001600160a01b0316336001600160a01b0316145b610c2d5760405162461bcd60e51b815260040161034690611fa5565b6060810151602082015160e083015160408085015160c0860151610100870151610120880151935192939192909190600190610c6a908b90611be2565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff191690556004830181905560058301819055600683018054831690556007830181905560088301556009909101805490911690558751610ce9908890889087896111d0565b6001600160a01b03811615801590610d0057508115155b15610d1257610d1283838360006112a8565b60028054906000610d22836123e5565b919050555088604051610d359190611be2565b604051908190038120907f8491f144dda005dc8140735549d904900585c1cbe24e47da9dcbf67a8b7233d590600090a2505050505050505050565b63bc197c8160e01b95945050505050565b6004546001600160a01b031690565b610d98610371565b15610db55760405162461bcd60e51b815260040161034690611e63565b600188604051610dc59190611be2565b908152602001604051809103902060050154600014610df65760405162461bcd60e51b8152600401610346906121fc565b610e0143600561238e565b8211610e1f5760405162461bcd60e51b815260040161034690611f1d565b610e2c87878688876114e3565b60028054906000610e3c836123fc565b91905055506000604051806101400160405280866001600160a01b03168152602001886001600160a01b031681526020018781526020018915158152602001848152602001438152602001836001600160a01b031681526020018581526020016000815260200160006001600160a01b031681525090508060018a604051610ec49190611be2565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e08501516007820155610100850151600882015561012090940151600990940180549093169382169390931790915588169089151590610f95908c90611be2565b60405180910390207fe95d64b38389c8450e73aef23db7420b3d9f4a8b7fcd61793d228893511f9b6189888789604051610fd29493929190612340565b60405180910390a4505050505050505050565b610fed611740565b600182604051610ffd9190611be2565b9081526040805191829003602090810183206101408401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff161515606084015260048201546080840152600582015460a08401526006820154811660c0840152600782015460e08401526008820154610100840152600990910154166101208201529050919050565b63f23a6e6160e01b95945050505050565b6110b06111cc565b6001600160a01b03166110c1610920565b6001600160a01b0316146110e75760405162461bcd60e51b815260040161034690611f70565b6001600160a01b03811661110d5760405162461bcd60e51b815260040161034690611d89565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6111706111cc565b6001600160a01b0316611181610920565b6001600160a01b0316146111a75760405162461bcd60e51b815260040161034690611f70565b600254156111c75760405162461bcd60e51b81526004016103469061224a565b600355565b3390565b8461123e57604051637921219560e11b81526001600160a01b0385169063f242432a90611207903090879087908790600401611c70565b600060405180830381600087803b15801561122157600080fd5b505af1158015611235573d6000803e3d6000fd5b505050506112a1565b604051632142170760e11b81526001600160a01b038516906342842e0e9061126e90309087908790600401611c4c565b600060405180830381600087803b15801561128857600080fd5b505af115801561129c573d6000803e3d6000fd5b505050505b5050505050565b6001600160a01b038416156114875760405163a9059cbb60e01b81526001600160a01b0385169063a9059cbb906112e59085908790600401611ca8565b602060405180830381600087803b1580156112ff57600080fd5b505af1158015611313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113379190611a60565b5080156113e6576004546003546001600160a01b038087169263a9059cbb929116906127109061136790886123c6565b61137191906123a6565b6040518363ffffffff1660e01b815260040161138e929190611ca8565b602060405180830381600087803b1580156113a857600080fd5b505af11580156113bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e09190611a60565b50611482565b836001600160a01b031663a9059cbb836127106003548761140791906123c6565b61141191906123a6565b6040518363ffffffff1660e01b815260040161142e929190611ca8565b602060405180830381600087803b15801561144857600080fd5b505af115801561145c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114809190611a60565b505b6114dd565b611491828461169f565b80156114c857600454600354611482916001600160a01b031690612710906114b990876123c6565b6114c391906123a6565b61169f565b6114dd82612710600354866114b991906123c6565b50505050565b846115c357600081116114f557600080fd5b604051627eeac760e11b815281906001600160a01b0386169062fdd58e906115239087908790600401611ca8565b60206040518083038186803b15801561153b57600080fd5b505afa15801561154f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115739190611bb7565b10156115915760405162461bcd60e51b815260040161034690611ce1565b604051637921219560e11b81526001600160a01b0385169063f242432a90611207908690309087908790600401611c70565b826001600160a01b0316846001600160a01b0316636352211e846040518263ffffffff1660e01b81526004016115f99190612337565b60206040518083038186803b15801561161157600080fd5b505afa158015611625573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164991906118c9565b6001600160a01b03161461166f5760405162461bcd60e51b815260040161034690611e8d565b604051632142170760e11b81526001600160a01b038516906342842e0e9061126e90869030908790600401611c4c565b804710156116bf5760405162461bcd60e51b815260040161034690611e2c565b6000826001600160a01b0316826040516116d890611c1b565b60006040518083038185875af1925050503d8060008114611715576040519150601f19603f3d011682016040523d82523d6000602084013e61171a565b606091505b505090508061173b5760405162461bcd60e51b815260040161034690611dcf565b505050565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b600082601f8301126117c9578081fd5b8135602067ffffffffffffffff8211156117e5576117e561242d565b8082026117f3828201612364565b83815282810190868401838801850189101561180d578687fd5b8693505b8584101561182f578035835260019390930192918401918401611811565b50979650505050505050565b600082601f83011261184b578081fd5b813567ffffffffffffffff8111156118655761186561242d565b611878601f8201601f1916602001612364565b81815284602083860101111561188c578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156118b7578081fd5b81356118c281612443565b9392505050565b6000602082840312156118da578081fd5b81516118c281612443565b600080600080600060a086880312156118fc578081fd5b853561190781612443565b9450602086013561191781612443565b9350604086013567ffffffffffffffff80821115611933578283fd5b61193f89838a016117b9565b94506060880135915080821115611954578283fd5b61196089838a016117b9565b93506080880135915080821115611975578283fd5b506119828882890161183b565b9150509295509295909350565b600080600080608085870312156119a4578384fd5b84356119af81612443565b935060208501356119bf81612443565b925060408501359150606085013567ffffffffffffffff8111156119e1578182fd5b6119ed8782880161183b565b91505092959194509250565b600080600080600060a08688031215611a10578081fd5b8535611a1b81612443565b94506020860135611a2b81612443565b93506040860135925060608601359150608086013567ffffffffffffffff811115611a54578182fd5b6119828882890161183b565b600060208284031215611a71578081fd5b81516118c28161245b565b600060208284031215611a8d578081fd5b813567ffffffffffffffff811115611aa3578182fd5b611aaf8482850161183b565b949350505050565b600080600080600080600080610100898b031215611ad3578283fd5b883567ffffffffffffffff811115611ae9578384fd5b611af58b828c0161183b565b9850506020890135611b068161245b565b96506040890135611b1681612443565b9550606089013594506080890135611b2d81612443565b935060a0890135925060c0890135915060e0890135611b4b81612443565b809150509295985092959890939650565b60008060408385031215611b6e578182fd5b823567ffffffffffffffff811115611b84578283fd5b611b908582860161183b565b95602094909401359450505050565b600060208284031215611bb0578081fd5b5035919050565b600060208284031215611bc8578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008251815b81811015611c025760208186018101518583015201611be8565b81811115611c105782828501525b509190910192915050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b60208082526038908201527f4552433131353520746f6b656e2062616c616e6365206973206e6f742073756660408201527f66696369656e7420666f72207468652073656c6c65722e2e0000000000000000606082015260800190565b6020808252602b908201527f57726f6e6720616d6f756e7420656e746572656420666f72207468652062696460408201526a171020b137b93a34b7339760a91b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252603a908201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260408201527f6563697069656e74206d61792068617665207265766572746564000000000000606082015260800190565b6020808252601d908201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604082015260600190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252602b908201527f45524337323120746f6b656e20646f6573206e6f742062656c6f6e6720746f2060408201526a3a34329030baba3437b91760a91b606082015260800190565b60208082526025908201527f41756374696f6e20697320616c726561647920736574746c65642e2041626f726040820152643a34b7339760d91b606082015260800190565b60208082526033908201527f41756374696f6e206d757374206c617374206174206c65617374203520626c6f604082015272636b732066726f6d207468697320626c6f636b60681b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526046908201527f41756374696f6e2063616e27742062652063616e63656c6c65642066726f6d2060408201527f6f74686572207468616e6b2073656c6c6572206f72206f776e65722e2041626f606082015265393a34b7339760d11b608082015260a00190565b6020808252603b908201527f41756374696f6e2068617320616c726561647920656e6465642e20556e61626c60408201527f6520746f2070726f63657373206269642e2041626f7274696e672e0000000000606082015260800190565b6020808252604e908201527f4269642066726565206f66207468652061756374696f6e20666565206973206c60408201527f6f776572207468616e6b2061637475616c20686967686573742062696420707260608201526d34b1b2971020b137b93a34b7339760911b608082015260a00190565b60208082526033908201527f41756374696f6e2063616e277420626520736574746c6564206265666f72652060408201527234ba103932b0b1b432b9903a34329032b7321760691b606082015260800190565b60208082526038908201527f556e61626c6520746f207472616e7366657220455243323020746f6b656e732060408201527f746f207468652041756374696f6e2e2041626f7274696e670000000000000000606082015260800190565b60208082526044908201527f496e73756666696369656e7420617070726f76616c20666f722045524332302060408201527f746f6b656e20666f72207468652061756374696f6e206269642e2041626f727460608201526334b7339760e11b608082015260a00190565b6020808252602e908201527f41756374696f6e20616c7265616479206578697374656420666f72206375727260408201526d195b9d08185d58dd1a5bdb88125960921b606082015260800190565b60208082526031908201527f4665652063616e2774206265206368616e6765642069662074686572652069736040820152701037b733b7b4b7339030bab1ba34b7b71760791b606082015260800190565b6000610140820190506122af828451611bcf565b60208301516122c16020840182611bcf565b506040830151604083015260608301516122de6060840182611bdc565b506080830151608083015260a083015160a083015260c083015161230560c0840182611bcf565b5060e083015160e08301526101008084015181840152506101208084015161232f82850182611bcf565b505092915050565b90815260200190565b93845260208401929092526001600160a01b03166040830152606082015260800190565b60405181810167ffffffffffffffff811182821017156123865761238661242d565b604052919050565b600082198211156123a1576123a1612417565b500190565b6000826123c157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156123e0576123e0612417565b500290565b6000816123f4576123f4612417565b506000190190565b600060001982141561241057612410612417565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461245857600080fd5b50565b801515811461245857600080fdfea26469706673582212205cce44027d89bc3bc870c455de0ed5bda948b534b8364803ed07f062ce70702f64736f6c63430008000033';