<script setup>
import { ref, onMounted } from 'vue'
import { usePageTitle } from '../composables/usePageTitle.js'
import { getUpcomingEvents, formatEventDate } from '../services/calendarService.js'

usePageTitle("What's On")

const events = ref([])
const loading = ref(true)
const error = ref(false)
const statusMessage = ref('Loading events')

onMounted(async () => {
  try {
    events.value = await getUpcomingEvents()
    statusMessage.value = `${events.value.length} upcoming events loaded`
  } catch {
    error.value = true
    statusMessage.value = 'Failed to load events'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="px-8 pt-8 pb-16">
    <h2 class="text-sm tracking-widest uppercase text-gray-500 mb-10">What's On</h2>

    <div aria-live="polite" aria-atomic="true" class="sr-only">
      {{ statusMessage }}
    </div>

    <p v-if="loading" class="text-gray-500">Loading events…</p>

    <p v-else-if="error" class="text-gray-500">
      Unable to load events. Please check back soon.
    </p>

    <ul v-else-if="events.length" class="space-y-6 list-none max-w-2xl" role="list">
      <li
        v-for="event in events"
        :key="event.id"
        class="border-b border-gray-200 pb-6 last:border-b-0"
      >
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">{{ formatEventDate(event) }}</p>
        <h3 class="font-playfair text-xl font-semibold text-gray-900 mb-1">{{ event.summary }}</h3>
        <p v-if="event.location" class="text-gray-500 text-sm mb-3">{{ event.location }}</p>
        <a
          v-if="event.htmlLink && event.htmlLink !== '#'"
          :href="event.htmlLink"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`More info about ${event.summary} (opens in new tab)`"
          class="text-xs uppercase tracking-wide text-gray-600 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-px"
        >
          More info
        </a>
      </li>
    </ul>

    <p v-else class="text-gray-500">No upcoming events. Check back soon.</p>
  </section>
</template>
