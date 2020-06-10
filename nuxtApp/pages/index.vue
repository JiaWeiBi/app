<template>
  <div>
    <v-container>
      <v-banner >
        <v-avatar slot="icon" color="deep-purple accent-4" size="40">
          <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
        </v-avatar>
        <span>最完美的故事，就是由你亲手写下结局</span>
        <template v-slot:actions>
          <v-btn text color="deep-purple accent-4">Action</v-btn>
          <v-btn text color="deep-purple accent-4">Action</v-btn>
        </template>
      </v-banner>
      <v-btn text small disabled>Disabled</v-btn>
    </v-container>
  </div>
</template>

<script>
// import Navbar from "../components/Navbar";

export default {
  name: "index",
  layout: "default",
  components: {},
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
  src: url("../assets/fonts/FZZJ-ZMJXLBXSJW.TTF") format("truetype");
}
</style>