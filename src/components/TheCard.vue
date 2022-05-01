<template>
  <q-card bordered class="my-card">
    <q-card-section class="title">
      <div>{{ card.title }}</div>
    </q-card-section>

    <q-separator dark inset></q-separator>

    <q-card-section>
      <img :src="card.imageUrl" />
    </q-card-section>

    <q-card-section class="descriptions">
      <div>{{ card.description }}</div>
    </q-card-section>

    <q-card-section>
      <q-card-section class="price">
        <div class="price">{{ card.price }} KČ</div>
      </q-card-section>

      <div class="purchase">
        <span
          >Sale:<span class="sale"> {{ sale }}KČ</span>
        </span>
        <q-btn color="black" @click="addToCart" label="Buy it now" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  emits: ["add-cart"],
  setup(props, { emit }) {
    const store = useStore();

    const sale = computed(() => props.card.price - props.card.price * 0.15);

    const productTotal = computed(() => {
      return store.getters.productQuantity(props.card);
    });

    const addToCart = () => {
      store.commit("addToCart", props.card);
    };

    return { sale, addToCart };
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  margin: 12px;
}
.title {
  flex: 1 1 auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
}
img {
  width: 100%;
  object-fit: cover;
}
.purchase {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.descriptions {
  flex: 1 1 auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #333333;
}
.sale {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.price {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ef4444;
  padding: 0;
  margin: 0;
}
</style>
