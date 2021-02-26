<template>
  <app-container>
    <app-aside>
      <template #header>
        {{ student.first_name }} {{ student.last_name }}</template
      >
      <template #subheader
        >{{ classroom.name }}({{ classroom.study_duration }})</template
      >
      <template>
        <div class="flex justify-center m-2">
          <h3 class="text-gray-100">
            Индекс одељења:
            <span class="font-semibold text-gray-200">{{
              classroom.class_number
            }}</span>
          </h3>
        </div>
        <div class="flex justify-center m-2">
          <h3 class="text-gray-100">
            Година уписа:
            <span class="font-semibold text-gray-200">{{
              classroom.year_started
            }}</span>
          </h3>
        </div>
        <student-pagination></student-pagination>
        <div class="flex justify-center flex-col space-y-2">
          <popup-button :mode="'btn-green'"
            >Додај личне податке за ученика</popup-button
          >
          <popup-button :mode="'btn-green'">Додај оцене</popup-button>
          <popup-button :mode="'btn-green'">Додај из фајла</popup-button>
        </div>
      </template>
    </app-aside>
    <student-container>
      <student-header :student="student"></student-header>
      <student-personal
        :student="student"
        :classroom="classroom"
      ></student-personal>
      <student-marks :student="student" :classroom="classroom"> </student-marks>
    </student-container>
    <popop-card v-if="popupPersonalData"></popop-card>
    <popop-card v-if="popupAddMarks"></popop-card>
    <popop-card v-if="popupAddMarksFromFile"></popop-card>
  </app-container>
</template>

<script>
import { mapGetters } from "vuex";
import AppAside from "@/components/layout/AppAside";
import StudentContainer from "@/components/Student/StudentContainer";
import StudentHeader from "@/components/Student/StudentHeader";
import StudentPersonal from "@/components/Student/StudentPersonal";
export default {
  components: {
    AppAside,
    StudentPersonal,
    StudentHeader,
    StudentContainer,
  },
  async asyncData({ store, route }) {
    await store.dispatch("loadStudent", {
      id: route.params.student,
    });
    await store.dispatch("loadClassroom", {
      id: route.params.classroom,
    });
  },
  computed: {
    ...mapGetters({
      student: "student",
      classroom: "classroom",
    }),
  },
};
</script>
