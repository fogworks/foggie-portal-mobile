import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';
import { useUserStore } from '@/store/modules/user';
import { useOrderStore } from '@/store/modules/order';

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const orderStore = useOrderStore();
  orderStore.setOrderList([]);
  if (userStore.getToken) {
    if (to.name == 'Login' || to.name == 'Register' || to.name == 'Forget') {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
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
