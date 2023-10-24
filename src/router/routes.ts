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
        },
      },
      {
        path: 'transactionRecords',
        name: 'TransactionRecords',
        component: () => import('@/views/home/transactionRecords.vue'),
        meta: {
          title: 'tabbar.transactionRecords',
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
          // keepAlive: true,
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
      {
        name: 'getKey',
        path: '/getKey',
        component: () => import('@/views/list/details/getKey.vue'),
        meta: {
          title: 'list.getKey',
          border: false,
        },
      },
      {
        path: 'fileList',
        name: 'FileList',
        component: () => import('@/views/list/details/fileList.vue'),
      },
      {
        path: 'recordsList',
        name: 'RecordsList',
        component: () => import('@/views/list/details/recordsList.vue'),
      },
      {
        path: 'withdraw',
        name: 'Withdraw',
        component: () => import('@/views/home/withdraw.vue'),
      },
      {
        path: 'recharge',
        name: 'Recharge',
        component: () => import('@/views/home/recharge.vue'),
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('@/views/shop/index.vue'),
        meta: {},
      },
      {
        path: 'analysis',
        component: () => import('@/views/analysis/index.vue'),
        meta: {},
      },
      {
        path: 'analysisCate',
        component: () => import('@/views/analysisCate/index.vue'),
        meta: {},
      },
      {
        path: 'personalInfo',
        component: () => import('@/views/personalInfo/index.vue'),
        meta: {},
      },
    ],
  },

  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/register.vue'),
    meta: {
      title: '',
    },
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/login/forget.vue'),
    meta: {
      title: '',
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/Home',
  },
];

export default routes;
