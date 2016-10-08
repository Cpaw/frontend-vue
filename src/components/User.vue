<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="readable">
                    <div class="smallbox">
		        <h1>test{{ user.username }}</h1>
		    </div>
		</div>
            </div>
        </div>
    </article>
</template>

<script>
var $ = require('jquery')
export default {
  data () {
    var userdata = [
      {
        id: '',
        username: '',
        email: '',
        points: '',
      }
    ]
    return {
      notices
    }
  },
  ready: function () {
    this.getJson()
  },
  methods: {
    getJson: function () {
      var that = this
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: this.$root.apiroot + 'auth/',
        dataType: 'json',
        success: function (json) {
          that.$data.userdata = json
        },
        data: null
      })
    }
  }
}
</script>

<style scoped>
.notice_container li {
    list-style-type: none;
}

.notice_instance {
    margin: 1em 0;
}

.notice_title {
    padding: 0 1em;
    border-bottom: 1px solid #33ddff;
}

.notice_body {
    padding: 0.5em 1em;  
}

.notice_footer {
    padding: 0 1em;
    text-align: right;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul.menu {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #222;
}

ul.menu li 
{
	text-align: center;
	width: 33%;
	float: left;
}

ul.menu li a 
{
	width: 90%;
	display: inline-block;
	color: #ccc;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
	cursor: pointer;
}

ul.menu li a:hover 
{
    background-color: #333;
}

ul.menu li.icon 
{
    display: none;
}

ul.note
{
   	padding-bottom: 10px;
	background-color: #aaa;
}

</style>
