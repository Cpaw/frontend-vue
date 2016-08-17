import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import About from './components/About'
import Challenges from './components/Challenges'
import Ranking from './components/Ranking'
import Notice from './components/Notice'
import Signin from './components/Signin'
import Signup from './components/Signup'
import $ from 'jquery'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/home': {
    component: Home
  },
  '/about': {
    component: About
  },
  '/challenges': {
    component: Challenges,
    subRoutes: {
      '/:category': {
        component: Challenges
      }
    }
  },
  '/ranking': {
    component: Ranking
  },
  '/notice': {
    component: Notice
  },
  '/signin': {
    component: Signin
  },
  '/signup': {
    component: Signup
  }
})

router.redirect({
  // 見つからなかったルートは /home にリダイレクト
  '*': '/home'
})

router.beforeEach(function (transition) {
  if (transition.to.path === '/' ||
      transition.to.path === '/home' ||
      transition.to.path === '/about' ||
      transition.to.path === '/notice' ||
      transition.to.path === '/signin' ||
      transition.to.path === '/signup') {
    transition.next()
  } else {
    $.when(
      $.ajax(
        {
          url: 'http://localhost/api/auth/',
          crossDomain: true,
          type: 'GET',
          dataType: 'json'
        }
      )
    ).done(function (data) {
      router.app.user = data
      transition.next()
    }).fail(function (data) {
      router.app.user = null
      transition.abort()
    })
  }
})

router.start(App, 'app')
