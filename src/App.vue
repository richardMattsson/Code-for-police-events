<script>
import { RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  components: {
    FooterComponent,
    NavigationComponent,
  },
};
</script>

<template>
  <NavigationComponent />
  <main>
    <div id="container">
      <RouterView />
    </div>
  </main>
  <FooterComponent />
</template>
<style>
html,
body,
#app {
  height: 100vh;
}
body,
#app {
  display: flex;
  flex-direction: column;
  margin: 0;
  /* border: 5px solid red; */
}
#app {
  margin-left: 5px;
  margin-right: 5px;
}

main {
  flex: 1 0 auto;
  /* border: 4px solid black; */
  margin-top: 80px;
}

#container {
  margin-top: 20px;
  margin-right: 40px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  /* border: 4px solid blue; */
}
</style>
