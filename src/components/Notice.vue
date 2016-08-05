<template>
        <article>
    		<div class="container">
                <div class="notice_container">
                    <nav>
                        <ul class="menu">
                            <li><a href="">Notice</a></li>
                            <li><a href="">Update</a></li>
                            <li><a href="">Bug</a></li>
                        </ul>
                    </nav>
                        <ul id="object">
                        <li v-for="notice in notices">
                            <div class="notice_internal">
                                {{ notice.title }}
                            </div>
                            <div class="notice_contents">
                                {{ notice.messages }}
                            </div>
                            <div class="notice_footer">
                                {{ notice.date }}        
                            </div>
                        </li>
                    </ul>
               	</div>
        	</div>
	</article>
</template>


<script>
export default {
  data () {
    var notices = [
      {
        title: 'test',
        messages: 'hello',
        date: '2016/8/20'
      }
    ]
    return {notices}
  }
}
</script>


<style scoped>
.notice_container {
	margin: 100px 0px;
	padding: 1em;
	background-color: #aaa;
}

.notice_internal {
	margin: 30px 0;
	width: 100%;
	background-color: #ccc;
	padding:1em 0;
}

.notice_container li {
        list-style-type: none;
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

</style>
