import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import * as echarts from 'echarts';
import './assets/font/iconfont.css';
import './assets/app.css';
import TopBack from '@/components/topBack/index.vue';
// import VueCordova from 'vue-cordova';
import * as buffer from 'buffer';
import cordovaPlugins from './cordovaPlugins.js';
import i18n from "@/i18n/index.ts";

if (typeof (window as any).global === 'undefined') {
    (window as any).global = window;
}
if (typeof (window as any).Buffer === 'undefined') {
    (window as any).Buffer = buffer.Buffer;
}
let lan = window.localStorage.getItem("language_key");
if (lan) {
    window.localStorage.setItem("language_key", lan);
    i18n.locale = lan;
} else {
    window.localStorage.setItem("language_key", "en");
    i18n.locale = "en";
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
