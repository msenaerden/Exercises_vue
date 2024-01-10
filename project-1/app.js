const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn the Vue",
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
