import Products from './products/Products.vue';
import Cart from './cart/Cart.vue';
import SignIn from './user/SignIn.vue';
import Register from './user/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Products,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/user/sign-in',
    name: 'Sign-in',
    component: SignIn,
  },
  {
    path: '/user/register',
    name: 'Register',
    component: Register,
  }];

export default routes;
