import type { CvBullet, CvContact, CvSkillGroup } from '@/index'

export interface CvEntryData {
  title: string
  date?: string
  subtitle?: string
  bullets: CvBullet[]
}

export interface CvData {
  name: string
  headline: string
  contacts: CvContact[]
  summary: string
  coreSkills: CvBullet[]
  technicalSkills: CvSkillGroup[]
  experience: CvEntryData[]
  projects: CvEntryData[]
  education: CvEntryData[]
  languages: string
}
