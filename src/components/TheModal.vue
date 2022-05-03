<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog :model-value="isOpen" @click="$router.push({ name: 'home' })">
      <q-card class="modal-card">
        <div class="close-btn" @click="$router.push({ name: 'home' })">
          <q-btn icon="close" flat round dense v-close-popup></q-btn>
        </div>

        <q-card-section class="row items-center q-pb-none modal-header">
          <div class="modal-header">
            <q-avatar icon="check" color="green" text-color="white"></q-avatar>
            <div class="text-h6" style="padding: 16px 0 0 0">
              Your order has been received
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="modal-body">Please check your email for details</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "TheModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal-card {
  width: 410px;
}
.close-btn {
  justify-content: flex-end;
  display: flex;
}

.modal-header {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-body {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
