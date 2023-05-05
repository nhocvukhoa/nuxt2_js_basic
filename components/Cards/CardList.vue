<template>
  <div>
    <div>
      <div class="card">
        <div class="front-card">
          <img :src="picture" alt="Thumbnail card" />
        </div>
        <div class="back-card">
          <h6>{{ keyword }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      default: '',
    },
    keyword: {
      type: String,
      default: '',
    },
  },
}
</script>
