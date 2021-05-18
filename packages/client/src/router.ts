import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import ImageConversionTool from './components/ImageConversionTool.vue'
import NumberConversionTool from './components/NumberConversionTool.vue'

const routes = [
  { path: '/', component: ImageConversionTool },
  { path: '/number', component: NumberConversionTool },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
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
