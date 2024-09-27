const ERC1967Proxy = {
  _format: "hh-sol-artifact-1",
  contractName: "ERC1967Proxy",
  sourceName: "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_logic",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      stateMutability: "payable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "AdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beacon",
          type: "address",
        },
      ],
      name: "BeaconUpgraded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
  bytecode:
    "0x60806040526040516107813803806107818339810160408190526100229161032b565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6103f9565b60008051602061073a833981519152146100695761006961041e565b6100758282600061007c565b5050610483565b610085836100e6565b6040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a26000825111806100c65750805b156100e1576100df83836101a660201b6100291760201c565b505b505050565b6100f9816101d260201b6100551760201c565b6101605760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b8061018560008051602061073a83398151915260001b6101d860201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606101cb838360405180606001604052806027815260200161075a602791396101db565b9392505050565b3b151590565b90565b6060833b61023a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610157565b600080856001600160a01b0316856040516102559190610434565b600060405180830381855af49150503d8060008114610290576040519150601f19603f3d011682016040523d82523d6000602084013e610295565b606091505b5090925090506102a68282866102b0565b9695505050505050565b606083156102bf5750816101cb565b8251156102cf5782518084602001fd5b8160405162461bcd60e51b81526004016101579190610450565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561031a578181015183820152602001610302565b838111156100df5750506000910152565b6000806040838503121561033e57600080fd5b82516001600160a01b038116811461035557600080fd5b60208401519092506001600160401b038082111561037257600080fd5b818501915085601f83011261038657600080fd5b815181811115610398576103986102e9565b604051601f8201601f19908116603f011681019083821181831017156103c0576103c06102e9565b816040528281528860208487010111156103d957600080fd5b6103ea8360208301602088016102ff565b80955050505050509250929050565b60008282101561041957634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b600082516104468184602087016102ff565b9190910192915050565b602081526000825180602084015261046f8160408501602087016102ff565b601f01601f19169190910160400192915050565b6102a8806104926000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101fc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b81526004016101159190610218565b60005b838110156101e75781810151838201526020016101cf565b838111156101f6576000848401525b50505050565b6000825161020e8184602087016101cc565b9190910192915050565b60208152600082518060208401526102378160408501602087016101cc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122041f64d2ff908c9983923017ed36c949dd92697a1f359295e2ea2f809da86127664736f6c63430008090033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
  deployedBytecode:
    "0x60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101fc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b81526004016101159190610218565b60005b838110156101e75781810151838201526020016101cf565b838111156101f6576000848401525b50505050565b6000825161020e8184602087016101cc565b9190910192915050565b60208152600082518060208401526102378160408501602087016101cc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122041f64d2ff908c9983923017ed36c949dd92697a1f359295e2ea2f809da86127664736f6c63430008090033",
  linkReferences: {},
  deployedLinkReferences: {},
};

export default ERC1967Proxy;