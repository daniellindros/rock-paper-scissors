<template>
  <template v-if="loaded">
    <DefaultLayout>
      <template v-slot:header>
        <div class="header">
          <PlayerScore
            :name="game.player1.name"
            :score="playerScores[0]"
            :swap="true"
          />
          <div class="round">
            <h5>Round {{ noOfFinishedRounds + 1 }}</h5>
          </div>
          <PlayerScore
            :name="game.player2.name"
            :score="playerScores[1]"
            :swap="false"
          />
        </div>
      </template>
      <template v-slot:content>
        <div v-if="roundOver">
          <GameRoundResult
            :round="lastRound"
            :player1="game.player1"
            :player2="game.player2"
          />
        </div>
        <GameRound
          v-else-if="game.player1"
          :round="game.currentRound"
          :player1="game.player1"
          :player2="game.player2"
          @move="handleMove"
        />
      </template>
      <template v-slot:buttons>
        <button name="quit-game" class="full-width" @click="handleQuitGame">
          Quit Game
        </button>
        <button
          v-if="roundOver"
          name="next-round"
          class="full-width"
          @click="handleNextRound"
        >
          Next Round
        </button>
      </template>
    </DefaultLayout>
  </template>
</template>

<script setup lang="ts">
import PlayerScore from '@/components/PlayerScore.vue';
import { doMove, getGame } from '@/services/game';
import type { IGame } from '@/types/game';
import type { IPlayerMove } from '@/types/move';
import type { IFinishedRound } from '@/types/round';
import { onMounted, reactive, ref, watch } from 'vue';
import { computed } from 'vue';
import GameRound from '../components/GameRound.vue';
import GameRoundResult from '@/components/GameRoundResult.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import router from '@/router';
import { getPlayerScores } from '@/helpers/score';

const props = defineProps<{
  id: string;
}>();
const loaded = ref(false);
const roundOver = ref(false);
const game: IGame = reactive({
  id: '',
  player1: null,
  player2: null,
  currentRound: null,
  finishedRounds: [],
});

watch(
  () => game.currentRound,
  (currentRound, oldCurrentRound) => {
    if (!currentRound && !!oldCurrentRound) {
      roundOver.value = true;
    }
  }
);

const handleMove = async (move: IPlayerMove) => {
  await doMove(game.id, move);
  updateGame();
};

const updateGame = async () => {
  const fetchedGame: IGame = (await getGame(props.id)) as IGame;
  game.id = fetchedGame.id;
  game.currentRound = fetchedGame.currentRound;
  game.player1 = fetchedGame.player1;
  game.player2 = fetchedGame.player2;
  game.finishedRounds = fetchedGame.finishedRounds;
};

const noOfFinishedRounds = computed(() => game.finishedRounds.length);
const lastRound = computed(
  () => game.finishedRounds[noOfFinishedRounds.value - 1]
);
const playerScores = computed(() =>
  getPlayerScores(
    game.finishedRounds as IFinishedRound[],
    game.player1,
    game.player2
  )
);

const handleQuitGame = async () => {
  router.push({ name: 'home' });
};

const handleNextRound = async () => {
  roundOver.value = false;
};

onMounted(async () => {
  await updateGame();
  loaded.value = true;
});
</script>
<style scoped>
h1 {
  text-align: center;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.round {
  display: flex;
  justify-content: center;
}
@media (max-width: 550px) {
  .header {
    flex-direction: column;
  }
  .round {
    margin: 1rem 0;
    order: 3;
  }
}
</style>
