<script>
import axios from 'axios';
export default {
  created() {
    this.onSearch();
  },
  data() {
    return {
      cityName: '',
      citySelection: [
        'Göteborg',
        'Stockholm',
        'Malmö',
        'Jönköping',
        'Uppsala',
        'Helsingborg',
        'Linköping',
        'Örebro',
        'Västerås',
        'Norrköping',
        'Umeå',
        'Luleå',
        'Kiruna',
      ],
      dateTime: '',
      dateExists: '',
      event: '',
      info: [],
    };
  },
  emits: ['form-search'],
  methods: {
    onSearch() {
      axios
        .get(
          `https://polisen.se/api/events?DateTime=${this.dateTime}&&locationname=${this.cityName}`
        )
        .then((response) => {
          this.$emit('form-search', response.data);
        });
    },
  },
  watch: {
    dateTime(newValue) {
      this.dateExists = '';
      if (newValue <= 2024) {
        this.dateExists = 'Datum innan 2024-08 finns ej med i detta API';
      }
    },
  },
};
</script>
<template>
  <div id="form">
    <h1>Sök händelse</h1>
    <form @submit.prevent="onSearch" action="">
      <div class="divStyle">
        <div id="cityInput">
          <label for="cityInput"> Skriv in stad</label>
          <input
            class="inputStyle"
            list="city-options"
            v-model="cityName"
            placeholder="Skriv in stad"
            name="cityInput"
          />
          <datalist id="city-options">
            <option v-for="city in citySelection" :value="city"></option>
          </datalist>
        </div>

        <div id="dateInput">
          <label for="dateInput">Skriv in datum</label>
          <input
            class="inputStyle"
            type="text"
            v-model="dateTime"
            placeholder="Skriv in datum"
            name="dateInput"
          />
        </div>
        <span>{{ dateExists }}</span>

        <input
          :disabled="!cityName.length && !dateTime.length"
          id="searchButton"
          type="submit"
          @click="onSearch"
          value="Sök"
        />
      </div>
    </form>
  </div>
  <hr />
</template>
<style scoped>
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5c90c0;
  border-radius: 10px;
  background-color: #ffcc33;
  margin-top: 20px;
  width: 400px;
  font-family: sans-serif;
}
h1 {
  font-weight: 500;
}
hr {
  width: 100%;
  color: #5c90c0;
  margin-top: 30px;
}
.divStyle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
#cityInput,
#dateInput,
#eventInput {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 1.2rem;
}
.inputStyle {
  font-size: 1.2rem;
  padding: 5px;
}
span {
  font-size: 1rem;
  margin-bottom: 10px;
}
#eventType {
  font-size: 0.9rem;
}
#searchButton {
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
