function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },

  methods: {
    attackMonster() {
      const attackValue = randomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = randomValue(8, 15);
      this.playerHealth = this.monsterHealth - attackValue;
    },
  },
});

app.mount("#game");
