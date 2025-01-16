<template>
    <div>
      <div id="hero-section">
        <HeroSectionXK />
      </div>
      <div id="services">
        <ServicesShowcase />
      </div>
      <div id="get-a-quote">
        <GetAQuote />
      </div>
      <div id="pricing">
        <PricingDetails />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="gallery">
        <GalleryShowcase />
      </div>
    </div>
  </template>
  
  <script setup>
  import HeroSectionXK from '@/components/HeroSectionXK/HeroSectionXK.vue';
  import ServicesShowcase from '@/components/ServicesShowcase.vue';
  import GetAQuote from '@/components/GetAQuote.vue';
  import PricingDetails from '@/components/PricingDetails.vue';
  import AboutUs from '@/components/AboutUs.vue';
  import Testimonials from '@/components/Testimonials.vue';
  import GalleryShowcase from '@/components/GalleryShowcase.vue';
  </script>
  
  <style scoped>
  /* Customize styles for XK Malerfirma */
  #hero-section {
    background-color: #f3f4f6;
    padding: 40px;
  }
  #services {
    background-color: #ffffff;
    padding: 20px;
  }
  #get-a-quote {
    background-color: #e5e7eb;
    padding: 30px;
  }
  #pricing {
    background-color: #f9fafb;
    padding: 30px;
  }
  #about-us {
    background-color: #ffffff;
    padding: 20px;
  }
  #testimonials {
    background-color: #f3f4f6;
    padding: 30px;
  }
  #gallery {
    background-color: #ffffff;
    padding: 20px;
  }
  </style>
  