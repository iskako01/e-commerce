<template>
  <q-page class="flex flex-center">
    <div class="header">
      <img :src="require('../assets/header/header.png')" />
    </div>
    <div class="container">
      <div class="title">Welcome to Tintoy Shop!</div>

      <div class="column items-center">
        <div class="q-pa-md row items-center q-gutter-md">
          <div class="text__left q-gutter-md">
            <div>
              We are a tiny store with nice toys the small and big ones can
              enjoy whithout thinking they are not suited to do so. Based in
              Prague we offer a varietyof products which range from absolutely
              adorable toys to things which just make you go WHOA!
            </div>
            <div>
              Anyway - we are glad you came to our website and feel free to
              check our product catalogue below.
            </div>
          </div>
          <div class="text__right q-gutter-md">
            <div>
              Once you have decided which of the products you like the most,
              place it into the shopping cart by clicking the "Buy" button.
              After that there are several options you might want to explore:
            </div>
            <div>
              Adding another product into the cart (even multiple ones) Search
              through the product names or descriptions using the search field
              Checking the cart by clicking the cart icon, going back or
              completing your order
            </div>
          </div>
        </div>
      </div>

      <div class="title">Let's play all day</div>

      <div>
        This is basically our motto and we tend to live by that. If anyone tells
        us differently, we will probably just ignore that and move on. Ooooor...
        we might show them one of our fine products so he/she might get also
        fascinated by our toys. Check our featured collection!fds
      </div>

      <div padding class="column items-center">
        <div class="q-pa-md row items-center q-gutter-md">
          <TheCard v-for="n in 3" :key="n" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import TheCard from "../components/TheCard.vue";

export default {
  name: "IndexPage",
  components: { TheCard },
};
</script>
<style scoped>
.container {
  max-width: 1128px;
  padding: 13px;
}

img {
  width: 100%;
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  color: #333333;
  padding: 24px 0 24px 0;
}
.text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0 11px 0;
}
.text__right {
  padding: 12px;
}
.text__left {
  padding: 12px;
}
</style>
