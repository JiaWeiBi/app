import Dashboard from './views/Dashboard.vue'
import Story from './views/Story'

const routers = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      // },
      // {
      //   path: '/projects',
      //   name: 'projects',
      //   component: Projects
      },
      {
        path: '/story/:id',
        name: 'story',
        component: Story
      }
]

export default routers;