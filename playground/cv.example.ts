import type { CvData } from './cv.types'

// Mock CV committed to the repo. Put your real CV in `cv.local.ts`
// (same shape, git-ignored) and the playground will use it instead.
export default {
  name: 'Faisal AlMutairi',
  headline: 'Software Engineering | Full-Stack Developer',
  contacts: [
    { label: 'City, Country' },
    { label: 'faisal@example.com', href: 'mailto:faisal@example.com' },
    { label: 'example.com', href: 'https://example.com' },
  ],
  summary:
    'Software engineer focused on reliable full-stack web applications, backend APIs, and AI-enabled product features.',
  coreSkills: [
    {
      label: 'Full-Stack Development',
      text: 'Build frontend interfaces, backend services, API integrations, and database-backed features.',
    },
  ],
  technicalSkills: [{ label: 'Languages', value: 'TypeScript, JavaScript, SQL, HTML, CSS' }],
  experience: [
    {
      title: 'Example Hospital - Software Engineering Trainee',
      date: 'Jun 2026 – Aug 2026',
      subtitle: 'City, Country',
      bullets: [
        'Contributed to an internal IT system that automates workstation setup and software installation.',
      ],
    },
  ],
  projects: [
    {
      title: 'Example.app — AI-Powered Study Platform',
      date: 'Apr 2026 – Present',
      subtitle: 'Founder & Full-Stack Developer',
      bullets: [
        {
          label: 'Technologies Used',
          text: 'TypeScript, Vue 3, Nuxt, Tailwind CSS, PostgreSQL, Docker.',
        },
      ],
    },
  ],
  education: [
    {
      title: 'Example University',
      date: '2022 – Present',
      bullets: ['Bachelor of Science in Software Engineering — Expected 2027'],
    },
  ],
  languages: 'English (Fluent)',
} satisfies CvData
