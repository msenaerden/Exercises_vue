const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);

      return resetInput;
    },
  },
  resetInput() {
    this.enteredGoalValue = "";
  },

  removeGoal(idx) {
    this.goals.splice(idx, 1);
  },
});

app.mount("#assignment");
