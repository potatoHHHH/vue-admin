import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/layout/Layout
import Layout from '../layout'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/page1',
          name: 'page1',
          meta: { title: '第一页' },
          component: () => import('../pages/Page1')
        },
        {
          path: '/test',
          name: 'test',
          meta: { title: 'test' },
          component: () => import('../pages/test/test')
        },
        {
          path: '/workbench',
          name: '工作台',
          meta: { title: '工作台' },
          component: () => import('../pages/WorkBench')
        },
        {
          path: '/page2',
          name: 'page2',
          meta: { title: '第二页' },
          component: () => import('../pages/Page2')
        }
      ]
    },
    {
      path: '/usermanage',
      name: 'usermanage',
      component: Layout,
      redirect: '/usermanage/student',
      meta: { title: '用户管理' },
      children: [
        {
          path: 'student',
          component: () => import('../pages/userManage/Student.vue'),
          name: '学生管理',
          meta: { title: '学生管理' }
        },
        {
          path: 'classroom',
          component: () => import('../pages/userManage/Classroom.vue'),
          name: '教室管理',
          meta: { title: '教室管理' }
        }]
    },
    {
      path: '/nested',
      redirect: '/nested/menu1',
      component: Layout,
      // component: ()=>import('../pages/nested/nested'),
      name: 'Nested',
      meta: {
        title: 'Nested Routes',
        icon: 'nested'
      },
      children: [
        {
          path: 'menu1',
          name: 'Menu1',
          component: () => import('../pages/nested/menu1'),
          meta: { title: 'Menu 1' },
          redirect: '/nested/menu1/menu1-1',
          children: [
            {
              path: 'menu1-1',
              name: 'Menu1-1',
              meta: { title: 'Menu 1-1' },
              component: () => import('../pages/nested/menu1-1')
            },
            {
              path: 'menu1-2',
              name: 'Menu1-2',
              component: () => import('../pages/nested/menu1-2'),
              meta: { title: 'Menu 1-2' }
            }
          ]
        },
        {
          path: 'menu2',
          name: 'Menu2',
          component: () => import('../pages/nested/menu2'),
          meta: { title: 'Menu 2' }
        }
      ]

    }
  ]
})
