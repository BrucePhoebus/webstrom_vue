
import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components//test/test.vue';
import netBasic from '@/components/netBasic/netBasic.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    /*
    * Vue基础案例
    * 1、即时搜索
    * */
    {
      path: '/netBasic',
      name: 'netBasic',
      component: resolve => require(['@/components/netBasic/netBasic'], resolve),
      children: [
        {
          path: '/',
          name: 'navigation',
          component: resolve => require(['@/components/netBasic/navigation'], resolve)
        },
        {
          path: '/netVueBasic',
          name: 'netVueBasic',
          component: resolve => require(['@/components/netBasic/netVueBasic'], resolve)
        },
      ]
    },
    /*
    * others
    * */
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/components/test/test'], resolve),
      children: [
        {
          path: '/demo',
          name: 'demo',
          component: resolve => require(['@/components/test/demo'], resolve)
        }
      ]
    },
  ]
})

// 增加路由导航
router.afterEach(route => {
  Vue.nextTick(() => {
    if (typeof document === 'object') {
      document.documentElement.scrollTop = 10;
      document.body.scrollTop = 10;
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 10);
    }
  });
});

export default router
