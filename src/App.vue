<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="title">Rock, paper, scissors</h1>
      <RouterView />
    </div>
  </div>
</template>

<style>
@import '@/assets/normalize.css';
@import '@/assets/skeleton.css';

#app {
  max-width: 1280px;
}
:root {
  --primary-color: #fff;
  --text-color: #123;
}
.title {
  text-align: center;
}
.wrapper {
  height: 100vh;
  background: url('./assets/background.png');
  background-size: cover;
}
</style>
