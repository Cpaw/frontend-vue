import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/home'
import Questions from './components/Questions'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/home': {
    component: Home
  },
  '/questions': {
    component: Questions
  }
})

router.start(App, 'app')
