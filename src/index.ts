import type { App, Plugin } from 'vue'
import CvDocument from './components/CvDocument.vue'
import CvHeader from './components/CvHeader.vue'
import CvSection from './components/CvSection.vue'
import CvEntry from './components/CvEntry.vue'
import CvBullets from './components/CvBullets.vue'
import CvSkills from './components/CvSkills.vue'
import CvPrintButton from './components/CvPrintButton.vue'

export { CvDocument, CvHeader, CvSection, CvEntry, CvBullets, CvSkills, CvPrintButton }
export type { CvContact } from './components/CvHeader.vue'
export type { CvBullet } from './components/CvBullets.vue'
export type { CvSkillGroup } from './components/CvSkills.vue'

const components = { CvDocument, CvHeader, CvSection, CvEntry, CvBullets, CvSkills, CvPrintButton }

/** Optional global registration: `app.use(VueLatexCv)` */
const VueLatexCv: Plugin = {
  install(app: App) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}

export default VueLatexCv
