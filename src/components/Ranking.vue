<template>
    <article>
        <div class="container">
            <div class="contents notice_container">
                <nav>
                    <ul class="menu">
                        <li><a href="">Ranking</a></li>
                        <li><a href="">Name</a></li>
                        <li><a href="">Score</a></li>
                    </ul>
                </nav>
                    <ul id="object">
                    <li v-for="data in ranking">
                        <div class="notice_internal">
                            {{ data.rank }}
                        </div>
                        <div class="notice_contents">
                            {{ data.name }}
                        </div>
                        <div class="notice_footer">
                            {{ data.score }}        
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
var $ = require('jquery')
export default {
  data () {
    var ranking = [
      {
        rank: '',
        name: '',
        score: ''
      }
    ]
    return {ranking}
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
        url: 'http://localhost:3000/ranking',
        dataType: 'json',
        success: function (json) {
          that.$data.ranking = json
        },
        data: null
      })
    }
  }
}
</script>

<style scoped>
.notice_internal {
	margin: 30px 0;
	width: 100%;
	background-color: #ccc;
	padding:1em 0;
}

.notice_container li {
        list-style-type: none;
	color: white;
}

.notice_footer {
	padding:1em;
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
