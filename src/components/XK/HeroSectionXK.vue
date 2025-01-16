<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">XK Malerfirma AS</h1>
        <p class="hero-description">
          Profesjonelt innvendig og utvendig malerarbeid i Oslo. Kontakt oss for en gratis befaring i dag!
        </p>
        <div class="hero-actions">
          <!-- Red Button with provided styling -->
          <button
            class="mt-4 bg-red-900 text-white font-bold py-5 px-12 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:bg-red-700 hover:shadow-xl hover:-translate-y-1 hover:scale-110"
            @click="freeAssessment"
          >
            GRATIS BEFARING
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const freeAssessment = () => {
    // Logikk for gratis befaring
    alert('Du blir nå omdirigert til skjema for gratis befaring...');
  };
  
  const learnMore = () => {
    // Logikk for å vise mer informasjon om våre tjenester
    alert('Les mer om våre tjenester og tidligere prosjekter...');
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: linear-gradient(to right, #f3f4f6, #e5e7eb);
    padding: 60px 20px;
    text-align: center;
    border-radius: 8px;
  }
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 20px;
  }
  
  .hero-description {
    font-size: 1.2rem;
    color: #374151;
    margin-bottom: 30px;
  }
  
  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  /* Styling for the secondary button */
  .secondary-button {
    background-color: #f9fafb;
    color: #1f2937;
    border: 1px solid #d1d5db;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .secondary-button:hover {
    background-color: #e5e7eb;
  }
  </style>
  