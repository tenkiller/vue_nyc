import { createLocalVue, mount } from 'vue-test-utils'
import { expect } from 'chai'
import Menu from '@/components/Menu.vue'

describe('Menu', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
  })

  it('should be a component', () => {
    const wrapper = mount(Menu, { localVue })
    expect(wrapper.isVueInstance()).to.be.true
  })

  it('should contain default content', () => {
    const wrapper = mount(Menu, { localVue })
    expect(wrapper.is('.menu')).to.be.true
    expect(wrapper.contains('.menu-opposite')).to.be.false
    expect(wrapper.contains('.menu--icon')).to.be.false
    expect(wrapper.contains('.mnu-box')).to.be.true
    expect(wrapper.contains('.mnu-list')).to.be.true
  })

  it('should become disabled when specified', () => {
    const wrapper = mount(Menu, { localVue, propsData: { disabled: true }})
    expect(wrapper.find('button').element.disabled).to.be.true
  })

  it('should render the dropdown on the opposite side when specified', () => {
    const wrapper = mount(Menu, { localVue, propsData: { opposite: true }})
    expect(wrapper.is('.menu-opposite')).to.be.true
  })

  it('should render an icon when specified', () => {
    const wrapper = mount(Menu, { localVue, propsData: { icon: 'icon-ellipsis-h' }})
    expect(wrapper.contains('.menu--icon')).to.be.true
    expect(wrapper.contains('.icon-ellipsis-h')).to.be.true
  })

  it('should render text when specified', () => {
    const wrapper = mount(Menu, { localVue, propsData: { text: 'Test' }})
    expect(wrapper.text().includes('Test')).to.be.true
  })
})
