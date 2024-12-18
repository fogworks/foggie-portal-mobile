const path = require('path');

const judgeComponent = (file) => {
  const ignore = ['vant', '@nutui', '@varlet'];
  return ignore.some((item) => path.join(file).includes(path.join('node_modules', item)));
};

module.exports = {
  plugins: {
    autoprefixer: { overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'] },
    'cnjm-postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'rem', //横屏时使用的单位
      landscapeWidth: 1134, //横屏时使用的视口宽度
      include: [],
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      selectorBlackList: [/^\.el-/],
      customFun: ({ file }) => {
        if (['vant', '@nutui', '@varlet'].some((item) => path.join(file).includes(path.join('node_modules', item)))) {
          return 375;
        } else if (['element-plus'].some((item) => path.join(file).includes(path.join('node_modules', item)))) {
          return 1640;
        } else {
          if (typeof window !== 'undefined') {
            const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
            // 此正则表达式涵盖了大多数使用的手机和平板设备
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

            return isMobileDevice ? 750 : 1640;
          } else {
            return 750;
          }
        }
      },
    },
  },
};
