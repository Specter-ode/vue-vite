import { createApp } from "vue";
import App from "./App.vue";
import UIcomponents from "./components/UI";

import "./assets/main.css";

const app = createApp(App);
app.use(UIcomponents);
app.mount("#app");
