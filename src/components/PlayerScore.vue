<template>
  <div :class="['score-container', { swap }]">
    <div class="name">
      <strong>{{ name }}</strong>
    </div>
    <div class="circle">
      <strong>{{ score }}</strong>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';

defineProps<{
  name: string;
  score: number;
  swap: boolean;
}>();
</script>
<style scoped>
.score-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.score-container.swap {
  flex-direction: row-reverse;
}

.name {
  text-transform: uppercase;
}
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: #fcde67;
  border-radius: 50%;
}
</style>
