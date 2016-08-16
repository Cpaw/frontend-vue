<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="formbox">
    	            <h2>Sign in</h2>
                    <form method="post" action="localhost:3000/login">
                        <div class="field">
			    <label for="signin-name">Email: <br></label>
			    <input id="signin-name" type="text" name="email" placeholder="email" v-model='user.email'>
                        </div>
                        <div class="field">
                            <label for="signin-name">Password: <br></label>
                            <input id="signin-name" type="text" name="email" placeholder="password" v-model='user.password'>
                        </div>
			<div class="field">
			    <button v-on:click='login'>Sign in</button>
			</div>
		    </form>
		</div>
	    </div>
        </div>
    </article>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  ready: function () {
    this.login()
  },
  methods: {
    login: function () {
      this.$http.post(
        'http://localhost:3000/signin',
        {
          'email': this.user.email,
          'password': this.user.password
        }
      ).then((response) => {
        this.$route.router.go('/home')
      }, (response) => {
        this.$route.router.go('/signin')
      })
    }
  }
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 40px;
}

.formbox {
    color: white;
}

.field {
    margin: 5%;
    text-align: center;
    font-size: 20px;
    color: white;
}

.field input {
    font-size: 16px;
}

button {
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 0 auto;
    padding: 5px;
    background-color: black;
}
</style>
