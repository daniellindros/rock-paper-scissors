<template>
  <div class="row header">
    <div class="twelve columns">
      <slot name="header" />
    </div>
  </div>
  <div class="row content">
    <div class="twelve columns">
      <CardContainer>
        <slot name="content" />
      </CardContainer>
    </div>
  </div>
  <div class="row footer">
    <div class="twelve columns button-container">
      <slot name="buttons" />
    </div>
  </div>
</template>
<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';
</script>
<style scoped>
.header {
  margin-bottom: 2rem;
}
.content {
  margin-bottom: 2rem;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 550px) {
  .button-container {
    flex-direction: column;
  }
}
</style>
