<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { usePageTitle } from '../composables/usePageTitle.js'
import { projects } from '../data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))

usePageTitle(project.value?.title)
</script>

<template>
  <section class="px-8 pt-8 pb-16">
    <RouterLink
      to="/projects"
      class="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors mb-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Projects
    </RouterLink>

    <div v-if="project">
      <h2 class="text-sm tracking-widest uppercase text-gray-500 mb-10">{{ project.title }}</h2>
      <p class="max-w-2xl text-gray-700 leading-relaxed">{{ project.body }}</p>
    </div>

    <p v-else class="text-gray-500 text-sm">Project not found.</p>
  </section>
</template>
