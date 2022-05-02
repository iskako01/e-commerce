<template>
  <q-layout view="lHh lpr lFf" container style="height: 100vh">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white absolute">
      <div class="footer">
        Copyright © 2021 – Tintoy shop – All rights reserved
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped>
img {
  width: 100%;
}
.footer {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #333333;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
