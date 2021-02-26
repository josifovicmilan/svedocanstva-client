<template>
  <div class="flex flex-1 flex-col">
    <div class="flex justify-between m-4">
      <h2 class="uppercase text-lg text-gray-700 font-semibold">
        Списак предмета
      </h2>
      <popup-button :mode="'btn-blue'" @click.native="openPopup">
        Додај предмет
      </popup-button>
    </div>
    <popup-card v-if="popup">
      <template #heading> Додај нови предмет </template>
      <template #form>
        <popup-form-group>
          <popup-label>Име предмета</popup-label>
          <popup-input
            :name="'name'"
            :placeholder="'Унесите име предмета'"
            v-model="formInput.name"
          ></popup-input>
        </popup-form-group>

        <popup-form-group>
          <popup-label> Тип предмета</popup-label>
          <popup-option
            v-model="formInput.type"
            :options="options"
            :name="'type'"
          ></popup-option>
        </popup-form-group>
        <popup-form-group>
          <popup-button :mode="'btn-green'" @click.native="addSubject">
            Додај предмет
          </popup-button>
          <popup-button :mode="'btn-red'" @click.native="closePopup">
            Одбаци промене
          </popup-button>
        </popup-form-group>
      </template>
    </popup-card>
    <ul class="m-8 border bg-gray-50">
      <subject-item
        v-for="subject in subjects"
        :key="subject.id"
        :subject="subject"
      ></subject-item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubjectItem from "./SubjectItem";
import PopupCard from "../Utility/PopupCard";
import PopupInput from "../Utility/PopupInput";
import PopupFormGroup from "../Utility/PopupFormGroup";
import PopupButton from "../Utility/PopupButton";
import PopupOption from "../Utility/PopupOption";
export default {
  name: "SubjectList",
  components: {
    SubjectItem,
    PopupCard,
    PopupInput,
    PopupFormGroup,
    PopupButton,
    PopupOption,
  },
  data() {
    return {
      formInput: {
        name: "",
        type: "",
      },
      popup: false,
      options: ["обaвезни", "изборни"],
    };
  },
  methods: {
    addSubject() {
      this.$store
        .dispatch("addSubject", {
          name: this.formInput.name,
          type: this.formInput.type,
        })
        .then(() => {
          this.formInput.name = "";
          this.formInput.type = "";
          this.popup = false;
        });
    },
    closePopup() {
      this.popup = false;
    },
    openPopup() {
      this.popup = true;
    },
  },
  mounted() {
    this.$store.dispatch("loadSubjects");
  },
  computed: {
    ...mapGetters({ subjects: "subjects" }),
  },
};
</script>

<style scoped lang="scss">
svg {
  height: 1rem;
  width: 1rem;
  fill: white;
}
</style>
