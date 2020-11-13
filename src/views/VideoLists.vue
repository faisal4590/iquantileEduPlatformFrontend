<template>
  <v-container>
    <!-- Add a video container -->
    <div>
      <!-- add a video title -->
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="pa-2" outlined tile>
            <p>All videos</p>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- video lists -->
        <v-col
          cols="12"
          sm="12"
          md="12"
          v-for="singleVideoInfo in this.videoLists"
          v-bind:key="singleVideoInfo.id"
        >
          <v-card outlined @click="openVideoInfo(singleVideoInfo.id)">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  {{ singleVideoInfo.id }}
                </div>
                <v-list-item-title class="headline mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import * as env_const from '../conf/env_const.js';

export default {
  name: 'VideoLists',
  data() {
    return {
      videoLists: [],
    };
  },
  mounted() {
    var self = this;
    var url = env_const.base_url + '/video_lists';
    axios
      .post(url, {
        auth_token: 'test',
      })
      .then((response) => {
        // JSON responses are automatically parsed.
        self.videoLists = response.data.payload.video_lists;
        // console.log(self.videoLists);
      })
      .catch((e) => {
        alert(e.toString());
      });
  },
  methods: {
    openVideoInfo(videoID) {
      // alert(videoID);
      this.$store.dispatch('setOpenedVideoID', videoID);

      // play the video on video player
      this.$router.push('/video-info');
    },
  },
};
</script>
