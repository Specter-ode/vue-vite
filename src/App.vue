<script setup>
import { ref } from "vue";
import CreateForm from "./components/CreateForm.vue";
const count = ref(1);
const increment = () => {
  count.value += 1;
};

const users = ref([
  { id: 1, name: "reew", age: 20 },
  { id: 2, name: "rfasasdew", age: 26 },
  { id: 3, name: "rehbegg", age: 35 },
]);
</script>

<template>
  <div>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
  </div>

  <ul>
    <li v-for="user in users" :key="user.id">
      <p>
        {{ user.name }} <sup>{{ user.age }}</sup>
      </p>
    </li>
  </ul>
  <CreateForm />
</template>

<style scoped></style>
