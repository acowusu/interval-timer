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
          return `${remainder.toString().padStart(2, "0")}`;
        }
        return `${quotient
          .toString()
          .padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
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
  font-size: min(25vw, calc(30vh));
  margin: 20px;
}
code {
  font-size: 7vw;
}
button {
  background: #ffffff;
  border: 0;
  padding: 1em;
  border-radius: 50%;
}
</style>
