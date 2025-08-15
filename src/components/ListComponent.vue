<script setup>
import { computed, ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  events: { type: Array, required: true },
  buttonText: { type: String },
  mode: {
    type: String,
    default: 'remove',
    validator: function (value) {
      if (value === 'remove' || value === 'save') {
        return true;
      } else {
        return false;
      }
    },
  },
});

const eventsFromProps = ref(props.events);

const mutatedEvents = computed(() => {
  return props.events;
});

const uniqueTypes = computed(() => {
  return [...new Set(mutatedEvents.value.map((event) => event.type))];
});

const selectedEventType = ref('');

watch(props, () => {
  console.log(props.events);
  eventsFromProps.value = props.events;
});

watch(selectedEventType, () => {
  eventsFromProps.value = props.events;

  if (selectedEventType.value) {
    eventsFromProps.value = eventsFromProps.value.filter(
      (event) => event.type === selectedEventType.value
    );
  }
});

const emit = defineEmits(['saved-array-update']);

const savedArray = ref(JSON.parse(localStorage.getItem('saved-events')) || []);

// Denna variabel används för att ge styling åt list-element som inte är sparade.
const listUnsaved = ref(true);

function saveEvent(info) {
  // info.saved = true ges för att styla list-element som sparats.
  info.saved = true;
  savedArray.value.push(info);
  localStorage.setItem('saved-events', JSON.stringify(savedArray.value));
}
function removeEvent(removedItem) {
  savedArray.value = savedArray.value.filter(
    (savedItem) => savedItem.id !== removedItem.id
  );
  // Det emittade eventet tas emot i saved view för att skicka vidare sparade listor -
  // som en prop tillbaka hit till list-komponenten.
  emit('saved-array-update', savedArray.value);
  localStorage.setItem('saved-events', JSON.stringify(savedArray.value));
}
</script>
<template>
  <!-- Denna rullgardinsmeny visas bara i searchView genom att props mode är satt till "save" -->
  <section v-if="props.mode === 'save'">
    <label for="">Händelsetyp:</label>
    <select v-model="selectedEventType">
      <option value=""></option>
      <option v-for="type in uniqueTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
  </section>

  <ul class="ulStyle">
    <div class="divStyle">
      <!-- v-bind på class  -->
      <li
        v-for="(event, index) in eventsFromProps"
        :key="index"
        :class="{ listStyleSaved: event.saved, listStyle: listUnsaved }"
      >
        <h1 class="typeStyle">
          {{ event.type }}
        </h1>
        <span class="spanStyle">{{ event.name }}</span>
        <span class="spanStyle">{{ event.summary }}</span>
        <div id="buttonsInEvents" class="divStyle">
          <!-- Knappen aktiverar olika metoder beroende på vad mode är satt till -->
          <button
            class="buttonStyle"
            @click="
              props.mode === 'remove'
                ? removeEvent(eventsFromProps[index])
                : saveEvent(event)
            "
          >
            {{ props.buttonText }}
          </button>
          <a :href="`https://www.polisen.se${event.url}`" target="_blank"
            >Läs mer</a
          >
        </div>
      </li>

      <li v-if="!props.events.length && props.mode === 'save'">
        Det verkar som att din sökning inte gav något resultat. Försök igen
        eller ladda om sidan.
      </li>
    </div>
  </ul>
</template>
<style scoped>
.typeStyle {
  font-size: 20px;
  font-weight: 500;
}
.spanStyle {
  display: inline-block;
  margin-bottom: 20px;
}
.buttonStyle {
  /* display: block; */
  border: 1px solid #5c90c0;
  border-radius: 5px;
  background-color: aliceblue;
  cursor: pointer;
  font-size: 1rem;
  padding: 7px;
}
a {
  border: 1px solid #5c90c0;
  border-radius: 5px;
  padding: 7px;
  /* text-decoration: none; */

  color: black;
  background-color: aliceblue;
}
a:hover,
.buttonStyle:hover {
  background-color: #c7c8c9;
}
.divStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: sans-serif;
}
.divStyle #buttonsInEvents {
  display: flex;
  justify-content: start;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.listStyle {
  border: 1px solid #5c90c0;
  background-color: #9fc7d1;
  border-radius: 10px;
  margin: 10px;
  list-style: none;
  padding: 10px;
  width: 200px;
}
.listStyleSaved {
  border: 1px solid #b1a8a86e;
  background-color: #ffcc33;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  list-style: none;
  padding: 10px;
  width: 200px;
}
li {
  list-style-type: none;
}
.ulStyle {
  padding: 0;
}
</style>
