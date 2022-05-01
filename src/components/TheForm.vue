<template>
  <div class="form">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @click="onSubmit" class="q-gutter-md">
        <label for="firstName">First Name</label>
        <q-input
          filled
          id="firstName"
          v-model="firstName"
          label="Enter your first name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        ></q-input>

        <label for="lastName">Last Name</label>
        <q-input
          filled
          id="lastName"
          v-model="lastName"
          label="Enter your last name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        ></q-input>

        <label for="email">Email</label>
        <q-input
          filled
          id="email"
          v-model="email"
          label="Enter your email"
          lazy-rules
          type="email"
          :rules="[(val) => !!val || 'Email is missing', isValidEmail]"
        ></q-input>

        <label for="date">Date</label>
        <q-input id="date" v-model="date" filled type="date"></q-input>
      </q-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  name: "TheForm",
  emits: ["on-submit"],
  setup(_, { emit }) {
    const $q = useQuasar();

    const firstName = ref(null);
    const lastName = ref(null);
    const email = ref(null);
    const date = ref(null);

    const onSubmit = () => {
      if (
        firstName.value !== "" &&
        lastName.value !== "" &&
        email.value !== "" &&
        date.value !== ""
      ) {
        const userData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          data: date.value,
        };
        emit("on-submit", userData);
        console.log("success", userData);
      }
    };

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Enter a valid email";
    };

    const onReset = () => {
      firstName.value = null;
      lastName.value = null;
      email.value = null;
      date.value = null;
    };

    return {
      firstName,
      lastName,
      email,
      date,
      onSubmit,
      onReset,
      isValidEmail,
    };
  },
};
</script>

<style></style>
