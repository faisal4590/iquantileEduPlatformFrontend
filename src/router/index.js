import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import VideoInfo from "../views/VideoInfo.vue";
import AddVideo from "../views/AddVideo.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: "/video-info",
    name: "video-info",
    component: VideoInfo,
  },
  {
    path: "/add-video",
    name: "add-video",
    component: AddVideo,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
