<template>
  <div>
  <h2 class="header">Register</h2>
  <form autocomplete="off" @submit="registerUser" novalidate v-on:submit.prevent>
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input v-model.trim="firstName" placeholder="First Name..." />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input v-model.trim="lastName" placeholder="Last Name..." />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model.trim="email" placeholder="Email..." />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input v-model.trim="password" type="password" placeholder="Password..." />
    </div>
    <div v-if="registerError" class="failed">
      Registration Failed
    </div>
    <div class="form-group" >
      <button type="button" @click="cancel()" v-if="!saving">Cancel</button>
      <button
        class="save" type="submit" v-if="!saving">
        Save
      </button>
      <LoadingSpinner :loading="saving"/>
    </div>
  </form>
</div>
</template>

<script>
import LoadingSpinner from '../shared/LoadingSpinner.vue';

export default {
  name: 'Register',
  components: { LoadingSpinner },
  data() {
    return {
      saving: false,
      registerError: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    };
  },
  methods: {
    registerUser() {
      this.saving = true;
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
  display:flex;
  flex-wrap:wrap;
  font-size:18px;
  justify-content:flex-end;
  padding:30px;
  width: 550px;
  margin: 0 auto;
}
input {
  display: block;
  font-size:18px;
  padding-left:10px;
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
.save {
  background-color: #CCDDFF;
  border-color: #CCDDFF;
}
button {
  margin-left:10px;
}
.failed {
  color: red;
  text-align: right;
  flex: 0 0 100%;
  padding-right: 10px;
}
em {float:right; color:#E05C65; padding-left:10px;}
.error input, .error select, .error textarea {background-color:#E3C3C5;}
.error ::-webkit-input-placeholder { color: #999; }
.error :-moz-placeholder { color: #999; }
.error ::-moz-placeholder { color: #999; }
.error :ms-input-placeholder  { color: #999; }
</style>
