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
import axios from 'axios'

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
      axios
        .post(
          'https://nuxt-js-basic-default-rtdb.firebaseio.com/decks.json',
          deckData
        )
        .then((data) => {
          // eslint-disable-next-line no-console
          console.log(data)
        })
    },
  },
}
</script>
