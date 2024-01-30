export default function typeApi() {
  const buildType = import.meta.env.VITE_BUILD_TYPE;
  if (buildType == 'ANDROID') {
    // 测试
    // return {
    //   apiUrl: 'https://devlop.fogworks.io',
    //   nodeUrl: 'https://45.207.245.24:28081',
    //   chainUrl: 'https://scontract.dmctech.io:8361',
    //   shareUrl: 'https://45.207.245.24:17071',
    //   webUrl: 'https://amb.dev.u2i.net',
    // };
    // 线上
    // return {
    //   apiUrl: 'https://pool.fogworks.io',
    //   nodeUrl: 'http://45.201.245.229:28080',
    //   chainUrl: 'https://scontract.dmctech.io:8361',
    //   shareUrl: 'https://45.207.245.24:17071',
    //   webUrl: 'https://m.fogworks.io',
    // };
    return {
      apiUrl: 'https://amb.u2i.net',
      nodeUrl: 'https://amb.u2i.net',
      chainUrl: 'https://amb.u2i.net',
      shareUrl: 'https://amb.u2i.net',
      webUrl: 'https://amb.u2i.net',
    };
    // return {
    //   apiUrl: '/android_proxy',
    //   nodeUrl: '/android_proxy',
    //   chainUrl: '/android_proxy',
    //   shareUrl: '/android_proxy',
    //   webUrl: '/android_proxy',
    // };
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
