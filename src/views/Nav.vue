<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>iQuantile StuHUB</v-toolbar-title>

      <v-spacer></v-spacer>

      <h4 icon title="user id" v-if="this.$store.state.auth_token">
        {{ this.$store.state.user_id }}
      </h4>

      <v-btn
        icon
        title="Add video"
        v-if="this.$store.state.access_level === 'admin'"
      >
        <v-icon @click="addVideo()">
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn icon title="video list">
        <v-icon @click="videoLists()">mdi-mail</v-icon>
      </v-btn>

      <!-- <v-btn icon>
        <v-icon @click="videoInfo()">mdi-heart</v-icon>
      </v-btn> -->

      <v-btn icon v-if="this.$store.state.auth_token" title="logout">
        <v-icon @click="logout()">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
// import * as env_const from "../conf/env_const.js";
// import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    addVideo() {
      //   alert('reached');
      this.$router.push('/add-video');
    },
    videoInfo() {
      this.$router.push('/video-info');
    },
    videoLists() {
      this.$router.push('/video-lists');
    },
    logout() {
      // clear state
      this.$store.dispatch('logOut');
      this.$router.push('/');
    },
  },
};
</script>
