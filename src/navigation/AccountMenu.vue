<template>
  <div class="account">
    <span class="welcome" v-if="user">
      <a @click="showMenu=!showMenu">
        <span>{{user?.firstName}}</span>
        <img class="profile" src="../assets/images/profile-circle.png" alt="Profile" />
      </a>
      <div class="menu" v-if="showMenu" @click="signOut()">Sign Out</div>
    </span>
    <span v-if="!user">
      <router-link class="nav-link" :to="{name: 'Sign-in'}">Sign In</router-link>
    </span>
    <span v-if="!user">
      <router-link class="nav-link" :to="{name: 'Register'}">Register</router-link>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { firstName: 'Jim' },
      showMenu: false,
    };
  },
  methods: {
    signOut() {
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  color: #D6F0FC;
}
.account {
  font-size: 20px;
  flex-grow: 1;
  text-align: right;
  padding-right: 30px;
}
.account span {
  padding-left: 20px;
}
.account .profile {
  height: 40px;
}
.welcome {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.welcome a {
  display: flex;
  justify-content: flex-end;
  align-items:center;
  user-select: none;
  cursor: pointer;
}

.welcome a > * {
  padding-left: 10px;
}

.menu {
  position: absolute;
  background-color: white;
  padding: 8px;
  color: #336699;
  top: 36px;
  right: -28px;
  font-size: 20px;
  border: 1px solid #CCDDFF;
  cursor: pointer;
}
</style>
