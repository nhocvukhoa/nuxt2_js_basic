<template>
  <div>
    <li>
      <nuxt-link :to="`/decks/${id}`">
        <div class="card deck-card">
          <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />
          <div class="card_body">
            <h3>{{ name }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>
