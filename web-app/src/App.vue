<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-navigation-drawer expand-on-hover permanent>
          <template v-slot:prepend>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link two-line>
                <v-list-item-content>
                  <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                  <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </template>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      color: "teal",
      miniVariant: false,
      expandOnHover: true,
      background: false
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>

<style>
.app {
  background: #f4f4f4;
}
.ch {
  font-family: "FZZJ-ZMJXLBXSJW";
  font-size: 25px;
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