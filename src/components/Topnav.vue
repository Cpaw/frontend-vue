<template>
  <header>
    <div class="container">
      <nav>
        <ul class="topnav" id="toggleNav">
          <li v-link-active><a v-link="{ path : '/home' }">Home</a></li>
          <li v-link-active><a v-link="{ path : '/about' }">About</a></li>
          <li v-if="authed"><a v-link="{ path : '/challenges' }">Challenges</a></li>
          <li><a v-link="{ path : '/ranking' }">Ranking</a></li>
          <li><a v-link="{ path : '/notice' }">Notice</a></li>
          <template v-if="authed">
          <li class="rightalign"><a @click="signout">Sign out</a></li>
          <li class="rightalign"><a v-link="{ path : '/user/info' }">{{ user.username }} : {{ user.points }}pts</a></li>
          </template>
          <template v-else>
          <li class="rightalign"><a v-link="{ path : '/signup' }">Sign up</a></li>
          <li class="rightalign"><a v-link="{ path : '/signin' }">Sign in</a></li>
          </template>
          <li class="icon">
              <a href="javascript:void(0);" @click="toggle('toggleNav')">&#9776;</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import $ from 'jquery'
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
export default {
  data () {
    return {}
  },
  computed: {
    authed: function () {
      return this.$root.user !== null
    },
    user: function () {
      if (this.authed) {
        return this.$root.user
      } else {
        return null
      }
    }
  },
  methods: {
    toggle: function (id) {
      var x = document.getElementById(id)
      if (x.className === 'topnav') {
        x.className += ' responsive'
      } else {
        x.className = 'topnav'
      }
    },
    signout: function () {
      $.when(
        $.ajax(
          {
            url: this.$root.apiroot + 'auth/',
            type: 'DELETE',
            crossDomain: true,
            beforeSend: function (xhr) {
              xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'))
            },
            xhrFields: {
              withCredentials: true
            },
            error: function () {
              window.location.reload()
            }
          }
        ),
        this
      ).done(function (data, vm) {
        vm.$root.user = null
        vm.$route.router.go('/')
        window.location.href = '172.16.125.199/home'
      })
    }
  }
}
</script>

<style scoped>
header
{
    width: 100%;  
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    background-color: #222;
    z-index: 999;
}

nav
{
    overflow: auto;  
}

ul.topnav {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

ul.topnav li 
{
    float: left;
}

ul.topnav li.rightalign
{
    float: right;
}

ul.topnav li a 
{
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

ul.topnav li a:hover 
{
    background-color: #555;
}

ul.topnav li.icon 
{
    display: none;
}

@media screen and (max-width:780px) 
{
  ul.topnav li:not(:first-child){display: none;}
  ul.topnav li.icon {
    float: right;
    display: inline-block;
  }
  ul.topnav.responsive {position: relative;}
  ul.topnav.responsive li.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  ul.topnav.responsive li {
    float: none;
    display: inline;
  }
  ul.topnav.responsive li a {
    display: block;
    text-align: left;
  }
}
</style>