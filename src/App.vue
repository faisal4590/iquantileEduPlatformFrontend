<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './views/Nav';

export default {
  name: 'App',

  components: {
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background-color: #f6f6f6;
}
</style>
