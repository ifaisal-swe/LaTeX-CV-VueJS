<script setup lang="ts">
defineProps<{
  /** Section heading, e.g. "Experience" */
  title: string
}>()

defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <section class="cv-section">
    <h2 class="cv-section__title">{{ title }}</h2>
    <div class="cv-section__body">
      <slot />
    </div>
  </section>
</template>

<style>
.cv-section {
  margin-block: 0.5rem;
}
.cv-section__title {
  margin: 0 0 0.3rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid var(--cv-rule, currentColor);
  color: var(--cv-accent, currentColor);
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
</style>
