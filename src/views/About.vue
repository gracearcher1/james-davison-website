<script setup>
import { usePageTitle } from '../composables/usePageTitle.js'

usePageTitle('About')
</script>

<template>
  <section class="px-8 py-16">
    <h2 class="font-playfair text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">About</h2>
    <div class="max-w-2xl space-y-6 text-gray-700 leading-relaxed">
      <p>
        James Davison is a London-based musician and composer whose work spans acoustic songwriting,
        orchestral arrangements, and intimate live performance. Drawing from a wide range of
        influences, his music is defined by careful attention to melody and a deep respect for
        the craft of storytelling.
      </p>
      <p>
        Over the past decade, James has performed at venues across the UK and Europe, released
        several critically acclaimed records, and collaborated with a host of fellow artists and
        producers. His live shows are known for their warmth and quiet intensity.
      </p>
      <p>
        When not touring or recording, James spends his time teaching and mentoring emerging
        musicians through workshops and one-to-one sessions in London.
      </p>
    </div>
  </section>
</template>
