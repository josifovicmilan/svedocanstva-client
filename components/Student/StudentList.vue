<template>

    <ul class="flex flex-col">
      <li v-for="student in students" :key="student.id" class="">
        <nuxt-link
          :to="`/classroom/${student.classes_id}/student/${student.id}`"
          class="flex-1 pl-4 py-2 text-gray-200 block text-sm hover:bg-gray-400 hover:text-white"
        >
          {{ student.first_name }} {{ student.last_name }}
        </nuxt-link>
      </li>
    </ul>

</template>

<script>
export default {
  name: "StudentList",
  props: ["students"],

};
</script>

