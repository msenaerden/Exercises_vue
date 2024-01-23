const app = Vue.createApp({
  data() {
    return {
      userInput: "enter Input",
      confirmedInput: "enter Input and then click enter key",
    };
  },
  methods: {
    showAlert() {
      alert("Button clicked!");
    },

    setInput(event) {
      this.userInput = event.target.value;
    },
    setConfirmedInput(event) {
      this.confirmedInput = event.target.value;
    },
  },
});
app.mount("#assignment");
