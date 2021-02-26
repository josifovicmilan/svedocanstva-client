<template>
  <div
    class="snackbar"
    :class="{ visible: snackbarVisible }"
    :style="{ backgroundColor: snackbarColor }"
  >
    <p class="snackbar__text">{{ snackbarContent }}</p>
    <span @click="closeSnack">
      <svg class="snackbar__icon">
        <use xlink:href="~/assets/img/stripe.svg#icon-cross"></use>
      </svg>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Snackbar",
  data() {
    return {
      snackbarColor: "#eee",
      snackbarContent: "",
      snackbarVisible: false,
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if ((mutation.type = "snackbar/showMessage")) {
        this.snackbarVisible = this.$store.getters["snackbar/getVisibility"];
        this.snackbarContent = this.$store.getters["snackbar/getContent"];
        this.snackbarColor = this.$store.getters["snackbar/getColor"];
      }
    });
  },
};
</script>

<style scoped></style>
