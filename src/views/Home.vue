<script setup>
import { ref, onMounted } from "vue";
import { usePageTitle } from "../composables/usePageTitle.js";
import {
  getUpcomingEvents,
  formatEventDate,
} from "../services/calendarService.js";

usePageTitle();

const events = ref([]);

onMounted(async () => {
  try {
    const all = await getUpcomingEvents();
    events.value = all.slice(0, 3);
  } catch {
    // falls back to empty
  }
});
</script>

<template>
  <div class="py-4 px-2 space-y-1 sm:space-y-2">
    <!-- Row 1 -->
    <!-- <div class="relative flex items-end gap-1">
      <div class="flex-1 overflow-hidden">
        <img
          class="h-24 w-full object-cover object-top shadow-md sm:h-44"
          src="/images/photo-13.png"
          alt=""
        />
      </div>
      <img
        class="h-24 w-auto shrink-0 shadow-md sm:h-44"
        src="/images/photo-10.png"
        alt=""
      />
      <div class="flex-1 overflow-hidden">
        <img
          class="h-24 w-full object-cover object-left shadow-md sm:h-44"
          src="/images/photo-2.png"
          alt=""
        />
      </div> -->
    <!-- <div
        class="absolute inset-0 bg-black/80 flex items-center justify-center gap-3 sm:gap-6"
      >
        <p class="text-white font-playfair text-2xl font-medium">
          Trumpet player, composer and teacher based in London
        </p>
      </div> -->
    <!-- </div> -->

    <!-- Pictures -->
    <div class="flex items-center gap-1">
      <div class="flex-1 overflow-hidden">
        <img
          class="h-36 w-full object-cover object-right shadow-md sm:h-80"
          src="/images/photo-6.jpeg"
          alt=""
        />
      </div>
      <img
        class="h-36 w-36 shrink-0 object-cover shadow-md sm:h-80 sm:w-80"
        src="/images/photo-12.png"
        alt=""
      />
      <div class="flex-1 overflow-hidden">
        <img
          class="h-36 w-full object-cover [object-position:left_15%] shadow-md sm:h-80"
          src="/images/photo-9.png"
          alt=""
        />
      </div>
    </div>

    <!-- Upcoming Gigs -->
    <div class="relative flex items-start gap-1 pt-8">
      <div class="flex-1 overflow-hidden">
        <img
          class="h-48 w-full object-cover object-[left_20%] shadow-md sm:h-72"
          src="/images/photo-1.png"
          alt=""
        />
      </div>
      <img
        class="h-48 w-24 shrink-0 object-cover shadow-md sm:h-72 sm:w-44"
        src="/images/photo-11.png"
        alt=""
      />
      <div class="flex-1 overflow-hidden">
        <img
          class="h-48 w-full object-cover object-left shadow-md sm:h-72"
          src="/images/photo-7.png"
          alt=""
        />
      </div>
      <div
        class="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 px-6 mt-8"
      >
        <h2
          class="font-[family-name:var(--font-rock3d)] text-2xl text-white sm:text-3xl tracking-widest"
        >
          Upcoming Gigs
        </h2>
        <div
          v-if="events.length"
          class="w-full grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <a
            v-for="event in events"
            :key="event.id"
            :href="event.description || undefined"
            :target="event.description ? '_blank' : undefined"
            :rel="event.description ? 'noopener noreferrer' : undefined"
            class="flex flex-col gap-1 text-center"
            :class="
              event.description
                ? 'cursor-pointer hover:opacity-80 transition-opacity'
                : 'cursor-default'
            "
          >
            <p class="text-xs text-white/60 uppercase tracking-widest">
              {{ formatEventDate(event) }}
            </p>
            <p
              class="font-playfair text-base font-semibold text-white sm:text-lg"
            >
              {{ event.summary }}
            </p>
            <p v-if="event.location" class="text-sm text-white/70">
              {{ event.location }}
            </p>
          </a>
        </div>
        <RouterLink
          to="/whats-on"
          class="text-xs uppercase tracking-widest text-white/70 border-b border-white/40 hover:text-white hover:border-white transition-colors pb-px"
        >
          View all gigs
        </RouterLink>
      </div>
    </div>
  </div>
</template>
