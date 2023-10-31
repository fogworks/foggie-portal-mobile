import { createVitePlugins } from './build/vite/plugins';
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { wrapperEnv } from './build/utils';
import requireTransform from 'vite-plugin-require-transform';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import commonjs from 'vite-plugin-commonjs';

const { FileSystemIconLoader } = require('unplugin-icons/loaders');

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default function ({ command, mode }: ConfigEnv): UserConfig {
  const isProduction = command === 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    root,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // @/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        // #/xxxx => types/xxxx
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true,
      hmr: true,
      proxy: {
        '^/assets': {
          target: 'https://devlop.fogworks.io',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/api': {
          target: 'https://devlop.fogworks.io',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/api/v1/minerConsumer': {
          target: 'http://154.31.3.222',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/api_accounts': {
          target: 'https://devlop.fogworks.io',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/order/buy': {
          target: 'http://45.207.245.24:28080',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/order/search': {
          target: 'http://45.207.245.24:28080',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/order/get_average_price': {
          target: 'http://45.207.245.24:28080',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/ambmgr': {
          target: 'https://devlop.fogworks.io',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/v1': {
          target: env.VITE_USE_HTTPENDPOINT,
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/1.1': {
          target: 'https://explorer.dmctech.io',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/dmcscan': {
          target: 'https://www.dmcscan.xyz',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/dmcscan/, ''),
        },
        '^/fog': {
          target: 'http://218.2.96.99:6008',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/bcmgr/bill/search_bill': {
          target: 'http://154.31.34.194:9098',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        // '^/foggiebucket': {
        //   target: 'http://218.2.96.99:6008',
        //   // target: 'http://192.168.1.119:6008',
        //   changeOrigin: true,
        //   secure: false,
        //   // rewrite: (path) => path.replace(/^\/api/, ""),
        // },
        // '^/o': {
        //   target: 'http://218.2.96.99:6008',
        //   // target: 'http://192.168.1.119:6008',
        //   changeOrigin: true,
        //   secure: false,
        //   // rewrite: (path) => path.replace(/^\/api/, ""),
        // },
        '^/order/calc_merkle': {
          target: 'http://45.207.245.24:28080',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/order/get_merkle': {
          target: 'http://45.207.245.24:28080',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/file/valid_upload': {
          target: 'http://45.207.245.24:28080',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/order/get_merkle_record': {
          target: 'http://45.207.245.24:28080',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/order/get_challenge': {
          target: 'http://45.207.245.24:28080',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '^/o': {
          target: 'https://h5chen-397.devus.u2i.net:6008',
          // target: 'http://192.168.1.119:6008',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [
      commonjs(),
      createVitePlugins(viteEnv, isProduction),
      requireTransform({
        fileRegex: /.ts$|.tsx$|.vue$/,
        //   fileRegex:/.js$|.jsx$|.vue$/
      }),
      AutoImport({
        resolvers: [
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        // 配置解析器
        resolvers: [
          // Icon自动引入解析器
          IconsResolver({
            // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            prefix: 'icon',
            // 当图标集名字过长时，可使用集合别名
            alias: {
              system: 'system-uicons',
            },
            customCollections: ['home'],
            enabledCollections: ['ep', 'home'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          // home图标集
          // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
          home: FileSystemIconLoader('src/assets/svg/home', (svg: string) => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
        },
      }),
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 配置 nutui 全局 scss 变量
          additionalData: `@import "@/styles/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";@import '@/styles/mixin.scss'; @import '@/styles/vant.scss';`,
        },
      },
    },
  };
}
