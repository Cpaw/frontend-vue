<template>
    <article>
        <div class="container">
	    <div class="contents">
	    	<div class="readable">
	    	    <div class='smallbox'>
	            <div class="formbox">
		        <h1>{{ question.title }}</h1>
		    	<div v-html="question.sentence"></div>
			<h2>Point: {{ question.points }}</h2>
		    	{{ message }}
		    	<form v-on:submit.prevent="Answer">
		    	    <div class="field" v-if=flag>
			    
		            	<label for="flag-submit">Flag: </label>
			    	<input id="flag-submit" type="text" name="flag" placeholder="flag" v-model="postdata.answer">
			    <div class="field">
			    	 <button type="submit">Submit</button>
			    </div>
			    </div>
			    <div class="field" v-else>
			        <h2>Congratulations!! You solved!!</h2>
			    </div>
		    	</form>
	            </div>
		    </div>
		</div>
            </div>
        </div>
    </article>
</template>

<script>
var $ = require('jquery')
function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}
var csrftoken = getCookie('csrftoken')
export default {
  data () {
    var userdata = this.$root.user
    var questions = [{
      id: ''
    }]
    var question = {
      title: '',
      sentence: '',
      updated_at: '',
      points: ''
    }
    var postdata = {
      question: this.$route.params.question_id,
      answer: ''
    }
    var message = ''
    var flag = 1
    return {
      userdata, questions, question, postdata, message, flag
    }
  },
  ready: function () {
    this.getQuestion()
    this.getTeam()
  },
  methods: {
    getQuestion: function () {
      var that = this
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: this.$root.apiroot + 'questions/' + this.$route.params.question_id + '/',
        dataType: 'json',
        success: function (json) {
          that.$data.question = json
        },
        data: null
      })
    },
    getTeam: function () {
      var that = this
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: this.$root.apiroot + 'teams/' + this.$root.user.team + '/',
        dataType: 'json',
        success: function (json) {
          that.$data.questions = json.questions
          $.each(that.$data.questions, function (i) {
            if (that.$data.questions[i].id === that.$data.question.id) {
              that.$data.flag = 0
            }
          })
        }
      })
    },
    Answer: function () {
      $.ajax({
        type: 'POST',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        url: this.$root.apiroot + 'answers/',
        dataType: 'json',
        data: {'csrfmiddlewaretoken': csrftoken, 'question': this.postdata.question, 'answer': this.postdata.answer},
        beforesend: function (output, status, xhr) {
          csrftoken = getCookie('csrftoken')
        },
        success: function (json) {
          window.location.reload()
        },
        error: function (json) {
          window.location.reload()
        }
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

field {
      width: 240px;
      margin: 30px auto;
      color: #fff;
      font-size: 20px;
      text-align: left;
}

.field input {
       box-sizing: border-box;
       width: 100%;
       padding: 14px;
       border: none;
       outline: none;
       margin-top: 10px;
       background-color: rgba(34, 34, 34, .7);
       background-size: 0% 1px;
       color: #eee;
       font-size: 16px;
       transition: background-size 0.3s ease;
}

.field input:focus {
       background-image: linear-gradient(#3df, #3df);
       background-position: centr bottom;
       background-size: 100% 1px;
       background-repeat: no-repeat;
}

button {
       display: block;
       padding: 10px 30px;
       border: 2px solid #000;
       margin: 0 auto;
       background-color: #111;
       color: #aaa;
       font-size: 20px;
       text-align: center;
}

button:hover {
       border: 3px solid #222;
       color: #fff;
       background-color: #333;
       cursor: pointer;
}	     
</style>