import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import OurLocationView from '@/views/OurLocationView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/menu', component: MenuView },
  { path: '/ourlocation', component: OurLocationView },
  { path: '/contact', component: ContactView },
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
router.beforeEach((to,from)=>{
	
})

export {router}
