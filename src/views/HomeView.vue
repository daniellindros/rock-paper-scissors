<template>
  <DefaultLayout>
    <template v-slot:content>
      <h5 class="center-text">Hello, and welcome to Rock, Paper, Scissors!</h5>
      <p class="center-text">Press "New Game" to start playing...</p>
    </template>

    <template v-slot:buttons>
      <button name="new-game" class="full-width" @click="handleNewGame">
        New Game
      </button>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';

const router = useRouter();

const handleNewGame = () => router.push({ name: 'newGame' });
</script>
<style scoped>
.center-text {
  text-align: center;
}
</style>
