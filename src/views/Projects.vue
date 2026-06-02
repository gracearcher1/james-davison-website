<script setup>
import { RouterLink } from 'vue-router'
import { usePageTitle } from '../composables/usePageTitle.js'
import { projects } from '../data/projects.js'

usePageTitle('Projects')
</script>

<template>
  <section class="px-8 pt-8 pb-16">
    <h2 class="text-sm tracking-widest uppercase text-gray-500 mb-10">Projects</h2>

    <ul class="list-none grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
      <li v-for="project in projects" :key="project.id">
        <RouterLink :to="`/projects/${project.id}`" class="block relative group aspect-video overflow-hidden bg-gray-100">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            v-else
            class="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors duration-300"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="text-xs tracking-widest uppercase text-white mb-2">{{ project.title }}</h3>
            <p class="text-xs text-white/70 leading-relaxed">{{ project.summary }}</p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
