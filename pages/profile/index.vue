<template>
  <div>This is my profile</div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
}
</script>
