<template>
  <form @submit.prevent="handleStartGame">
    <DefaultLayout>
      <template v-slot:content>
        <h5 class="center-text">Players, please enter your names below</h5>
        <div class="row">
          <div class="one-half column">
            <label for="player1Input">Player 1</label>
            <input
              v-model="player1Name"
              class="name-input"
              type="text"
              id="player1Input"
            />
          </div>
          <div class="one-half column">
            <label for="player2Input">Player 2</label>
            <input
              v-model="player2Name"
              class="name-input"
              type="text"
              id="player2Input"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button
          :class="['full-width', { disabled: !canProceed }]"
          :disabled="!canProceed"
          @click="handleStartGame"
        >
          Start Game
        </button>
      </template>
    </DefaultLayout>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createGame, addPlayer } from '@/services/game';
import type { IGame } from '@/types/game';
import { useRouter } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import { computed } from 'vue';

const player1Name = ref('');
const player2Name = ref('');
const router = useRouter();

const canProceed = computed(() => player1Name.value && player2Name.value);

const handleStartGame = async () => {
  if (!canProceed.value) {
    return;
  }

  const game: IGame = await createGame();
  await addPlayer(player1Name.value, game.id);
  await addPlayer(player2Name.value, game.id);
  router.push({ path: `/game/${game.id}` });
};
</script>

<style scoped>
.center-text {
  text-align: center;
}
.card {
  margin-bottom: 2rem;
}
.name-input {
  width: 100%;
  max-width: 60rem;
}
.disabled {
  color: lightgray;
  cursor: not-allowed;
}

@media (max-width: 550px) {
  .full-width {
    width: 100%;
  }
  .name-input {
    width: 100%;
    max-width: 100%;
  }
}
</style>
