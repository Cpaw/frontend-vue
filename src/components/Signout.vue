<template>
    <article>
        <h2>See you!</h2>
    </article>
</template>
<script>
var $ = require('jquery')
export default {
  data () {},
  methods: {
    signout: function () {
      $.ajax({
        type: 'GET'
        crossDomain: true,
        url: this.$root.apiroot + 'auth/signout/',
      })
    }
  }
}
</script>