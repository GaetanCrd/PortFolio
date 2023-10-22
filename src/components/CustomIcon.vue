<template>
    <svg
      v-if="isLoaded"
      :width="width"
      :height="height"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <image :xlink:href="icon" height="24" width="24" />
    </svg>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const icon = '/Users/gaetan/Desktop/CREATECH/2 - S9 (A5)/PortFolio/vue-tailwind-portfolio/src/dvic.png'; // Assurez-vous que le chemin d'accès est correct
  const isLoaded = ref(false);
  const width = 24;
  const height = 24;
  
  // Chargez l'icône
  const img = new Image();
  img.onload = () => {
    isLoaded.value = true;
  };
  img.src = icon;
  </script>
  