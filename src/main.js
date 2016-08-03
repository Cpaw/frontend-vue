import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/home'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  }
})

router.start(App, 'app')
