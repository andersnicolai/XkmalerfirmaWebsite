// main.js
import { createApp } from 'vue';
import ConstructionApp from './ConstructionApp.vue'; // Import the DentalApp component as the root component
import router from './router'; // Ensure the router is properly imported
import './style.css';
import './index.css';

// Create a Vue application with DentalApp as the root component
const app = createApp(ConstructionApp);
app.use(router);
app.mount('#app');
