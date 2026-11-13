import type { CvData } from './cv.types'
import example from './cv.example'

// Use the git-ignored `cv.local.ts` when present, otherwise the sample data.
const local = import.meta.glob<{ default: CvData }>('./cv.local.ts', { eager: true })

export const cv: CvData = local['./cv.local.ts']?.default ?? example
