export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true,
        },
      },
      {
        path: 'withdraw',
        name: 'Withdraw',
        component: () => import('@/views/home/withdraw.vue'),
        meta: {
          title: 'tabbar.withdraw',
        },
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('@/views/shop/index.vue'),
        meta: {
          title: 'tabbar.shop',
        },
      },
      {
        path: 'bindDmc',
        name: 'BindDmc',
        component: () => import('@/views/bindDmc/index.vue'),
        meta: {
          title: 'tabbar.bind',
        },
      },
      {
        path: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: {
          title: 'tabbar.list',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true,
        },
      },
      {
        path: 'analysis',
        component: () => import('@/views/analysis/index.vue'),
        meta: {
          title: 'tabbar.analysis',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: 'tabbar.demo',
          keepAlive: true,
        },
      },
      {
        name: 'listDetails',
        path: '/details',
        component: () => import('@/views/list/details/index.vue'),
        meta: {
          title: 'list.details',
          border: false,
        },
      },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/register.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/login/forget.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/Home',
  },
];

export default routes;
