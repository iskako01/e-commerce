// import axios from "../../axios/request";
// import store from "../index";

const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default {
  namespaced: false,
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
        console.log(state.cart);
      }

      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product) {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          console.log(item.quantity);
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
          console.log(state.cart);
        }
      }
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
    cleanCart(state) {
      state.cart = [];
      updateLocalStorage(state.cart);
    },
  },
  actions: {
    onSubmit({ state, commit }, customerInfo) {
      console.log(state.cart);
      const productInfo = state.cart.map((i) => {
        let item = { id: i.id, quantity: i.quantity };
        return item;
      });
      let totalInfo = {
        product: productInfo,
        customerInfo: customerInfo,
      };
      console.log(totalInfo);
      commit("cleanCart");
    },
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return null;
    },

    totalQuantity: (state) => (product) => {
      const quantity = product.map((i) => i.quantity);
      let total = 0;

      quantity.forEach((element) => {
        total += element;
      });
      return total;
    },
    totalPrice: (state) => (product) => {
      const price = product.map((i) => i.price * i.quantity);
      let total = 0;

      price.forEach((element) => {
        total += element;
      });
      return total;
    },
    totalPriceVat: (state) => (product) => {
      const price = product.map((i) => (i.price - i.price * 0.1) * i.quantity);
      let total = 0;

      price.forEach((element) => {
        total += element;
      });
      return total;
    },
  },
};
