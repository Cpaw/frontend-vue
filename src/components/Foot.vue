<template>
    <footer>
        <div class="container">
            {{data}}
        </div>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      data: 'Cpaw CTF'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer
{
    width: 100%;
    min-height: 40px;
    position: fixed;
    bottom: 0;
    text-align: right;
    line-height: 40px;
    color: #f2f2f2;    
    background-color: #222;
}
</style>
