<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view :key="this.$route.path"></router-view>
    </v-content>
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

<style>

@font-face {
  font-family: "font1";
  src: url("./assets/fonts/HYLiGuoXingXingKaiW.ttf") format("truetype");
}

@font-face {
  font-family: "font2";
  src: url("./assets/fonts/fangzheng.ttf") format("truetype");
}

@font-face {
  font-family: "font3";
  src: url("./assets/fonts/FZQDJW.TTF") format("truetype");
}
@font-face {
  font-family: "font4";
  src: url("./assets/fonts/FZQTJW.TTF") format("truetype");
}
@font-face {
  font-family: "font5";
  src: url("./assets/fonts/FZZJ-ZMJXLBXSJW.TTF") format("truetype");
}

@font-face {
  font-family: "font6";
  src: url("./assets/fonts/anjingchenxingshu.otf");
}
</style>