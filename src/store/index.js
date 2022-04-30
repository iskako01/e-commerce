import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import cards from "./modules/cards.module";
import cart from "./modules/cart.module";

export default store(function () {
  const Store = createStore({
    modules: {
      cards,
      cart,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
