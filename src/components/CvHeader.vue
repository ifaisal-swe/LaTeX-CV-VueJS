<script setup lang="ts">
export interface CvContact {
  /** Text shown, e.g. "linkedin.com/in/me" */
  label: string
  /** Optional link, e.g. "https://linkedin.com/in/me" or "mailto:me@example.com" */
  href?: string
}

defineProps<{
  name: string
  headline?: string
  contacts?: CvContact[]
}>()
</script>

<template>
  <header class="cv-header">
    <h1 class="cv-header__name">{{ name }}</h1>
    <p v-if="headline" class="cv-header__headline">{{ headline }}</p>
    <p v-if="contacts?.length" class="cv-header__contacts">
      <template v-for="(contact, i) in contacts" :key="contact.label">
        <span v-if="i > 0" class="cv-header__sep" aria-hidden="true"> | </span>
        <a v-if="contact.href" :href="contact.href">{{ contact.label }}</a>
        <span v-else>{{ contact.label }}</span>
      </template>
    </p>
  </header>
</template>

<style>
.cv-header {
  text-align: center;
  margin-bottom: 0.6rem;
}
.cv-header__name {
  margin: 0;
  font-size: 1.9em;
  font-weight: bold;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.cv-header__headline {
  margin: 0.1rem 0 0;
  color: var(--cv-accent, currentColor);
  font-size: 1.15em;
  font-weight: bold;
}
.cv-header__contacts {
  margin: 0.15rem 0 0;
}
</style>
