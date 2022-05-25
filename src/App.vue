<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  overflow-y: hidden;
}

body {
  background-color: var(--bg-color);
  background-image: var(--bg-img);
  min-height: 100vh;
}

#app {
  width: 100%;
}

$scroll-color: #ff5a3e;
*::-webkit-scrollbar {
  width: var(--scroll-width);
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba($color: $scroll-color, $alpha: 0.5);
  border-right: 2px solid var(--white-color);
  border-radius: var(--scroll-radius);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba($color: $scroll-color, $alpha: 0.7);
}

*::-webkit-scrollbar-thumb:active {
  background-color: rgba($color: $scroll-color, $alpha: 1);
}
</style>
