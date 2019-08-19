<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
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
.ch {
  font-family: "FZZJ-ZMJXLBXSJW";
  font-size: 2vw;
}
@font-face {
  font-family: "HYLiGuoXingXingKaiW";
  src: url("./assets/fonts/HYLiGuoXingXingKaiW.ttf") format("truetype");
}

@font-face {
  font-family: "fangzheng";
  src: url("./assets/fonts/fangzheng.ttf") format("truetype");
}

@font-face {
  font-family: "FZQDJW";
  src: url("./assets/fonts/FZQDJW.TTF") format("truetype");
}
@font-face {
  font-family: "FZQTJW";
  src: url("./assets/fonts/FZQTJW.TTF") format("truetype");
}
@font-face {
  font-family: "FZZJ-ZMJXLBXSJW";
  src: url("./assets/fonts/FZZJ-ZMJXLBXSJW.TTF") format("truetype");
}

@font-face {
  font-family: "anjingchenxingshu";
  src: url("./assets/fonts/anjingchenxingshu.otf");
}
</style>