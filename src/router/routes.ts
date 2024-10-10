export const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/layout/basic/index.vue'),
        children: [
            // {
            //     path: 'home',
            //     name: 'Home',
            //     component: () => import('@/views/home/index.vue'),
            // },
            {
                path: 'home',
                name: 'Home',
                // component: () => import('@/views/home/index_copy.vue'),
                component: () => import('@/views/tg/home/index.vue'),
            },
            {
                path: 'space',
                name: 'Space',
                component: () => import('@/views/tg/space/index.vue'),
            },
            {
                path: 'drive',
                name: 'Drive',
                component: () => import('@/views/tg/drive/index.vue'),
            },
            {
                path: 'assetsInfo',
                name: 'AssetsInfo',
                component: () => import('@/views/home/assetsInfo.vue'),
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
                path: 'list',
                component: () => import('@/views/list/index.vue'),
                meta: {
                    title: 'tabbar.list',
                    // keepAlive: true,
                },
            },

            {
                path: 'filePreview',
                name: 'filePreview',
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
                path: 'photography',
                component: () => import('@/views/photo/index.vue'),
                meta: {
                    title: 'tabbar.photography',
                    keepAlive: false,
                },
            },
            {
                name: 'photoList',
                path: 'photoList',
                component: () => import('@/views/photo/photoList.vue'),
                meta: {
                    title: 'tabbar.photoList',
                    keepAlive: false,
                },
            },

            // {
            //   path: 'demo',
            //   component: () => import('@/views/demo/index.vue'),
            //   meta: {
            //     title: 'tabbar.demo',
            //     notKeepAlive: true,
            //   },
            // },
            {
                name: 'listDetails',
                path: 'details',
                component: () => import('@/views/list/details/index.vue'),
                meta: {
                    title: 'list.details',
                    border: false,
                    notKeepAlive: true,
                },
            },
            {
                name: 'filePreview',
                path: 'filePreview',
                component: () => import('@/views/list/details/filePreview.vue'),
                meta: {
                    title: 'list.filePreview',
                    // keepAlive: true,
                },
            },
            {
                name: 'getKey',
                path: 'getKey',
                component: () => import('@/views/list/details/getKey.vue'),
                meta: {
                    title: 'list.getKey',
                    border: false,
                    notKeepAlive: true,
                },
            },
            {
                name: 'IPFSService',
                path: 'ipfsService',
                component: () => import('@/views/list/details/ipfsService.vue'),
                meta: {
                    title: 'list.getKey',
                    border: false,
                    notKeepAlive: true,
                },
            },
            {
                path: 'fileList',
                name: 'FileList',
                component: () => import('@/views/list/details/fileList.vue'),
                meta: {
                    notKeepAlive: true,
                    notBar: true,
                },
            },
            {
                path: 'maxFileList',
                name: 'maxFileList',
                component: () => import('@/views/maxio/maxFileOpt/maxAllFileList.vue'),
                meta: {
                    notKeepAlive: true,
                    notBar: true,
                },
            },
            {
                path: 'recordsList',
                name: 'RecordsList',
                component: () => import('@/views/list/details/recordsList.vue'),
                meta: {
                    notBar: true,
                    notKeepAlive: true,
                },
            },
            {
                path: 'recordsListGuid',
                name: 'RecordsListGuid',
                component: () => import('@/views/list/details/recordListGuid.vue'),
                meta: {
                    notBar: true,
                    notKeepAlive: true,
                },
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
                path: 'analysisChart',
                component: () => import('@/views/analysisChart/index.vue'),
                meta: {},
            },
            {
                path: 'analysisCate',
                component: () => import('@/views/analysisCate/index.vue'),
                meta: {},
            },
            {
                path: 'personalInfo',
                name: 'PersonalInfo',
                component: () => import('@/views/personalInfo/index.vue'),
                meta: {},
            },
            {
                name: 'orderSummary',
                path: 'orderSummary',
                component: () => import('@/views/orderSummary/index.vue'),
                meta: {
                    title: 'orderSummary',
                    border: false,
                    notKeepAlive: true,
                },
            },
            {
                name: 'orderSumDetail',
                path: 'orderSumDetail',
                component: () => import('@/views/orderSummary/orderSumDetail.vue'),
                meta: {
                    title: 'orderSumDetail',
                    border: false,
                    notKeepAlive: true,
                },
            },
            {
                path: 'rechargeInfo',
                name: 'rechargeInfo',
                component: () => import('@/views/home/rechargeInfo.vue'),
                meta: {},
            },
            {
                path: 's3Info',
                name: 's3Info',
                component: () => import('@/views/list/details/s3Info.vue'),
                meta: {},
            },
            {
                path: 'bucketList',
                name: 'BucketList',
                component: () => import('@/views/nft/bucketList.vue'),
                meta: {
                    title: 'tabbar.list',
                    // keepAlive: true,
                },
            },
            {
                path: 'nft',
                component: () => import('@/views/nft/index.vue'),
                meta: {
                    title: 'tabbar.list',
                    // keepAlive: true,
                },
                redirect: 'AllNFTList',
                children: [
                    {
                        path: '/allNFTList',
                        name: 'AllNFTList',
                        component: () => import('@/views/nft/allNFTList.vue'),
                        meta: {
                            notBar: true,
                        },
                    },
                    {
                        path: '/nftList',
                        name: 'NFTList',
                        component: () => import('@/views/nft/nftList.vue'),
                        meta: {
                            notBar: true,
                        },
                    },
                    {
                        path: '/welcome',
                        name: 'Welcome',
                        component: () => import('@/views/nft/welcome.vue'),
                        meta: {
                            notBar: true,
                        },
                    },
                    {
                        path: '/walletConnect',
                        name: 'WalletConnect',
                        component: () => import('@/views/nft/walletConnect.vue'),
                        meta: {
                            notBar: true,
                        },
                    },
                    {
                        path: '/scanQRCodes',
                        name: 'scanQRCodes',
                        component: () => import('@/components/scanQRCodes.vue'),
                        meta: {
                            notBar: true,
                        },
                    },
                    {
                        path: '/deploy',
                        name: 'Deploy',
                        component: () => import('@/views/deploy/index.vue'),
                        meta: {
                          title: 'tabbar.deploy',
                          keepAlive: true,
                        },
                      },
                      {
                        path: '/mint',
                        name: 'Mint',
                        component: () => import('@/views/mint/index.vue'),
                        meta: {
                          title: 'tabbar.mint',
                          keepAlive: true,
                        },
                      },
                ],
            },
            {
                path: 'maxio',
                name: 'Maxio',
                component: () => import('@/views/maxio/home.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            },
            {
                path: 'cloud',
                name: 'cloud',
                component: () => import('@/views/maxio/cloud.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            },
            {
                path: 'maxPool',
                name: 'maxPool',
                component: () => import('@/views/maxio/maxPool.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            },
            {
                path: 'maxIOT',
                name: 'maxIOT',
                component: () => import('@/views/maxio/maxIOT.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            },
            {
                path: 'maxFile',
                name: 'maxFile',
                component: () => import('@/views/maxio/maxFileManage.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            },
            {
                path: 'maxReward',
                name: 'maxReward',
                component: () => import('@/views/maxio/maxReward.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            },
            {
                path: 'airDropList',
                name: 'AirDropList',
                component: () => import('@/views/maxio/airDropList.vue'),
                meta: {
                    notBar: true,
                    notKeepAlive: true,
                },
            },
            {
                path: 'airDropDetail',
                name: 'AirDropDetail',
                component: () => import('@/views/maxio/airDropDetail.vue'),
                meta: {
                    notBar: true,
                    notKeepAlive: true,
                },
            },
            {
                path: 'walletList',
                name: 'WalletList',
                component: () => import('@/views/maxio/walletList.vue'),
                meta: {
                    notBar: true,
                    notKeepAlive: true,
                },
            },
            {
                path: 'maxSet',
                name: 'maxSet',
                component: () => import('@/views/maxio/maxSet.vue'),
                meta: {
                    title: 'tabbar.list',
                },
            }
        ],
    },
    {
        name: 'Guide',
        path: '/guide',
        component: () => import('@/views/login/first.vue'),
        meta: {
            notKeepAlive: true,
        },
    },
    {
        name: 'Middleware',
        path: '/middleware',
        component: () => import('@/views/login/middleware.vue'),
        meta: {
            notKeepAlive: true,
        },
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            notKeepAlive: true,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/login/register.vue'),
        meta: {
            notKeepAlive: true,
        },
    },
    {
        path: '/linkAccount',
        name: 'LinkAccount',
        component: () => import('@/views/login/linkAccount.vue'),
        meta: {
            notKeepAlive: true,
        },
    },
    {
        path: '/forget',
        name: 'Forget',
        component: () => import('@/views/login/forget.vue'),
        meta: {
            notKeepAlive: true,
        },
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/Home',
    },
];

export default routes;
