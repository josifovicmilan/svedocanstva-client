<template>
  <div class="grid grid-cols-6 border-b-2 mb-4 pt-4 pb-4">
    <div class="col-start-1 col-end-7 justify-self-center border-b-2 border-blue-800 m-2">
      {{student.first_name}} {{student.last_name}}
    </div>

    <div class="col-start-1 col-end-3 border-b-2 border-blue-800 m-2">
      {{timestamp(student.birth_date)}}
    </div>
    <div class="col-start-3 col-end-5 border-b-2 border-blue-800 m-2">
      {{student.personal_data.borough_of_birth}},{{student.personal_data.city_of_birth}}
    </div>
    <div class="col-start-5 col-end-7 border-b-2 border-blue-800 m-2">
      {{student.personal_data.country_of_birth}}
    </div>

    <div class="col-start-1 col-end-7 border-b-2 border-blue-800 m-2 justify-self-center">
      {{student.last_name}} {{student.fathers_name}}
    </div>

    <div class="col-start-1 col-end-3 m-2">
      Ученик-ца уписан-а у <span class="border-b-2 border-blue-800 ">{{student.personal_data.signed_in_at}}</span>
    </div>
    <div class="col-start-3 col-end-5 m-2">
      разред као  <span class="border-b-2 border-blue-800 ">{{ student.personal_data.type_of_education}}</span>
    </div>
    <div class="col-start-5 col-end-7 m-2">
      образовни профил-смер
    </div>
    <div class="col-start-1 col-end-5 justify-self-center border-b-2 border-blue-800 m-2">
      {{classroom.name}}
    </div>
    <div class="col-start-5 col-end-7 m-2">
      образовање траје <span class="border-b-2 border-blue-800 ">{{classroom.study_duration}}</span> године
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
    export default {
        name: "StudentPersonal",
      props: ['student', 'classroom'],
      methods:{
        timestamp(date) {
          return moment(date).format("DD.MM.YYYY");
        },
      },
    }
</script>

<style scoped>

</style>
