import { mount } from '@vue/test-utils'
import ImageConversionTool from './ImageConversionTool.vue'

test('image conversion tool have a title', async () => {
  const wrapper = mount(ImageConversionTool)

  expect(wrapper.html()).toContain('Image Conversion Tool')
})
