export default function typeApi() {
  const buildType = import.meta.env.VITE_BUILD_TYPE;
  if (buildType == 'ANDROID') {
    return {
      apiUrl: 'https://devlop.fogworks.io',
      nodeUrl: 'http://45.207.245.24:28080',
      chainUrl: 'https://scontract.dmctech.io:8361',
      shareUrl: 'https://45.207.245.24:17071',
      webUrl: 'https://m.fogworks.io',
    };
  } else {
    return {
      apiUrl: '',
      nodeUrl: '',
      chainUrl: '',
      shareUrl: '',
      webUrl: '',
    };
  }
}
