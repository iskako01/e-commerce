// import axios from "../../axios/request";
// import store from "../index";

export default {
  namespaced: false,
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    async dataCart({ commit }, cart) {
      commit("setCart", cart);
    },
  },
  getters: {},
};
