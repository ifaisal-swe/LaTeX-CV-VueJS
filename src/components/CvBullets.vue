<script setup lang="ts">
export type CvBullet = string | { label: string; text: string }

defineProps<{
  /** Plain strings, or `{ label, text }` to render "**label:** text" */
  items: CvBullet[]
}>()
</script>

<template>
  <ul class="cv-bullets">
    <li v-for="(item, i) in items" :key="i">
      <template v-if="typeof item === 'string'">{{ item }}</template>
      <template v-else>
        <strong>{{ item.label }}:</strong> {{ item.text }}
      </template>
    </li>
  </ul>
</template>

<style>
.cv-bullets {
  margin: 0.15rem 0 0;
  padding-left: 1.3rem;
  /* Set explicitly: CSS resets such as Tailwind's preflight remove list markers. */
  list-style: disc outside;
}
.cv-bullets li {
  margin-bottom: 0.1rem;
}
</style>
