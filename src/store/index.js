import { createStore } from "vuex";
import searchModule from "./modules/searchModule.js";
import buyModule from "./modules/buyModule.js";
export const store = createStore({
  modules: { searchModule, buyModule },
});
store.subscribe((mutation, state) => {
  localStorage.setItem("order", JSON.stringify(state.buyModule.order));
});