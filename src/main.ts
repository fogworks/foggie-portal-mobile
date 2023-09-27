import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from '@/i18n';
import store from '@/store';
import router from '@/router';
import * as echarts from 'echarts';
import './assets/font/iconfont.css';
import './assets/app.css';

const app = createApp(App);
app.provide('$echarts', echarts);
// 状态管理
app.use(store);
// 路由
app.use(router);

// 国际化
app.use(i18n);

app.mount('#app');
