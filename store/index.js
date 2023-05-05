import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      decks: [],
    },
    // Tạo ra những chiếc xe
    getters: {
      decks(state) {
        return state.decks
      },
    },
    // Biến đổi dữ liệu của state
    mutations: {
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    // Các hàm được thực thi
    actions: {
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
    },
  })
}

export default createStore
