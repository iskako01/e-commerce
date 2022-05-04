<template>
  <div class="wrapper">
    <div class="cart">
      <q-btn
        flat
        class="icon"
        style="color: #333333; font-size: 23px"
        icon="shopping_cart"
      />
      <div class="span">{{ totalQuantity }}</div>
    </div>
    <div class="shopping-cart-header">
      <div class="header-title">Shopping Cart</div>
    </div>
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
          <q-form ref="myForm" class="form">
            <label for="firstName">First Name</label>
            <q-input
              outlined
              id="firstName"
              v-model="firstName"
              label="Enter your first name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            ></q-input>

            <label for="lastName">Last Name</label>
            <q-input
              outlined
              id="lastName"
              v-model="lastName"
              label="Enter your last name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            ></q-input>

            <label for="email">Email</label>
            <q-input
              outlined
              id="email"
              v-model="email"
              label="Enter your email"
              lazy-rules
              type="email"
              :rules="[(val) => !!val || 'Email is missing', isValidEmail]"
            ></q-input>

            <label for="date">Date</label>
            <q-input
              v-model="date"
              outlined
              mask="date"
              label="Select"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover :breakpoint="600">
                    <q-date v-model="date"></q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-form>
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
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import TheProducts from "../components/TheProducts.vue";
import TheModal from "../components/TheModal.vue";

export default {
  name: "ShoppingCart",
  components: { TheProducts, TheModal },

  setup() {
    const router = useRouter();
    const store = useStore();

    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const date = ref("");
    const step = ref(1);
    const stepper = ref();
    const isOpen = ref(false);
    const myForm = ref();

    const cart = computed(() => store.state.cart.cart);
    const totalQuantity = computed(() => {
      return store.getters.totalQuantity(cart.value);
    });

    const checkForm = () => {
      if (myForm.value) {
        myForm.value.validate().then((success) => {
          if (success) {
            const customerInfo = {
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
              data: date.value,
            };

            store
              .dispatch("onSubmit", customerInfo)
              .then(() => (isOpen.value = true));
          } else {
            console.log("error");
          }
        });
      }
    };

    const btnNext = () => {
      if (step.value === 1) {
        stepper.value.next();
      } else {
        checkForm();
      }
    };

    const btnPrevious = () => {
      if (step.value === 1) {
        router.push({ name: "home" });
      }
      stepper.value.previous();
    };

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Enter a valid email";
    };

    return {
      step,
      stepper,
      btnNext,
      btnPrevious,
      isOpen,
      totalQuantity,
      firstName,
      lastName,
      email,
      date,
      myForm,
      isValidEmail,
    };
  },
};
</script>

<style>
.span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 6px;
  left: 26px;
}
.cart {
  position: relative;
  top: 10px;
  left: 85%;
  width: 50px;
  height: 50px;
  padding-right: 7px;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
}
.wrapper {
  width: 100%;
  max-width: 1133px;
  margin: 0 auto;
}
.shopping-cart-header {
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid;
}
.header-title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  color: #333333;
}
.container {
  max-width: 946px;
  padding: 13px;
  margin: 0 auto;
}
.q-stepper--horizontal > .q-stepper__nav {
  padding: 12px;
  justify-content: space-between;
  display: flex;
}
.form {
  width: 100%;
  max-width: 360px;
}
@media screen and (max-width: 600px) {
  .header-title {
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
