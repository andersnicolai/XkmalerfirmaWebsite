<template>
  <div class="w-full h-screen bg-gray-900 overflow-hidden relative">
    <!-- Video Section (shown when no slideshow) -->
    <video
      v-if="!showSlideshow"
      ref="videoRef"
      autoplay
      muted
      playsinline
      preload="auto"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      @ended="onVideoEnded"
    >
      <source :src="currentVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Slideshow Section (shown when showSlideshow is true) -->
    <div
      v-else
      class="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center"
    >
      <div class="slideshow-container relative w-full h-full">
        <!-- Each slide uses a dynamic "active" class -->
        <div
          v-for="(slide, index) in slideshowImages"
          :key="slide.id || index"
          :class="['slide', { active: currentSlide === index }]"
        >
          <img
            :src="slide.media_url"
            :alt="slide.caption || 'Instagram Image'"
            class="object-cover w-full h-screen"
          />
        </div>
        <!-- Carousel Controls -->
        <button class="prev-btn" @click="prevSlide">‹</button>
        <button class="next-btn" @click="nextSlide">›</button>
      </div>
    </div>

    <!-- Background overlay -->
    <div class="absolute inset-0 w-full h-full z-10"></div>

    <!-- Text overlay (always visible) -->
    <div class="text-overlay absolute inset-0 z-20 flex flex-col justify-center items-center">
      <div
        class="diagonal-overlay absolute w-full h-1/5 md:h-1/5 md:bottom-0 bg-white/0 backdrop-blur-md flex flex-col justify-center py-8 px-4"
      >
        <div class="text-center text-white max-w-2xl mx-auto pt-8">
          <!-- Updated headline text size -->
          <p class="text-4xl md:text-5xl font-bold">
            {{ headlineText }}
          </p>
          <!-- Booking Button using red style -->
          <BookingButton
            :class="bookingButtonClass"
            :label="buttonLabel"
            @click="handleClick"
          />
        </div>
      </div>
    </div>
    <HighLevelFormModal ref="formModal" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import BookingButton from "@/components/BookingButton.vue";
import HighLevelFormModal from "@/components/FormModal.vue";

// Props (including optional tag filter)
const props = defineProps({
  desktopVideoSrc: { type: String, required: true },
  mobileVideoSrc: { type: String, required: true },
  headlineText: { type: String, required: true },
  buttonLabel: { type: String, required: true },
  tagFilter: { type: String, default: "xkmalerfirmashowcase" },
});

const formModal = ref(null);
const videoRef = ref(null);
const currentVideo = ref(props.desktopVideoSrc);
const showSlideshow = ref(false);
const slideshowImages = ref([]);
const currentSlide = ref(0);
let slideInterval = null;

// Constant for red button styling
const bookingButtonClass =
  "relative z-30 bg-red-900 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500";

// Opens the booking modal when the button is clicked
const handleClick = () => {
  if (formModal.value) {
    formModal.value.open();
  }
};

// Fetch Instagram images using the Facebook Graph API
const fetchInstagramImages = async () => {
  const accessToken =
    'IGAAGihsq47j9BZAE5adkN2a01TbmJSbThCQ0xwTkF4X1FlcG95dEpJNUNwR1dRak8tRW9LeHVwMmZA5ZAElMQzdqV1c1VXhXdGhGeUIxTk5CN3VJOVYzVmIteldwVVE3NmNEUmdhWlZAPSWtlbDFaUHdPZAl9maHBGNDZAxSmJJQUJkSQZDZD'; // Replace with your valid token

  const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_url,caption,media_type&access_token=${accessToken}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("Instagram API Response:", data);

    if (data && data.data) {
      // Keep only image posts
      let images = data.data.filter((post) => post.media_type === "IMAGE");

      // If tagFilter is provided, filter based on its presence in the caption.
      if (props.tagFilter.trim()) {
        let tag = props.tagFilter.trim();
        if (!tag.startsWith("#")) tag = "#" + tag;
        const tagRegex = new RegExp(tag, "i");
        images = images.filter((post) => {
          if (post.caption) {
            const result = tagRegex.test(post.caption);
            console.log(`Testing caption: "${post.caption}" against tag "${tag}" → ${result}`);
            return result;
          }
          return false;
        });
      }

      slideshowImages.value = images;
      console.log("Filtered Images:", slideshowImages.value);
    } else {
      console.error("Unexpected API Response:", data);
    }
  } catch (error) {
    console.error("Error fetching Instagram images:", error);
  }
};

// Starts an interval to automatically change slides every 5 seconds.
const startSlideshow = () => {
  if (slideshowImages.value.length > 0) {
    slideInterval = setInterval(() => {
      currentSlide.value =
        (currentSlide.value + 1) % slideshowImages.value.length;
    }, 5000);
  }
};

// Manual slide controls:
const prevSlide = () => {
  if (slideshowImages.value.length > 0) {
    currentSlide.value =
      (currentSlide.value - 1 + slideshowImages.value.length) %
      slideshowImages.value.length;
  }
};

const nextSlide = () => {
  if (slideshowImages.value.length > 0) {
    currentSlide.value =
      (currentSlide.value + 1) % slideshowImages.value.length;
  }
};

// When the video ends, attempt to fetch images and then:
const onVideoEnded = async () => {
  showSlideshow.value = true; // Show the slideshow container
  await fetchInstagramImages();

  // If no images were found, wait 5 seconds and then replay the video.
  if (slideshowImages.value.length === 0) {
    console.log("No images found for hashtag. Replaying video in 5 seconds...");
    setTimeout(() => {
      showSlideshow.value = false;  // Hide slideshow (video element will be rendered)
      if (videoRef.value) {
        videoRef.value.currentTime = 0;
        videoRef.value.play().catch((error) => {
          console.warn("Error replaying video:", error);
        });
      }
    }, 5000);
  } else {
    // Otherwise, start the slideshow
    startSlideshow();
  }
};

// Update video source based on screen width.
const updateVideoSource = () => {
  const newVideo =
    window.innerWidth <= 768 ? props.mobileVideoSrc : props.desktopVideoSrc;
  if (currentVideo.value !== newVideo) {
    currentVideo.value = newVideo;
  }
};

watch(currentVideo, () => {
  if (videoRef.value) {
    videoRef.value.load();
  }
});

onMounted(() => {
  updateVideoSource();
  window.addEventListener("resize", updateVideoSource);

  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.warn("Autoplay prevented:", error);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        videoRef.value?.pause();
      } else {
        videoRef.value?.play().catch(() => {});
      }
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateVideoSource);
  if (slideInterval) clearInterval(slideInterval);
});
</script>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.slide.active {
  opacity: 1;
}
/* Carousel control buttons */
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
}
.prev-btn {
  left: 1rem;
}
.next-btn {
  right: 1rem;
}
.prev-btn:hover,
.next-btn:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Adjust text overlay for small screens */
@media (max-width: 768px) {
  .text-overlay {
    justify-content: flex-end; /* Moves the content towards the bottom */
    padding-bottom: 0rem; /* Adds spacing at the bottom */
  }

  .diagonal-overlay {
    height: auto; /* Adjust height if necessary */
    padding: 1rem; /* Add padding to give more space */
  }

  .text-overlay p {
    font-size: 1.5rem; /* Reduce headline font size for better fit */
    padding-bottom: 1rem; /* Add spacing between headline and button */
  }

  .relative button {
    margin-top: 1rem; /* Add margin to move the button further down */
  }
}

</style>
