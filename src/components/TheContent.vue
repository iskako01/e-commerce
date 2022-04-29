<template>
  <div class="content">
    <div class="title">Welcome to Tintoy Shop!</div>

    <div class="content__block">
      <div class="text">
        <p>
          We are a tiny store with nice toys the small and big ones can enjoy
          whithout thinking they are not suited to do so. Based in Prague we
          offer a varietyof products which range from absolutely adorable toys
          to things which just make you go WHOA!
        </p>
        <p>
          Anyway - we are glad you came to our website and feel free to check
          our product catalogue below.
        </p>
      </div>

      <div class="text">
        <p>
          Once you have decided which of the products you like the most, place
          it into the shopping cart by clicking the "Buy" button. After that
          there are several options you might want to explore:
        </p>
        <p>
          Adding another product into the cart (even multiple ones) Search
          through the product names or descriptions using the search field
          Checking the cart by clicking the cart icon, going back or completing
          your order
        </p>
      </div>
    </div>

    <div class="tilte__bottom">Let's play all day</div>
    <p>
      This is basically our motto and we tend to live by that.
      <span
        >If anyone tells us differently, we will probably just ignore that and
        move on.</span
      >
      Ooooor... we might show them one of our fine products so he/she might get
      also fascinated by our toys. Check our featured collection!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  width: 100%;
  margin-bottom: 96px;
}
.content__block {
  display: flex;
  justify-content: space-between;
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  color: #333333;
  padding: 11px 0 0 0;
}
.tilte__bottom {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #333333;
  /* padding: 0 0 16px 0; */
}
.text {
  width: 100%;
  max-width: 532px;
  padding: 10px;
}
p {
  padding: 16px 0 0 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #333333;
}
p span {
  font-weight: 800;
}
@media screen and (max-width: 600px) {
  .content__block {
    flex-direction: column;
  }
}
</style>
