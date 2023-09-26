import { createVitePlugins } from './build/vite/plugins';
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { wrapperEnv } from './build/utils';
import requireTransform from 'vite-plugin-require-transform';
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
        '^/api': {
          target: 'https://devlop.fogworks.io',
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
          target: 'http://154.31.41.124:18080',
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
      },
    },
    plugins: [
      createVitePlugins(viteEnv, isProduction),
      requireTransform({
        fileRegex: /.ts$|.tsx$|.vue$/,
        //   fileRegex:/.js$|.jsx$|.vue$/
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
