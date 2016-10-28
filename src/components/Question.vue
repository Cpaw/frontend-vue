<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="formbox">
		     <h2>{{ question.title }}</h2>
		     <div v-html="question.sentence"></div>
                     <h3>Point: {{ question.points }}</h3>
                     {{ question.updated_at }}
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
    var question = {
      title: '',
      sentence: '',
      updated_at: '',
      points: ''
    }
    var postdata = {
      question: '',
      answer: ''
    }
    var message = ''
    return {
      userdata, question, postdata, message
    }
  },
  ready: function () {
    $.ajax({
      type: 'GET',
      crossDomain: true,
      url: this.$root.apiroot + 'questions/' + this.$route.params.question_id + '/',
      dataType: 'json',
      success: function (json) {
        this.question = json
      },
      data: null
    })
  },
  methods: {
    Answer: function () {
      $.ajax({
        type: 'POST',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        url: this.$root.apiroot + 'answer/',
        dataType: 'json',
        data: {'csrfmiddlewaretoken': csrftoken, 'question': this.postdata.question, 'answer': this.postdata.answer},
        beforesend: function (output, status, xhr) {
          csrftoken = getCookie('csrftoken')
        },
        success: function (json) {
          this.message = 'Correct!!'
        },
        error: function (json) {
          this.message = json.error
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

polygon {
    fill: #42b983;
    opacity: .75;
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