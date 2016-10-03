<template>
    <article>
      <div class="container">
        <div class="contents">
          <div class="formbox">
            <h2>Sign up</h2>
            <form v-on:submit.prevent="signup">
              <div class="field">
               <label for="signup-name">User name: <br></label>
               <input id="signup-name" type="text" name="username" placeholder="user name" v-model='userdata.username'>
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
var $ = require('jquery')
export default {
  data () {
    return {
      userdata: {
        username: '',
        email: '',
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
      var that = this
      $.ajax({
        type: 'POST',
        crossDomain: true,
        url: this.$root.apiroot + 'users/',
        dataType: 'json',
        success: function (json) {
          that.$data.userdata = json
          window.location.href = '#!/signin'
          window.location.reload()
        },
        data: that.$data.userdata
      })
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
    display: block;
    padding: 10px 30px;
    border: none;
    margin: 0 auto;
    background-color: #333;
    color: #fff;
    font-size: 20px;
    text-align: center;
}

.formbox {
    color: white;
}

.field {
    width: 240px;
    margin: 30px auto;
    color: #fff;
    font-size: 20px;
    text-align: left;
}

.field input {
    box-sizing: border-box;
    width: 100%;
    padding: 14px;
    border: none;
    outline: none;
    margin-top: 10px;
    background-color: rgba(34,34,34,.7);
    background-size: 0% 1px;
    color: #eee;
    font-size: 16px;
    transition: background-size 0.3s ease;
}

.field input:focus {
    background-image: linear-gradient(#3df, #3df);
    background-position: center bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
}

</style>
