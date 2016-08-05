<template>
    <article>
        <div class="container">
            <div class="contents bg-field">
                <div class="genrenavbar">
                    <nav>
                        <ul class="genrenav">
                            <li><a v-bind:class="{ 'current': isWeb }" v-link="{path : '/questions/web' }">Web</a></li>
                            <li><a v-bind:class="{ 'current': isBin }" v-link="{ path : '/questions/binary' }">Binary</a></li>
                            <li><a v-bind:class="{ 'current': isFor }" v-link="{ path : '/questions/forensics' }">Forensics</a></li>
                            <li><a v-bind:class="{ 'current': isMis }" v-link="{ path : '/questions/misc' }">Misc.</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="readable">
                    <div class="smallbox ">
                        <h2>Web</h2>
                        <div class="aQuestionHead">
                            <div class="qitem width10 center">#</div>
                            <div class="qitem width50">Title</div>
                            <div class="qitem width15">Category</div>
                            <div class="qitem width10">Score</div>
                            <div class="qitem width15"></div>
                        </div>
                        <div class="aQuestion solvedquestion">
                            <div class="qitem width10 center">1</div>
                            <div class="qitem width50">Fitst Example Task</div>
                            <div class="qitem width15">Category</div>
                            <div class="qitem width10">100</div>
                            <div class="qitem width15">solved</div>
                        </div>
                        <div class="aQuestion">
                            <div class="qitem width10 center">2</div>
                            <div class="qitem width50"><a href="question.html">Sescond Challenge</a></div>
                            <div class="qitem width15">Category</div>
                            <div class="qitem width10">100</div>
                            <div class="qitem width15"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
</script>

<style scoped>
    
.readable
{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 0;
  background-color: rgba(34,34,34,0.7);
  color: rgb(200,200,200);
}

.readable h2
{
    margin:0;
    color: rgb(200,200,200);
}

.smallbox
{
    width:90%;
    height: 90%;
    margin: 0 auto;
    padding-top: 1em;
    padding-bottom: 1em;
}

.aQuestion
{
  min-height: 50px;
  width: 100%;
  margin-top: 20px;
  border: 2px solid #33ddff;
  border-radius: 90px 0 90px 0;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  clear: both;
}

.solvedquestion
{
  min-height: 50px;
  width: 100%;
  margin-top: 20px;
  border: 2px solid #115588;
  border-radius: 90px 0 90px 0;
  color: #aaa;
  background-color: rgba(0,0,0,0.4);
  clear: both;  
}

.aQuestion img
{
  display: inline-block;
  margin-top:-16px;
  width: 64px;
  height: 64px;
  border: 2px solid #33ddff;
  background-color: rgba(0,0,0,0.3);
}

.solvedquestion img
{
  display: inline-block;
  margin-top:-16px;
  width: 64px;
  height: 64px;
  border: 2px solid #115588;
  background-color: rgba(0,0,0,0.3);
}

.qitem
{
  height: 50px;
  line-height: 50px;
  display: block;
  float: left;
}

.qicon
{
  text-align: center;
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

.center {text-align: center;}

.aQuestionHead
{
  min-height: 50px;
  width: 100%;
  margin-top: 20px;
  border-bottom: 2px solid #33ddff;
  color: #fff;
  clear: both;
}

.stBarWrapper
{
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border-bottom: 2px solid #222222;
  background-color: #333333;
  color: #000;
}

.stBar
{
  height: 15px;
  border-radius: 5px;
  background-color: #11ff22;
  float: left;
  line-height: 15px;
  color: #000;
  padding-left: 1em;
}

/*****************
 GENRE NAVIGATION
*****************/

.genrenavbar
{
    background-color: #333;
}

ul.genrenav {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

ul.genrenav li 
{
    float: left;
}

ul.genrenav li a 
{
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

ul.genrenav li a.current
{
    background-color: #666;    
}

ul.genrenav li a:hover 
{
    background-color: #555;
}

@media screen and (max-width:680px) 
{
  ul.genrenav {position: relative;}
  ul.genrenav li {
    float: none;
    display: inline;
  }
  ul.genrenav li a {
    display: block;
    text-align: left;
  }
}
</style>
