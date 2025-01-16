<template>
  <transition name="fade">
    <div class="modal-backdrop" v-if="visible" @click.self="close">
      <div class="modal-content">
        <!-- Embed HighLevel Form -->
        <iframe
            v-show="!isLoading"
            @load="onIframeLoad"
            src="https://link.onedevconsultancy.com/widget/form/zikwoGbEbZJB9EYevapn"
            style="width:100%;height:100%;border:none;border-radius:20px"
            id="popup-zikwoGbEbZJB9EYevapn"
            data-layout="{'id':'POPUP'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Roofing Website Form"
            data-height="353"
            data-layout-iframe-id="popup-zikwoGbEbZJB9EYevapn"
            data-form-id="zikwoGbEbZJB9EYevapn"
            title="Roofing Website Form"
        ></iframe>

        <!-- Loading spinner -->
        <div v-if="isLoading" class="loading-spinner"></div>

      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "HighLevelFormModal",
  setup() {
    const visible = ref(false);
    const isLoading = ref(true);

    // Open the modal and track the event
    const open = () => {
      visible.value = true;

      // Track Meta Pixel event when the form modal opens
      if (window.fbq) {
        fbq('track', 'FormOpen', {
          formName: 'Roofing Website Form',
          category: 'Engagement'
        });
      } else {
        console.error("Facebook Pixel (fbq) not loaded correctly");
      }
    };

    // Close the modal
    const close = () => {
      visible.value = false;
      isLoading.value = true;
    };

    const onIframeLoad = () => {
      isLoading.value = false;
    };

    onMounted(() => {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && visible.value) {
          close(); // Close modal when Esc is pressed
        }
      });
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape" && visible.value) {
          close(); // Remove listener to avoid memory leaks
        }
      });
    });

    return {
      visible,
      isLoading,
      open,
      close,
      onIframeLoad,
    };
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent backdrop */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-content {
  width: 95%;
  max-width: 1200px; /* Even wider modal */
  height: 90%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
