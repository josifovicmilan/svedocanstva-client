<template>
  <div class="flex flex-1 flex-col">
    <div class="flex justify-between m-4">
      <h2 class="uppercase text-lg text-gray-700 font-semibold">
        Списак одељења
      </h2>
      <popup-button :mode="'btn-blue'" @click.native="openPopup">
        Додај одељење
      </popup-button>
    </div>
    <div class="grid grid-cols-3">
      <classroom-item
        v-for="classroom in classrooms"
        :key="classroom.id"
        :classroom="classroom"
      ></classroom-item>
    </div>
    <popup-card v-if="popup">
      <template #heading>Додај ново одељење</template>
      <template #form>
        <popup-form-group>
          <popup-label>Година уписа</popup-label>
          <popup-input
            :name="'year_started'"
            :placeholder="'Унесите годину уписа'"
            v-model="formInput.year_started"
          ></popup-input>
        </popup-form-group>
        <popup-form-group>
          <popup-label> Тип одељења</popup-label>
          <popup-option
            v-model="formInput.name"
            :options="classTypes"
            :name="'type'"
          ></popup-option>
        </popup-form-group>

        <popup-form-group>
          <popup-label> Индекс одељења</popup-label>
          <popup-option
            v-model="formInput.class_number"
            :options="classIndexes"
            :name="'type'"
          ></popup-option>
        </popup-form-group>

        <popup-form-group>
          <popup-button :mode="'btn-green'" @click.native="addClassroom">
            Додај Одељење
          </popup-button>
          <popup-button :mode="'btn-red'" @click.native="closePopup">
            Одбаци промене
          </popup-button>
        </popup-form-group>
      </template>
    </popup-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ClassroomItem from "./ClassroomItem";
import PopupCard from "../Utility/PopupCard";
export default {
  name: "ClassroomList",
  components: {
    ClassroomItem,
    PopupCard,
  },
  data() {
    return {
      formInput: {
        year_started: "",
        name: "",
        class_number: "",
      },
      classNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      popup: false,
      classTypes: [
        "природно-математички смер",
        "друштвено-језички смер",
        "одељење за ученике са посебним способностима за рачунарство",
        "филолошки смер",
      ],
    };
  },
  mounted() {
    this.$store.dispatch("loadClassrooms");
  },
  methods: {
    closePopup() {
      this.popup = false;
    },
    openPopup() {
      this.popup = true;
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
