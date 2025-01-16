<template>
    <div ref="embedContainer" class="instagram-reel">
      <!-- The blockquote tag with the embed details -->
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DCpcMTOonL7/"
        data-instgrm-version="14"
        style="background:#FFF; border:0; margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"
      >
      </blockquote>
    </div>
  </template>
  
  <script>
  export default {
    name: "InstagramReel",
    // If you want to reuse this component for other reels, you can define a prop like:
    // props: {
    //   reelUrl: {
    //     type: String,
    //     default: "https://www.instagram.com/reel/DCpcMTOonL7/"
    //   }
    // },
    mounted() {
      // Check if the Instagram embed script is already loaded
      if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
        window.instgrm.Embeds.process();
      } else {
        // Otherwise, create and load the script
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = "https://www.instagram.com/embed.js";
        // Append the script to the container (or document.body)
        this.$refs.embedContainer.appendChild(script);
      }
    }
  };
  </script>
  
  <style scoped>
  .instagram-reel {
    /* You can customize the container styling as needed */
    margin: 2rem auto;
    max-width: 540px;
  }
  </style>
  