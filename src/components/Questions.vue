<template>
    <article>
        <div class="container">
            <div class="contents bg-field">
                <genrenav></genrenav>
                <div class="readable">
                    <div class="smallbox ">
                        <div class="rowHead">
                            <div class="cell width10 center">#</div>
                            <div class="cell width50">Title</div>
                            <div class="cell width15">Category</div>
                            <div class="cell width10">Score</div>
                            <div class="cell width15"></div>
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
import Genrenav from './Genrenav.vue'
export default {
  data: function () {
    var challengeList = [
      {
        id: 1,
        title: 'test',
        category: 1,
        score: 100,
        progress: 0,
        isCompleted: false
      }
    ]
    return {challengeList}
  },
  components: { Genrenav },
  watch: {
    '$route.params.genre': function (val, oldVal) {
      this.fetchData()
    }
  },
  methods: {
    fetchData: function () {
      var $ = require('jquery')
      var apiroot = 'http://localhost/lepusapi/'
      var genreid = this.$route.params.genre

      var challengeInfoForRender = []

      var userInfo = $.ajax(
        {
          url: apiroot + '/users/',
          crossDomain: true,
          type: 'GET',
          dataType: 'json'
        }
      )

      var challengesInfo = $.ajax(
        {
          url: apiroot + '/questions/',
          crossDomain: true,
          type: 'GET',
          dataType: 'json'
        }
      )

      $.when(userInfo, challengesInfo).done(function (user, challenges) {
        var teamInfo = $.ajax(
          {
            url: apiroot + '/teams/' + user.team,
            crossDomain: true,
            type: 'GET',
            dataType: 'json'
          }
        )

        $.when(teamInfo).done(function (team) {
          for (var i in challenges) {
            var challenge = challenges[i]
            if (challenge.category === genreid) {
              var teamChallengeStatus = team.questions.filter(function (item, index) {
                if (item.id === challenge.id) return true
              })
              var teamObtainedPointsOnAChallenge
              if (teamChallengeStatus === null) {
                teamObtainedPointsOnAChallenge = 0
              } else {
                teamObtainedPointsOnAChallenge = teamChallengeStatus.points
              }

              var challengeProgress = Math.round((teamObtainedPointsOnAChallenge / challenge.points) * 100)

              var isChallengeCompleted = false
              if (teamObtainedPointsOnAChallenge === challenge.points) {
                isChallengeCompleted = true
              } else {
                isChallengeCompleted = false
              }

              challengeInfoForRender.push(
                {
                  id: challenge.id,
                  title: challenge.title,
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
</style>
