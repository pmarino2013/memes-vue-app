<template>
  <div class="galeria">
    <div v-for="meme in memes" :key="meme.id" class="card">
      <img :src="meme.url" alt="meme.name" />
      <p>{{ meme.name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  memes: [Object],
});
</script>

<style scoped>
.galeria {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  width: 250px;
  min-height: 350px;
}
.card img {
  width: 100%;
}
.card p {
  padding: 10px;
  text-align: center;
}
</style>
