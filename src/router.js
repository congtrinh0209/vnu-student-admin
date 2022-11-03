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
        {
          path: '/',
          name: 'QuanLyTinTuc',
          component: () => import('@/views/QuanLyTinTuc'),
          props: true
        },
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
          path: '/test',
          name: 'FormTinymce',
          component: () => import('@/views/FormTinymce'),
          props: true
        },

      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/Login')
    }
  ]
})
