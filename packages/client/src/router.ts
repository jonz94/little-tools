import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

// 1. Define route components.
import ImageConversionTool from './components/ImageConversionTool.vue'
import NumberConversionTool from './components/NumberConversionTool.vue'

// 2. Define some routes
const routes = [
  { path: '/', component: ImageConversionTool },
  { path: '/number', component: NumberConversionTool },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach(() => {
  NProgress.start()
  return true
})

router.afterEach(() => {
  NProgress.done()
  return true
})

export { router }
