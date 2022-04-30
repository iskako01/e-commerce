<template>
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
        <TheForm />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            color="black"
            @click="btnPrevious"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
          <q-btn
            @click="btnNext"
            :label="step === 2 ? 'Finish' : 'Continue'"
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
export default {
  name: "ShoppingCart",
  components: { TheProducts, TheForm },

  setup() {
    const router = useRouter();
    const store = useStore();
    const step = ref(1);
    const stepper = ref();

    const cart = store.state.cart.cart;

    const btnNext = () => {
      stepper.value.next();
    };
    const btnPrevious = () => {
      if (step.value === 1) {
        router.push({ name: "home" });
      }
      stepper.value.previous();
    };

    return {
      step,
      stepper,
      btnNext,
      btnPrevious,
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
</style>
