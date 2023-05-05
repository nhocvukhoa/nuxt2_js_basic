<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck #{{ $route.params.id }}: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create a card
          </button>
        </div>
        <hr class="divide" />
        <div class="cards">
          <div class="r">
            <card-list
              v-for="card in cards"
              :key="card._id"
              :picture="card.picture"
              :keyword="card.keyword"
              class="c_3"
            />
          </div>
        </div>
      </div>

      <!-- Modal -->
      <VueModal name="createCardModal">
        <div class="modal_body">
          <h2>Create a new card</h2>
          <form action="">
            <div class="form_group">
              <label for="">Name:</label>
              <input
                type="text"
                class="form_control"
                placeholder="Please enter deck name"
              />
            </div>
            <div class="form_group">
              <label for="">Description:</label>
              <textarea
                class="form_control"
                cols="30"
                rows="10"
                placeholder="Please enter description"
              ></textarea>
            </div>
            <div class="form_group">
              <label for="">Thumbnail:</label>
              <input type="file" />
              <div class="previewImage"></div>
            </div>
            <div class="form_group d_flex justify_content_end">
              <button
                class="btn btn_danger btnCloseModal"
                @click.prevent="closeModal"
              >
                Close
              </button>
              <button class="btn btn_success ml_3" @click.prevent="createDeck">
                Create
              </button>
            </div>
          </form>
        </div>
      </VueModal>
    </div>
  </section>
</template>

<script>
import CardList from '@/components/Cards/CardList'
export default {
  components: {
    CardList,
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  // Không thể sử dụng được this vì lúc này DOM chưa được khởi tạo
  asyncData(context, callback) {
    // eslint-disable-next-line no-console
    console.log(context)
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        deck: {
          _id: 1,
          name: `Learn English by deck ${context.params.id}`,
          description: 'Lorem 1',
          thumbnail:
            'https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg',
        },
      })
    }, 1500)
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://gotrangtri.vn/wp-content/uploads/2020/07/thiet-ke-shop-quan-ao.jpg',
          keyword: 'Picture 1',
        },
        {
          _id: 2,
          picture:
            'https://gotrangtri.vn/wp-content/uploads/2020/07/thiet-ke-shop-quan-ao.jpg',
          keyword: 'Picture 2',
        },
      ],
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'createCardModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'createCardModal' })
    },
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .divide {
    margin: 2rem 0;
  }
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
}
</style>
