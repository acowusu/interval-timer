<template>
  <div class="hello">
    <h2>{{time}}</h2>
    <code>{{getTask.name}}</code>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",

  created() {
    this.$store.dispatch("reset");
  },
  computed: {
    ...mapGetters(["getSeconds", "getTask"]),
    time() {
      try {
        var quotient = Math.floor(this.getSeconds / 60);
        var remainder = this.getSeconds % 60;

        if (quotient === 0) {
          return `${remainder}`;
        }
        return `${quotient}:${remainder}`;
      } catch {
        return 0;
      }
    }

    //       .var quotient = Math.floor(y/x);
    // var remainder = y % x;
    //     }
    // getSeconds() {
    //   return this.$store.getters.getSeconds;
    // },
    // getName() {
    //   return this.$store.getters.getTask.name;
    // }
  },
  methods: {}
};
</script>

<style scoped>
h2 {
  font-size: 20em;
  margin: 20px;
}
code {
  font-size: 5em;
}
button {
  background: #ffffff;
  border: 0;
  padding: 1em;
  border-radius: 50%;
}
</style>
