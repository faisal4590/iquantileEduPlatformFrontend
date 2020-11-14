<template>
  <v-container>
    <!-- Add a video container -->
    <div>
      <!-- add a video title -->
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="pa-2 no-border-overflow" tile>
            <h3>Add a video</h3>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-container grid-list-md text-xs-center>
          <form @submit="submitData" enctype="multipart/form-data">
            <v-layout row wrap>
              <v-flex xs6>
                <!-- author name input -->
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="30"
                  label="Author Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <!-- file input -->
                <v-file-input
                  show-size
                  counter
                  label="Add video"
                  v-model="videoFile"
                  accept="video/*"
                ></v-file-input>
                <!-- <input type="file" v-on:change="onFileChange" /> -->
                <!-- submit button -->
                <v-btn
                  class="mr-4"
                  @click="submit"
                  type="submit"
                  style="float:right; margin-top:5px;"
                >
                  <v-progress-circular
                    v-if="loader"
                    :size="20"
                    color="primary"
                    indeterminate
                  ></v-progress-circular>
                  <span v-else>
                    Add video
                  </span>
                </v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-container>
      </v-row>
    </div>
    <!-- toaster(snackbar) -->
    <v-snackbar v-model="snackbar">
      {{ responseResult }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import * as env_const from '../conf/env_const.js';
import axios from 'axios';

import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
export default {
  name: 'AddVideo',
  mixins: [validationMixin],

  validations: {
    name: {
      required,
      maxLength: maxLength(30),
    },
  },
  data() {
    return {
      name: '',
      videoFile: null,
      responseResult: '',
      snackbar: false,
      loader: false,
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 30 characters long');
      !this.$v.name.required && errors.push('Author name is required.');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    submitData(e) {
      // starting the loader
      this.loader = true;

      if (this.videoFile == null) {
        e.preventDefault();
        alert('please select a video file!');
        this.responseResult = 'Failed to add video!';
        this.snackbar = true;
        // closing the loader
        this.loader = false;
        return;
      }

      e.preventDefault();
      //   alert(this.videoFile);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      let formData = new FormData();
      formData.append('auth_token', 'test auth token');
      formData.append('video_author', this.name);
      formData.append('video_file', this.videoFile);
      //   console.log(...formData);

      // backend insert with api
      let self = this;
      let url = env_const.base_url + '/insert_videos';

      axios
        .post(url, formData, config)
        .then((response) => {
          console.log(response);
          if (response.data.status == 200) {
            //
            self.responseResult = 'Data added successfully!';
            self.snackbar = true;

            // clear form data
            self.name = '';
            self.videoFile = null;

            // closing the loader
            self.loader = false;
          }
        })
        .catch(function() {
          this.responseResult = 'Failed to add data!';
          this.snackbar = true;

          // closing the loader
          this.loader = false;
        });
    },
  },
};
</script>

<style>
.no-border-overflow {
  box-shadow: none !important;
}
</style>
