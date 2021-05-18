import { mount } from '@vue/test-utils'
import { router } from '../router'
import SidebarMenu from './SidebarMenu.vue'

test('sidebar menu have a title', async () => {
  const wrapper = mount(SidebarMenu, {
    global: {
      plugins: [router],
    },
  })

  await router.push('/')

  expect(wrapper.html()).toContain('Little Tools')
})
