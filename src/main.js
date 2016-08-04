import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/home'
import About from './components/About'
import Questions from './components/Questions'
import Ranking from './components/Ranking'
import Notice from './components/Notice'

Vue.use(VueRouter)

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
  '/questions/web': {
    component: Questions
  },
  '/ranking': {
    component: Ranking
  },
  '/notice': {
    component: Notice
  }
})

router.redirect({
  '/questions': '/questions/web',

  // 見つからなかったルートは /home にリダイレクト
  '*': '/home'
})

router.start(App, 'app')
