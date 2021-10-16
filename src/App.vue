<template>
  <div id="app">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  components: {
    TodoApp,
  },
};
</script>

<style>
body {
  background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
}
#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 40px 0 20px 0;
  color: #fff;
}
</style>
