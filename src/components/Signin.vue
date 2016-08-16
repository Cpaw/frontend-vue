<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="formbox">
    	            <h2>Sign in</h2>
                    <form method="post" action="localhost:3000/login">
                        <div class="field">
			    <label for="signin-name">Email: <br></label>
			    <input id="signin-name" type="text" name="email" placeholder="email" v-model="user.email">
                        </div>
                        <div class="field">
                            <label for="signin-name">Password: <br></label>
                            <input id="signin-name" type="text" name="email" placeholder="password" v-model="user.password">
                        </div>
			<div class="field>
			  <button v-on:click="login">Sign in</button>
		    </form>
		</div>
	    </div>
        </div>
    </article>
</template>

<script>
import cookie from 'cookie-cutter'
export default {
  ready () {
    if (typeof cookie.get('token') !== 'undefined') {
      this.$route.router.go('/user')
    }
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      this.$http.post(
        this.$parent.backend + 'login',
        {
          'email': this.user.email,
          'password': this.user.password
        }
      ).then((response) => {
        this.$route.router.go('/home')
      }, (response) => {
        console.log('error')
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
</style>
