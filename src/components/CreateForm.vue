<script>
import { defineComponent, computed, reactive, ref } from "vue";
export default defineComponent({
  name: "CreateForm",
  setup() {
    const post = reactive({
      title: "",
      body: "",
    });
    const show = ref(false);

    const createPostInForm = () => {
      if (this.post.title && this.post.body) {
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
    };

    return { post, show, createPostInForm };
  },
});
</script>

<template>
  <form class="form" @submit.prevent>
    <p>Create CARD</p>
    <input
      class="input"
      type="text"
      placeholder="Title"
      v-model="post.title"
      name="title"
    />
    <UInput
      type="text"
      placeholder="Description"
      v-model="post.body"
      name="body"
    />
    <UButton @click="createPostInForm">Создать</UButton>
  </form>
</template>

<style scoped>
.form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.input {
  width: 400px;
  border: 1px solid gray;
  padding: 12px;
  border-radius: 8px;
  font-size: 18px;
}
</style>
