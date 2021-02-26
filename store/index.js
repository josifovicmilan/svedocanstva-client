export const state = () => ({
  classroom: {},
  classrooms: [],
  classroomStudents: [],
  subjects: [],
  student: {},
  loading: false,
});
export const actions = {
  async loadStudentsForClassroom(vuexContext, payload) {
    await this.$axios
      .$get(`/classtypes/${payload.id}/students`)
      .then((response) => {
        vuexContext.commit("setClassroomStudents", {
          students: response,
        });
      });
  },
  async loadStudent(vuexContext, payload) {
    await this.$axios.$get(`/students/${payload.id}`).then((response) => {
      vuexContext.commit("setStudent", {
        student: response,
      });
    });
  },
  async loadSubjects(vuexContext) {
    vuexContext.commit("startLoading");
    await this.$axios
      .$get("/subjects")
      .then((response) => {
        vuexContext.commit("setSubjects", {
          subjects: response,
        });
      })
      .catch((e) => {
        console.log("error");
      })
      .finally(() => {
        vuexContext.commit("stopLoading");
      });
  },
  async updatePosition(vuexContext, payload) {
    await this.$axios
      .$put("/subjects/" + payload.id, {
        position: payload.position,
      })
      .then((response) => {
        vuexContext.commit("updateSubject", {
          subject: response,
        });
      });
  },
  async addSubject(vuexContext, payload) {
    await this.$axios
      .$post("/subjects", {
        name: payload.name,
        type: payload.type,
      })
      .then((response) => {
        vuexContext.commit("addSubjcet", {
          subject: response,
        });
      });
  },
  async loadClassrooms(vuexContext) {
    vuexContext.commit("startLoading");
    await this.$axios
      .$get("/classtypes")
      .then((response) => {
        vuexContext.commit("setClassrooms", {
          classrooms: response,
        });
      })
      .finally(() => {
        vuexContext.commit("stopLoading");
      });
  },
  async loadClassroom(vuexContext, payload) {
    await this.$axios.$get(`/classtypes/${payload.id}`).then((response) => {
      vuexContext.commit("setClassroom", {
        classroom: response,
      });
    });
  },
};
export const mutations = {
  addSubject(state, payload) {
    state.subjects.push(payload.subject);
  },
  setClassrooms(state, payload) {
    state.classrooms = payload.classrooms;
  },
  setClassroom(state, payload) {
    state.classroom = payload.classroom;
  },
  setClassroomStudents(state, payload) {
    state.classroomStudents = payload.students;
  },
  setStudent(state, payload) {
    state.student = payload.student;
  },
  setSubjects(state, payload) {
    state.subjects = payload.subjects;
  },
  updateSubject(state, payload) {
    const subjectIndex = state.subjects.findIndex(
      (subject) => subject.id === payload.subject.id
    );
    state.subjects[subjectIndex].position = payload.subject.position;
    state.subjects.sort((a, b) => (a.position > b.position ? 1 : -1));
  },
  startLoading(state) {
    state.loading = true;
  },
  stopLoading(state) {
    state.loading = false;
  },
};
export const getters = {
  classrooms: (state) => state.classrooms,
  classroomStudents: (state) => state.classroomStudents,
  student: (state) => state.student,
  subjects: (state) => state.subjects,
  loading: (state) => state.loading,
  classroom: (state) => state.classroom,
};
