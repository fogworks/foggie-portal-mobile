import Web3 from "web3";

const getWeb3 = () => {
  return Window.web3 ? Window.web3 : new Web3();
}
export const toWei = (v) => {
  return getWeb3().utils.toWei(v, "ether");
};

export const fromWei = (v) => {
  // console.log(v,'fromWei----------d')
  return getWeb3().utils.fromWei(v, "ether");
};

export const isAddress = (v) => {
  return getWeb3().utils.isAddress(v);
};

export const toBoolean = (v) => {
  return String(v).toLowerCase() === "true";
};

export const BNObject = () => {
  return getWeb3().utils.BN;
}

export const loginMessage = (url, account, nonce, time_stamp, plainMsg) => {
  const uri = new URL(url);
  const _msg = `${
    uri.host
  } wants you to sign in with your Ethereum account:\n${account.toLowerCase()}\n\n${plainMsg}\n\nURI: ${
    uri.origin
  }\nVersion: 1\nChain ID: 1\nNonce: ${nonce}\nIssued At: ${new Date(
    time_stamp
  ).toISOString()}`;
  return _msg;
};

const messageHashFull = (recipient, amount, newNonce, price, contract) => {
  return (
    getWeb3().utils.soliditySha3(
      { t: "address", v: recipient },
      { t: "uint256", v: amount },
      { t: "string", v: newNonce },
      { t: "uint256", v: price },
      { t: "address", v: contract }
    ) || ""
  );
};

const messageHashSimple1 = (recipient, amount, newNonce) => {
  return (
    getWeb3().utils.soliditySha3(
      { t: "address", v: recipient },
      { t: "uint256", v: amount },
      { t: "string", v: newNonce }
    ) || ""
  );
};

const messageHashSimple2 = (amount, newNonce, contract) => {
  return (
    getWeb3().utils.soliditySha3(
      { t: "uint256", v: amount },
      { t: "string", v: newNonce },
      { t: "address", v: contract }
    ) || ""
  );
};

const messageHashWeak = (amount, newNonce) => {
  return (
    getWeb3().utils.soliditySha3(
      { t: "uint256", v: amount },
      { t: "string", v: newNonce }
    ) || ""
  );
};

export const messageHashLogin = (recipient, newNonce) => {
  return (
    getWeb3().utils.soliditySha3(
      { t: "address", v: recipient },
      { t: "string", v: newNonce }
    ) || ""
  );
};

export const verifySign = (msg, signature, prefixed) => {
  return getWeb3().eth.accounts.recover(msg, signature, prefixed);
};

const makeSignMessage = async (msg, account) => {
  const r = await getWeb3().eth.personal
    .sign(msg, account) //web3.eth.accounts.hashMessage(msgHash)
    .catch((error) => {
      // console.log(error);
      return error;
    });
  return r;
};

export const makeEthereumLogin = async (url, account, nonce, plainMsg) => {
  const time_stamp = new Date().getTime();
  const msghash = messageHashLogin(account, nonce);
  const msg = loginMessage(url, account, msghash, time_stamp, plainMsg);
  const signature = await makeSignMessage(msg, account);
  return signature && !signature.code
    ? {
        error: signature ? 0 : -1,
        address: account,
        nonce: nonce,
        hash: msghash,
        sign_message: msg,
        signature: signature,
        time: time_stamp,
      }
    : signature;
};
