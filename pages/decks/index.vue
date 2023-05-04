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
        <li>
          <nuxt-link to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://e0.pxfuel.com/wallpapers/160/477/desktop-wallpaper-english-english-background-on-bat-english-word.jpg"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <VueModal name="createDeckModal">
      <div class="modal_body">
        <h2>Create deck</h2>
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
</template>

<script>
export default {
  data() {
    return {
      deckID: 1,
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'createDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'createDeckModal' })
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
