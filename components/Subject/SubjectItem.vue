<template>
  <li class="flex items-center text-gray-700 my-1 border-b">
    <div class="flex-grow flex">
      <span
        class="mx-4 cursor-pointer w-1/12"
        @dblclick="editSubject"
        v-if="!editing"
        >{{ subject.position }}.</span
      >
      <input
        class="mx-4 w-1/12 border border-gray-600 rounded"
        type="text"
        :value="subject.position"
        v-else
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        ref="position"
      />
      <span class="mr-2 w-6/12">{{ subject.name }}</span>
      <span class="w-5/12">{{ subject.type }}</span>
    </div>
    <div class="flex-shrink-0 mr-4">
      <svg class="arrow__up">
        <use xlink:href="~assets/img/stripe.svg#icon-arrow-right2"></use>
      </svg>
      <svg class="arrow__down">
        <use xlink:href="~assets/img/stripe.svg#icon-arrow-right2"></use>
      </svg>
    </div>
  </li>
</template>

<script>
export default {
  name: "SubjectItem",
  props: ["subject"],
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    editSubject() {
      this.editing = !this.editing;
      this.$nextTick(() => {
        this.$refs.position.focus();
      });
    },
    cancelEdit() {
      this.editing = false;
    },
    doneEdit() {
      this.$store
        .dispatch("updatePosition", {
          id: this.subject.id,
          position: this.$refs.position.value,
        })
        .then(() => {
          this.editing = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.arrow__up,
.arrow__down {
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  fill: #7f828b;
  &:hover {
    fill: #47494e;
  }
}
.arrow__up {
  transform: rotate(-90deg);
}
.arrow__down {
  transform: rotate(90deg);
}
</style>
