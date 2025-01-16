<template>
    <!-- Vårt Firma i Tall Seksjon -->
    <section class="bg-red-600 py-16">
      <div class="container mx-auto text-white px-4">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Venstre Innhold -->
          <div>
            <h2 class="text-4xl font-bold mb-4">
              Vårt Firma <br> i Tall
            </h2>
            <p class="text-lg">
              En viktig prioritet for vårt firma er kundetilfredshet. Ved å bestille våre tjenester kan du være sikker på kvaliteten på resultatet.
            </p>
          </div>
  
          <!-- Høyre Innhold -->
          <div class="grid grid-cols-2 gap-8">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
              <p class="text-lg" v-html="stat.description"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CompanyNumbersSection",
    data() {
      return {
        stats: [
          { value: 100, description: "Fornøyde <br> Kunder i Oslo" },
          { value: 10, description: "Ansatte" },
          { value: 20, description: "År med <br> Erfaring" },
          { value: 600, description: "Anmeldelser" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-red-600 {
    background-color: #dc2626;
  }
  .container {
    max-width: 1200px;
  }
  </style>
