<template>
  <div id="app">
    <topnav></topnav>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Topnav from './components/Topnav'
import Foot from './components/Foot'

export default {
  data: function () {
    return {
      apiroot: 'http://localhost:8000/api/',
      user: null,
      authed: false
    }
  },
  components: {
    Topnav,
    Foot
  }
}
</script>

<style>
html, body
{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #222;
  font-family: 'Proza Libre', sans-serif;
}

#app {
  min-height: 100%;
  background-image: url("./img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.container
{
  width:85%;
  max-width: 1024px;
  margin: 0 auto;
}

.contents
{
  padding-top: 100px;
  padding-bottom: 50px;
}

.readable
{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 0;
  background-color: rgba(34,34,34,0.7);
  color: #eee;
}

.readable h2
{
    margin:0;
    color: #ddd;
}

.smallbox
{
    width:90%;
    height: 90%;
    margin: 0 auto;
    padding-top: 1em;
    padding-bottom: 1em;
}
</style>
