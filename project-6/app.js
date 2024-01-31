const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "samuel",
          name: "Samul Lopez",
          phone: "0503450034",
          email: "redcoke@local.host",
        },
      ],
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenzo",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
