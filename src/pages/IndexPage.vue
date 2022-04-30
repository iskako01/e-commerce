<template>
  <q-page class="flex flex-center">
    <div class="cart" @click="openCart">
      <span class="cart__name">{{ count }}</span>
    </div>
    <div class="container">
      <TheContent />

      <div class="separator">
        <div class="separator__title">FEATURED COLLECTION</div>
      </div>

      <div class="vertical__row">
        <div class="vertical__column">
          <TheCard
            :card="card"
            @add-cart="addCart"
            v-for="card in cards"
            :key="card.id"
          />
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

    const cart = ref([]);

    const cards = store.state.cards.cards;

    const addCart = (currentProduct) => {
      cart.value.push(currentProduct);

      console.log(cart.value);
    };

    const openCart = () => {
      store.dispatch("dataCart", cart.value);

      router.push({ name: "shopping_cart" });
    };

    const count = computed(() => cart.value.length);
    // onMounted(async () => {
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
    // });

    return { cards, count, addCart, openCart };
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
