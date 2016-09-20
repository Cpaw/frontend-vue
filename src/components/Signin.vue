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
              <label for="signin-email">Email: <br></label>
              <input id="signin-email" type="text" name="email" placeholder="email" v-model='user.username'>
            </div>
            <div class="field">
              <label for="signin-passwd">Password: <br></label>
              <input id="signin-passwd" type="password" name="password" placeholder="password" v-model='user.password'>
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
      user: {
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
            url: this.$root.apiroot + 'auth/login/',
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
              withCredentials: true
            },
            data: {'csrfmiddlewaretoken': csrftoken, 'username': this.user.username, 'password': this.user.password},
            beforeSend: function (output, status, xhr) {
              csrftoken = getCookie('csrftoken')
            }
          }
        ),
        this
      ).done(function (data, vm) {
        vm.$root.user = data[0]
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
    margin: 5%;
    text-align: center;
    font-size: 20px;
    color: white;
}

.field input {
    font-size: 16px;
}

button {
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 0 auto;
    padding: 5px;
    background-color: black;
}
</style>
