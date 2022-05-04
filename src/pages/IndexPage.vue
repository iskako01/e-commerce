<template>
  <div class="wrapper">
    <div class="header">
      <div class="cart" @click="openCart">
        <q-btn
          flat
          class="icon"
          style="color: white; font-size: 24px"
          icon="shopping_cart"
        />
        <div class="span">{{ totalQuantity }}</div>
      </div>
    </div>
    <q-page class="flex flex-center">
      <div class="container">
        <TheContent />

        <div class="separator">
          <div class="separator__title">FEATURED COLLECTION</div>
        </div>
        <div class="search-wrapper">
          <div class="search">
            <q-input
              outlined
              v-model="search"
              label="Search..."
              input-class="text-left"
            >
              <template v-slot:prepend>
                <q-icon v-if="search === ''" name="search"></q-icon>
                <q-icon
                  v-else
                  name="clear"
                  class="cursor-pointer"
                  @click="search = ''"
                ></q-icon>
              </template>
            </q-input>
          </div>
        </div>

        <div class="vertical__row">
          <div class="vertical__column">
            <TheCard :card="card" v-for="card in filterCards" :key="card.id" />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import TheCard from "../components/TheCard.vue";
import TheContent from "../components/TheContent.vue";
// import TheHeader from "../components/TheHeader.vue";

export default {
  name: "IndexPage",
  components: { TheCard, TheContent },

  setup() {
    const store = useStore();
    const router = useRouter();
    const search = ref("");
    const cart = computed(() => store.state.cart.cart);
    const cards = store.state.cards.cards;

    const filterCards = computed(() =>
      cards.filter((card) => {
        if (search.value) {
          return card.title.toUpperCase().includes(search.value.toUpperCase());
        }
        return card;
      })
    );

    const totalQuantity = computed(() => {
      return store.getters.totalQuantity(cart.value);
    });

    const openCart = () => {
      router.push({ name: "shopping_cart" });
    };

    onMounted(async () => {
      await fetch("https://zadani.zkus.it/api/products", {
        method: "GET",
        headers: {
          "X-Api-Key": "3a95z2n8",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    });

    return { filterCards, search, openCart, totalQuantity };
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 1352px;
  width: 100%;
  margin: 0 auto;
}
.header {
  width: 100%;
  min-height: 400px;
  background-image: url("https://www.theloadout.com/wp-content/uploads/2022/03/lego-star-wars-the-skywalker-saga-dlc-character-packs-the-mandalorian-season-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 6px;
  left: 26px;
}
.cart {
  position: relative;
  top: 25px;
  left: 82%;
  width: 50px;
  height: 50px;
  padding-right: 7px;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50px;
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
.search-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 34px 0 0 0;
}
.search {
  width: 264px;
}
@media screen and (max-width: 600px) {
  .search {
    width: 100%;
  }
  .separator__title {
    font-weight: 500;
    font-size: 20px;
  }
  .vertical__column {
    margin-top: 34px;
  }
}
</style>
