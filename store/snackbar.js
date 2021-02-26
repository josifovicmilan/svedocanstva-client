export const state = () => ({
  content: "",
  color: "",
  snackVisible: false,
});
export const mutations = {
  showMessage(state, data) {
    state.content = data.content;
    state.color = data.color;
    state.snackVisible = true;
  },
  closeSnackbar(state) {
    state.snackVisible = false;
  },
};
export const getters = {
  getContent: (state) => state.content,
  getColor: (state) => state.color,
  getVisibility: (state) => state.snackVisible,
};
