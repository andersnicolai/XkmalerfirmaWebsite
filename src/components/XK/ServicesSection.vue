<!-- src/components/ServicesSection.vue -->
<template>
    <section id="services" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center">Våre Tjenester</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <router-link
            v-for="service in services"
            :key="service.id"
            :to="service.route"
            class="block text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              :src="service.icon"
              :alt="service.alt"
              class="mx-auto w-12 h-12"
            />
            <h3 class="text-xl font-bold mt-4">{{ service.title }}</h3>
            <p class="text-gray-600 mt-2">{{ service.description }}</p>
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Import images from the XkImages folder.
  import rollerIcon from "@/assets/XkImages/icons8-roller-64.png";
  import carpenterIcon from "@/assets/XkImages/icons8-carpenter-50.png";
  import wallpaperIcon from "@/assets/XkImages/icons8-wallpaper-60.png";
  import floorIcon from "@/assets/XkImages/icons8-floor-64.png";
  
  // Define the list of services with the corresponding routes.
  const services = ref([
    {
      id: 1,
      route: "/malerarbeid",
      icon: rollerIcon,
      alt: "Malerarbeid",
      title: "Malerarbeid",
      description: "Alt av innvendig og utvendig malerarbeid."
    },
    {
      id: 2,
      route: "/snekker",
      icon: carpenterIcon,
      alt: "Snekker",
      title: "Snekker",
      description: "Montering av kjøkken, gipsplater og mer."
    },
    {
      id: 3,
      route: "/tapetsering",
      icon: wallpaperIcon,
      alt: "Tapetsering",
      title: "Tapetsering",
      description: "Vi utfører tapetsering av alle typer."
    },
    {
      id: 4,
      route: "/gulvlegging",
      icon: floorIcon,
      alt: "Gulvlegging",
      title: "Gulvlegging",
      description: "Profesjonell legging av gulv."
    }
  ]);
  </script>
  
  <style scoped>
  /* Additional custom styling if needed */
  </style>
  