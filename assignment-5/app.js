const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      showTask: true,
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    TaskVisibility() {
      this.showTask = !this.showTask;
    },
  },
});

app.mount("#assignment");
