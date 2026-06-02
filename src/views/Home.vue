<script setup>
import { RouterLink } from "vue-router";
import { usePageTitle } from "../composables/usePageTitle.js";

usePageTitle();
</script>

<template>
  <section class="px-8 py-24 sm:py-32">
    <p class="text-gray-600 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
      Trumpet/Flugelhorn, Composer, ...
    </p>
    <div class="flex flex-wrap gap-4">
      <RouterLink
        to="/about"
        class="px-6 py-3 bg-gray-900 text-white text-sm tracking-wide uppercase hover:opacity-75 transition-opacity"
      >
        About
      </RouterLink>
      <RouterLink
        to="/listen"
        class="px-6 py-3 border border-gray-900 text-gray-900 text-sm tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors"
      >
        Listen
      </RouterLink>
    </div>
  </section>
</template>
