import { mount } from '@vue/test-utils'
import SidebarMenu from './SidebarMenu.vue'
import { router } from '../router'

test('sidebar menu have a title', async () => {
  const wrapper = mount(SidebarMenu, {
    global: {
      plugins: [router],
    },
  })

  await router.push('/')

  expect(wrapper.html()).toContain('Little Tools')
})
