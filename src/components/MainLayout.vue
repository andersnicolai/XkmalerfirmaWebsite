<template>
  <div>
    <div class="relative">
      <VideoSection
          :desktopVideoSrc="desktopVideo"
          :mobileVideoSrc="mobileVideo"
          headlineText="Book gratis befaring nå"
          buttonLabel="Bestill Gratis Befaring nå" />

      <div class="absolute inset-0 z-10">
        <div class="mt-safe sticky-wrapper">
          <div class="sticky-notification">
            <NotificationPane
                :message="notificationMessage"
                :buttonText="notificationButtonText"
            />
          </div>
        </div>
        <div>
          <AppHeader
              :logoVideo="logoVideo"
              :logoImage="logoImage"
              :formModal="formModal"
          />
        </div>
      </div>
    </div>
    <!-- This is where routed content will appear -->
    <router-view />
    <!-- Footer that appears on all pages using this layout -->
    <FooterComponent />
  </div>
</template>


<script setup>
import VideoSection from "@/components/VideoSection.vue";
import NotificationPane from "@/components/NotificationPane.vue";
import AppHeader from "@/components/AppHeader.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import desktopVideo from "@/assets/videos/xknu.mov"; // Make sure to import the FooterComponent
import mobileVideo from "@/assets/videos/xkshort.mov";

const logoVideo = "@/assets/videos/logo.mp4";
const logoImage = "@/assets/images/logo/logo.png";
const notificationMessage = "Get your free consultation now!";
const notificationButtonText = "Close";
</script>

<style scoped>
/* Styles specific to the layout */
</style>
