<template>
  <div>
    <form @submit.prevent="onSave">
      <div class="form_group">
        <label for="">Name:</label>
        <input
          v-model="editedDeck.name"
          type="text"
          class="form_control"
          placeholder="Please enter deck name"
        />
      </div>
      <div class="form_group">
        <label for="">Description:</label>
        <textarea
          v-model="editedDeck.description"
          class="form_control"
          cols="30"
          rows="10"
          placeholder="Please enter description"
        ></textarea>
      </div>
      <div class="form_group">
        <label for="">Thumbnail:</label>
        <input
          v-model="editedDeck.thumbnail"
          class="form_control"
          type="text"
          placeholder="Please enter thumbnail"
        />
        <div class="previewImage"></div>
      </div>
      <div class="form_group d_flex justify_content_end">
        <button
          class="btn btn_danger btnCloseModal"
          @click.prevent="closeModal"
        >
          Close
        </button>
        <button class="btn btn_success ml_3" type="submit">
          {{ editedDeck && editedDeck.id ? 'Edit' : 'Create' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      required: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => ({
        id: '',
        name: '',
        description: '',
        thumbnail: '',
      }),
    },
  },
  data() {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : {
            id: '',
            name: '',
            description: '',
            thumbnail: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedDeck)
    },
    closeModal() {
      this.$modal.close({ name: 'deckFormModal' })
    },
  },
}
</script>
