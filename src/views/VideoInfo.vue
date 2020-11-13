<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <!-- Left container -->
      <v-col cols="12" sm="6" md="8">
        <v-card class="video-container">
          <!-- <video width="320" height="240" autoplay>
                <source src="https://www.youtube.com/watch?v=UmY0lBagGCw&ab_channel=Karatemike415">
            </video> -->
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          >
          </iframe>
        </v-card>

        <v-card class="video-author">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://picsum.photos/350/165?random"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>title</v-list-item-title>
              <v-list-item-subtitle>subtitle</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <!-- Right container -->
      <v-col cols="6" md="4">
        <v-container class="grey lighten-5 mb-6">
          <v-row align="end" no-gutters style="height: 150px;">
            <!-- first row(response with rating) -->
            <v-col cols="6">
              <v-card class="pa-2" outlined tile>
                <p>Top responses</p>
                <p>Faisal</p>
                <p>Faisal</p>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="pa-2" outlined tile>
                <p>View all</p>
                <p>4.4</p>
                <p>3.4</p>
              </v-card>
            </v-col>
            <!-- 2nd row average response rating -->
            <v-col cols="6">
              <v-card class="pa-2" outlined tile>
                <p>Average response rating</p>
                <p>4.44</p>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card class="pa-2" outlined tile>
                <br />
                <v-rating
                  v-model="rating"
                  background-color="white"
                  color="yellow accent-4"
                  dense
                  half-increments
                  hover
                  size="14"
                  style="margin-top:-5px;"
                >
                </v-rating>
              </v-card>
            </v-col>
            <!-- rd row sentiment -->
            <v-col cols="6">
              <v-card class="pa-2" outlined tile>
                <p>Sentiment</p>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://picsum.photos/350/165?random"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>title</v-list-item-title>
                    <v-list-item-subtitle>subtitle</v-list-item-subtitle>
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
        <v-card class="pa-2" outlined tile>
          <p>All comments</p>
          <!-- comment 1 -->
          <v-card class="mx-auto" outlined>
            <v-list-item>
              <!-- comment left section -->
              <v-list-item-avatar>
                <v-img src="https://picsum.photos/350/165?random"></v-img>
              </v-list-item-avatar>

              <v-list-item-content class="comment-left-section-titles">
                <v-list-item-title>title</v-list-item-title>
                <v-list-item-subtitle>subtitle</v-list-item-subtitle>
              </v-list-item-content>
              <!-- comment right section -->
              <v-list-item three-line style="margin-left:150px">
                <v-list-item-content>
                  <div class="overline mb-4">
                    OVERLINE
                  </div>
                  <v-list-item-title class="headline mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Greyhound divisely hello coldly fonwderfully
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey">
                </v-list-item-avatar>
              </v-list-item>
            </v-list-item>
          </v-card>

          <!-- comment 2 -->
          <v-card class="mx-auto" outlined>
            <v-list-item>
              <!-- comment left section -->
              <v-list-item-avatar>
                <v-img src="https://picsum.photos/350/165?random"></v-img>
              </v-list-item-avatar>

              <v-list-item-content class="comment-left-section-titles">
                <v-list-item-title>title</v-list-item-title>
                <v-list-item-subtitle>subtitle</v-list-item-subtitle>
              </v-list-item-content>
              <!-- comment right section -->
              <v-list-item three-line style="margin-left:150px">
                <v-list-item-content>
                  <div class="overline mb-4">
                    OVERLINE
                  </div>
                  <v-list-item-title class="headline mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Greyhound divisely hello coldly fonwderfully
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey">
                </v-list-item-avatar>
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
          <v-card class="pa-2" outlined tile>
            <p>Add a comment</p>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <!-- add comment left section -->
            <v-flex xs6>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-flex>
            <!-- add comment right section -->
            <v-flex xs6>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <div class="action-button-container">
                <v-btn class="mr-4" @click="clear">
                  Cancel
                </v-btn>
                <v-btn @click="submit">
                  Submit
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.comment-left-section-titles {
  overflow: visible;
}
.action-button-container {
  float: right;
}
</style>
