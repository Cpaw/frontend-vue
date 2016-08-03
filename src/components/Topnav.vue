<template>
  <header>
      <div class="container">
          <nav>
              <ul class="topnav" id="toggleNav">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="questions.html">Questions</a></li>
                  <li><a href="ranking.html">Ranking</a></li>
                  <li><a href="notice.html">Notice</a></li>
                  <li class="rightalign"><a href="signup.html">Sign up</a></li>
                  <li class="rightalign"><a href="signin.html">Sign in</a></li>
                  <li class="icon">
                      <a href="javascript:void(0);" @click="toggle('toggleNav')">&#9776;</a>
                  </li>
              </ul>
          </nav>
      </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    toggle: function (id) {
      var x = document.getElementById(id)
      if (x.className === 'topnav') {
        x.className += ' responsive'
      } else {
        x.className = 'topnav'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header
{
    width: 100%;  
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    background-color: #333;
    z-index: 999;
}
nav
{
    overflow: auto;  
}
ul.topnav {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

ul.topnav li 
{
    float: left;
}

ul.topnav li.rightalign
{
    float: right;
}

ul.topnav li a 
{
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

ul.topnav li a:hover 
{
    background-color: #555;
}

ul.topnav li.icon 
{
    display: none;
}

@media screen and (max-width:750px) 
{
  ul.topnav li:not(:first-child){display: none;}
  ul.topnav li.icon {
    float: right;
    display: inline-block;
  }
}

@media screen and (max-width:750px) 
{
  ul.topnav.responsive {position: relative;}
  ul.topnav.responsive li.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  ul.topnav.responsive li {
    float: none;
    display: inline;
  }
  ul.topnav.responsive li a {
    display: block;
    text-align: left;
  }
}
</style>
