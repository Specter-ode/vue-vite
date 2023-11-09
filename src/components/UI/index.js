import UInput from "./UInput.vue";
import UButton from "./UButton.vue";

const components = [
  { name: "UInput", component: UInput },
  { name: "UButton", component: UButton },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
