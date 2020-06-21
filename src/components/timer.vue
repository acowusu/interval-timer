<template>
  <div class="hello">
    <h2>{{getSeconds}}</h2>
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
    ...mapGetters(["getSeconds", "getTask"])

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
