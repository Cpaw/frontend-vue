<template>
    <article>
        <h2>See you!</h2>
    </article>
</template>
<script>
var $ = require('jquery')
export default {
  data () {},
  ready: function () {
    this.signout()
  },
  methods: {
    signout: function () {
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: this.$root.apiroot + 'auth/logout/',
        dataType: 'json',
        data: null
      })
    }
  }
}
</script>