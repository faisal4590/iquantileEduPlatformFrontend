<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <!-- Left container -->
      <v-col cols="12" sm="6" md="8">
        <v-card class="video-container">
          <video
            autoplay
            :src="this.singleVideoInfo.videoPath"
            controls
            class="video-file"
          ></video>
        </v-card>

        <!-- video author -->
        <v-card class="video-author">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://picsum.photos/350/165?random"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="text-content">
              <v-list-item-title>{{
                this.singleVideoInfo.videoAuthor
              }}</v-list-item-title>
              <v-list-item-subtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                dolorem temporibus totam?
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <!-- Right container -->
      <v-col cols="6" md="4">
        <v-container class="grey lighten-5 mb-6">
          <v-row align="end" style="height: 150px;">
            <!-- first row(response with rating) -->
            <v-col cols="6">
              <v-card
                class="pa-2  no-border-overflow"
                tile
                style="margin-top: -25px;padding:3px 0 0 3px"
              >
                <p>Top responses</p>
                <div style="margin-top:10px;">
                  <p
                    v-for="topResponse in this.topResponses"
                    v-bind:key="topResponse.id"
                    style="padding:3px 0 3px 0"
                  >
                    <v-chip
                      style="width:10px;height:20px; background:#F44A3E;color:white"
                    >
                      <span style="margin-left:-6px;">IQ</span>
                    </v-chip>
                    {{ topResponse.name }}
                  </p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card
                class="pa-2  no-border-overflow"
                tile
                style="margin-top: -25px;text-align:center;padding:6px 0 0 3px"
              >
                <p>View all</p>
                <div style="margin-top:10px">
                  <p
                    v-for="topResponse in this.topResponses"
                    v-bind:key="topResponse.id"
                    style="padding:3px 0 3px 0"
                  >
                    {{ topResponse.rating }}
                  </p>
                </div>
              </v-card>
            </v-col>
            <!-- 2nd row average response rating -->
            <v-col cols="12">
              <v-card class="pa-2 no-border-overflow" tile>
                <p>Average response rating</p>
                <div style="margin-top:8px;margin-left:20px">
                  <span style="margin-top:5px">{{
                    parseFloat(this.averageResponseRating).toFixed(2)
                  }}</span>
                  <v-rating
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    size="18"
                    style="margin-left:15px;display:inline"
                    :value="parseFloat(this.averageResponseRating).toFixed(2)"
                  >
                  </v-rating>
                </div>
              </v-card>
            </v-col>

            <!-- 3rd row sentiment -->
            <v-col cols="12">
              <v-card class="pa-2 no-border-overflow" tile>
                <p>Sentiment</p>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://picsum.photos/350/165?random"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content class="text-content">
                    <v-list-item-title>
                      {{ this.positiveResponse }}% positive response
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://picsum.photos/350/165?random"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content class="text-content">
                    <v-list-item-title>
                      {{ this.negativeResponse }}% negative response
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <!-- All comments section container -->
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-card class="pa-2 all-comments-card">
          <h3>All comments</h3>
          <!-- comment lists -->
          <v-card
            class="mx-auto single-comment"
            outlined
            v-for="singleComment in this.videoComments"
            v-bind:key="singleComment.id"
          >
            <v-list-item>
              <!-- comment left section -->
              <v-list-item-avatar>
                <v-img
                  src="https://picsum.photos/350/165?random"
                  class="comment-image"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content
                class="comment-left-section-titles text-content"
              >
                <v-list-item-title>
                  {{ singleComment.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip class="ma-2">
                    {{ singleComment.age }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
              <!-- comment right section -->
              <v-list-item three-line style="margin-left:150px">
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    <span>
                      {{ singleComment.rating }}
                    </span>

                    <v-rating
                      background-color="white"
                      color="yellow accent-4"
                      dense
                      half-increments
                      size="14"
                      style="margin-top:-5px; display:inline"
                      :value="parseFloat(singleComment.rating)"
                    >
                    </v-rating>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ singleComment.comment }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </v-card>
        </v-card>
      </v-col>
    </v-row>

    <!-- Add a comment container -->
    <div>
      <!-- add a comment title -->
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-card class="pa-2 add-comment-card" tile>
            <h3>Add a comment</h3>
          </v-card>
        </v-col>
      </v-row>
      <!-- Add comment form -->
      <v-row>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <!-- add comment left section -->
            <v-flex xs6>
              <!-- name -->
              <v-text-field v-model="name" label="Name" required readonly>
              </v-text-field>
              <!-- email -->
              <v-text-field v-model="email" label="E-mail" required readonly>
              </v-text-field>
              <v-textarea
                name="input-7-1"
                label="comment"
                hint="your comment"
                v-model="comment"
              >
              </v-textarea>
            </v-flex>
            <!-- add comment right section -->
            <v-flex xs6>
              <!-- age -->
              <v-text-field v-model="age" label="age" required readonly>
              </v-text-field>
              <!-- ratings -->
              <small>
                Rating
              </small>
              <v-rating
                v-model="rating"
                color="blue"
                dense
                half-increments
                label="Rating"
                hover
                size="30"
                style="margin-top:-5px;"
              >
              </v-rating>
              <div class="action-button-container">
                <v-btn class="mr-4" @click="clear">
                  Cancel
                </v-btn>
                <v-btn
                  @click="submitComment()"
                  style="background:grey;color:white;margin-left:5px;"
                >
                  Submit
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
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

export default {
  name: 'Gallery',
  data() {
    return {
      singleVideoInfo: {
        videoAuthor: '',
        videoPath: '',
      },
      defaultRating: 5, //default_rating
      rating: null,
      name: '',
      email: '',
      age: '',
      comment: '',
      videoComments: [],
      snackbar: false,
      responseResult: '',
      topResponses: [],
      averageResponseRating: null,
      positiveResponse: null,
      negativeResponse: null,
    };
  },
  components: {
    // videoPlayer,
  },
  mounted() {
    var self = this;
    var url = env_const.base_url + '/get_single_video';
    var openedVideoID = this.$store.state.opened_video_id;
    // alert(openedVideoID);

    axios
      .post(url, {
        auth_token: 'test',
        video_id: openedVideoID,
      })
      .then((response) => {
        // console.log(response.data.payload.single_video_info);
        self.singleVideoInfo.videoAuthor =
          response.data.payload.single_video_info.video_author;
        self.singleVideoInfo.videoPath =
          response.data.payload.single_video_info.video_path;
        self.name = self.$store.state.user_id;
        self.age = self.$store.state.age;
        self.email = self.$store.state.email;
      })
      .catch((e) => {
        alert(e.toString());
      });

    // getting all video comments
    var url2 = env_const.base_url + '/get_video_comment';
    axios
      .post(url2, {
        video_id: openedVideoID,
      })
      .then((response) => {
        // console.log(response.data.payload.video_comments);
        let videoCommentLists = response.data.payload.comment_lists;
        // console.log(videoCommentLists);
        if (videoCommentLists !== null) {
          for (var i = 0; i < videoCommentLists.length; i++) {
            self.videoComments.push(videoCommentLists[i]);
            // console.log(self.videoComments);
          }

          // updating top responses
          var tempCommentsRating = self.videoComments;
          // sorting comments based on ratings
          tempCommentsRating.sort((a, b) => b.rating.localeCompare(a.rating));
          //   console.log(self.videoComments);
          if (tempCommentsRating.length >= 3) {
            for (var j = 0; j < 3; j++) {
              self.topResponses.push(tempCommentsRating[j]);
            }
          } else {
            for (var k = 0; k < tempCommentsRating.length; k++) {
              self.topResponses.push(tempCommentsRating[k]);
            }
          }

          // updating average response rating
          var sum = 0;
          for (var l = 0; l < self.videoComments.length; l++) {
            sum += parseFloat(self.videoComments[l].rating);
          }
          //   console.log(sum.toFixed(2) / self.videoComments.length);
          var totalResponse = sum.toFixed(2);
          self.averageResponseRating = parseFloat(
            totalResponse / self.videoComments.length
          ).toFixed(2);

          // updating sentiments
          var positiveResponseCount = 0;
          var negativeResponseCount = 0;
          for (var m = 0; m < self.videoComments.length; m++) {
            var tempRating = parseFloat(self.videoComments[m].rating);
            if (tempRating.toFixed(2) > 2) {
              // postive responses
              positiveResponseCount++;
            } else {
              // negative responses
              negativeResponseCount++;
            }
          }

          positiveResponseCount =
            (positiveResponseCount * 100) / self.videoComments.length;
          negativeResponseCount =
            (negativeResponseCount * 100) / self.videoComments.length;

          self.positiveResponse = parseFloat(positiveResponseCount).toFixed(2);
          self.negativeResponse = parseFloat(negativeResponseCount).toFixed(2);
        }
      })
      .catch((e) => {
        alert(e.toString());
      });
  },
  methods: {
    submitComment() {
      //   alert(this.rating);
      var validation_msg = '';
      if (this.comment == '') {
        validation_msg += 'Please add comment \n';
      }

      if (this.rating == null) {
        validation_msg += 'Please give rating';
      }

      if (validation_msg != '') {
        alert(validation_msg);
      } else {
        var url = env_const.base_url + '/add_comment';
        var self = this;
        axios
          .post(url, {
            video_id: self.$store.state.opened_video_id,
            user_id: self.$store.state.user_id,
            email: self.$store.state.email,
            age: self.$store.state.age,
            comment: self.comment,
            rating: self.rating,
          })
          .then(function(response) {
            // console.log(response);
            var data = response.data;
            var status = data.status;

            if (status == 200) {
              // updating video comments
              self.videoComments = [];
              let videoCommentLists =
                response.data.payload.updated_comment_lists;
              // console.log(videoCommentLists);
              if (videoCommentLists !== null) {
                for (var i = 0; i < videoCommentLists.length; i++) {
                  self.videoComments.push(videoCommentLists[i]);
                  // console.log(self.videoComments);
                }
              }

              // updating top responses
              self.topResponses = [];
              var tempCommentsRating = self.videoComments;
              // sorting comments based on ratings
              tempCommentsRating.sort((a, b) =>
                b.rating.localeCompare(a.rating)
              );
              //   console.log(self.videoComments);
              if (tempCommentsRating.length >= 3) {
                for (var j = 0; j < 3; j++) {
                  self.topResponses.push(tempCommentsRating[j]);
                }
              } else {
                for (var k = 0; k < tempCommentsRating.length; k++) {
                  self.topResponses.push(tempCommentsRating[k]);
                }
              }

              // updating average response rating
              var sum = 0;
              for (var l = 0; l < self.videoComments.length; l++) {
                sum += parseFloat(self.videoComments[l].rating);
              }
              //   console.log(sum.toFixed(2) / self.videoComments.length);
              var totalResponse = sum.toFixed(2);
              self.averageResponseRating = parseFloat(
                totalResponse / self.videoComments.length
              ).toFixed(2);

              // updating sentiments
              var positiveResponseCount = 0;
              var negativeResponseCount = 0;
              for (var m = 0; m < self.videoComments.length; m++) {
                var tempRating = parseFloat(self.videoComments[m].rating);
                if (tempRating.toFixed(2) > 2) {
                  // postive responses
                  positiveResponseCount++;
                } else {
                  // negative responses
                  negativeResponseCount++;
                }
              }

              positiveResponseCount =
                (positiveResponseCount * 100) / self.videoComments.length;
              negativeResponseCount =
                (negativeResponseCount * 100) / self.videoComments.length;

              self.positiveResponse = parseFloat(positiveResponseCount).toFixed(
                2
              );
              self.negativeResponse = parseFloat(negativeResponseCount).toFixed(
                2
              );

              //emptying form
              self.comment = '';
              self.rating = null;
              //fire a toaster
              self.responseResult = 'Comment added successfully!';
              self.snackbar = true;
              // console.log(newAddedComment);
            } else {
              //fire a toaster
              self.responseResult = 'Failed to add comments!';
              self.snackbar = true;
            }
          })
          .catch(function(error) {
            alert(error.toString());
            //console.log(error);
          });
      }
    },
    clear() {
      //
    },
  },
};
</script>

<style scoped>
.comment-left-section-titles {
  overflow: visible;
}
.action-button-container {
  float: right;
  margin-top: 150px;
}
.video-file {
  width: 100%;
  height: 300px;
}
.video-author {
  margin-top: 30px;
}
.video-author:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.text-content {
  margin-left: 10px;
}
.all-comments-card,
.add-comment-card,
.no-border-overflow {
  box-shadow: none !important;
}
.single-comment {
  margin-top: 10px;
}
.single-comment:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
v-chip {
  background-color: grey;
}
.comment-image {
  width: 70px;
  height: 70px;
}
</style>
