# vue-latex-cv

Vue 3 components for building clean, LaTeX-style CVs and résumés that **ATS parsers can read**
and that export to PDF straight from the browser.

- 📄 One-page A4 layout with print styles built in
- 🤖 ATS-friendly: single column, real selectable text, standard headings, dates kept next to their entries
- 🖨️ In-page PDF export with `<CvPrintButton>`, no server and no extra dependencies
- 🎨 Themeable with CSS variables
- 🧩 Written in TypeScript with typed props

## Install

```sh
npm install vue-latex-cv
# or
pnpm add vue-latex-cv
```

Requires Vue `^3.5`.

## Quick start

```vue
<script setup lang="ts">
import {
  CvBullets,
  CvDocument,
  CvEntry,
  CvHeader,
  CvPrintButton,
  CvSection,
  CvSkills,
} from 'vue-latex-cv'
import 'vue-latex-cv/style.css'
</script>

<template>
  <CvPrintButton file-name="Jane Doe CV" />

  <CvDocument>
    <CvHeader
      name="Jane Doe"
      headline="Software Engineer"
      :contacts="[
        { label: 'City, Country' },
        { label: 'jane@example.com', href: 'mailto:jane@example.com' },
        { label: 'example.com', href: 'https://example.com' },
      ]"
    />

    <CvSection title="Professional Summary">
      <p>Engineer focused on reliable full-stack web applications.</p>
    </CvSection>

    <CvSection title="Technical Skills">
      <CvSkills :items="[{ label: 'Languages', value: 'TypeScript, SQL, HTML, CSS' }]" />
    </CvSection>

    <CvSection title="Professional Experience">
      <CvEntry
        title="Example Corp - Software Engineer"
        subtitle="City, Country"
        date="2024 – Present"
      >
        <CvBullets
          :items="[
            'Built and shipped customer-facing features.',
            { label: 'Technologies Used', text: 'Vue 3, TypeScript, PostgreSQL' },
          ]"
        />
      </CvEntry>
    </CvSection>
  </CvDocument>
</template>
```

Or register every component globally:

```ts
import { createApp } from 'vue'
import VueLatexCv from 'vue-latex-cv'
import 'vue-latex-cv/style.css'
import App from './App.vue'

createApp(App).use(VueLatexCv).mount('#app')
```

## Components

| Component       | Props                                                         | Slots     | Purpose                                                  |
| --------------- | ------------------------------------------------------------- | --------- | -------------------------------------------------------- |
| `CvDocument`    | none                                                          | `default` | A4 page wrapper with fonts, theme variables, print rules |
| `CvHeader`      | `name: string`, `headline?: string`, `contacts?: CvContact[]` | none      | Name, headline and a `\|`-separated contact line         |
| `CvSection`     | `title: string`                                               | `default` | Section with a ruled heading                             |
| `CvEntry`       | `title: string`, `subtitle?: string`, `date?: string`         | `default` | Job, project or degree; renders `subtitle \| date`       |
| `CvBullets`     | `items: CvBullet[]`                                           | none      | Bullet list; items can be labelled                       |
| `CvSkills`      | `items: CvSkillGroup[]`                                       | none      | `Label: value` rows                                      |
| `CvPrintButton` | `fileName?: string`                                           | `default` | Opens the print dialog to save the CV as a PDF           |

### Types

```ts
import type { CvBullet, CvContact, CvSkillGroup } from 'vue-latex-cv'

type CvContact = { label: string; href?: string }
type CvBullet = string | { label: string; text: string } // renders "**label:** text"
type CvSkillGroup = { label: string; value: string }
```

## Exporting to PDF

`<CvPrintButton>` opens the browser's print dialog. Choose **Save as PDF** as the destination.

- The page is A4 with no browser headers or footers, and colours are kept.
- `file-name` sets the suggested file name and the PDF's metadata title.
- Anything with the class `cv-no-print`, such as the button itself, is hidden in the PDF.
- The text stays real text, so it can be selected and searched. It is not a screenshot of the page.

## ATS (Applicant Tracking System) friendly

ATS software extracts the text from your PDF and parses it. These components are built so that
extraction comes out in a clean reading order:

- **Single column.** No sidebars, tables or multi-column layouts that parsers read in the wrong order.
- **Dates stay with their entries.** `CvEntry` puts the date in the text flow (`Role | Jan 2024 – Present`)
  rather than right-aligning it. Parsers treat far-right text as a separate column, which cuts dates off
  from the job they belong to.
- **Real headings.** Sections and entries use `h1`, `h2` and `h3`.
- **Ligatures off.** Pairs like "fi" and "fl" stay as separate characters, so words aren't misread.
- **Standard fonts.** The default stack falls back to Times New Roman.
- **No icons or images** carrying information.

To check your own CV, use standard section titles (Summary, Skills, Experience, Projects, Education),
then run the exported PDF through a text extractor (for example `pdftotext cv.pdf -`) and confirm it
reads top to bottom.

## Theming

Override the CSS variables on `.cv-document`:

```css
.cv-document {
  --cv-accent: #1f4e79; /* headings, headline, links */
  --cv-text: #111;
  --cv-muted: #444; /* subtitle and date line */
  --cv-rule: #9a9a9a; /* line under section headings */
  --cv-font: 'Latin Modern Roman', 'CMU Serif', 'Times New Roman', serif;
}
```

## Development

```sh
pnpm install
pnpm dev        # playground at http://localhost:5173
pnpm test       # Vitest in watch mode (pnpm test:run for a single run)
pnpm typecheck
pnpm lint
pnpm format
pnpm build      # dist/: ESM bundle, .d.ts files, CSS
```

### Using your own CV in the playground

The playground renders the mock CV in `playground/cv.example.ts`. To preview your real CV without
committing personal details, copy that file to `playground/cv.local.ts` and edit it. The playground
uses `cv.local.ts` when it exists, and the file is git-ignored. Exported `*.pdf` files are git-ignored too.

### Project structure

```
src/
  components/   # library components and their tests
  index.ts      # public exports and the Vue plugin
playground/     # dev app (pnpm dev)
```

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md).
