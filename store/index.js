import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      decks: [],
      token: null,
    },
    // Tạo ra những chiếc xe
    getters: {
      decks(state) {
        return state.decks
      },
    },
    // Biến đổi dữ liệu của state
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === editDeck.id
        )

        state.decks[deckIndex] = editDeck
      },
      removeDeck(state, deckData) {
        state.decks = state.decks.filter((deck) => deck.id !== deckData)
      },
      setDecks(state, decks) {
        state.decks = decks
      },
      setToken(state, token) {
        state.token = token
      },
    },
    // Các hàm được thực thi
    actions: {
      // Đây là một hook mà Nuxt đã chèn vào quá trình khởi tạo, để lấy dữ liệu ban đầu cho VueX store.
      // Nó chỉ được gọi trên máy chủ và được sử dụng để điền dữ liệu lưu trữ cần có ở mỗi lần tải lại trang.
      // Phương thức này là 1 action của VueX, nếu nó được khai báo trong store thì Nuxt.js sẽ gọi action này mỗi khi Nuxt.js bắt đầu lifecycle mới.
      // Do đó phương thức này rất hữu ích khi chúng ta muốn nhận và lưu trữ dữ liệu dùng chung cho tất cả pages từ server vào store của client.
      async nuxtServerInit(vuexContext, context) {
        // *** Fetch API kiểu tự tạo dữ liệu
        // const data = await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve({
        //       decks: [
        //         {
        //           _id: 1,
        //           name: 'Learn English',
        //           description: 'Lorem 1',
        //           thumbnail:
        //             'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
        //         },
        //         {
        //           _id: 2,
        //           name: 'Learn English 2',
        //           description: 'Lorem 2',
        //           thumbnail:
        //             'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
        //         },
        //       ],
        //     })
        //   }, 1500)
        // })
        // vuexContext.commit('setDecks', data.decks)
        // *** Fetch API bằng axios
        const data = await context.app.$axios.$get(
          process.env.baseApiUrl + '/decks.json'
        )

        const decksArr = []

        for (const key in data) {
          decksArr.push({ ...data[key], id: key })
        }

        vuexContext.commit('setDecks', decksArr)
      },
      async addDeck(vuexContext, deckData) {
        try {
          const data = await this.$axios.$post(
            process.env.baseApiUrl + '/decks.json',
            deckData
          )
          // eslint-disable-next-line no-console
          console.log(data.name)

          vuexContext.commit('addDeck', { ...deckData, id: data.name })
        } catch (e) {
          vuexContext.error(e)
        }
      },
      async editDeck(vuexContext, deckData) {
        const deckId = deckData.id
        delete deckData.id

        try {
          const data = await this.$axios.$put(
            `${process.env.baseApiUrl}/decks/${deckId}.json`,
            deckData
          )
          // eslint-disable-next-line no-console
          console.log(data)

          vuexContext.commit('editDeck', { ...data, id: deckId })
        } catch (e) {
          vuexContext.error(e)
        }
      },
      async removeDeck(vuexContext, deckData) {
        try {
          await this.$axios.$delete(
            `${process.env.baseApiUrl}/decks/${deckData}.json`
          )

          vuexContext.commit('removeDeck', deckData)
        } catch (err) {}
      },
      authenticateUser(vuexContext, credentials) {
        return new Promise((resolve, reject) => {
          let checkLoginOrRegister = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`

          if (!credentials.isLogin) {
            checkLoginOrRegister = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
          }

          this.$axios
            .$post(checkLoginOrRegister, {
              email: credentials.email,
              password: credentials.password,
              returnSecureToken: true,
            })
            .then((result) => {
              vuexContext.commit('setToken', result.idToken)
              resolve({ success: true })
            })
            .catch((error) => {
              reject(error.response)
            })
        })
      },
    },
  })
}

export default createStore
