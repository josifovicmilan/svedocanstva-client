<template>
  <app-container>
    <student-container>
      <div class="w-3/4 min-h-full border border-gray-300 p-2">
        <h1
          class="self-center my-4 flex justify-center items-center text-xl uppercase font-semibold text-gray-600"
        >
          {{ student.first_name }} {{ student.last_name }}
        </h1>
        <student-pagination></student-pagination>
        <student-header></student-header>
        <student-personal></student-personal>
        <student-marks></student-marks>
        <student-finished-year></student-finished-year>
        <student-final-exam></student-final-exam>
        <student-notes></student-notes>
      </div>
    </student-container>
  </app-container>
</template>

<script>
import { mapGetters } from "vuex";
import StudentContainer from "@/components/Student/StudentContainer";

export default {
  components: {
    StudentContainer,
  },
  mounted() {
    console.log(this.$route.params.studentId);
    this.$store.dispatch("loadStudent", {
      id: this.$route.params.studentId,
    });
  },
  computed: {
    ...mapGetters({
      student: "student",
    }),
  },
};
</script>

<style scoped></style>
