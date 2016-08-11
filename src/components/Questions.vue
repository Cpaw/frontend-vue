<template>
  <article>
    <div class="container">
      <div class="contents bg-field">
        <div class="genrenavbar">
          <nav>
            <ul class="genrenav">
              <li v-for="item in categoryList">
                <a v-link="{ path : '/questions/' + item.id }">{{ item.name }}</a>
              </li>
            </ul>
          </nav>
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
            <div v-for="item in challengeList">
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
export default {
  data: function () {
    var categoryList = [
      {
        id: 0,
        name: '',
        ordering: 0,
        created_at: '',
        updated_at: ''
      }
    ]
    var challengeList = [
      {
        id: 0,
        title: '',
        category: '',
        score: 0,
        progress: 0,
        isCompleted: false
      }
    ]
    return {categoryList, challengeList}
  },
  ready: function () {
    this.getCategoryList()
  },
  watch: {
    '$route.params.genre': function (val, oldVal) {
      this.fetchData()
    }
  },
  methods: {
    getCategoryList: function () {
      $.ajax(
        {
          url: apiroot + 'categories/',
          crossDomain: true,
          type: 'GET',
          dataType: 'json',
          success: function (json) {
            this.categoryList = json
          }
        }
      )
    },
    fetchData: function () {
      var genreid = this.$route.params.genre

      var challengeInfoForRender = []

      var userInfo = $.ajax(
        {
          url: apiroot + 'auth/',
          crossDomain: true,
          type: 'GET',
          dataType: 'json'
        }
      )

      var challengesInfo = $.ajax(
        {
          url: apiroot + 'questions/',
          crossDomain: true,
          type: 'GET',
          dataType: 'json'
        }
      )

      $.when(userInfo, challengesInfo, this.categoryList).done(function (user, challenges, cList) {
        var teamInfo = $.ajax(
          {
            url: apiroot + 'teams/' + user.team,
            crossDomain: true,
            type: 'GET',
            dataType: 'json'
          }
        )

        $.when(teamInfo, cList).done(function (team, cList) {
          for (var i in challenges) {
            var challenge = challenges[i]

            if (challenge.category === Number(genreid)) {
              var teamChallengeStatus = team.questions.filter(function (item, index) {
                if (item.id === challenge.id) return true
              })
              var teamObtainedPointsOnAChallenge
              if (teamChallengeStatus.length === 0) {
                teamObtainedPointsOnAChallenge = 0
              } else {
                teamObtainedPointsOnAChallenge = teamChallengeStatus[0].points
              }

              var challengeProgress = Math.round((teamObtainedPointsOnAChallenge * 100.0 / challenge.points))

              var isChallengeCompleted = false
              if (teamObtainedPointsOnAChallenge === challenge.points) {
                isChallengeCompleted = true
              } else {
                isChallengeCompleted = false
              }

              var categoryString = cList.filter(function (item, index) {
                if (item.id === genreid) return true
              })

              challengeInfoForRender.push(
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
        })
      })
      this.challengeList = challengeInfoForRender
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

/*********************
  CategiryNavigation
*********************/

.genrenavbar { background-color: #444; }

ul.genrenav
{
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

ul.genrenav li { float: left; }

ul.genrenav li a
{
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

ul.genrenav li a.v-link-active { border-bottom: 2px solid #3df; }
ul.genrenav li a:hover { background-color: #555; }

@media screen and (max-width:680px)
{
  ul.genrenav {position: relative;}
  ul.genrenav li
  {
    float: none;
    display: inline;
  }
  ul.genrenav li a
  {
    display: block;
    text-align: left;
  }
}
</style>
