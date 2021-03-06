import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import About from './components/About'
import Challenges from './components/Challenges'
import Question from './components/Question'
import Ranking from './components/Ranking'
import Notice from './components/Notice'
import Signin from './components/Signin'
import Signup from './components/Signup'
import User from './components/User'
import $ from 'jquery'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

var getAuthState = function () {
  return $.when(
    $.ajax(
      {
        url: 'https://ctf2.cpaw.site/api/auth/',
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        }
      }
    )
  )
}

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
  '/question/:question_id': {
    component: Question
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
  },
  '/user': {
    component: User,
    subRoutes: {
      '/info': {
        component: User
      }
    }
  }
})

router.redirect({
  // 見つからなかったルートは /home にリダイレクト
  '*': '/home'
})

router.beforeEach(function (transition) {
  var regexp = '/(home|about|ranking|notice|signin|signup)?$'
  if (transition.to.path.match(regexp)) {
    transition.next()
  } else {
    getAuthState().done(function (data) {
      router.app.user = data
      transition.next()
    }).fail(function (data) {
      router.app.user = null
      transition.abort()
      router.go('/')
    })
  }
})

router.start(App, 'app', function () {
  getAuthState().done(function (data) {
    router.app.user = data
  }).fail(function (data) {
    router.app.user = null
  })
})
