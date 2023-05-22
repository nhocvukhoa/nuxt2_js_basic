<template>
  <div class="ct">
    <h1>This is my profile</h1>
    <button class="btn btn_danger" @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: ['server-auth'],
  methods: {
    onLogout() {
      this.$store.dispatch('onLogout')
      this.$router.push('/')
    },
  },
}
</script>
