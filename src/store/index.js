import Vuex from 'vuex'
import Vue from 'vue'
import appointments from './modules/appointments'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appointments
  }
})
