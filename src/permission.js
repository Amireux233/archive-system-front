import { Message } from 'element-ui';
import { getToken } from './utils/auth'; // getToken from cookie
import router from './router';
import store from './store';

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.includes(role));
}

const whiteList = ['/login'];// no redirect whitelist

async function addRoutes() {
  try {
    const response = await store.dispatch('GetUserInfo');
    const { roles } = response.data;
    await store.dispatch('GenerateRoutes', { roles });
    router.addRoutes(store.getters.addRouters);
  } catch (error) {
    Message.error('登录失败');
  }
}

function deal(to, next) {
  if (to.path === '/login') {
    next('/');
  } else if (hasPermission(store.getters.roles, to.meta.roles)) {
    next();
  } else {
    next('/');
  }
}

async function addRoutesAndDeal(to, next) {
  await addRoutes();
  next({ ...to, replace: true });
}

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (store.getters.roles.length === 0) {
      addRoutesAndDeal(to, next);
    } else {
      deal(to, next);
    }
  } else if (whiteList.includes(to.path)) {
    next();
  } else {
    next('/login');
  }
});
