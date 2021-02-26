<template>
  <div class="m-4 border-2 bg-white justify-center p-4">
    <div class="flex justify-end mb-4">
      <popup-button :mode="'btn-green'">
        <svg
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </popup-button>
    </div>
    <ul class="flex flex-col text-sm">
      <li class="flex">
        <span class="w-1/2">Година уписа: </span>
        <span class="w-1/2 text-right">{{ classroom.year_started }}</span>
      </li>
      <li class="flex">
        <span class="w-1/2">Смер одељења:</span>
        <span class="w-1/2 text-right">{{ classroom.name }}</span>
      </li>
      <li class="flex">
        <span class="w-1/2">Индекс одељења:</span>
        <span class="w-1/2 text-right">{{ classroom.class_number }}</span>
      </li>
    </ul>
    <div class="flex justify-end mt-4">
      <inline-link :href="`/classroom/${classroom.id}`">
        Прикажи одељење
      </inline-link>
    </div>
  </div>
</template>

<script>
import PopupButton from "../Utility/PopupButton";
import InlineLink from "../Utility/InlineLink";
export default {
  name: "ClassroomItem",
  props: ["classroom"],
  components: {
    PopupButton,
    InlineLink,
  },
  methods: {},
};
</script>

<style scoped></style>
