import { mount } from '@vue/test-utils'
import NumberConversionTool from './NumberConversionTool.vue'

test('number conversion tool have a title', async () => {
  const wrapper = mount(NumberConversionTool)

  expect(wrapper.html()).toContain('Number Conversion Tool')
})

test('number conversion tool have four input', async () => {
  const wrapper = mount(NumberConversionTool)

  expect(wrapper.findAll('input')).toHaveLength(4)
})

test('number conversion tool have an input and a label for decimal', async () => {
  const wrapper = mount(NumberConversionTool)

  expect(wrapper.find('input[id=decimal]').exists()).toBeTruthy()
  expect(wrapper.find('label[for=decimal]').exists()).toBeTruthy()
})

test('number conversion tool have an input and a label for binary', async () => {
  const wrapper = mount(NumberConversionTool)

  expect(wrapper.find('input[id=binary]').exists()).toBeTruthy()
  expect(wrapper.find('label[for=binary]').exists()).toBeTruthy()
})

test('number conversion tool have an input and a label for octal', async () => {
  const wrapper = mount(NumberConversionTool)

  expect(wrapper.find('input[id=octal]').exists()).toBeTruthy()
  expect(wrapper.find('label[for=octal]').exists()).toBeTruthy()
})

test('number conversion tool have an input and a label for hexadecimal', async () => {
  const wrapper = mount(NumberConversionTool)

  expect(wrapper.find('input[id=hexadecimal]').exists()).toBeTruthy()
  expect(wrapper.find('label[for=hexadecimal]').exists()).toBeTruthy()
})
