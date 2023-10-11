import Layout from '@/layout'

export default {
  path: '/salarys',
  meta: { id: 'salarys' },
  component: Layout,
  children: [
    {
      path: '',
      name: 'salarys',
      component: () => import('@/views/salarys'),
      meta: {
        title: '工资',
        icon: 'money'
      }
    }
  ]
}
