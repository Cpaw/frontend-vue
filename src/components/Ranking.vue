<template>
    <article>
        <div class="container">
            <table class="contents">
                <thead>
                    <tr>
                        <th>Ranking</li>
                        <th>Name</li>
                        <th>Score</li>
                    </tr>
                </thead>
                <tbody id="object">
                    <tr v-for="data in ranking | orderBy 'points' -1">
                        <td class="col_rank">
                            {{ $index+1 }}
                        </td>
                        <td class="col_name">
                            {{ data.name }}
                        </td>
                        <td class="col_score">
                            {{ data.points }}        
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>
</template>

<script>
var $ = require('jquery')
export default {
  data () {
    var ranking = [
      {
        id: '',
        name: '',
        points: ''
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
        url: this.$root.apiroot + 'teams/',
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
.col_rank {
    color:white;
    width: 20%;
    text-align: center;
}

.col_name {
    color: white;
    width: 50%;
    text-align: center;
}

.col_score {
    color: white;
    width:30%;	
    text-align: center;
}

table {
    width:100%;
}

thead tr th {
    border-bottom: 1px solid #22ddff;
    font-size: 25px;
}

tbody tr td {
    font-size: 18px;
    padding: 1em;
}

tr {
   color: white;
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
