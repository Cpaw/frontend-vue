<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="formbox">
    	            <h2>Sign up</h2>
                    <form method="post" action="localhost:3000/signup">
			<div class="field">
			    <label for="signup-name">User name: <br></label>
			    <input id="signup-name" type="text" name="user" placeholder="user name" v-model='userdata.name'>
                        </div>
                        <div class="field">
			    <label for="signin-name">Email: <br></label>
			    <input id="signin-name" type="text" name="email" placeholder="email" v-model='userdata.email'>
                        </div>
                        <div class="field">
                            <label for="signin-name">Password: <br></label>
                            <input id="signin-name" type="text" name="email" placeholder="password" v-model='userdata.password'>
                        </div>
			<div class="field">
			    <button v-on:click='signup'>Sign up</button>
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
      userdata: {
        name: '',
        mail: '',
        password: ''
      }
    }
  },
  ready: function () {
    this.signup()
  },
  methods: {
    signup: function () {
      this.$http.post(
        'http://localhost:3000/signup',
        {
          'name': this.userdata.name,
          'email': this.userdata.email,
          'password': this.userdata.password
        }
      ).then((response) => {
        this.$route.router.go('/home')
      }, (response) => {
        this.$route.router.go('/signup')
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

button {
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 0 auto;
    padding: 5px;
    background-color: black;
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
