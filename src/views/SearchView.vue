<script setup>
import FormComponent from '../components/FormComponent.vue';
import ListComponent from '../components/ListComponent.vue';

import { ref } from 'vue';

const events = ref([]);

function formSearch(eventInput) {
  events.value = [];
  events.value = eventInput;
}
</script>

<template>
  <FormComponent @form-search="formSearch" />

  <ListComponent :events="events" buttonText="Spara" mode="save" />
</template>
