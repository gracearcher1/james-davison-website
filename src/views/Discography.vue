<script setup>
import { usePageTitle } from '../composables/usePageTitle.js'

usePageTitle('Listen')

const releases = [
  {
    id: 1,
    title: 'Moon Beans',
    artwork: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0220021b55fae1846d80dce770',
    spotify: 'https://open.spotify.com/album/1elemWfKwj0XtR6qC9NpFS',
  },
  {
    id: 2,
    title: 'Jazz Classics ...with a Twist',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e96997ecfd3b241ba4c08001',
    spotify: 'https://open.spotify.com/album/55ECZPPQSdq9J5ukzqcc0D',
  },
  {
    id: 3,
    title: 'A Year In The Life',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02e9fa32b106e2efda6805ac4c',
    spotify: 'https://open.spotify.com/album/446Q5mhno9FFWdFkjxrSkN',
  },
  {
    id: 4,
    title: 'The Golden Road',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b79eb84094a5f7555e7601cf',
    spotify: 'https://open.spotify.com/album/2WdSpjUSeTMVAQc0Y9LcL8',
  },
  {
    id: 5,
    title: 'A Thousand Nights',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292c0605ac9ec4c205d5585e5',
    spotify: 'https://open.spotify.com/album/0ov0XYgdhxnaGl1bECccto',
  },
  {
    id: 6,
    title: 'Big Band: Box of Tricks',
    artwork: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0234ab7fd964d22e69bd890d44',
    spotify: 'https://open.spotify.com/album/7I2HshLn64d9EDPaXoLZsc',
  },
  {
    id: 7,
    title: 'Odoyá',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02400bea2447dcdf728ed0becb',
    spotify: 'https://open.spotify.com/album/28ZWaulfPVIMHDq0ClBC3K',
  },
]
</script>

<template>
  <section class="px-8 pt-8 pb-16">
    <h2 class="text-sm tracking-widest uppercase text-gray-500 mb-10">Listen</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <article v-for="release in releases" :key="release.id">
        <a
          :href="release.spotify"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Listen to ${release.title} on Spotify (opens in new tab)`"
          class="block mb-3 group"
        >
          <img
            :src="release.artwork"
            :alt="`${release.title} cover art`"
            class="w-full aspect-square object-cover group-hover:opacity-75 transition-opacity"
          />
        </a>
        <a
          :href="release.spotify"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Listen to ${release.title} on Spotify (opens in new tab)`"
          class="text-xs tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
        >
          {{ release.title }}
        </a>
      </article>
    </div>
  </section>
</template>
