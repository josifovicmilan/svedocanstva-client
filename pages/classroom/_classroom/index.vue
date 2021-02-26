<template>
<app-container>
  <app-aside>
    <template #header> Одељење</template>
    <template>
      <student-list :students="students"></student-list>
    </template>
  </app-aside>
</app-container>
</template>

<script>
  import {mapGetters} from 'vuex';
  import AppAside from "../../../components/layout/AppAside";
    export default {
        name: "index",
      components: {
          AppAside
      },
        mounted(){
          this.$store.dispatch('loadStudentsForClassroom', {
            id : this.$route.params.classroom
          })
        },
        computed:{
          ...mapGetters({

          students: 'classroomStudents'
          })
        }
    }
</script>

<style scoped>

</style>
