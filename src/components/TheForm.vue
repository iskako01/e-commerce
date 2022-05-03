<template>
  <div class="q-pa-md">
    <!-- <q-form @submit="btnNext" class="q-gutter-md">
      <label for="firstName">First Name</label>
      <q-input
        outlined
        id="firstName"
        v-model="firstName"
        label="Enter your first name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      ></q-input>

      <label for="lastName">Last Name</label>
      <q-input
        outlined
        id="lastName"
        v-model="lastName"
        label="Enter your last name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
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
      <div class="but">
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        ></q-btn>
      </div>
    </q-form> -->

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
      @before-transition="checkform1"
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="done1"
        :error="stateform1"
      >
        <q-form ref="myForm" class="q-gutter-md">
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
        </q-form>
        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done1 = true;
                step = 2;
              }
            "
            color="primary"
            label="Continue"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="done2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done2 = true;
                step = 3;
              }
            "
            color="primary"
            label="Continue"
          ></q-btn>
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Create an ad" icon="add_comment" :done="done3">
        text3

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish"></q-btn>
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  name: "TheForm",
  emits: ["on-submit"],
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      firstName: "",
      stateform1: false,
    };
  },
  methods: {
    reset() {
      this.done1 = false;
      this.done2 = false;
      this.done3 = false;
      this.step = 1;
      this.stateform1 = false;
      this.firstName = "";
    },
    checkform1() {
      if (this.$refs.myForm) {
        this.$refs.myForm.validate().then((success) => {
          if (success) {
            this.stateform1 = false;
          } else {
            this.stateform1 = true;
          }
        });
      }
    }, //this.step<3;
  },
};
</script>
