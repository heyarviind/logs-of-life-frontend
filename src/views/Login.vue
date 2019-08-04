<template>
  <div class="home">

    <div class="py-5 text-center">
      <img src="@/assets/logo.svg" alt="" width="80px">
    </div>

    <div class="row justify-content-md-center">
      <div class="col-12 col-lg-5 col-md-6">

        <div v-if="isError" class="alert alert-warning">{{ errorMessage }}</div>

        <div class="form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" placeholder="someone@somewhere.com" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" placeholder="password" class="form-control" v-model="password">
          </div>

          <button class="btn btn-primary btn-block" @click="login()">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/'
import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    isError: false,
    errorMessage: null
  }),
  methods: {
    login() {
      const vm = this
      if (this.email && this.password) {
        const data = {
          email: this.email,
          password: this.password
        }
        //log user in
        axios.post(api.login(), data)
          .then(res => {
            console.log('reached here')
            localStorage.setItem('token', `X-Token ${res.data.token}`)
            vm.$router.push("/")
          })
          .catch(err => {
            vm.isError = 1
            vm.errorMessage = 'Invalid email or passwrod!'
          })
      }
    }
  }
}
</script>
