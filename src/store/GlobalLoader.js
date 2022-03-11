const state = {
  GloaderFalg: false
}

const getters = {
  GetGloaderFlag (state) {
    return state.GloaderFalg
  }
}

const mutations = {
  SetGloaderFlag (state, data) {
    state.GloaderFalg = data
  }
}

export default {
  state,
  getters,
  mutations
}
