<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<style scoped>
.card-container {
  padding: 2rem;
  background-color: #fcde67;
  border: 1px #333;
  border-radius: 1rem;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.15);
}
</style>
