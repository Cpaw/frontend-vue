<template>
    <article>
        <div class="container">
	    <div class="contents">
	        <div class="formbox">
    	            <h2>Sign up</h2>
                    <form method="post" action="localhost:3000/signup">
			<div class="field">
			    <label for="signup-name">User name: <br></label>
			    <input id="signup-name" type="text" name="user" placeholder="user name">
                        </div>
                        <div class="field">
			    <label for="signin-name">Email: <br></label>
			    <input id="signin-name" type="text" name="email" placeholder="email">
                        </div>
                        <div class="field">
                            <label for="signin-name">Password: <br></label>
                            <input id="signin-name" type="text" name="email" placeholder="password">
                        </div>
		    </form>
		</div>
	    </div>
	</div>
    </article>
</template>

<script>
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
