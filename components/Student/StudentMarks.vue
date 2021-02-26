<template>
  <div>
    <div class="border-b-2 text-center">
      <h2 class="text-lg font-semibold uppercase m-2">
        Успех ученика по разреду и предметима/програмима/активностима
      </h2>
    </div>
    <ul>
      <li class="grid grid-cols-10">
        <span class="col-start-1 col-end-5 border font-semibold"
          >Школска година</span
        >
        <span class="border font-semibold" v-for="(item) in classroom.years_active"> {{item}}</span>

        <span class="col-start-9 col-end-10 border font-semibold">/</span>
        <span class="col-start-10 col-end-11 border font-semibold">/</span>
      </li>
      <li class="grid grid-cols-10 border-b-2">
        <span class="col-start-1 col-end-5 border font-semibold"
          >Предмети/програми/активности</span
        >
        <span class="border" v-for="(item, index) in classroom.years_active">{{index}}</span>
        <span class="col-start-9 col-end-10 border">/</span>
        <span class="col-start-10 col-end-11 border">/</span>
      </li>
      <li v-for="(item, index) in student.subjects"  >
        <div class="grid grid-cols-10">

        <span class="col-start-1 col-end-5 border"
          >{{item.name}}</span
        >
          <span class="col-start-5 col-end-6 border bg-blue-100"
          ><span class="border-b-2 border-blue-800 pl-2 pr-2 text-xs"
          >одличан (5)</span
          >
        </span>
          <span class="col-start-6 col-end-7 border bg-blue-100"
          ><span class="border-b-2 border-blue-800 pl-2 pr-2 text-xs"
          >одличан (5)</span
          ></span
          >
          <span class="col-start-7 col-end-8 border bg-blue-100"
          ><span class="border-b-2 border-blue-800 pl-2 pr-2">III</span>
          раз.</span
          >
          <span class="col-start-8 col-end-9 border bg-blue-100"
          ><span class="border-b-2 border-blue-800 pl-2 pr-2">IV</span
          >раз.</span
          >
          <span class="col-start-9 col-end-10 border bg-blue-100">/</span>
          <span class="col-start-10 col-end-11 border bg-blue-100">/</span>
        </div>



      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: "StudentMarks",
  props:['classroom', 'student'],
  computed:{
    ...mapGetters({
      subjects: 'subjects'
    })
  }
};
</script>

<style scoped></style>
