<template>
  <div class="register_page">
    <div class="card card_form">
      <div class="card_body">
        <h3 class="text_center">Register</h3>
        <form @submit.prevent="onSubmit()">
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
            <label for="re-password">Re-password</label>
            <input
              id="re-password"
              v-model="rePassword"
              class="form_control"
              type="password"
              placeholder="123456"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn_submit">
              Register
            </button>
          </div>
        </form>
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
      rePassword: '',
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword
    },
    onSubmit() {
      const validPassword = this.checkValidPassword()

      if (validPassword) {
        // call api from firebase
        try {
          this.$axios.$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`,
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )

          this.$router.push('/')
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e)
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Password is valid')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.register_page {
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
