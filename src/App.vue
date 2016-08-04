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
  background-color: #444;
}

.container
{
  width:85%;
  max-width: 1280px;
  margin: 0 auto;
}

.contents
{
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>
