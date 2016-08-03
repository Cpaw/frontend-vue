<template>
  <div id="app">
    <topnav></topnav>
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
}

.container
{
    width:85%;
    max-width: 1280px;
    margin: 0 auto;
}
</style>
