<template>
  <popup-form-control>
    <input
      type="text"
      :name="name"
      id="input"
      class="w-full"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </popup-form-control>
</template>

<script>
import PopupFormControl from "./PopupFormControl";
import PopupLabel from "./PopupLabel";
export default {
  name: "PopupInput",
  props: ["name", "placeholder", "value"],
  components: {
    PopupLabel,
    PopupFormControl,
  },
};
</script>

<style scoped></style>
