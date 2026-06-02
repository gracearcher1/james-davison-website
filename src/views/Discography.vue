<script setup>
import { usePageTitle } from '../composables/usePageTitle.js'

usePageTitle('Listen')

const releases = [
  {
    id: 1,
    title: 'Moon Beans',
    year: '2026',
    type: 'Album',
    artwork: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0220021b55fae1846d80dce770',
    spotify: 'https://open.spotify.com/album/1elemWfKwj0XtR6qC9NpFS',
  },
  {
    id: 2,
    title: 'Jazz Classics ...with a Twist',
    year: '2026',
    type: 'Album',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e96997ecfd3b241ba4c08001',
    spotify: 'https://open.spotify.com/album/55ECZPPQSdq9J5ukzqcc0D',
  },
  {
    id: 3,
    title: 'The Golden Road',
    year: '2025',
    type: 'Album',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b79eb84094a5f7555e7601cf',
    spotify: 'https://open.spotify.com/album/2WdSpjUSeTMVAQc0Y9LcL8',
  },
  {
    id: 4,
    title: 'Odoyá',
    year: '2019',
    type: 'Album',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02400bea2447dcdf728ed0becb',
    spotify: 'https://open.spotify.com/album/28ZWaulfPVIMHDq0ClBC3K',
  },
]
</script>

<template>
  <section class="px-8 py-16">
    <h2 class="font-playfair text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">Discography</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <article v-for="release in releases" :key="release.id" class="p-6">
        <a
          :href="release.spotify"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Listen to ${release.title} on Spotify (opens in new tab)`"
          class="block mb-4 group"
        >
          <img
            :src="release.artwork"
            :alt="`${release.title} cover art`"
            class="w-full aspect-square object-cover group-hover:opacity-75 transition-opacity"
          />
        </a>
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">{{ release.type }} · {{ release.year }}</p>
        <h3 class="font-playfair text-xl font-semibold text-gray-900 mb-4">{{ release.title }}</h3>
        <a
          :href="release.spotify"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Listen to ${release.title} on Spotify (opens in new tab)`"
          class="text-xs text-gray-600 hover:text-gray-900 uppercase tracking-wide border-b border-gray-300 hover:border-gray-900 transition-colors pb-px"
        >
          Listen on Spotify
        </a>
      </article>
    </div>
  </section>
</template>
