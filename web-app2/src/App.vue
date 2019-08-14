<template>
  <v-app class="grey lighten-4">
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>
