<template>
  <div class="player-moves-container">
    <button
      class="button-primary move-button"
      @click="$emit('move', EMove.Rock)"
    >
      Rock
    </button>
    <button
      class="button-primary move-button"
      @click="$emit('move', EMove.Paper)"
    >
      Paper
    </button>
    <button
      class="button-primary move-button"
      @click="$emit('move', EMove.Scissors)"
    >
      Scissors
    </button>
  </div>
</template>
<script setup lang="ts">
import { EMove } from './../types/move';
defineEmits<{
  (event: 'move', move: EMove): void;
}>();
</script>
<style scoped>
.player-moves-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
@media (max-width: 550px) {
  .move-button {
    width: 100%;
  }
}
</style>
