<template>
  <footer class="bg-white text-gray-800 py-6">
    <div class="container mx-auto text-center">
      <div class="flex justify-center items-center mb-6">
        <img 
          id="logo" 
          class="w-32 sm:w-48 h-16 sm:h-16 rounded-full object-cover transition-all duration-300" 
          :src="logoImage" 
          alt="XK Malerfirma Logo"
        />
      </div>
      <p class="mb-4">
        Velkommen til XK Malerfirma AS – vi spesialiserer oss på profesjonelt innvendig og utvendig malerarbeid i Oslo. Kontakt oss for en gratis befaring og opplev vårt fokus på kvalitet og kundetilfredshet. La oss forvandle ditt hjem eller din bedrift med våre tjenester.
      </p>
      <div class="mb-4">
        <p><strong>Kontakt oss</strong></p>
        <p>Email: <a href="mailto:info@xkmalerfirma.no" class="hover:text-green-500">info@xkmalerfirma.no</a></p>
        <p>Telefon: <a href="tel:+4796868947" class="hover:text-green-500">968 68 947</a></p>
        <p><strong>Organisasjonsnummer:</strong> 933 203 719</p>
      </div>
      <div class="flex flex-wrap justify-center space-x-6 mb-4">
        <div>
          <p class="font-bold">Nyttige lenker</p>
          <ul class="text-left">
            <li><a href="#" class="hover:text-green-500">Tjenester</a></li>
            <li><a href="#" class="hover:text-green-500">Galleri</a></li>
            <li><a href="#" class="hover:text-green-500">Kundeanmeldelser</a></li>
            <li><a href="#" class="hover:text-green-500">Kontakt</a></li>
            <li><a href="#" class="hover:text-green-500">Personvernerklæring</a></li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center space-x-4 mt-4">
        <a href="#" class="hover:text-green-500">
          <i class="fab fa-facebook-f"></i> <!-- Facebook Icon -->
        </a>
        <a href="#" class="hover:text-green-500">
          <i class="fab fa-instagram"></i> <!-- Instagram Icon -->
        </a>
        <a href="#" class="hover:text-green-500">
          <i class="fab fa-tiktok"></i> <!-- TikTok Icon -->
        </a>
      </div>
      <p class="mt-4">&copy; 2025 XK Malerfirma AS. Alle rettigheter forbeholdt.</p>
      <router-link to="/privacy-policy" class="hover:text-green-500">
        Personvernerklæring
      </router-link>
    </div>
  </footer>
</template>

<script>
import logoImage from "@/assets/images/logo/logo.png";

export default {
  name: "FooterComponent",
  data() {
    return {
      logoImage,
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
