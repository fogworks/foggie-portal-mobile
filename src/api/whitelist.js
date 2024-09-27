import { Buffer } from "buffer/";
import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";
import { isAddress } from "./sign_utils.js";

window.Buffer = window.Buffer || Buffer;

let the_merkel_tree = null;

export const validAddressList = (strAddressList,seperator='\n') => {
    let ls = strAddressList.split(seperator);
    let rls = [];
    for(let addr of ls){
        let xaddr = addr.trim();
        if(isAddress(xaddr)){
            rls.push(xaddr);
        }
    }
    if(rls.length){
      let addr_set_list = new Set();
      for (let addr of rls) {
        addr_set_list.add(addr);
      }
      return Array.from(addr_set_list).sort();
    } else {
      return [];
    };
}

export const getMerkelTreeRoot = (addresslist) => {
  // let addr_set_list = new Set();
  // for (let addr of addresslist) {
  //   addr_set_list.add(addr);
  // }
  // if(addr_set_list.length <= 0){
  //   return null;
  // }
  // 
  // let sort_addr_list = Array.from(addr_set_list).sort();
  let merkel_tree_root = null;
  let sort_addr_list = addresslist;
  let leafNodes = [];
  for (let addr of sort_addr_list) {
    let leafNode = keccak256(addr);
    leafNodes.push(leafNode);
  }
  the_merkel_tree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true,
  });
  // 将地址与地址的proof 数据遍历并保存到一个对象中
  // 并保存到服务器，供服务器查询使用
  let addr_proofs = {};
  for (let addr of sort_addr_list) {
    const leaf = keccak256(addr);
    let hex_proof = the_merkel_tree.getHexProof(leaf);
    addr_proofs[addr.toLowerCase()] = hex_proof;
  }
  merkel_tree_root = the_merkel_tree.getHexRoot();
  return {
    merkelroot: merkel_tree_root,
    tables: addr_proofs,
  };
};

export const getAddressProof = (address) => {
  return the_merkel_tree
    ? the_merkel_tree.getHexProof(keccak256(address))
    : null;
};

export const WhitelistVerify = (address, merkel_tree_root, hex_proof) => {
  if (the_merkel_tree) {
    const leaf = window.keccak256(address);
    const br = the_merkel_tree.verify(hex_proof, leaf, merkel_tree_root);
    return { address,hex_proof, br }
  } else {
    return null;
  }
};

// function main(){
//     let list = ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
//     "0xc12ae5Ba30Da6eB11978939379D383beb5Df9b33",
//     "0x0a290c8cE7C35c40F4F94070a9Ed592fC85c62B9",
//     "0x43Be076d3Cd709a38D2f83Cd032297a194196517",
//     "0xC7FaB03eecA24CcaB940932559C5565a4cE9cFFb",
//     "0xE4336D25e9Ca0703b574a6fd1b342A4d0327bcfa",
//     "0xeDcB8a28161f966C5863b8291E80dDFD1eB78491",
//     "0x77cbd0fa30F83a249da282e9fE90A86d7936FdE7",
//     "0xc39F9406284CcAeB426D0039a3F6ADe14573BaFe",
//     "0x16Beb6b55F145E4269279B82c040B7435f1088Ee",
//     "0x900b2909127Dff529f8b4DB3d83b957E6aE964c2",
//     "0xeA2A799793cE3D2eC6BcD066563f385F25401e95",
//     "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
//     "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
//     "0xcd2d4cda01ca3e2aefabab4b6012b689bdcd1e5e",
//     "0x149109C1A5991E4ab3E1A056F47Cbb5D382cD597"];
    
//     console.log(getMerkelTreeRoot(validAddressList(list.toString(),',')));
// }

// main();