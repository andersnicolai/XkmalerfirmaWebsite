<template>
  <div>
    <div id="hero-section">
      <HeroSectionXK />
    </div>

    <div>
      <SocialMedia />
    </div>
    <div id="services-section">
      <ServicesSection />
    </div>
    <div id="company-numbers">
      <CompanyNumbers />
    </div>

  </div>
</template>

<script setup>
import HeroSectionXK from '@/components/XK/HeroSectionXK.vue';
import ServicesSection from '@/components/XK/ServicesSection.vue';
import CompanyNumbers from '@/components/XK/CompanyNumbers.vue';
import SocialMedia from '@/components/XK/SocialMedia.vue';
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
