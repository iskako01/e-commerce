<template>
  <TheModal :isOpen="isOpen" />
  <div class="q-pa-md container">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      active-icon="none"
      active-color="black"
      done-color="grey"
      animated
    >
      <q-step :name="1" prefix="1" :done="step > 1" title="">
        <TheProducts />
      </q-step>

      <q-step color="grey" :name="2" prefix="2" title="" :done="step > 2">
        <TheForm @on-submit="btnNext" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            flat
            outline
            style="color: #333333; border: 1px solid #333333"
            icon="arrow_back"
            @click="btnPrevious"
            label="go Back"
            class="q-ml-sm"
          ></q-btn>
          <q-btn
            @click="btnNext"
            color="black"
            :icon-right="step === 2 ? 'check' : 'arrow_forward'"
            :label="step === 2 ? 'CONFIRM' : 'CHECKOUT'"
          ></q-btn>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import TheProducts from "../components/TheProducts.vue";
import TheForm from "../components/TheForm.vue";
import TheModal from "../components/TheModal.vue";
export default {
  name: "ShoppingCart",
  components: { TheProducts, TheForm, TheModal },

  setup() {
    const router = useRouter();
    const store = useStore();
    const step = ref(1);
    const stepper = ref();

    const isOpen = ref(false);

    const cart = store.state.cart.cart;

    const btnNext = (userData) => {
      if (step.value === 1) {
        stepper.value.next();
      } else {
        isOpen.value = !isOpen.value;
        console.log(userData);
      }
    };
    const btnPrevious = () => {
      if (step.value === 1) {
        router.push({ name: "home" });
      }
      stepper.value.previous();
    };

    const onSubmit = (userData) => {
      console.log(userData);
    };

    return {
      step,
      stepper,
      btnNext,
      btnPrevious,
      onSubmit,
      isOpen,
    };
  },
};
</script>

<style>
.container {
  max-width: 1133px;
  padding: 13px;
  margin: 0 auto;
}
.q-stepper__nav {
  padding: 0 24px 24px;
  justify-content: space-between;
  display: flex;
}
</style>
