export default function typeApi() {
  const buildType = import.meta.env.VITE_BUILD_TYPE;
  if (buildType == 'ANDROID') {
    // return {
    //   apiUrl: 'https://devlop.fogworks.io',
    //   nodeUrl: 'https://45.207.245.24:28081',
    //   chainUrl: 'https://scontract.dmctech.io:8361',
    //   shareUrl: 'https://45.207.245.24:17071',
    //   webUrl: 'https://amb.dev.u2i.net',
    // };
    return {
      apiUrl: 'https://amb.dev.u2i.net',
      nodeUrl: 'https://amb.dev.u2i.net',
      chainUrl: 'https://amb.dev.u2i.net',
      shareUrl: 'https://amb.dev.u2i.net',
      webUrl: 'https://amb.dev.u2i.net',
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
