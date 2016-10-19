<template>
  <article>
    <div class="container">
      <div class="contents">
        <div class="formbox">
          <h2>Sign in</h2>
          <div class="message" v-if="hasMessage">
            {{ message }} 
          </div>
          <form v-on:submit.prevent="signin">
            <div class="field">
              <label for="signin-email">User name: <br></label>
              <input id="signin-email" type="text" name="username" placeholder="user name" v-model='postdata.username'>
            </div>
            <div class="field">
              <label for="signin-passwd">Password: <br></label>
              <input id="signin-passwd" type="password" name="password" placeholder="password" v-model='postdata.password'>
            </div>
            <div class="field">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
var $ = require('jquery')
function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}
var csrftoken = getCookie('csrftoken')
export default {
  data () {
    return {
      postdata: {
        username: '',
        password: ''
      },
      message: ''
    }
  },
  computed: {
    hasMessage: function () {
      return this.message !== ''
    }
  },
  init: function () {
    if (this.$root.user !== null) {
      this.$route.router.go('/challenges')
    }
  },
  methods: {
    signin: function () {
      $.when(
        $.ajax(
          {
            url: this.$root.apiroot + 'auth/',
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
              withCredentials: true
            },
            data: {'csrfmiddlewaretoken': csrftoken, 'username': this.postdata.username, 'password': this.postdata.password},
            beforeSend: function (output, status, xhr) {
              csrftoken = getCookie('csrftoken')
            },
            success: function (data, vm) {
              window.location.href = '#!/home'
              window.location.reload()
            }
          }
        ),
        this
      ).done(function (data, vm) {
        vm.$root.user = data[0]
        this.$root.auth = true
        vm.$route.router.go('challenges')
      }).fail(function (a, b, c) {
        this.$root.user = null
        this.message = b
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

button {
    display: block;
    padding: 10px 30px;
    border: 2px solid #000;
    margin: 0 auto;
    background-color: #111;
    color: #aaa;
    font-size: 20px;
    text-align: center;
}
button:hover {
    border: 2px solid #222;
    color: #fff;
    background-color: #333;
    cursor: pointer;
}
</style>
