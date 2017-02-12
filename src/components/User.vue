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
  		                <chart :type="'radar'" :data="data" :options="options"></chart>
			</section>
		    </div>
		</div>
            </div>
        </div>
    </article>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
var $ = require('jquery')
export default {
  components: {
    Chart
  },
  data () {
    var userdata = this.$root.user
    var questions = [
      {
        cat: ''
      }
    ]
    var data = {
      labels: ['Web', 'Network', 'crypto', 'Reverse', 'Pwn', 'Forensic', 'Stego', 'Misc'],
      datasets: [{
        label: ['The number of correct answers'],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0
        ],
        borderColor: 'rgba(31, 200, 219, 1)'.replace(/1\)$/, '.5)'),
        pointBackgroundColor: 'rgba(31, 200, 219, 1)',
        backgroundColor: 'rgba(31, 200, 219, 1)'.replace(/1\)$/, '.5)')
      }]
    }
    var options = {
      scale: {
        ticks: {
          display: false
        },
        scaleLabel: {
          fontColor: '#fff'
        },
        gridLines: {
          color: 'rgba(150, 150, 150, 0.1)'
        }
      }
    }
    var labels = ['Web', 'Network', 'Crypto', 'Reverse', 'Pwn', 'Forensic', 'Stego', 'Misc']
    var backgroundColor = [
      'rgba(31, 200, 219, 1)'
    ]
    var series = ['Your Data']
    return {
      userdata, questions, options, labels, backgroundColor, series, data
    }
  },
  ready: function () {
    this.getTeam()
  },
  methods: {
    getTeam: function () {
      var that = this
      $.ajax({
        type: 'GET',
        crossDomain: true,
        url: this.$root.apiroot + 'teams/' + this.$root.user.team + '/',
        dataType: 'json',
        success: function (json) {
          that.$data.questions = json.questions
          var web = 0
          var network = 0
          var crypto = 0
          var reverse = 0
          var pwn = 0
          var forensic = 0
          var stegano = 0
          var misc = 0
          $.each(that.$data.questions, function (i) {
            if (that.$data.questions[i].cat === 1) {
              web += 1
            } else if (that.$data.questions[i].cat === 2) {
              network += 1
            } else if (that.$data.questions[i].cat === 3) {
              crypto += 1
            } else if (that.$data.questions[i].cat === 4) {
              reverse += 1
            } else if (that.$data.questions[i].cat === 5) {
              pwn += 1
            } else if (that.$data.questions[i].cat === 6) {
              forensic += 1
            } else if (that.$data.questions[i].cat === 7) {
              stegano += 1
            } else {
              misc += 1
            }
          })
          var data = {
            labels: ['Web', 'Network', 'Crypto', 'Reverse', 'Pwn', 'Forensic', 'Stego', 'Misc'],
            datasets: [{
              label: ['The number of correct answers'],
              data: [
                web, network, crypto, reverse, pwn, forensic, stegano, misc
              ],
              borderColor: 'rgba(31, 200, 219, 1)'.replace(/1\)$/, '.5)'),
              pointBackgroundColor: 'rgba(31, 200, 219, 1)',
              backgroundColor: 'rgba(31, 200, 219, 1)'.replace(/1\)$/, '.5)')
            }]
          }
          that.$data.data = data
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