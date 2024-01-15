const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  watch: {
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + "" + "Erden";
      }
    },
  },

  computed: {
    // fullname() {
    //   if (this.name === "") {
    //      return "";
    //   }
    //   return this.name + "" + "Erden";
    // },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
