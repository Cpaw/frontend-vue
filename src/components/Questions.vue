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
                        <div v-for="item in challenges">
                            <div class="row {{ item.isCompleted ? 'inactive' : 'active' }}">
                                <a v-link="{ path : '/question/' + item.id }">
                                    <div class="cell width10 center leftcell">{{ $index + 1 }}</div>
                                    <div class="cell width50">{{ item.title }}</div>
                                    <div class="cell width15">{{ item.category }}</div>
                                    <div class="cell width10">{{ item.score }}</div>
                                    <div class="cell width15 rightcell">{{ item.isCompleted ? 'completed' : '' }}</div>
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
    var challenges = [
      {
        id: 1,
        title: 'test',
        category: 'web',
        score: '100',
        isCompleted: false
      }
    ]
    return {challenges}
  },
  components: { Genrenav },
  watch: {
    '$route.params.genre': function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
      this.fetchData()
    }
  },
  methods: {
    fetchData: function () {
      console.log('OK')
      this.challenges = [
        {
          id: 1,
          title: 'test',
          category: this.$route.params.genre,
          score: '150',
          isCompleted: true
        },
        {
          id: 2,
          title: 'test2',
          category: this.$route.params.genre,
          score: '9999',
          isCompleted: false
        }
      ]
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
