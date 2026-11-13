<script setup lang="ts">
defineSlots<{ default?: () => unknown }>()
</script>

<template>
  <article class="cv-document">
    <slot />
  </article>
</template>

<style>
.cv-document {
  --cv-accent: #1f4e79;
  --cv-text: #111;
  --cv-muted: #444;
  --cv-rule: #9a9a9a;
  --cv-font: 'Latin Modern Roman', 'CMU Serif', 'Times New Roman', serif;

  box-sizing: border-box;
  max-width: 210mm;
  margin: 0 auto;
  padding: 12mm 14mm;
  background: #fff;
  color: var(--cv-text);
  font-family: var(--cv-font);
  font-size: 10.5pt;
  line-height: 1.35;
  /* ATS: ligatures like "fi" can extract as a single unknown glyph. */
  font-variant-ligatures: none;
}
.cv-document a {
  color: var(--cv-accent);
}
@media print {
  @page {
    size: A4;
    margin: 0;
  }
  .cv-document {
    max-width: none;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
  .cv-no-print {
    display: none !important;
  }
}
</style>
