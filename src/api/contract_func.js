import Web3 from 'web3';

import contractObj from './contract.js';

import { getChainInfo } from './chain_info.js';

import ERC1967Proxy from './proxy.js';
import { fromWei } from './sign_utils.js';

/************************** base functions ***********************************/

const rpcError = (err) => {
  try {
    // if (typeof err === "object") {
    //   // console.log(err.code,'----------object-----------',err.message);
    //   return { code: err.code ? err.code : -1, message: err.message };
    // } else {
    let errore = err.toString();
    // console.log(err.message);
    let idx = errore.indexOf('JSON-RPC error.');
    if (idx > -1) {
      errore = errore.substring(idx + 'JSON-RPC error.'.length);
      errore = errore.replace('', '').replace('Error: ', '').replace('Internal JSON-RPC error.', '');
      errore = JSON.parse(errore);
      return { code: errore.code, message: errore.message };
    } else {
      idx = err.message.indexOf("'");
      let ridx = err.message.lastIndexOf("'");
      errore = err.message.replace('', '');
      if (idx !== -1 && ridx !== -1) {
        // console.log(
        //   idx,
        //   ridx,
        //   err.message.substring(idx + 1, ridx).replace("", "")
        // );
        const re = JSON.parse(err.message.substring(idx + 1, ridx));
        if (re) {
          return { code: err.code, message: re.value.data.message };
        }
      }
      return { code: err.code ? err.code : -1, message: err.message };
    }
    // }
  } catch (error) {
    return error.toString();
  }
};

const awaitReuslt = (promise) => {
  return promise.then((data) => [null, data]).catch((err) => [rpcError(err), null]);
};

export let baseInfo = {};

const checkAndRun = async (callback) => {
  if (baseInfo && baseInfo.theContractObj) {
    return await callback();
  } else {
    return [{ code: -2, message: 'Contract not Loaded' }, null];
  }
};

export const getRResult = (rv) => {
  return rv[0] == null ? rv[1] : null; //rv[0];
};

export const onAccountChanged = (callback) => {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', function (accounts) {
      baseInfo.current_account = accounts[0];
      if (callback) {
        callback(accounts[0]);
      }
    });
  }
};

export const onBlockChainNetworkChanged = (callback) => {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('chainChanged', function (networkIDstring) {
      baseInfo.blockchain_id = parseInt(networkIDstring);
      baseInfo.chainInfo = getChainInfo(baseInfo.blockchain_id);
      if (callback) {
        callback(baseInfo.chainInfo);
      }
    });
  }
};

export const getAccount = async () => {
  if (typeof window.ethereum !== 'undefined') {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
      return null;
    });
    return accounts && accounts.length > 0 ? accounts[0] : null;
  } else {
    return null;
  }
};

export const switchEthereumChain = async (chainID) => {
  const swr = await window.ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: `0x${parseInt(chainID).toString(16)}`,
        },
      ], // chainId must be in hexadecimal numbers
    })
    .catch((error) => error);
  return swr;
};

export const connetWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    // console.log("MetaMask is installed!");
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
      return null;
    });
    baseInfo.current_account = accounts && accounts.length > 0 ? accounts[0] : null;
    return true;
  } else {
    return false;
  }
};

export const initBlockChain = async () => {
  if (typeof window.ethereum !== 'undefined') {
    Window.web3 = new Web3(window.ethereum);
    baseInfo.blockchain_id = await Window.web3.eth.net.getId().catch((error) => {
      return 0;
    });
    baseInfo.chainInfo = getChainInfo(baseInfo.blockchain_id);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error) => {
      return null;
    });
    baseInfo.current_account = accounts && accounts.length > 0 ? accounts[0] : null;
    // console.log("netID", baseInfo.blockchain_id, baseInfo.chainInfo);
    // console.log('--web3 obj',Window.web3);
    return true;
  } else {
    return false;
  }
};

export const deployLogicContract = async () => {
  const logic = new Window.web3.eth.Contract(contractObj.abi);
  const logicContact = logic.deploy({
    data: contractObj.bytecode,
    arguments: [],
  });
  let txId;
  let contract_address;
  const from_address = await Window.web3.eth.getAccounts();
  const r = await logicContact
    .send(
      {
        from: from_address[0],
        gas: '5700000',
      },
      function (e, contract) {
        if (contract) {
          txId = contract;
          // console.log(`deployLogicContract Tx hash: ${txId}`);
        }
      },
    )
    .catch((error) => console.error(error));
  // console.log("deployLogicContract-----", r);
  if (r) {
    contract_address = r.options.address;
    return {
      chainID: baseInfo.blockchain_id,
      txId,
      contract_address,
    };
  } else {
    return {
      txId: '',
      contract_address: '',
    };
  }
};

export const deployProxyContract = async (
  _logicAddress,
  _name,
  _symbol,
  _metaImage,
  _metaContent,
  _description,
  _maxPerTx,
  _maxPerWallet,
  _freeMintAmount,
  _maxSupply,
  _startIdx,
  _cost,
  _startTime,
  _endTime,
  // _foggiehash
) => {
  const init_abi = {
    inputs: [
      { internalType: 'string', name: '_name', type: 'string' },
      { internalType: 'string', name: '_symbol', type: 'string' },
      { internalType: 'string', name: '_metaImage', type: 'string' },
      { internalType: 'string', name: '_metaContent', type: 'string' },
      { internalType: 'string', name: '_description', type: 'string' },
      { internalType: 'uint32', name: '_maxPerTx', type: 'uint32' },
      { internalType: 'uint32', name: '_maxPerWallet', type: 'uint32' },
      { internalType: 'uint16', name: '_freeMintAmount', type: 'uint16' },
      { internalType: 'uint256', name: '_maxSupply', type: 'uint256' },
      { internalType: 'uint256', name: '_startIdx', type: 'uint256' },
      { internalType: 'uint256', name: '_cost', type: 'uint256' },
      { internalType: 'uint48', name: '_startTime', type: 'uint48' },
      { internalType: 'uint48', name: '_endTime', type: 'uint48' },
      // { internalType: "uint48", name: "_foggiehash", type: "string" },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  };
  const para_data = Window.web3.eth.abi.encodeFunctionCall(init_abi, [
    _name,
    _symbol,
    _metaImage,
    _metaContent,
    _description,
    _maxPerTx,
    _maxPerWallet,
    _freeMintAmount,
    _maxSupply,
    _startIdx,
    _cost,
    _startTime,
    _endTime,
    // _foggiehash,
  ]);
  const proxy = new Window.web3.eth.Contract(ERC1967Proxy.abi);
  const proxyContact = proxy.deploy({
    data: ERC1967Proxy.bytecode,
    arguments: [_logicAddress, para_data],
  });
  let txId;
  let contract_address;
  await window.ethereum.enable();
  const from_address = await Window.web3.eth.getAccounts();

  // const _gasLimit = await proxyContact.estimateGas()
  // console.log("_gasLimit",_gasLimit)
  const gasEstimate = await proxyContact.estimateGas({ from: from_address[0] });
  console.log('gasEstimate-------', gasEstimate, from_address);
  // const gasLimit = Math.ceil(gasEstimate * 1.1);
  // const gasLimit = Math.ceil(gasEstimate * 0.1);
  // console.log('gasLimit-------', gasLimit);
  const gasEstimateNumber = Number(gasEstimate);
    const gasLimit = Math.ceil(gasEstimateNumber * 1.1);

  const r = await proxyContact
    .send({ from: from_address[0], gas: gasLimit }, function (e, contract) {
      if (contract) {
        txId = contract;
      }
    })
    .catch((error) => console.error(error));
  if (r) {
    console.log('deployProxyContract-----', _description, r);
    contract_address = r.options.address;
    return { chainID: baseInfo.blockchain_id, txId, contract_address };
  } else {
    return { txId: '', contract_address: '' };
  }
};

export const loadContract = async (contractAddress) => {
  baseInfo.theContractObj = new Window.web3.eth.Contract(contractObj.abi, contractAddress);
  // console.log(baseInfo.theContractObj);
  return true;
};

export const closeContract = () => {
  baseInfo.theContractObj = null;
};

export const getBalance = async (address) => {
  const [err, data] = await awaitReuslt(Window.web3.eth.getBalance(address));
  return [err, data];
};

export const getNonce = async (address) => {
  const [err, data] = await awaitReuslt(Window.web3.eth.getTransactionCount(address));
  // console.log(data);
  return [err, data];
};

export const getRoyaltyInfoSupport = async () => {
  return getRResult(await supportsInterface('0x2a55205a'));
};

export const getContractBaseInfo = async () => {
  let _royaltyInfoSupport = await getRoyaltyInfoSupport();
  let info = {
    contractAddress: '',
    baseTokenURI: getRResult(await baseTokenURI()),
    cost: getRResult(await cost()),
    freeMintAmount: getRResult(await freeMintAmount()),
    maxPerTx: getRResult(await maxPerTx()),
    maxPerWallet: getRResult(await maxPerWallet()),
    maxSupply: getRResult(await maxSupply()),
    metaAnimationURI: getRResult(await metaAnimationURI()),
    metaContent: _royaltyInfoSupport ? getRResult(await metaContent()) : '',
    metaDescription: getRResult(await metaDescription()),
    metaImageURI: getRResult(await metaImageURI()),
    name: getRResult(await name()),
    owner: getRResult(await owner()),
    // proxiableUUID: getRResult(await proxiableUUID()),
    publicEnable: getRResult(await publicEnable()),
    publicEndTime: getRResult(await publicEndTime()),
    publicStartTime: getRResult(await publicStartTime()),
    royalties: _royaltyInfoSupport ? getRResult(await royalties()) : '',
    royaltyReceiver: _royaltyInfoSupport ? getRResult(await royaltyReceiver()) : '',
    symbol: getRResult(await symbol()),
    totalSupply: getRResult(await totalSupply()),
    uriSuffix: getRResult(await uriSuffix()),
    // contractBalance: getRResult(await getBalance()),
    royaltyInfoSupport: _royaltyInfoSupport,
  };
  baseInfo.contractStatus = info;
  return info;
};

// export const getContractBaseInfo = async () => {
//   let info = {
//     contractAddress: "",
//     baseTokenURI: getRResult(await baseTokenURI()),
//     cost: getRResult(await cost()),
//     freeMintAmount: getRResult(await freeMintAmount()),
//     maxPerTx: getRResult(await maxPerTx()),
//     maxPerWallet: getRResult(await maxPerWallet()),
//     maxSupply: getRResult(await maxSupply()),
//     // merkleRoot: getRResult(await merkleRoot()),
//     metaAnimationURI: getRResult(await metaAnimationURI()),
//     metaDescription: getRResult(await metaDescription()),
//     metaImageURI: getRResult(await metaImageURI()),
//     name: getRResult(await name()),
//     owner: getRResult(await owner()),
//     // proxiableUUID: getRResult(await proxiableUUID()),
//     publicEnable: getRResult(await publicEnable()),
//     publicEndTime: getRResult(await publicEndTime()),
//     publicStartTime: getRResult(await publicStartTime()),
//     symbol: getRResult(await symbol()),
//     totalSupply: getRResult(await totalSupply()),
//     uriSuffix: getRResult(await uriSuffix()),
//     // whitelistEnable: getRResult(await whitelistEnable()),
//     // whitelistEndTime: getRResult(await whitelistEndTime()),
//     // whitelistStartTime: getRResult(await whitelistStartTime()),
//   };
//   baseInfo.contractStatus = info;
//   return info;
// };

export const getContractBaseInfoEx = async (contractAddress) => {
  let info = await getContractBaseInfo();
  info.contractAddress = contractAddress;
  info.contractBalance = fromWei(getRResult(await getBalance(contractAddress)));
  baseInfo.contractStatus = info;
  return info;
};

export const getContractOwner = async (contractAddress) => {
  const _contractObj = new Window.web3.eth.Contract(contractObj.abi, contractAddress);
  if (_contractObj) {
    const [err, data] = await awaitReuslt(_contractObj.methods.owner().call());
    // console.log(err,data)
    return [err, data];
  }
  return null;
};
/************************** viewWithoutParama ***********************************/

export const baseTokenURI = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.baseTokenURI().call());
    return [err, data];
  });
};

export const cost = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.cost().call());
    return [err, data];
  });
};

export const freeMintAmount = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.freeMintAmount().call());
    return [err, data];
  });
};

export const maxPerTx = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.maxPerTx().call());
    return [err, data];
  });
};

export const maxPerWallet = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.maxPerWallet().call());
    return [err, data];
  });
};

export const maxSupply = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.maxSupply().call());
    return [err, data];
  });
};

export const metaAnimationURI = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.metaAnimationURI().call());
    return [err, data];
  });
};

export const metaContent = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.metaContent().call());
    return [err, data];
  });
};

export const metaDescription = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.metaDescription().call());
    return [err, data];
  });
};

export const metaImageURI = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.metaImageURI().call());
    return [err, data];
  });
};

export const name = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.name().call());
    return [err, data];
  });
};

export const owner = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.owner().call());
    return [err, data];
  });
};

export const proxiableUUID = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.proxiableUUID().call());
    return [err, data];
  });
};

export const publicEnable = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.publicEnable().call());
    return [err, data];
  });
};

export const publicEndTime = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.publicEndTime().call());
    return [err, data];
  });
};

export const publicStartTime = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.publicStartTime().call());
    return [err, data];
  });
};

export const royalties = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.royalties().call());
    return [err, data];
  });
};

export const royaltyReceiver = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.royaltyReceiver().call());
    return [err, data];
  });
};

export const symbol = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.symbol().call());
    return [err, data];
  });
};

export const totalSupply = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.totalSupply().call());
    return [err, data];
  });
};

export const uriSuffix = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.uriSuffix().call());
    return [err, data];
  });
};

/************************** viewWithParama ***********************************/

export const balanceOf = async (owner) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.balanceOf(owner).call());
    return [err, data];
  });
};

export const explicitOwnershipOf = async (tokenId) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.explicitOwnershipOf(tokenId).call());
    return [err, data];
  });
};

export const explicitOwnershipsOf = async (tokenIds) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.explicitOwnershipsOf(tokenIds).call());
    return [err, data];
  });
};

export const getApproved = async (tokenId) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.getApproved(tokenId).call());
    return [err, data];
  });
};

export const isApprovedForAll = async (owner, operator) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.isApprovedForAll(owner, operator).call());
    return [err, data];
  });
};

export const mintAmountOf = async (_owner) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.mintAmountOf(_owner).call());
    return [err, data];
  });
};

export const ownerOf = async (tokenId) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.ownerOf(tokenId).call());
    return [err, data];
  });
};

export const ownerToPay = async (_owner, _mintAmount) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.ownerToPay(_owner, _mintAmount).call());
    return [err, data];
  });
};

export const royaltyInfo = async (_tokenId, _salePrice) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.royaltyInfo(_tokenId, _salePrice).call());
    return [err, data];
  });
};

export const supportsInterface = async (interfaceId) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.supportsInterface(interfaceId).call());
    return [err, data];
  });
};

export const tokenURI = async (_tokenId) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.tokenURI(_tokenId).call());
    return [err, data];
  });
};

export const tokensOfOwner = async (owner) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.tokensOfOwner(owner).call());
    return [err, data];
  });
};

export const tokensOfOwnerIn = async (owner, start, stop) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.tokensOfOwnerIn(owner, start, stop).call());
    return [err, data];
  });
};

/************************** nonpayable ***********************************/

export const airdrop = async (_recipients, _amount) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.airdrop(_recipients, _amount).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const initialize = async (
  _name,
  _symbol,
  _metaImage,
  _metaContent,
  _description,
  _maxPerTx,
  _maxPerWallet,
  _freeMintAmount,
  _maxSupply,
  _startIdx,
  _cost,
  _startTime,
  _endTime,
) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods
        .initialize(
          _name,
          _symbol,
          _metaImage,
          _metaContent,
          _description,
          _maxPerTx,
          _maxPerWallet,
          _freeMintAmount,
          _maxSupply,
          _startIdx,
          _cost,
          _startTime,
          _endTime,
        )
        .send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const renounceOwnership = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.renounceOwnership().send({ from: baseInfo.current_account }));
    return [err, data];
  });
};

export const setApprovalForAll = async (operator, approved) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setApprovalForAll(operator, approved).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setBaseTokenURI = async (_baseUrl) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setBaseTokenURI(_baseUrl).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setCost = async (_cost) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.setCost(_cost).send({ from: baseInfo.current_account }));
    return [err, data];
  });
};

export const setFreeMintAmount = async (_freeMintAmount) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setFreeMintAmount(_freeMintAmount).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setMaxPerTx = async (_maxPerTx) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.setMaxPerTx(_maxPerTx).send({ from: baseInfo.current_account }));
    return [err, data];
  });
};

export const setMaxPerWallet = async (_maxPerWallet) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setMaxPerWallet(_maxPerWallet).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setMetaAnimation = async (_animationUri) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setMetaAnimation(_animationUri).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setMetaContent = async (_content) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setMetaContent(_content).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setMetaInfo = async (_imageUri, _animationUri, _description, _content) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods
        .setMetaInfo(_imageUri, _animationUri, _description.replace(/["']/g, '\\$&'), _content.replace(/["']/g, '\\$&'))
        .send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setPublicDropState = async (_startTime, _endTime, _enable) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setPublicDropState(_startTime, _endTime, _enable).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setRoyalties = async (_royalties) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setRoyalties(_royalties).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setRoyaltyReceiver = async (_receiver) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setRoyaltyReceiver(_receiver).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const setUriSuffix = async (_uriSuffix) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.setUriSuffix(_uriSuffix).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const transferOwnership = async (newOwner) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.transferOwnership(newOwner).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const upgradeTo = async (newImplementation) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.upgradeTo(newImplementation).send({ from: baseInfo.current_account }),
    );
    return [err, data];
  });
};

export const withdraw = async () => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(baseInfo.theContractObj.methods.withdraw().send({ from: baseInfo.current_account }));
    return [err, data];
  });
};

/************************** payable ***********************************/

export const approve = async (operator, tokenId, etherValue) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.approve(operator, tokenId).send({ from: baseInfo.current_account, value: etherValue }),
    );
    return [err, data];
  });
};

export const mint = async (_mintAmount, etherValue) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.mint(_mintAmount).send({ from: baseInfo.current_account, value: etherValue }),
    );
    return [err, data];
  });
};

export const safeTransferFrom = async (from, to, tokenId, etherValue) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.safeTransferFrom(from, to, tokenId).send({ from: baseInfo.current_account, value: etherValue }),
    );
    return [err, data];
  });
};

export const safeTransferFromWithData = async (from, to, tokenId, _data, etherValue) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods
        .safeTransferFrom(from, to, tokenId, _data)
        .send({ from: baseInfo.current_account, value: etherValue }),
    );
    return [err, data];
  });
};

export const transferFrom = async (from, to, tokenId, etherValue) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods.transferFrom(from, to, tokenId).send({ from: baseInfo.current_account, value: etherValue }),
    );
    return [err, data];
  });
};

export const upgradeToAndCall = async (newImplementation, _data, etherValue) => {
  return await checkAndRun(async () => {
    const [err, data] = await awaitReuslt(
      baseInfo.theContractObj.methods
        .upgradeToAndCall(newImplementation, _data)
        .send({ from: baseInfo.current_account, value: etherValue }),
    );
    return [err, data];
  });
};
