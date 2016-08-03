<template>
  <div id="app">
    <topnav></topnav>
  </div>
</template>

<script>
import Topnav from './components/Topnav'

export default {
  components: {
    Topnav
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
