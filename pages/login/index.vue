<template>
  <div class="auth_page">
    <div class="card card_form">
      <div class="card_body">
        <h3 class="text_center">Login</h3>
        <form @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              class="form_control"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form_group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              class="form_control"
              type="password"
              placeholder="123456"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn_submit">
              Login
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span
            >Haven't you account?
            <nuxt-link to="/register" tag="a">Register here</nuxt-link></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      // call api from firebase
      this.$axios
        .$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        // eslint-disable-next-line no-console
        .then((data) => {
          // eslint-disable-next-line no-console
          console.log(data)
          this.$router.push('/')
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.log(e))
    },
  },
}
</script>

<style lang="scss">
.auth_page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .card_form {
    width: 500px;
    .btn_submit {
      width: 100%;
    }
  }
}
</style>
