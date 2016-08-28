<template>
    <article>
      <div class="container">
        <div class="contents">
          <div class="formbox">
            <h2>Sign up</h2>
            <form v-on:submit.prevent="signup">
              <div class="field">
               <label for="signup-name">User name: <br></label>
               <input id="signup-name" type="text" name="user" placeholder="user name" v-model='userdata.name'>
              </div>
              <div class="field">
               <label for="signin-email">Email: <br></label>
               <input id="signin-email" type="text" name="email" placeholder="email" v-model='userdata.email'>
              </div>
              <div class="field">
               <label for="signin-passwd">Password: <br></label>
               <input id="signin-passwd" type="password" name="password" placeholder="password" v-model='userdata.password'>
              </div>
              <div class="field">
               <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
</template>

<script>
export default {
  data () {
    return {
      userdata: {
        name: '',
        mail: '',
        password: ''
      }
    }
  },
  init: function () {
    if (this.$root.user !== null) {
      this.$route.router.go('/challenges')
    }
  },
  methods: {
    signup: function () {
    }
  }
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 40px;
}

button {
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 0 auto;
    padding: 5px;
    background-color: black;
}

.formbox {
    color: white;
}

.field {
    margin: 5%;
    text-align: center;
    font-size: 20px;
    color: white;
}

.field input {
    font-size: 16px;
}
</style>
