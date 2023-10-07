import CryptoJS from 'crypto-js';

export default {
  // 加密
  encrypt(word: string) {
    // encrypt(word: string,keyStr: string) {
    // keyStr = keyStr ? keyStr : 'hncdcenterdtclou';
    const key = CryptoJS.enc.Utf8.parse('hncdcenterdtclou');
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
  },

  // 解密
  decrypt(word: string) {
    // decrypt(word: string,keyStr: string) {
    // keyStr = keyStr ? keyStr : 'hncdcenterdtclou';
    const key = CryptoJS.enc.Utf8.parse('hncdcenterdtclou');
    const decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
};
