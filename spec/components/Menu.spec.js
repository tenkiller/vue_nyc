import { createLocalVue, mount } from 'vue-test-utils'
import { expect } from 'chai'
import Menu from '@/components/Menu'

describe('Menu', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
  })

  it('should be a component', () => {
    const wrapper = mount(Menu, { localVue })
    expect(wrapper.isVueInstance()).to.be.true
    expect(wrapper.is('.menu')).to.be.true
  })

  it('should render text when specified', () => {
    const wrapper = mount(Menu, { localVue, propsData: { text: 'Test' }})
    expect(wrapper.text().includes('Test')).to.be.true
  })
})
