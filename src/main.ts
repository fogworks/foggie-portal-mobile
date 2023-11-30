import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from '@/i18n';
import store from '@/store';
import router from '@/router';
import * as echarts from 'echarts';
import './assets/font/iconfont.css';
import './assets/app.css';
import TopBack from '@/components/topBack/index.vue';
// import VueCordova from 'vue-cordova';
import * as buffer from 'buffer';
import cordovaPlugins from './cordovaPlugins.js';

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}
if (typeof (window as any).Buffer === 'undefined') {
  (window as any).Buffer = buffer.Buffer;
}

const app = createApp(App);
app.component('TopBack', TopBack);
app.provide('$echarts', echarts);
// app.use(VueCordova);
app.provide('$cordovaPlugins', cordovaPlugins);

// 状态管理
app.use(store);
// 路由
app.use(router);

// 国际化
app.use(i18n);

app.mount('#app');
