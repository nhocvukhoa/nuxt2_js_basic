<template>
  <div>
    Your deck {{ $route.params.id }} is active
  </div>
</template>

<script>
  export default {
    // validate lấy context (params, query, store làm đối số)
    // Nếu không load về sẽ trả về trang 404
    validate({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    }
  }
</script>
