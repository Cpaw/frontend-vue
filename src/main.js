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
  '/login': {
    component: Signin
  }
})

router.redirect({
  // 見つからなかったルートは /home にリダイレクト
  '*': '/home'
})

router.start(App, 'app')
