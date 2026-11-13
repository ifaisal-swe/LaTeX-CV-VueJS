<script setup lang="ts">
const props = defineProps<{
  /** Suggested PDF file name (without extension). Browsers use the page title for it. */
  fileName?: string
}>()

defineSlots<{ default?: () => unknown }>()

function exportPdf() {
  const previousTitle = document.title
  if (props.fileName) document.title = props.fileName
  // Restore the title once the print dialog closes.
  window.addEventListener('afterprint', () => (document.title = previousTitle), { once: true })
  window.print()
}
</script>

<template>
  <button type="button" class="cv-print-button cv-no-print" @click="exportPdf">
    <slot>Download PDF</slot>
  </button>
</template>
