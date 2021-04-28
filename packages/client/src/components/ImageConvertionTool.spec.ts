import { mount } from '@vue/test-utils'
import ImageConvertionTool from './ImageConvertionTool.vue'

test('image conversion tool have a title', async () => {
  const wrapper = mount(ImageConvertionTool)

  expect(wrapper.html()).toContain('Image Convertion Tool')
})
