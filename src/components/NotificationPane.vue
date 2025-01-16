<template>
  <div
    v-if="isVisible"
    id="notification-pane"
    :class="[
      isHighlight ? 'bg-highlight' : 'bg-custom-black',
      'text-white',
      'py-1',
      'px-2',
      'shadow-lg',
      'z-50',
      'transition-all',
      'duration-500'
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Notification Message -->
      <h1 class="text-sm sm:text-lg font-bold">
        {{ message }}
      </h1>

      <!-- Notification Button -->
      <button
        @click="handleClick"
        class="bg-gray-800 text-white font-bold py-1 px-2 rounded hover:bg-gray-900 transition text-sm sm:text-base"
      >
        {{ buttonText }}
      </button>
    </div>
    <HighLevelFormModal ref="formModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HighLevelFormModal from "@/components/FormModal.vue";

// State variables
const formModal = ref(null);
const isVisible = ref(true); // Controls visibility
const isHighlight = ref(false); // Controls highlight state

// Updated default message for xmlmalerfirma (painting company) in Norwegian
const message = ref("Forvandle hjemmet med våre profesjonelle malertjenester – Bestill gratis befaring nå!");
// Updated button text for the painting company
const buttonText = ref("Gratis Befaring");

// Facts (or korte meldinger) tilpasset malerfirma
const facts = [
  "Nye farger gir hjemmet ditt nytt liv. 🎨",
  "Vi bruker kun kvalitetsprodukter og erfarne malere. 🖌️",
  "Rask og effektiv service for ditt malerprosjekt. 🏠",
  "Skreddersydde løsninger for alle behov. 🔨",
  "Hver detalj teller – vi gir rommet ditt et profesjonelt preg. 🖼️",
  "Forbedre både interiør og eksteriør med et nytt strøk. 🏡",
  "Øk verdien på din eiendom med et friskt utseende. 💰",
  "Faglig ekspertise og omsorg for detaljer. ✨",
  "Vi skaper en stemning med farger du elsker. ❤️",
  "Bestill en gratis befaring og se mulighetene! 🚀",
];

// Nye meldinger ved bestilling, kun for Oslo
const locations = ["Oslo"];
const orderMessages = [
  "Fra Oslo har noen nettopp bestilt en gratis befaring! 🎉",
  "Ny bestilling fra Oslo – se dine malingsmuligheter nå! 🌟",
  "Kunde fra Oslo har booket en time for malerarbeid! 🖌️",
];

// Funksjon for å åpne kontaktskjema (HighLevelFormModal)
const handleClick = () => {
  formModal.value.open();
};

// Funksjon for å sette en tilfeldig fakta-melding
const setRandomFact = () => {
  message.value = facts[Math.floor(Math.random() * facts.length)];
};

// Funksjon for å sette en ny bestillingsmelding med sted
const setOrderMessage = () => {
  const randomOrderMessage = orderMessages[Math.floor(Math.random() * orderMessages.length)];
  message.value = randomOrderMessage;

  // Marker notifikasjonen midlertidig
  isHighlight.value = true;

  // Fjern markeringen etter 5 sekunder
  setTimeout(() => {
    isHighlight.value = false;
  }, 5000);
};

// Initialiser meldinger ved montering av komponenten
onMounted(() => {
  setRandomFact();

  // Bytt melding hvert 10. sekund
  setInterval(() => {
    if (Math.random() > 0.5) {
      setRandomFact();
    } else {
      setOrderMessage();
    }
  }, 10000);
});
</script>

<style scoped>
/* Notification Pane */
#notification-pane {
  background-color: #000000; /* Using black background; adjust as needed */
  animation: slideDown 0.5s ease-in-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Highlight State */
.bg-highlight {
  background-color: #333333;
}

.bg-custom-black {
  background-color: #000000;
}

button:hover {
  background-color: #1a1a1a;
}
</style>
