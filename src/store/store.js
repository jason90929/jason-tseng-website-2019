import Vue from 'vue'
import Vuex from 'vuex'
import resume from './modules/modal/resume'

Vue.use(Vuex)

const modules = {
  resume
}

const store = new Vuex.Store({
  modules,
  strict: true
})

export default store
