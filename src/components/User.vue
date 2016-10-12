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
				<h2>{{ category[0].value }}</h2>
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
    var category = [
      {
        label: 'web', value: 0
      },
      {
        label: 'pwn', value: 0
      },
      {
        label: 'crypto', value: 0
      },
      {
        label: 'network', value: 0
      },
      {
        label: 'binary', value: 0
      },
      {
        label: 'forensic', value: 0
      },
      {
        label: 'stegano', value: 0
      },
      {
        label: 'misc', value: 0
      }
    ]
    var data = {
      labels: ['web', 'pwn', 'crypto', 'network', 'binary', 'forensic', 'stegano', 'misc'],
      datasets: [{
        label: ['Your Data'],
        data: [
          category[0].value, 0, 0, 0, 0, 0, 0, 0
        ],
        borderColor: 'rgba(31, 200, 219, 1)'.replace(/1\)$/, '.5)'),
        pointBackgroundColor: 'rgba(31, 200, 219, 1)',
        backgroundColor: 'rgba(31, 200, 219, 1)'.replace(/1\)$/, '.5)')
      }]
    }
    var options = {
      tooltips: {
        mode: 'false'
      }
    }
    var labels = ['web', 'pwn', 'crypto', 'network', 'binary', 'forensic', 'stegano', 'misc']
    var backgroundColor = [
      'rgba(31, 200, 219, 1)'
    ]
    var series = ['Your Data']
    return {
      userdata, questions, category, options, labels, backgroundColor, series, data
    }
  },
  ready: function () {
    this.getTeam()
    this.$set('x', 0)
    this.$delete('x')
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
          var pwn = 0
          var crypto = 0
          var network = 0
          var binary = 0
          var forensic = 0
          var stegano = 0
          var misc = 0
          $.each(that.$data.questions, function (i) {
            if (that.$data.questions[i].cat === 1) {
              // that.$data.category[0].value += 1
              web += 1
            } else if (that.$data.questions[i].cat === 2) {
              // that.$data.category[1].value += 1
              pwn += 1
            } else if (that.$data.questions[i].cat === 3) {
              // that.$data.category[2].value += 1
              crypto += 1
            } else if (that.$data.questions[i].cat === 4) {
              // that.$data.category[3].value += 1
              network += 1
            } else if (that.$data.questions[i].cat === 5) {
              // that.$data.category[4].value += 1
              binary += 1
            } else if (that.$data.questions[i].cat === 6) {
              // that.$data.category[5].value += 1
              forensic += 1
            } else if (that.$data.questions[i].cat === 7) {
              // that.$data.category[6].value += 1
              stegano += 1
            } else {
              // that.$data.category[7].value += 1
              misc += 1
            }
            that.$set('x', 0)
            that.$delete('x')
          })
          var data = {
            labels: ['web', 'pwn', 'crypto', 'network', 'binary', 'forensic', 'stegano', 'misc'],
            datasets: [{
              label: ['Your Data'],
              data: [
                web, pwn, crypto, network, binary, forensic, stegano, misc
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