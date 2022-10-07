export default {
  state: {
    order: [],
  },
  actions: {
    ACTION_ADD_ITEM({ commit }, item) {
      commit("ADD_ITEM", item);
    },
    ACTION_REMOVE_ITEM({ commit }, item) {
      commit("REMOVE_ITEM", item);
    },
    ACTION_INITIALISE_STORE({ commit }) {
      commit("INITIALISE_STORE");
    }
  },
  mutations: {
    INITIALISE_STORE(state) {
      if (localStorage.getItem("order")) {
        state.order = JSON.parse(localStorage.order);
      }
    },
    ADD_ITEM(state, item) {
      const isAddedOrder = state.order.some((obj) => item.id === obj.id);
      if (!isAddedOrder) {
        state.order.push(item);
      }
    },
    REMOVE_ITEM(state, id) {
      state.order = state.order.filter((item) => item.id !== id);
    },
  },
  getters: {
    GET_ORDER_VALUES(state) {
      return state.order;
    },
  },
};
