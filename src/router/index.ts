import { createRouter, createWebHistory, createWebHashHistory, Router } from 'vue-router';
import routes from './routes';
import { useUserStore } from '@/store/modules/user';
import { useOrderStore } from '@/store/modules/order';
import { showToast } from '@nutui/nutui';
const isAndroid = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? true : false;
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
router.afterEach(() => {
 if (!isAndroid) showToast.hide('router_loading');
});
router.beforeEach((to, from, next) => {
  if (!isAndroid) {
    showToast.loading('', {
      cover: true,
      id: 'router_loading',
      customClass: 'app_loading',
      icon: '',
    });
  }

  const userStore = useUserStore();
  const orderStore = useOrderStore();
  // orderStore.setOrderList([]);
  if (userStore.getToken) {
    if (to.name == 'Login' || to.name == 'Register' || to.name == 'Forget') {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
    userStore.setCloudCodeIsBind(false);
    if (to.name == 'Login' || to.name == 'Register' || to.name == 'Forget') {
      next();
    } else {
      next({
        name: 'Login',
      });
    }
  }
});

export default router;
