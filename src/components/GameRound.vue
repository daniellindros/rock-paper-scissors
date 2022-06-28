<template>
  <h5 class="center-text">Make your move, {{ currentPlayer.name }}!</h5>
  <PlayerMoves @move="handleMove" />
</template>

<script setup lang="ts">
import PlayerMoves from '@/components/PlayerMoves.vue';
import type { IPlayer } from '@/types/player';
import type { EMove, IPlayerMove } from '@/types/move';
import type { IRound } from '@/types/round';
import { computed } from 'vue';

const props = defineProps<{
  round: IRound;
  player1: IPlayer;
  player2: IPlayer;
}>();

const emit = defineEmits<{
  (event: 'move', move: IPlayerMove): void;
}>();

const handleMove = async (move: EMove) => {
  emit('move', { move, playerId: currentPlayer.value.id });
};

const currentPlayer = computed((): IPlayer => {
  if (!props.round) {
    return props.player1;
  }
  return props.round.player1Move ? props.player2 : props.player1;
});
</script>
<style scoped>
.center-text {
  text-align: center;
}
</style>
