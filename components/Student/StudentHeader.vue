<template>
    <div class="student__header mb-4 border-b-2 " >
      <ul class="student__header-list flex justify-between">
          <li class="text-gray-400 p-2">
            Број
            <span class="text-gray-800 border-b-2 border-blue-800"> {{student.personal_data.school_number}}</span>
          </li>
        <li class="text-gray-400 p-2">
          Број у регистру
          <span class="text-gray-800 border-b-2 border-blue-800">{{student.personal_data.registration_number}}</span>
        </li>
        <li class="text-gray-400 p-2">
          ЈМБГ
          <span class="text-gray-800 border-b-2 border-blue-800">{{student.jmbg}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "StudentHeader",
        props: ['student']
    }
</script>

