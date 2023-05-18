<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_2">
        <h3>List of your card</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a desk
        </button>
      </div>
      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DeckList from '@/components/Decks/DeckList'

export default {
  components: {
    DeckList,
  },
  middleware: 'auth',
  // head này là một thuộc tính ko phải một method, ko hứng được dữ liệu
  head: {
    title: 'Decks',
  },
  // *** asyncData
  // 1. Nuxt hoạt động khi lần đầu tiên trang web dc refresh thì lúc đó sử dụng sever render các DOM để các search engine có thể đọc được
  // 2. Nên khi resfresh lần đầu tiên thì asyncData đang hoạt động với nuxt trên server nên console sẽ xuất hiện trong terminal của serve
  // 3. Từ lần thứ 2, ko hề refresh và thực hiện mọi thứ trên DOM thì mọi thứ trở về single page , tất cả mọi thứ do Vue xử lý
  // 4. Nên console thực thi ở client
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         decks: [
  //           {
  //             _id: 1,
  //             name: 'Learn English',
  //             description: 'Lorem 1',
  //             thumbnail:
  //               'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
  //           },
  //           {
  //             _id: 2,
  //             name: 'Learn English 2',
  //             description: 'Lorem 2',
  //             thumbnail:
  //               'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
  //           },
  //         ],
  //       })
  //     }, 1500)
  //   })
  // },
  // created() {
  //   this.$store.dispatch('setDecks', this.decks)
  //   // eslint-disable-next-line no-console
  //   console.log(this.$store.getters.decks)
  // },
  // *** fetch
  // async fetch(context) {
  //   const data = await new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         decks: [
  //           {
  //             _id: 1,
  //             name: 'Learn English',
  //             description: 'Lorem 1',
  //             thumbnail:
  //               'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
  //           },
  //           {
  //             _id: 2,
  //             name: 'Learn English 2',
  //             description: 'Lorem 2',
  //             thumbnail:
  //               'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
  //           },
  //         ],
  //       })
  //     }, 1500)
  //   })
  //   context.store.dispatch('setDecks', data.decks)
  // },
  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'deckFormModal' })
    },
  },
}
</script>

<style lang="scss">
.decks-list {
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    .deck-card {
      display: flex;
      flex-direction: row;
      height: 250px;
      img {
        width: 250px;
        height: auto;
      }
    }
  }
}

.modal_body {
  background: #fff;
  padding: 1rem;
}
</style>
