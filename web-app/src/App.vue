<template>
  <v-app class='app'>
    <!-- <v-toolbar app>
      <v-toolbar-title class="ch">
        <span>最完美的故事就是由你亲手写下结局</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-toolbar> -->

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.app {
  background: #f4f4f4;
}
.ch {
  font-family: "FZZJ-ZSXKJW";
  font-size:25px;
}
@font-face {
  font-family: 'HYLiGuoXingXingKaiW';
  src: url('./assets/fonts/HYLiGuoXingXingKaiW.ttf') format('truetype');
}

@font-face {
  font-family: 'fangzheng';
  src: url('./assets/fonts/fangzheng.ttf') format('truetype');
}

@font-face {
  font-family: 'FZQDJW';
  src: url('./assets/fonts/FZQDJW.TTF') format('truetype');
}
@font-face {
  font-family: 'FZQTJW';
  src: url('./assets/fonts/FZQTJW.TTF') format('truetype');
}
@font-face {
  font-family: 'FZZJ-ZMJXLBXSJW';
  src: url('./assets/fonts/FZZJ-ZMJXLBXSJW.TTF') format('truetype');
}

@font-face {
  font-family: 'anjingchenxingshu';
  src: url('./assets/fonts/anjingchenxingshu.otf');
}


</style>