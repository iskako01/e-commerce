<template>
  <div class="products">
    <table class="table">
      <thead>
        <tr>
          <th>PRODUCT DETAILS</th>
          <th>QUANTITY</th>
          <th>PRICE WITHOUT VAT</th>
          <th>PRICE</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in cart" :key="product.id">
          <td>
            <div class="product__info">
              <div class="product__img">
                <img :src="product.currentProduct.imageUrl" alt="" />
              </div>
              <div class="product__name">
                <div class="name">
                  {{ product.currentProduct.title }}
                  <div class="type">Lego</div>
                </div>

                <button class="product__btn">Remove</button>
              </div>
            </div>
          </td>
          <td>
            <div class="quantity">
              <button class="quantity__btn" @click="plus">+</button>
              <div class="count">{{ count }}</div>
              <button class="quantity__btn" @click="minus">-</button>
            </div>
          </td>
          <td>
            <div class="price-vat">{{ product.currentProduct.price }} KČ</div>
          </td>
          <td>
            <div class="price">{{ product.sale }} KČ</div>
          </td>
        </tr>
      </tbody>
      <thead class="tb">
        <tr>
          <th></th>
          <th class="th-total">QUANTITY</th>
          <th class="th-vat">PRICE W/O VAT:</th>
          <th class="th-total">TOTAL PRICE:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>123</td>
          <td>456</td>
          <td>567</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import TheProduct from "../components/TheProduct.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "TheProducts",
  components: {},
  setup() {
    const router = useRouter();
    const store = useStore();

    let count = ref(1);
    const minus = () => {
      count.value--;
    };
    const plus = () => {
      count.value++;
    };

    const cart = store.state.cart.cart;
    return { cart, minus, plus, count };
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  /* border-collapse: collapse; */
}

.table th {
  padding: 0.5rem 1rem;
}

.table td {
  padding: 0.5rem 1rem;
}

.table tbody td {
  text-align: center;
}

.table tbody tr:hover {
  border-top: 1px solid #d1d5db;
}
.table tbody tr {
  border-top: 1px solid #d1d5db;
}

.th-total {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #333333;
}
.th-vat {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #9ca3af;
}
.product__info {
  display: flex;
}
img {
  width: 110px;
  height: 108px;
  margin-right: 16px;
}
.product__name {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.product__btn {
  margin-top: 37px;
  border: none;
  width: 70px;
  background-color: transparent;
  color: #9ca3af;
  border-bottom: 2px solid #3333;
}
.quantity {
  display: flex;
  align-items: center;
}
.quantity__btn {
  font-size: 25px;
  border: none;
  font-weight: bold;
  background-color: transparent;
}
.count {
  padding: 0 5px 0 5px;
}
/* .products {
  width: 100%;
  max-width: 936px;
  margin: 0 auto;
}
.products__title {
  display: flex;
  justify-content: space-between;
} */
</style>
