<template>
  <article>
    <div class="container">
      <div class="contents bg-field">
        <div class="categorynavbar">
          <nav>
            <ul class="categorynav">
              <li>
                <a v-bind:class="{ 'activeTab': isActiveTab(undefined) }" v-link="{ path : '/challenges'}">ALL</a>
              </li>
              <li v-for="item in categoryList" >
                <a v-bind:class="{ 'activeTab': isActiveTab(item.name) }" v-link="{ path : '/challenges/' + item.name }">{{ item.name }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="message" v-if="hasMessage">
          {{ message }} 
        </div>
        <div class="readable">
          <div class="smallbox ">
            <div class="rowHead">
              <div class="cell width10 center">#</div>
              <div class="cell width50">Title</div>
              <div class="cell width15">Category</div>
              <div class="cell width10">Score</div>
              <div class="cell width15">Progress</div>
            </div>
            <div v-for="item in challengeListForRender">
              <div class="row {{ item.isCompleted ? 'inactive' : 'active' }}">
                <a v-link="{ path : '/question/' + item.id }">
                  <div class="cell width10 center leftcell">{{ $index + 1 }}</div>
                  <div class="cell width50">{{ item.title }}</div>
                  <div class="cell width15">{{ item.category }}</div>
                  <div class="cell width10">{{ item.score }}</div>
                  <div class="cell width15 rightcell">{{ item.isCompleted ? 'completed' : item.progress + '%' }}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
var $ = require('jquery')
var apiroot = 'http://localhost/api/'
var epAuth = 'auth/'
var epTeams = 'teams/'
var epCategory = 'categories/'
var epChallenge = 'questions/'
export default {
  data: function () {
    return {
      userInfo: null,
      categoryList: [],
      challengeList: [],
      challengeListForRender: [],
      message: ''
    }
  },

  computed: {
    hasMessage: function () {
      return this.message !== ''
    }
  },

  ready: function () {
    $.when(this.getFromAPI(epAuth),
           this.getFromAPI(epCategory),
           this.getFromAPI(epChallenge), this)
    .done(function (uinfo, clist, qList, vm) {
      vm.userInfo = uinfo[0]
      vm.categoryList = clist[0]
      vm.challengeList = qList[0]
      var cat = vm.$route.params.category
      var categoryid = vm.lookupCatFromName(clist[0], cat)
      if (cat !== undefined && categoryid === null) {
        this.$route.router.go('/challenges')
      }
      vm.challengeListForRender = vm.filterList(vm.$route.params.category)
    }).fail(function (jqxhr, status, error) {
      this.message = status
    })
  },

  watch: {
    '$route.params.category': function (val, oldVal) {
      var categoryid = this.lookupCatFromName(this.categoryList, val)
      if (val !== undefined && categoryid === null) {
        this.$route.router.go('/challenges')
      }
      this.challengeListForRender = this.filterList(val)
    }
  },

  methods: {
    getFromAPI: function (endpoint) {
      return $.ajax(
        {
          url: apiroot + endpoint,
          crossDomain: true,
          type: 'GET',
          dataType: 'json'
        }
      )
    },

    lookupCatFromName: function (catList, catName) {
      var cat = catList.filter(function (item, index) {
        if (item.name === catName) return true
      })
      if (cat.length !== 0) return cat[0].id
      else return null
    },

    isActiveTab: function (str) {
      return str === this.$route.params.category
    },

    filterList: function (cat) {
      var resultList = []
      var categoryName = cat
      var categoryid = this.lookupCatFromName(this.categoryList, categoryName)
      var challenges = this.challengeList
      $.when(this.getFromAPI(epTeams + this.userInfo.team + '/'), this)
      .done(function (team, vm) {
        for (var i in challenges) {
          var challenge = challenges[i]
          if (categoryName === undefined ||
              challenge.category === Number(categoryid)) {
            var teamChallengeStatus = team[0].questions.filter(function (item, index) {
              if (item.id === challenge.id) return true
            })
            var teamObtainedPointsOnAChallenge = teamChallengeStatus.length === 0
            ? 0 : teamChallengeStatus[0].points
            var challengeProgress =
              Math.round((teamObtainedPointsOnAChallenge * 100.0 / challenge.points))
            var isChallengeCompleted = (teamObtainedPointsOnAChallenge === challenge.points)
            var categoryString = vm.categoryList.filter(function (item, index) {
              if (item.id === challenge.category) return true
            })[0].name
            resultList.push(
              {
                id: challenge.id,
                title: challenge.title,
                category: categoryString,
                score: challenge.points,
                progress: challengeProgress,
                isCompleted: isChallengeCompleted
              }
            )
          }
        }
      }).fail(function (jqxhr, status, error) {
        this.message = status
      })
      return resultList
    }
  }
}
</script>

<style scoped>
div.row {
  min-height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 90px 0 90px 0;
  background-color: rgba(0,0,0,0.4);
  clear: both;
}

div.row:hover { background-color: rgba(32,96,192,0.3); }
div.row.active > a { color: #fff; }
div.row.inactive > a { color: #999; }

div.row.active
{
  border: 1px solid #33ddff;
  box-shadow: 0px 0px 10px #37d;
}

div.row.inactive
{
  border: 2px solid #115588;
  box-shadow: none;
}

div.leftcell { border-radius: 90px 0 0 0; }
div.rightcell { border-radius:  0 0 90px 0; }

div.cell
{
  height: 50px;
  line-height: 50px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
}

.width05 {width: 5%;}
.width10 {width: 10%;}
.width15 {width: 15%;}
.width20 {width: 20%;}
.width30 {width: 30%;}
.width35 {width: 35%;}
.width40 {width: 40%;}
.width45 {width: 45%;}
.width50 {width: 50%;}

.center { text-align: center; }

.rowHead
{
  min-height: 50px;
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  color: #fff;
  clear: both;
}

div.message {
  height: 3em;
  margin: 1em 0;
  line-height: 2.5em;
  text-align: center;
  color: #eee;
  background-color: rgba(256,96,96,0.5);
  border: 1px solid #ff3333;
  box-shadow: 0px 0px 10px #f33;
}

/*********************
  CategoryNavigation
*********************/

.categorynavbar { background-color: #444; }

ul.categorynav
{
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

ul.categorynav li { float: left; }

ul.categorynav li a
{
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

ul.categorynav li a.activeTab { border-bottom: 2px solid #3df; }
ul.categorynav li a:hover { background-color: #555; }

@media screen and (max-width:700px)
{
  ul.categorynav {position: relative;}
  ul.categorynav li
  {
    float: none;
    display: inline;
  }
  ul.categorynav li a
  {
    display: block;
    text-align: left;
  }
}
</style>
