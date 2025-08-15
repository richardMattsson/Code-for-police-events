<template>
  <h1>{{ paramsFunction }}</h1>
  <ContactComponent v-if="title === 'Kontakt'" />
  <AboutComponent v-if="title === 'Om'" />
  <PoliceStationsComponent v-if="title === 'Polisstationer'" />
</template>

<script>
import AboutComponent from '../components/AboutComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import PoliceStationsComponent from '../components/PoliceStationsComponent.vue';

export default {
  components: {
    ContactComponent,
    AboutComponent,
    PoliceStationsComponent,
  },
  computed: {
    paramsFunction() {
      if (this.$route.params.contact === 'Om') {
        this.title = 'Om';
      } else if (this.$route.params.contact === 'Kontakt') {
        this.title = 'Kontakt';
      } else {
        this.title = 'Polisstationer';
      }
      return this.$route.params.contact;
    },
  },
  data() {
    return {
      title: 'Om',
    };
  },
};
</script>
<style scoped>
h1 {
  font-weight: 500;
}
</style>
