<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="indigo" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="user_id"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="loginSubmit()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import * as env_const from "../conf/env_const.js";
// import axios from "axios";
export default {
  data() {
    return {
      user_id: '',
      password: '',
    };
  },
  methods: {
    loginSubmit() {
      var validation_msg = '';
      if (this.user_id == '') {
        validation_msg += 'Please give user id \n';
      }

      if (this.password == '') {
        validation_msg += 'Please give password';
      }

      if (validation_msg != '') {
        alert(validation_msg);
      } else {
        // var url = env_const.base_url + "/login";
        // var self = this;
        // axios
        //   .post(url, {
        //     user_id: this.user_id,
        //     password: this.password
        //   })
        //   .then(function(response) {
        //     // console.log(response);
        //     var data = response.data;
        //     var status = data.status;
        //     var auth_token = data.payload.auth_token;
        //     var res = data.payload.response;
        //     var agent_id = self.agent_id;
        //     if (status == 200) {
        //       self.$store.dispatch("setAuthToken", auth_token);
        //       self.$store.dispatch("setAgentID", agent_id);
        //       self.$router.push("/contact_list");
        //     } else {
        //       alert(res);
        //     }
        //   })
        //   .catch(function(error) {
        //     alert(error.toString());
        //     //console.log(error);
        //   });
        if (
          this.user_id == 'faisal.aziz' &&
          this.password == 'googlemaniac420'
        ) {
          // alert("login");
          this.$router.push('/video-info');
        }
      }
    },
  },
};
</script>
