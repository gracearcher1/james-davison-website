<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const leftLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
]

const rightLinks = [
  { to: '/listen', label: 'LISTEN' },
  { to: '/whats-on', label: "WHAT'S ON" },
]

const allLinks = [...leftLinks, ...rightLinks]

const baseLinkClass = 'text-gray-500 hover:text-gray-900 transition-colors text-xs tracking-widest'
const activeLinkClass = 'text-gray-900 border-b border-gray-900'

const linkClass = (path) =>
  `${baseLinkClass} ${route.path === path ? activeLinkClass : ''}`
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
    <nav class="px-8 py-4" aria-label="Main navigation">

      <!-- Desktop: three-column layout with title centred -->
      <div class="hidden sm:grid grid-cols-3 items-center">
        <ul class="flex gap-8 list-none justify-start" role="list">
          <li v-for="link in leftLinks" :key="link.to">
            <RouterLink :to="link.to" :class="linkClass(link.to)">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <RouterLink to="/" class="font-playfair text-xl font-semibold text-gray-900 tracking-wide text-center hover:opacity-60 transition-opacity block">
          JAMES DAVISON
        </RouterLink>

        <ul class="flex gap-8 list-none justify-end" role="list">
          <li v-for="link in rightLinks" :key="link.to">
            <RouterLink :to="link.to" :class="linkClass(link.to)">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Mobile: title left, hamburger right -->
      <div class="flex sm:hidden items-center justify-between">
        <RouterLink to="/" class="font-playfair text-lg font-semibold text-gray-900 tracking-wide hover:opacity-60 transition-opacity">
          JAMES DAVISON
        </RouterLink>
        <button
          class="p-2 text-gray-700 hover:text-gray-900"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation menu"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="sm:hidden border-t border-gray-200 bg-white">
      <ul class="flex flex-col px-8 py-4 gap-4 list-none" role="list">
        <li v-for="link in allLinks" :key="link.to">
          <RouterLink :to="link.to" :class="linkClass(link.to)" @click="menuOpen = false">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
