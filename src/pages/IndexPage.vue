<template>
  <q-page class="flex flex-center">
    <div class="header">
      <img :src="require('../assets/header/header.png')" />
    </div>
    <div class="container">
      <!-- <div class="column items-center">
        <div class="q-pa-md row items-center q-gutter-md"> -->
      <TheContent />
      <!-- </div>
      </div> -->

      <div class="separator">
        <div class="separator__title">FEATURED COLLECTION</div>
      </div>

      <!-- <div padding class="column items-center">
        <div class="q-pa-md row items-center q-gutter-md"> -->
      <div class="cards row items-center q-gutter-md">
        <TheCard v-for="n in 3" :key="n" />
      </div>

      <!-- </div>
      </div> -->
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import TheCard from "../components/TheCard.vue";
import TheContent from "../components/TheContent.vue";

export default {
  name: "IndexPage",
  components: { TheCard, TheContent },
};
</script>
<style scoped>
.container {
  max-width: 1128px;
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

img {
  width: 100%;
}
.cards {
  margin-top: 108px;
  display: flex;
  justify-content: center;
}
</style>
