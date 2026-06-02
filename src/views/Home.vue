<script setup>
import { usePageTitle } from "../composables/usePageTitle.js";

usePageTitle();
</script>

<template>
  <div class="py-4 px-2 space-y-1 sm:space-y-2">
    <!-- Row 1 -->
    <div class="relative flex items-end gap-1">
      <div class="flex-1 overflow-hidden">
        <img
          class="h-24 w-full object-cover object-right shadow-md sm:h-44"
          src="/images/photo-9.png"
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
      </div>
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 sm:gap-6">
        <RouterLink
          to="/about"
          class="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-white border border-white hover:bg-white hover:text-black transition-colors sm:px-5 sm:py-2 sm:text-sm"
        >About</RouterLink>
        <RouterLink
          to="/listen"
          class="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-white border border-white hover:bg-white hover:text-black transition-colors sm:px-5 sm:py-2 sm:text-sm"
        >Listen</RouterLink>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="flex items-center gap-1">
      <div class="flex-1 overflow-hidden">
        <img
          class="h-36 w-full object-cover object-right shadow-md sm:h-80"
          src="/images/photo-7.png"
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
          src="/images/photo-1.png"
          alt=""
        />
      </div>
    </div>

    <!-- Row 3 -->
    <div class="relative flex items-start gap-1">
      <div class="flex-1 overflow-hidden">
        <img
          class="h-24 w-full object-cover object-[left_20%] shadow-md sm:h-44"
          src="/images/photo-6.jpeg"
          alt=""
        />
      </div>
      <img
        class="h-24 w-24 shrink-0 object-cover shadow-md sm:h-44 sm:w-44"
        src="/images/photo-11.png"
        alt=""
      />
      <div class="flex-1 overflow-hidden">
        <img
          class="h-24 w-full object-cover object-left shadow-md sm:h-44"
          src="/images/photo-4.jpeg"
          alt=""
        />
      </div>
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 sm:gap-6">
        <RouterLink
          to="/whats-on"
          class="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-white border border-white hover:bg-white hover:text-black transition-colors sm:px-5 sm:py-2 sm:text-sm"
        >Gigs</RouterLink>
        <RouterLink
          to="/projects"
          class="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-white border border-white hover:bg-white hover:text-black transition-colors sm:px-5 sm:py-2 sm:text-sm"
        >Projects</RouterLink>
      </div>
    </div>
  </div>
</template>
