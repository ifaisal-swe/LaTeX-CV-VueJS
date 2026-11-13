<script setup lang="ts">
import {
  CvBullets,
  CvDocument,
  CvEntry,
  CvHeader,
  CvPrintButton,
  CvSection,
  CvSkills,
} from '@/index'
import { cv } from './cv'

// The page title becomes the PDF's metadata title, which some ATS read.
document.title = `${cv.name} CV`
</script>

<template>
  <div class="toolbar cv-no-print">
    <CvPrintButton :file-name="`${cv.name} CV`" />
  </div>

  <CvDocument>
    <CvHeader :name="cv.name" :headline="cv.headline" :contacts="cv.contacts" />

    <CvSection title="Professional Summary">
      <p class="summary">{{ cv.summary }}</p>
    </CvSection>

    <CvSection title="Software Engineering Skills">
      <CvBullets :items="cv.coreSkills" />
    </CvSection>

    <CvSection title="Technical Skills">
      <CvSkills :items="cv.technicalSkills" />
    </CvSection>

    <CvSection title="Professional Experience">
      <CvEntry v-for="e in cv.experience" :key="e.title" v-bind="e">
        <CvBullets :items="e.bullets" />
      </CvEntry>
    </CvSection>

    <CvSection v-if="cv.projects.length" title="Projects">
      <CvEntry v-for="e in cv.projects" :key="e.title" v-bind="e">
        <CvBullets :items="e.bullets" />
      </CvEntry>
    </CvSection>

    <CvSection title="Education">
      <CvEntry v-for="e in cv.education" :key="e.title" v-bind="e">
        <CvBullets :items="e.bullets" />
      </CvEntry>
      <CvSkills :items="[{ label: 'Languages', value: cv.languages }]" />
    </CvSection>
  </CvDocument>
</template>

<style>
html,
body {
  margin: 0;
  background: #e9e9e9;
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  max-width: 210mm;
  margin: 1rem auto 0.5rem;
}
.toolbar button {
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 6px;
  background: #1f4e79;
  color: #fff;
  font: inherit;
  cursor: pointer;
}
.summary {
  margin: 0;
}
@media print {
  html,
  body {
    background: #fff;
  }
}
</style>
