<script setup lang="ts">
export interface CvSkillGroup {
  label: string
  value: string
}

defineProps<{
  items: CvSkillGroup[]
}>()
</script>

<template>
  <dl class="cv-skills">
    <div v-for="item in items" :key="item.label" class="cv-skills__row">
      <dt>{{ item.label }}:</dt>
      <dd>{{ item.value }}</dd>
    </div>
  </dl>
</template>

<style>
.cv-skills {
  margin: 0;
}
.cv-skills__row dt {
  display: inline;
  font-weight: bold;
}
.cv-skills__row dd {
  display: inline;
  margin: 0 0 0 0.25em;
}
</style>
