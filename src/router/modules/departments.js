import Layout from '@/layout'

export default {
  path: '/departments',
  meta: { id: 'departments' },
  component: Layout,
  children: [
    {
      path: '',
      name: 'departments',
      component: () => import('@/views/departments'),
      meta: {
        title: '组织架构',
        icon: 'tree'
      }
    }
  ]
}
