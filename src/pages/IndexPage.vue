<template>
  <q-page class="flex flex-center">
    <div class="cart" @click="openCart">
      <span class="cart__name">{{ totalQuantity }}</span>
    </div>
    <div class="container">
      <TheContent />

      <div class="separator">
        <div class="separator__title">FEATURED COLLECTION</div>
      </div>

      <div class="vertical__row">
        <div class="vertical__column">
          <TheCard :card="card" v-for="card in cards" :key="card.id" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import TheCard from "../components/TheCard.vue";
import TheContent from "../components/TheContent.vue";

export default {
  name: "IndexPage",
  components: { TheCard, TheContent },

  setup() {
    const store = useStore();
    const router = useRouter();

    const cart = computed(() => store.state.cart.cart);

    const cards = store.state.cards.cards;

    const totalQuantity = computed(() => {
      return store.getters.totalQuantity(cart.value);
    });

    // const addCart = () => {
    // //   let id = currentProduct.id;
    // //   cart.value.push(currentProduct);

    //   console.log("cart", cart.value);
    //   console.log("card", cards);
    // };

    const openCart = () => {
      //   store.dispatch("dataCart", cart.value);

      router.push({ name: "shopping_cart" });
    };

    onMounted(async () => {
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

    return { cards, openCart, totalQuantity };
  },
};
</script>
<style>
.cart {
  width: 50px;
  height: 50px;

  background: #ccc;
}
.container {
  max-width: 1133px;
  padding: 13px;
}
.separator {
  width: 100%;
  max-width: 744px;
  margin: 0 auto;
}
.separator__title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: flex-center;
  justify-content: center;
  border-bottom: 2px solid #333333;
  color: #333333;
}

.vertical__row {
  display: flex;
}
.vertical__column {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 106px;
}

img {
  width: 100%;
}
.cards {
  margin-top: 108px;
  display: flex;
  justify-content: center;
}
</style>
