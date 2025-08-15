<script setup>
import ListComponent from '../components/ListComponent.vue';

import { ref } from 'vue';

const favorites = ref(JSON.parse(localStorage.getItem('saved-events')) || []);

function setNewSavedArray(array) {
  favorites.value = array;
}
</script>

<template>
  <h1>Sparade händelser</h1>
  <ListComponent
    @saved-array-update="setNewSavedArray"
    buttonText="Ta bort"
    mode="remove"
    :events="favorites"
  />
</template>
<style scoped>
h1 {
  font-weight: 500;
}
</style>
