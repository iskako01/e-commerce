<template>
  <div class="product">
    <div class="product__info">
      <div class="product__img">
        <img :src="cart.currentProduct.imageUrl" alt="" />
      </div>
      <div class="product__name">
        <div class="name">{{ cart.currentProduct.title }}</div>
        <div class="type"></div>
        <q-btn>Remove</q-btn>
      </div>
    </div>

    <div class="quantity">
      <q-btn class="quantity__btn" label="+" @click="plus" />
      <div>{{ count }}</div>
      <q-btn label="-" @click="minus" />
    </div>

    <div class="price-vat">{{ cart.currentProduct.price }} KČ</div>
    <div class="price">{{ cart.sale }} KČ</div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "TheProduct",
  props: {
    cart: {
      type: Object,
    },
  },
  setup() {
    let count = ref(100);
    const minus = () => {
      count.value--;
    };
    const plus = () => {
      count.value++;
    };

    return { minus, plus, count };
  },
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
}
.quantity {
  display: flex;
}
.quantity__btn {
  border: none;
}
</style>
