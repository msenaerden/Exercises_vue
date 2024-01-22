const app = Vue.createApp({
  data() {
    return {
      name: "sena",
      age: 28,
      imgUrl:
        "https://images.unsplash.com/photo-1705711714839-cf327143c4a0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
  methods: {
    add() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
