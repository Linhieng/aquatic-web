<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: rgb(179, 177, 177);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:hover {
  background: rgb(100, 100, 100);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:active {
  background: rgb(68, 68, 68);
  border-radius: 10px;
}

:root {
  --bg-color: #79bbff;
  --bg-img: linear-gradient(to left bottom, #c2dfff 0%,#5daeff 100%);
}

body {
  background-color: var(--bg-color);
  background-image: var(--bg-img);
  min-height: 100vh;
}
</style>
