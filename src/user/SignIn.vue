<template>
<div>
  <h2 class="header">Sign In</h2>
  <form @submit="signIn" autocomplete="off" novalidate v-on:submit.prevent>
    <div class="form-group" :class="{ 'error' : $v.email.$error }">
      <label for="email">Email:</label>
      <em v-if="$v.email.$error && $v.email.email.$invalid">Invalid Email</em>
      <em v-if="$v.email.$error && $v.email.required.$invalid">Required</em>
      <input v-model.trim="$v.email.$model" placeholder="Email..." />
    </div>
    <div class="form-group" :class="{ 'error' : $v.password.$error }">
      <label for="password">Password:</label>
      <em v-if="$v.password.$error">Required</em>
      <input v-model.trim="$v.password.$model" type="password" placeholder="Password..."/>
    </div>
    <div v-if="signInError" class="failed">
      Login Failed
    </div>
    <div class="form-group buttons" >
      <button type="button" @click="cancel()">Cancel</button>
      <button class="primary" type="submit" :disabled="!isFormValid()">
        Sign In
      </button>
    </div>
  </form>
</div>
</template>

<script>
import { required, email } from '@vuelidate/validators';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      signInError: false,
    };
  },
  validations: {
    email: { required, email },
    password: { required },
  },
  methods: {
    isFormValid() {
      // Note: This method shouldn't be necessary, but $v.$error is broken on vuelidate@next
      return !this.$v.email.$error
        && !this.$v.password.$error
        && this.$v.email.$dirty
        && this.$v.password.$dirty;
    },
    signIn() {
      // sign in user
    },
    cancel() {
      this.router.navigate(['/']);
    },
  },
};

</script>

<style scoped>
form {
  color: #336699;
  font-size:18px;
  padding:30px;
  width: 298px;
  margin: 0 auto;
}
input {
  display: block;
  font-size:18px;
  padding-left:10px;
  width: 275px;
}
.header {
  color: #336699;
  text-align:center;
  padding-top:20px;
  margin-top:0;
}
.form-group {
  margin: 10px;
}
.buttons {
  text-align: right;
  margin-right: 0px;
}
.buttons button {
  margin-left: 10px;
}
.failed {
  color: red;
  text-align: right;
}

em {float:right; color:#E05C65; padding-left:10px;}
.error input, .error select, .error textarea {background-color:#E3C3C5;}
.error ::-webkit-input-placeholder { color: #999; }
.error :-moz-placeholder { color: #999; }
.error ::-moz-placeholder { color: #999; }
.error :ms-input-placeholder  { color: #999; }
</style>
