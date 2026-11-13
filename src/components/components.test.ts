import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CvHeader from './CvHeader.vue'
import CvEntry from './CvEntry.vue'
import CvBullets from './CvBullets.vue'
import CvSkills from './CvSkills.vue'

describe('CvHeader', () => {
  it('renders contacts, linking only those with href', () => {
    const w = mount(CvHeader, {
      props: {
        name: 'Ada Lovelace',
        headline: 'Engineer',
        contacts: [{ label: 'London' }, { label: 'ada.dev', href: 'https://ada.dev' }],
      },
    })
    expect(w.find('h1').text()).toBe('Ada Lovelace')
    expect(w.findAll('a')).toHaveLength(1)
    expect(w.find('a').attributes('href')).toBe('https://ada.dev')
    expect(w.text()).toContain('London | ada.dev')
  })
})

describe('CvEntry', () => {
  it('renders title, date and subtitle', () => {
    const w = mount(CvEntry, { props: { title: 'Acme', date: '2024', subtitle: 'Dev' } })
    expect(w.find('h3').text()).toBe('Acme')
    // Date stays in the text flow next to the subtitle so ATS parsers keep them together.
    expect(w.find('.cv-entry__meta').text()).toBe('Dev | 2024')
  })
})

describe('CvBullets', () => {
  it('renders plain and labelled items', () => {
    const w = mount(CvBullets, { props: { items: ['plain', { label: 'Key', text: 'value' }] } })
    const li = w.findAll('li')
    expect(li[0]!.text()).toBe('plain')
    expect(li[1]!.find('strong').text()).toBe('Key:')
    expect(li[1]!.text()).toBe('Key: value')
  })
})

describe('CvSkills', () => {
  it('renders label/value rows', () => {
    const w = mount(CvSkills, { props: { items: [{ label: 'Languages', value: 'TS, SQL' }] } })
    expect(w.find('dt').text()).toBe('Languages:')
    expect(w.find('dd').text()).toBe('TS, SQL')
  })
})

describe('CvPrintButton', () => {
  it('opens the print dialog with the file name as document title', async () => {
    const { vi } = await import('vitest')
    const { default: CvPrintButton } = await import('./CvPrintButton.vue')
    let titleAtPrint = ''
    const print = vi.spyOn(window, 'print').mockImplementation(() => {
      titleAtPrint = document.title
    })
    document.title = 'App'
    await mount(CvPrintButton, { props: { fileName: 'My_CV' } }).trigger('click')
    expect(print).toHaveBeenCalledOnce()
    expect(titleAtPrint).toBe('My_CV')
    window.dispatchEvent(new Event('afterprint'))
    expect(document.title).toBe('App')
  })
})
