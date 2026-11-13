<script setup lang="ts">
defineProps<{
  /** Main line, e.g. "Acme Corp — Software Engineer" */
  title: string
  /** Date range, e.g. "Jan 2024 – Present" */
  date?: string
  /** Second line, e.g. a role or location */
  subtitle?: string
}>()

defineSlots<{ default?: () => unknown }>()
</script>

<!--
  ATS note: the date sits in the text flow right next to the subtitle instead of being
  right-aligned. PDF parsers read far-right text as a separate column, which detaches
  dates from their entries.
-->
<template>
  <div class="cv-entry">
    <h3 class="cv-entry__title">{{ title }}</h3>
    <p v-if="subtitle || date" class="cv-entry__meta">
      <span v-if="subtitle" class="cv-entry__subtitle">{{ subtitle }}</span>
      <span v-if="subtitle && date"> | </span>
      <span v-if="date" class="cv-entry__date">{{ date }}</span>
    </p>
    <slot />
  </div>
</template>

<style>
.cv-entry {
  margin-bottom: 0.45rem;
  break-inside: avoid;
}
.cv-entry__title {
  margin: 0;
  font-size: 1em;
  font-weight: bold;
}
.cv-entry__meta {
  margin: 0;
  font-style: italic;
  color: var(--cv-muted, inherit);
}
</style>
