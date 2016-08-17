<template>
    <article>
        <div class="container">
            <div class="contents notice_container">
                <nav>

                    <ul class="menu">
                        <li id="notice_button" v-on:click='vm.NoticeButton'><a>Notice</a></li>
                        <li id="update_button" v-on:click='vm.UpdateButton'><a>Update</a></li>
                        <li id="bug_button" v-on:click='vm.BugButton'><a>Bug</a></li>
                    </ul>
                </nav>
                <div class="readable">
                    <div class="smallbox">
                        <ul id="object">
                            <li class="notice_instance" v-for="notice in notices">
                                <div v-if="notice.pr == vm.state" class="notice_title">
                                    {{ notice.title }}
                                </div>
                                <div v-if="notice.pr == vm.state" class="notice_body">
                                    {{ notice.body }}
                                </div>
                                <div v-if="notice.pr == vm.state" class="notice_footer">
                                    {{ notice.created_at }}        
                                </div>
                            </li>
                        </ul>
                   </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import Vue from 'vue'
var $ = require('jquery')
var vm = new Vue({
  data: {
    state: 'notice'
  },
  methods: {
    NoticeButton: function (event) {
      this.state = 'notice'
    },
    UpdateButton: function (event) {
      this.state = 'update'
    },
    BugButton: function (event) {
      this.state = 'bug'
    }
  }
})
export default {
  data () {
    var notices = [
      {
        pr: '',
        id: '',
        title: '',
        body: '',
        created_at: ''
      }
    ]
    return {
      notices,
      vm
    }
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
        url: 'http://localhost:3000/notice',
        dataType: 'json',
        success: function (json) {
          that.$data.notices = json
        },
        data: null
      })
    }
  }
}
</script>

<style scoped>
.notice_container li {
    list-style-type: none;
}

.notice_instance{
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
