<template>
  <v-app style="background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view :key="this.$route.path"></router-view>
    </v-content>

    <v-footer padless absolute>
      <v-col class="text-center" cols="12">
        <a href="http://beian.miit.gov.cn" style="text-decoration:none">粤ICP备19018416号</a> —
        <strong>舍颜</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

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
/* 
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
} */

@font-face {
  font-family: "font5";
  src: url("./assets/fonts/FZZJ-ZMJXLBXSJW.TTF") format("truetype");
}
</style>