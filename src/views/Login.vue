<template>
  <v-app id="inspire">
    <v-main>
      <!-- login container -->
      <v-container v-show="login">
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="indigo" dark flat>
                <v-toolbar-title class="loginToggle" @click="loginFormOpen()"
                  >Login</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-toolbar-title
                  class="RegisterToggle"
                  @click="registerFormOpen()"
                  >Register
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="loginUserID"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="loginPassword"
                    required
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

      <!-- registration container -->
      <v-container v-show="registration">
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="indigo" dark flat>
                <v-toolbar-title class="loginToggle" @click="loginFormOpen()"
                  >Login</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-toolbar-title
                  class="RegisterToggle"
                  @click="registerFormOpen()"
                  >Register
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <!-- user id -->
                  <v-text-field
                    label="Username"
                    prepend-icon="person"
                    type="text"
                    v-model="user_id"
                    required
                  >
                  </v-text-field>

                  <!-- email -->
                  <v-text-field
                    label="Email"
                    prepend-icon="email"
                    type="email"
                    v-model="email"
                    required
                  >
                  </v-text-field>

                  <!-- password -->
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                    required
                  >
                  </v-text-field>

                  <!-- age -->
                  <v-text-field
                    label="Age"
                    prepend-icon="mdi-ev-plug-chademo"
                    type="number"
                    v-model="age"
                    min="0"
                    step="any"
                    required
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="registerSubmit()">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import * as env_const from '../conf/env_const.js';
import axios from 'axios';
export default {
  data() {
    return {
      user_id: '',
      password: '',
      email: '',
      age: null,
      registration: false,
      login: true,
      loginUserID: '',
      loginPassword: '',
    };
  },

  methods: {
    loginSubmit() {
      var validation_msg = '';
      if (this.loginUserID == '') {
        validation_msg += 'Please give user id \n';
      }

      if (this.loginPassword == '') {
        validation_msg += 'Please give password';
      }

      if (validation_msg != '') {
        alert(validation_msg);
      } else {
        var url = env_const.base_url + '/login';
        var self = this;
        axios
          .post(url, {
            user_id: this.user_id,
            password: this.password,
          })
          .then(function(response) {
            // console.log(response);
            var data = response.data;
            var status = data.status;

            if (status == 200) {
              var auth_obj = data.payload.new_created_user[0];
              self.$store.dispatch('setAuthObj', auth_obj);
              self.$router.push('/video-lists');
            } else {
              alert('Invalid credential');
            }
          })
          .catch(function(error) {
            alert(error.toString());
            //console.log(error);
          });
      }
    },
    loginFormOpen() {
      this.registration = false;
      this.login = true;
    },
    registerFormOpen() {
      this.registration = true;
      this.login = false;
    },
    registerSubmit() {
      let formData = new FormData();
      formData.append('auth_token', 'test auth token');
      formData.append('user_id', this.user_id);
      formData.append('email', this.email);
      formData.append('age', this.age);
      formData.append('password', this.password);
      formData.append('access_level', 'user');
      //   console.log(...formData);

      // backend insert with api
      let self = this;
      let url = env_const.base_url + '/add_user';

      axios
        .post(url, formData)
        .then((response) => {
          console.log(response);
          if (response.data.status == 200) {
            // clear registration form data
            self.user_id = '';
            self.email = '';
            self.age = null;
            self.password = '';

            // load login data
            self.registration = false;
            self.login = true;

            self.loginUserID = self.user_id;
            self.loginPassword = self.password;
          }
        })
        .catch(function() {});
    },
  },
};
</script>

<style scoped>
.RegisterToggle:hover,
.loginToggle:hover {
  cursor: pointer;
}
</style>
