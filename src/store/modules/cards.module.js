// import axios from "../../axios/request";
// import store from "../index";

export default {
  namespaced: false,
  state() {
    return {
      cards: [
        {
          id: 1,
          title:
            "Stormtrooper - Lego [středně limitovaná edice, která není až tak vzácná]",
          description:
            "Lego stormtrooper. Vyznačuje se tím, že se nedovede nikam trefit.",
          imageUrl: "https://zadani.zkus.it/img/ship-item-01.jpg",
          price: 1580,
        },
        {
          id: 2,
          title: "Bolek a Lolek",
          description:
            "Bolek a Lolek - klasické retro ve vinylovém provedení. Ocení každý sběratel, kterému je více než 40 let. 😉 (obsahuje obě figurky)",
          imageUrl: "https://zadani.zkus.it/img/ship-item-02.jpg",
          price: 19999,
        },
        {
          id: 3,
          title: "Pink Dino",
          description:
            "Na pomezí vánoční ozdoby a velkého kýče je tento růžový tyranosaurus, který může díky své nízké hmotnosti viset prakticky na kterékoliv větvičce vašeho tématického stromku.",
          imageUrl: "https://zadani.zkus.it/img/ship-item-03.jpg",
          price: 2980,
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {},
};
