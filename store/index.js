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
      // Đây là một hook mà Nuxt đã chèn vào quá trình khởi tạo, để lấy dữ liệu ban đầu cho VueX store.
      // Nó chỉ được gọi trên máy chủ và được sử dụng để điền dữ liệu lưu trữ cần có ở mỗi lần tải lại trang.
      // Phương thức này là 1 action của VueX, nếu nó được khai báo trong store thì Nuxt.js sẽ gọi action này mỗi khi Nuxt.js bắt đầu lifecycle mới.
      // Do đó phương thức này rất hữu ích khi chúng ta muốn nhận và lưu trữ dữ liệu dùng chung cho tất cả pages từ server vào store của client.
      async nuxtServerInit(vuexContext, context) {
        const data = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              decks: [
                {
                  _id: 1,
                  name: 'Learn English',
                  description: 'Lorem 1',
                  thumbnail:
                    'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
                },
                {
                  _id: 2,
                  name: 'Learn English 2',
                  description: 'Lorem 2',
                  thumbnail:
                    'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
                },
              ],
            })
          }, 1500)
        })
        vuexContext.commit('setDecks', data.decks)
      },
      // setDecks(vuexContext, decks) {
      //   vuexContext.commit('setDecks', decks)
      // },
    },
  })
}

export default createStore
