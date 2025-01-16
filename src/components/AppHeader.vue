<template>
  <header id="shrinkable-header" class="fixed top-0 w-full bg-gray-900 z-40 shadow-lg">
    <nav class="flex items-center justify-between px-4 sm:px-8 py-2 max-w-6xl mx-auto">
      <!-- Logo -->
      <div id="logo-container" class="flex items-center">
        <video id="logo" class="w-32 sm:w-48 h-16 sm:h-16 rounded-full" autoplay loop muted>
          <source :src="logoVideo" type="video/mp4" />
          <img :src="logoImage" alt="Logo" class="w-32 sm:w-48 h-16 sm:h-16 rounded-full" />
        </video>
      </div>

      <!-- Desktop Navigation -->
      <ul id="menu-links" class="hidden sm:flex gap-8 text-white font-semibold items-center">
        <li><a href="#services-section" class="hover:text-green-600">Våre tjenester</a></li>
        <li><a href="#projects" class="hover:text-green-600">Prosjekter</a></li>
        <li><a href="#about-us" class="hover:text-green-600">Om oss</a></li>
        <li><a href="#testimonials" class="hover:text-green-600">Kundereferanser</a></li>
        <li><a href="#contact" class="hover:text-green-600">Kontakt oss</a></li>
      </ul>

      <!-- CTA -->
      <button
        id="cta-button"
        @click="openModal"
        class="hidden sm:block bg-red-900 text-white font-bold py-3 px-6 rounded-full shadow-lg"
      >
        {{ isB2B ? "Få et bedriftsavtale" : "Bestill gratis konsultasjon" }}
      </button>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="sm:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile Sliding Menu -->
    <div :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }" class="fixed inset-0 bg-gray-900">
      <button @click="toggleMenu" class="absolute top-8 right-8 text-white">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <ul class="flex flex-col items-center justify-center h-screen space-y-8 text-white font-semibold text-xl">
        <li><a href="#services-section" @click="closeMenu">Våre tjenester</a></li>
        <li><a href="#projects" @click="closeMenu">Prosjekter</a></li>
        <li><a href="#about-us" @click="closeMenu">Om oss</a></li>
        <li><a href="#testimonials" @click="closeMenu">Kundereferanser</a></li>
        <li><a href="#contact" @click="closeMenu">Kontakt oss</a></li>
      </ul>
    </div>
  </header>
</template>


<script>
export default {
  name: "AppHeader",
  props: {
    logoVideo: {
      type: String,
      required: true,
    },
    logoImage: {
      type: String,
      required: true,
    },
    formModal: {
      type: Object, // Pass the form modal ref from the parent component
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      colors: ["bg-gradient-to-r from-yellow-500 to-orange-600", "bg-gradient-to-r from-blue-500 to-purple-600", "bg-gradient-to-r from-green-500 to-teal-600"],
      colorIndex: 0,
      colorClass: "bg-gradient-to-r from-yellow-500 to-orange-600",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = "";
    },
    openModal() {
      this.formModal.open(); // Use the modal ref to open the modal
    },
  },
  mounted() {
    setInterval(() => {
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      this.colorClass = this.colors[this.colorIndex];
    }, 1500);
  },
};
</script>


<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Mobile menu transition */
.translate-x-full {
  transform: translateX(100%);
}
.translate-x-0 {
  transform: translateX(0);
}

/* Dark blue background */
.bg-dark-blue {
  background-color: #001f3f;
}
</style>
