<template>
  <div class="flex flex-col w-2/12 items-center min-h-screen bg-gray-600">
    <ul class="w-full mt-6">
      <li class="">
        <nuxt-link
          to="/subject"
          class="text-gray-400 block w-full hover:bg-gray-800 hover:text-white py-2 pl-4"
          >Списак предмета</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/classroom"
          class="text-gray-400 block w-full hover:bg-gray-800 hover:text-white py-2 pl-4"
          >Одељења</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app-sidebar",
  data() {
    return {
      classroom: null,
    };
  },
  methods: {
    classroomSelected() {
      this.$store.dispatch("loadStudentsForClassroom", {
        id: this.classroom,
      });
    },
  },
  computed: {
    ...mapGetters({
      classrooms: "classrooms",
    }),
  },
};
</script>

<style scoped></style>
