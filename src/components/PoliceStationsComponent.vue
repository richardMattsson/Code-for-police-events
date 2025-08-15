<script>
import axios from 'axios';
export default {
  data() {
    return { policeStations: null, selectedStation: null, services: null };
  },
  created() {
    axios.get(`https://polisen.se/api/PoliceStations`).then((response) => {
      this.policeStations = response.data;
    });
  },
};
</script>
<template>
  <div class="container">
    <h2>Hitta din polisstation</h2>
    <label>
      Polisstationer
      <select v-model="selectedStation">
        <option :value="null" disabled>Stad</option>
        <option
          v-for="station in policeStations"
          :key="station.id"
          :value="station"
        >
          {{ station.name }}
        </option>
      </select>
    </label>
  </div>

  <div class="container" v-if="selectedStation">
    <h3>{{ selectedStation.name }}</h3>
    <p>Adress: {{ selectedStation.location.name }}</p>
    <label
      >Webbsida:
      <a :href="selectedStation.Url" target="_blank">
        {{ selectedStation.Url }}</a
      >
    </label>
    <label>
      <ul>
        <h4>Tjänster:</h4>
        <li v-for="service in selectedStation.services">{{ service.name }}</li>
      </ul>
    </label>
  </div>
</template>

<style>
h2,
h3 {
  margin-top: 0;
  font-weight: 400;
}
.container {
  border: 1px solid rgb(24, 98, 168);
  border-radius: 15px;
  background-color: #ffcc33;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
}
</style>
