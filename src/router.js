import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
      children: [
        // {
        //   path: '/',
        //   name: 'QuanLyTinTuc',
        //   component: () => import('@/views/QuanLyTinTuc'),
        //   props: true
        // },
        {
          path: '/quan-ly-tin-tuc',
          name: 'QuanLyTinTuc',
          component: () => import('@/views/QuanLyTinTuc'),
          props: true
        },
        {
          path: '/quan-ly-loai-ban-do',
          name: 'QuanLyLoaiBanDo',
          component: () => import('@/views/QuanLyLoaiBanDo'),
          props: true
        },
        {
          path: '/quan-ly-dia-diem-ban-do-so',
          name: 'QuanLyDiaDiemBDS',
          component: () => import('@/views/QuanLyDiaDiemBDS'),
          props: true
        },
        {
          path: '/quan-ly-chuyen-muc',
          name: 'QuanLyChuyenMuc',
          component: () => import('@/views/QuanLyChuyenMuc'),
          props: true
        },
        {
          path: '/quan-li-can-bo',
          name: 'ManageCadres',
          component: () => import('@/views/ManageCadres'),
          props: true
        },
        {
          path: '/quan-li-nhom-quyen',
          name: 'MangeRightsGroup',
          component: () => import('@/views/MangeRightsGroup'),
          props: true
        },
        {
          path: '/quan-li-hoc-sinh',
          name: 'ManageStudents',
          component: () => import('@/views/ManageStudents'),
          props: true
        },
        {
          path: '/quan-li-menu',
          name: 'ManageMenu',
          component: () => import('@/views/ManageMenu'),
          props: true
        },
        {
          path: '/quan-li-chuyen-muc-tin-tuc',
          name: 'ManageCategoryNews',
          component: () => import('@/views/ManageCategoryNews'),
          props: true
        },
        {
          path: '/quan-li-bai-viet-tin-tuc',
          name: 'ManageNews',
          component: () => import('@/views/ManageNews'),
          props: true
        },
        {
          path: '/quan-li-gop-y',
          name: 'ManageFeedback',
          component: () => import('@/views/ManageFeedback'),
          props: true
        },
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/Login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomePage'),
      props: true
    },
    {
      name: 'ShowNews',
      path: '/tin-tuc/:id',
      component: () => import('@/views/ShowNews')
    },
  ]
})
