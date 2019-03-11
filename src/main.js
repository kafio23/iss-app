import Vue from "vue";
import App from "./App.vue";
import People from "./components/People";
import store from './store';

const routes = {
  "/": App,
  "/people": People
};

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  store,
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});
