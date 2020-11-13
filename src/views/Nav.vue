<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="addVideo()">mdi-plus</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon @click="videoLists()">mdi-mail</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon @click="videoInfo()">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon @click="login()">mdi-login</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    login() {
      this.$router.push('/');
    },
  },
};
</script>
