<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <NavBar />
  <main id="main-content" class="pt-20 min-h-screen">
    <RouterView />
  </main>
  <Footer />
</template>
