<template>
  <div v-if="winner">
    <h5 class="center-text">
      🥇 Congratulations <strong>{{ winner.name }}</strong
      >, you win! 🥇
    </h5>

    <p class="center-text">{{ winnerMove }} beats {{ loserMove }}</p>
  </div>
  <div v-else>
    <h5 class="center-text">It's a draw!</h5>
  </div>
</template>

<script setup lang="ts">
import type { IPlayer } from '@/types/player';
import type { EMove } from '@/types/move';
import type { IFinishedRound } from '@/types/round';
import { computed } from 'vue';
import { getRoundWinner } from '@/helpers/score';

const props = defineProps<{
  round: IFinishedRound;
  player1: IPlayer;
  player2: IPlayer;
}>();

const winner = computed((): IPlayer | null =>
  getRoundWinner(props.round, props.player1, props.player2)
);

const loser = computed((): IPlayer | null => {
  if (!winner.value) {
    return null;
  }
  return winner.value === props.player1 ? props.player2 : props.player1;
});

const loserMove = computed((): EMove | null => {
  if (!loser.value) {
    return null;
  }
  return loser.value === props.player1
    ? props.round.player1Move
    : props.round.player2Move;
});

const winnerMove = computed((): EMove | null => {
  if (!winner.value) {
    return null;
  }
  return winner.value === props.player1
    ? props.round.player1Move
    : props.round.player2Move;
});
</script>
<style scoped>
.center-text {
  text-align: center;
}
</style>
