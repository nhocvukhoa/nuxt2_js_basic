<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck {{ $route.params.id }}: Learn english</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create a card
          </button>
        </div>
        <hr class="divide" />
        <div class="cards">
          <div class="r">
            <div class="c_3">
              <div class="card">
                <div class="front-card">
                  <img
                    src="https://gotrangtri.vn/wp-content/uploads/2020/07/thiet-ke-shop-quan-ao.jpg"
                    alt="Thumbnail card"
                  />
                </div>
                <div class="back-card">
                  <h6>Shop</h6>
                </div>
              </div>
            </div>
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
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
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
