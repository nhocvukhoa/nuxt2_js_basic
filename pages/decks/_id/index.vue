<template>
  <div>This is deck ID: {{ $route.params.id }}</div>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
}
</script>
