<template>
  <v-container>
    <!-- Add a video container -->
    <div>
      <!-- add a video title -->
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="pa-2 no-border-overflow" tile>
            <h2 v-if="this.videoLists && this.videoLists.length">All videos</h2>
            <h2 v-else style="text-align:center;">No video found!</h2>
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
          <v-card
            @click="openVideoInfo(singleVideoInfo.id)"
            class="mx-auto single-video"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  <h3>Video ID: #{{ singleVideoInfo.id }}</h3>
                </div>
                <v-list-item-title class="headline mb-1">
                  Author: {{ singleVideoInfo.video_author }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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

    // console.log(this.averageResponseRating);
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

<style>
.no-border-overflow {
  background-color: #f6f6f6 !important;
  box-shadow: none !important;
}

.single-video {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.single-video:hover {
  cursor: pointer;
  box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>
