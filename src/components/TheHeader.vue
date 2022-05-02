<template>
  <div class="wrapper">
    <div class="header">
      <div class="cart">
        <div class="icon"></div>

        <div class="span">1</div>
      </div>
      <img :src="require('../assets/header/header.png')" />
    </div>
  </div>
  <!-- <div class="header">
    <q-responsive :ratio="16 / 9" class="col">
      <q-card class="column">
        <q-img
          class="col"
          :src="require('../assets/header/header.png')"
        ></q-img>
      </q-card>
    </q-responsive>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  /* width: 100%;
  max-width: 1372px;
  min-height: 400px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(../assets/header/header.png); */
}
.wrapper {
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ccc;
}
.header {
  max-width: 1352px;
  width: 100%;
  margin: 0 auto;
  display: block;
}
.header img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -3px;
  left: 33px;
}
.cart {
  position: relative;
  top: 10%;
  left: 80%;
  width: 50px;
  height: 50px;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #443335;
}
@media screen and (max-width: 600px) {
}
</style>
