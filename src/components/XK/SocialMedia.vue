<template>
    <div class="xk-social-media">
      <div class="xk-info">
        <h2>Følg XK Malerfirma på Sosiale Medier!</h2>
        <p>
          ✨ Rommet forvandlet med XK Malerfirma! ✨ Vi leverer alltid høy kvalitet
          på malerarbeid – fra planlegging til ferdig resultat! 🌟
        </p>
        <p>
          Hold deg oppdatert på våre prosjekter og tips ved å følge oss på Instagram
          og TikTok. 📲
        </p>
        <p>
          Kontakt oss for gratis befaring og skreddersydde løsninger: <a href="https://www.xkmalerfirma.no">www.xkmalerfirma.no</a>
        </p>
      </div>
  
      <div ref="embedContainer" class="instagram-reel">
        <blockquote
          class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DCpcMTOonL7/"
          data-instgrm-version="14"
          style="background:#FFF; border:0; margin:1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"
        ></blockquote>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InstagramReelWithText",
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
        this.$refs.embedContainer.appendChild(script);
      }
    },
  };
  </script>
  
  <style scoped>
  .xk-social-media {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin: 2rem auto;
    max-width: 960px;
  }
  
  .xk-info {
    flex: 1;
    max-width: 50%;
  }
  
  .instagram-reel {
    flex: 1;
    max-width: 50%;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  