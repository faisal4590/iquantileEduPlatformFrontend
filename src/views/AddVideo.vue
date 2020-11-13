<template>
  <v-container>
    <!-- Add a video container -->
    <div>
      <!-- add a video title -->
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="pa-2" outlined tile>
            <p>Add a video</p>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-container grid-list-md text-xs-center>
          <form @submit="submitData" enctype="multipart/form-data">
            <v-layout row wrap>
              <v-flex xs6>
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
                <v-file-input
                  show-size
                  counter
                  label="File input"
                ></v-file-input>
                <v-btn
                  class="mr-4"
                  @click="submit"
                  type="submit"
                  style="float:right"
                >
                  submit
                </v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-container>
      </v-row>
    </div>
  </v-container>
</template>

<script>
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
      e.preventDefault();
      alert('called');
    },
  },
};
</script>
