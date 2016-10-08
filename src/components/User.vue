<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="readable">
                    <div class="smallbox">
		    	<section>
			        <h1>{{ userdata.username }}</h1>
				<h2>Email : {{ userdata.email }}</h2>
				<h2>Score : {{ userdata.points }}</h2>
			</section>
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
        team: '',
        points: '',
        last_score_time: ''
      }
    ]
    var teamdata = [
      {
        questions: []
      }
    ]
    return {
      userdata, teamdata
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
          that.getTeam()
        },
        data: null
      })
    },
    getTeam: function () {
      var that = this
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: this.$root.apiroot + 'teams/' + that.$data.userdata.team + '/',
        dataType: 'json',
        success: function (json) {
          that.$data.teamdata = json
        },
        data: null
      })
    }
  }
}
</script>

<style scoped>
h1 {
  padding-left: 1em;
  border-bottom: 1px solid #3df;
  font-size: 2em;
}

h2 {
  font-size: 1em;
  margin: 1em;
}

h2:before {
  content: "> ";
  color: #3df;
}

section {
  margin-bottom: 3em;
}

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