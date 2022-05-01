<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    onMounted(async () => {
      store.commit("updateCartFromLocalStorage");
      //   await fetch("https://zadani.zkus.it/api/products", {
      //     method: "GET",
      //     headers: {
      //       "X-Api-Key": "3a95z2n8",
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((data) => {
      //       console.log(data);
      //     });
    });
  },
});
</script>
