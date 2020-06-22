import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const state = {
  clock: null,
  seconds: 0,
  showMenu: false,
  tasks: [
    {
      name: "work",
      seconds: 30,
      up: false
    },
    {
      name: "rest",
      seconds: 5,
      up: true
    }
    // {
    //   name: "foo",
    //   seconds: 10,
    //   up: false
    // },
    // {
    //   name: "baz",
    //   seconds: 100,
    //   up: true
    // },
    // {
    //   name: "ziz",
    //   seconds: 100,
    //   up: false
    // }
  ]
};

const mutations = {
  NEXT(state) {
    /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
    try {
      state.tasks.push(state.tasks.shift());
    } catch (e) {}
  },
  SET(state, payload) {
    state.clock = payload;
  },
  RESET(state) {
    state.seconds = 0;
  },
  TICK(state) {
    state.seconds += 1;
  },
  SHOWMENU(state) {
    state.showMenu = !state.showMenu;
  },
  ADDTASK(state, payload) {
    state.tasks.push(payload);
  },
  REMOVETASK(state, payload) {
    state.tasks.splice(payload, 1);
  }
};

const actions = {
  showMenu(context) {
    context.commit("SHOWMENU");
  },
  removeTask(context, payload) {
    context.commit("REMOVETASK", payload);
  },
  addTask(context, payload) {
    context.commit("ADDTASK", payload);
  },
  reset(context) {
    let clock = setInterval(function() {
      context.commit("TICK");
      if (context.getters.getTask) {
        if (context.state.seconds >= context.getters.getTask.seconds) {
          context.commit("NEXT");
          context.commit("RESET");
        }
      }
    }, 1000);
    context.commit("RESET", clock);
  }
};

const getters = {
  showMenu(state) {
    return state.showMenu;
  },
  getTask(state) {
    return state.tasks[0];
  },
  getTasks(state) {
    return state.tasks;
  },
  getClock(state) {
    return state.clock;
  },
  getSeconds(state) {
    return state.seconds;
  }
};

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ tasks: state.tasks }),
  filter: mutation =>
    mutation.type === "ADDTASK" || mutation.type === "REMOVETASK"
});

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin]
});
