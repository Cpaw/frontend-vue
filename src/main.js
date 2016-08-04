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
  '/questions': {
    component: Questions
  },
  '/ranking': {
    component: Ranking
  },
  '/notice': {
    component: Notice
  }
})

router.start(App, 'app')
