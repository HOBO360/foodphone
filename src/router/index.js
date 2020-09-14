/***
 * @creater:wjiban
 * @create_time:20-9-2 9:39:2
 * @last_modify:wjiban
 * @modify_time:20-9-8 22:26:59
 * @line_count:99
 **/

import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue';
import about from '../views/about.vue';
import login from '../views/assets/login.vue';

import cart from '../views/cart.vue';
import shopping from '../views/shopping.vue';
import select100 from '../views/assets/select100.vue';
import foretaste from '../views/assets/foretaste.vue';
import my from '../views/assets/my.vue';
import orderdetails from '@/views/assets/orderdetails.vue'
import myfoot from '@/views/assets/myfoot.vue'
import information from '@/views/assets/information.vue'
import recipes from '@/views/assets/recipes.vue'
import shop_details from '@/views/assets/shop_details.vue'
import order from '@/views/assets/order.vue'
import payment from '@/views/assets/payment.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/cart',
    component: cart,
	meta: {
		requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
	}
  },
  {
    path: '/shopping',
    component: shopping,
  },
  {
    path: '/select100',
    component: select100,
  },
  {
    path: '/foretaste',
    component: foretaste,
  },
  {
    path: '/my',
    component: my,
    meta:{
      requireAuth:true   //页面授权登录
    }
  },
  {
    path: '/orderdetails',
    component: orderdetails,
  },
  {
    path: '/myfoot',
    component: myfoot,
  },
  {
    path: '/information',
    component: information,
  },
  {
    path: '/recipes',
    component: recipes,
  },{
    path: '/shop_details',
    component: shop_details,
  },
  {
    path: '/order',
    component: order,
  },
  {
    path: '/payment',
    component: payment,
  }
  
  
]


const router = new VueRouter({
  // mode: 'history',//# 。项目打包注释掉
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth) && !localStorage.getItem("username")) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem("username")) {  // 判断当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

export default router
