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
				<chart :type="'radar'" :data="seriesData" :options="options"></chart>
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
    var questions = [
      {
        id: ''
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
    var options = {
      tooltips: {
        mode: 'label'
      }
    }
    var labels = ['web', 'pwn', 'crypto', 'network', 'binary', 'forensic', 'stegano', 'misc']
    var backgroundColor = [
      'rgba(31, 200, 219, 1)'
    ]
    var series = ['Your Data']
    return {
      userdata, questions, category, options, labels, backgroundColor, series
    }
  },
  created: function () {
    this.getJson()
  },
  mounted: {
    seriesData () {
      let data = {
        labels: this.labels
      }
      data.datasets = this.series.map((e, i) => {
        return {
          data: [
            this.category[0].value,
            this.category[1].value,
            this.category[2].value,
            this.category[3].value,
            this.category[4].value,
            this.category[5].value,
            this.category[6].value,
            this.category[7].value
          ],
          label: this.series[i],
          borderColor: this.backgroundColor[i].replace(/1\)$/, '.5)'),
          pointBackgroundColor: this.backgroundColor[i],
          backgroundColor: this.backgroundColor[i].replace(/1\)$/, '.5)')
        }
      })
      return data
    }
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
          that.$data.questions = json.questions
          that.getQuestion()
        },
        data: null
      })
    },
    getQuestion: function () {
      var that = this
      $.each(that.$data.questions, function (i) {
        $.ajax({
          type: 'GET',
          crossDomain: true,
          url: that.$root.apiroot + 'questions/' + that.$data.questions[i].id + '/',
          dataType: 'json',
          success: function (json) {
            if (json.category === 1) {
              that.$data.category[0].value += 1
            } else if (json.category === 2) {
              that.$data.category[1].value += 1
            } else if (json.category === 3) {
              that.$data.category[2].value += 1
            } else if (json.category === 4) {
              that.$data.category[3].value += 1
            } else if (json.category === 5) {
              that.$data.category[4].value += 1
            } else if (json.category === 6) {
              that.$data.category[5].value += 1
            } else if (json.category === 7) {
              that.$data.category[6].value += 1
            } else {
              that.$data.category[7].value += 1
            }
            this._chart.update()
          },
          data: null
        })
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