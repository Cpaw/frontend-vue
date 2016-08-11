<template>
    <div class="genrenavbar">
        <nav>
            <ul class="genrenav">
                <li><a class="{{isWeb}}" v-link="{ path : '/questions/web' }">Web</a></li>
                <li><a class="{{isBin}}" v-link="{ path : '/questions/binary' }">Binary</a></li>
                <li><a class="{{isFor}}" v-link="{ path : '/questions/forensics' }">Forensics</a></li>
                <li><a class="{{isMis}}" v-link="{ path : '/questions/misc' }">Misc.</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
</script>

<style scoped>
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