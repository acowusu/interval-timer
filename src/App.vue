<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png">
    -->
    <icon style="height:100px"/>
    <settings/>
    <timer/>
    <el-slider
      v-model="$store.state.seconds"
      :show-tooltip="false"
      :min="0"
      :max="$store.getters.getTask.seconds"
    ></el-slider>

    <el-button icon="el-icon-s-tools" v-on:click="showDialog()" circle></el-button>
  </div>
</template>

<script>
import settings from "./components/settings";

import timer from "./components/timer";
import icon from "./assets/clip.vue";
export default {
  name: "App",
  components: {
    settings,
    timer,
    icon
  },
  methods: {
    showDialog() {
      console.log("shown");
      this.$store.dispatch("showMenu");
    }
  }
};
</script>

<style>
.el-slider__button {
  background: rgba(255, 255, 255, 0.7);
}
.el-slider__bar {
  background: rgba(0, 0, 0, 0);
}
.el-slider__runway {
  background: rgba(255, 255, 255, 0.233);
}
#app {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 0px;
  padding: 20px;
  height: 100%;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}
</style>
