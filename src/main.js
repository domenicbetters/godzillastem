import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/index";
import "../src/assets/main.css"

const app = createApp(App);
app.use(router);
app.mount("#app");