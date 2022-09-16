<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Gallery from "./components/Gallery.vue";

const memes = ref([]);
let allMemes = [];

const memesLoad = async () => {
  const resp = await fetch("https://api.imgflip.com/get_memes");
  const { data } = await resp.json();

  memes.value = data.memes;
  allMemes = data.memes;
};

const filtrarMeme = ({ target }) => {
  memes.value = allMemes.filter((meme) => {
    return meme.name.toLowerCase().includes(target.value.toLowerCase());
  });
};

onMounted(() => {
  memesLoad();
});
</script>

<template>
  <div class="container">
    <div class="fixed-top">
      <h1>Meme's Gallery</h1>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Search meme"
          @input="filtrarMeme"
        />
      </div>
    </div>
    <Gallery :memes="memes" />
  </div>
</template>

<style scoped>
.fixed-top {
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.768);
  width: 100%;
  padding: 20px 0px;
  text-align: center;
}
h1 {
  color: white;
}
.container {
  display: flex;
  flex-direction: column;

  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.form-control {
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  font-size: 20px;
}
</style>
