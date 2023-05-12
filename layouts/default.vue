<template>
  <div>
    <default-header />
    <nuxt />
    <!-- Form create and edit deck-->
    <VueModal v-slot="payload" name="deckFormModal">
      <div class="modal_body">
        <h2>
          {{ payload && payload.payload ? 'Edit a deck' : 'Create a new deck' }}
        </h2>
        <deck-form :deck="payload.payload" @submit="onSubmit" />
      </div>
    </VueModal>
    <default-footer />
  </div>
</template>

<script>
import DeckForm from '@/components/Decks/DeckForm'
import DefaultHeader from '@/components/Header/DefaultHeader.vue'
import DefaultFooter from '@/components/Footer/DefaultFooter.vue'

export default {
  components: {
    DeckForm,
    DefaultHeader,
    DefaultFooter,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store
          .dispatch('addDeck', deckData)
          .then(() => this.$modal.close({ name: 'deckFormModal' }))
      } else {
        this.$store.dispatch('editDeck', deckData).then(() => {
          this.$modal.close({ name: 'deckFormModal' })
          this.$router.push('/decks')
        })
      }
    },
  },
}
</script>
