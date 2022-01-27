<template>
  <div id="app">
    <bookHeader/>
    <bookMainWrapper/>
  </div>
</template>

<script>
import bookMainWrapper from "./components/book-main-wrapper.vue"
import bookHeader from "./components/book-header.vue"

export default {
  name: 'App',
  components: {
   bookMainWrapper,
   bookHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
