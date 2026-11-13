import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CvSection from './CvSection.vue'

describe('CvSection', () => {
  it('renders the title and slot content', () => {
    const wrapper = mount(CvSection, {
      props: { title: 'Experience' },
      slots: { default: '<p>Engineer</p>' },
    })
    expect(wrapper.find('h2').text()).toBe('Experience')
    expect(wrapper.find('p').text()).toBe('Engineer')
  })
})
