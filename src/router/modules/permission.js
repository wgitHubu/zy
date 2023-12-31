import Layout from '@/layout'

export default {
  path: '/permission',
  meta: { id: 'permissions' },
  component: Layout,
  children: [
    {
      path: '',
      name: 'permission',
      component: () => import('@/views/permission'),
      meta: {
        title: '权限管理',
        icon: 'lock'
      }
    }
  ]
}
