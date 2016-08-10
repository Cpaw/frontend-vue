<template>
    <article>
        <div class="container">
            <div class="contents bg-field">
                <div class="genrenavbar">
                    <nav>
                        <ul class="genrenav">
                            <li><a v-link="{ path : '/questions/web' }">Web</a></li>
                            <li><a v-link="{ path : '/questions/binary' }">Binary</a></li>
                            <li><a v-link="{ path : '/questions/forensics' }">Forensics</a></li>
                            <li><a v-link="{ path : '/questions/misc' }">Misc.</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="readable">
                    <div class="smallbox ">
                        <h2>{{ $route.params.genre }}</h2>
                        <div class="rowHead">
                            <div class="cell width10 center">#</div>
                            <div class="cell width50">Title</div>
                            <div class="cell width15">Category</div>
                            <div class="cell width10">Score</div>
                            <div class="cell width15"></div>
                        </div>
                        <div class="row inactive">
                            <a v-link="{ path : '/question/1' }">
                                <div class="cell width10 center leftcell">1</div>
                                <div class="cell width50">Fitst Example Task</div>
                                <div class="cell width15">Category</div>
                                <div class="cell width10">100</div>
                                <div class="cell width15 rightcell">Completed</div>
                            </a>
                        </div>
                        <div class="row active">
                            <a v-link="{ path : '/question/2' }">
                                <div class="cell width10 center leftcell">2</div>
                                <div class="cell width50">Sescond Challenge</div>
                                <div class="cell width15">Category</div>
                                <div class="cell width10">100</div>
                                <div class="cell width15 rightcell"></div>
                            </a>
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

/*****************
 GENRE NAVIGATION
*****************/

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

ul.genrenav li a.current { background-color: #666; }
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
