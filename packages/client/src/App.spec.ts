import { mount } from '@vue/test-utils'
import App from './App.vue'
import { router } from './router'

test('app is working at /', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })

  expect(wrapper.html()).toContain('Little Tools')

  await router.push('/')

  expect(wrapper.html()).toContain('Image Convertion Tool (WIP)')
})

test('app is working at /number', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })

  expect(wrapper.html()).toContain('Little Tools')

  await router.push('/number')

  expect(wrapper.find('h1').text()).toBe('Number Convertion Tool')
})
