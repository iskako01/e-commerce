<template>
  <div class="products">
    <div class="cart-table">
      <div class="cart-titles">
        <div class="title">
          <div>PRODUCT DETAILS</div>
          <div class="">QUANTITY</div>
        </div>
        <div class="t2">
          <div>PRICE WITHOUT VAT</div>
          <div>PRICE</div>
        </div>
      </div>

      <div class="cart-body" v-for="product in cart" :key="product.id">
        <div class="product-details">
          <div class="product-info">
            <div class="product-img">
              <img :src="product.imageUrl" alt="" />
            </div>

            <div class="product-name">
              <div class="name">
                {{ product.title }}
                <div class="type">Lego</div>
              </div>

              <button class="t-btn" @click="removeFromCart(product)">
                Remove
              </button>
            </div>
          </div>

          <div class="quantity">
            <button class="quantity-btn" @click="plus(product)">+</button>
            <div class="count">{{ product.quantity }}</div>
            <button class="quantity-btn" @click="minus(product)">-</button>
          </div>
        </div>
        <div class="product-price">
          <div class="product-vatname">
            <div>PRICE W/O VAT</div>
            {{ product.price - product.price * 0.15 }} KČ
          </div>
          <div class="price">{{ product.price }} KČ</div>
        </div>
      </div>
    </div>

    <div class="total">
      <div class="block-left">
        <div class="total-price"></div>
        <div class="total-price">
          <div class="price-title">QUANTITY</div>
          <div class="price-number">{{ totalQuantity }}</div>
        </div>
      </div>
      <div class="block-right">
        <div class="total-price">
          <div class="price-vat-title">PRICE W/O VAT:</div>
          <div class="price-vat-number">{{ totalPriceVat }} KČ</div>
        </div>
        <div class="total-price">
          <div class="price-title">TOTAL PRICE:</div>
          <div class="price-number">{{ totalPrice }} KČ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TheProduct from "../components/TheProduct.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "TheProducts",
  components: {},
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart.cart);

    const priceVat = computed(() => {
      return store.getters.priceVat(cart.value);
    });
    const totalPriceVat = computed(() => {
      return store.getters.totalPriceVat(cart.value);
    });
    const totalQuantity = computed(() => {
      return store.getters.totalQuantity(cart.value);
    });
    const totalPrice = computed(() => {
      return store.getters.totalPrice(cart.value);
    });

    const plus = (product) => {
      store.commit("addToCart", product);
    };
    const minus = (product) => {
      store.commit("removeFromCart", product);
    };
    const removeFromCart = (product) => {
      store.commit("removeFromCart", product);

      console.log(cart);
    };

    return {
      cart,
      minus,
      plus,
      removeFromCart,
      totalQuantity,
      totalPrice,
      priceVat,
      totalPriceVat,
    };
  },
};
</script>

<style scoped>
.cart-body {
  display: flex;
  justify-content: space-between;
  padding: 24px 0 24px 0;
  border-bottom: 1px solid #9ca3af;
}

.cart-titles {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9ca3af;
  padding: 0 0 16px 0;
}
.title {
  width: 50%;
  display: flex;
  font-family: "Poppins";
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #9ca3af;
}
.t2 {
  width: 50%;
  display: flex;
  font-family: "Poppins";
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #9ca3af;
  padding: 0 0px 0 138px;
}

.product-details {
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 0 16px 0 0;
}
.product-price {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.t-price {
  display: flex;
  justify-content: space-between;
}
.t-btn {
  margin-top: 27px;
  border: none;
  width: 70px;
  background-color: transparent;
  color: #9ca3af;
  border-bottom: 2px solid #3333;
}

.cart-table {
  table-layout: auto;
  width: 100%;
  /* border-collapse: collapse; */
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
.product-info {
  display: flex;
  max-width: 300px;
}
img {
  width: 110px;
  height: 108px;
  margin-right: 16px;
}
.product-vatname {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 0px 0 138px;
}
.product-btn {
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
.quantity-btn {
  font-size: 25px;
  border: none;
  font-weight: bold;
  background-color: transparent;
}
.count {
  padding: 0 5px 0 5px;
}

.total {
  display: flex;
}
.block-left {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}
.block-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 0 0px 0 138px;
}

@media screen and (max-width: 800px) {
  .cart-titles {
    flex-direction: column;
  }
  .title {
    width: 100%;
  }
  .t2 {
    display: none;
  }
  .cart-body {
    flex-direction: column;
  }
  .product-details {
    width: 100%;
  }
  .product-price {
    width: 100%;
  }
  img {
    width: 86px;
    height: 86px;
  }
  .block-left {
    display: none;
  }
  .block-right {
    width: 100%;
    padding: 0;
  }
  .product-vatname {
    padding: 0;
  }
}
</style>
