<template>
  <nav>
    <v-app-bar app color="teal lighten-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="ch">最完美的故事就是由你亲手写下结局</v-toolbar-title>
   
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary" bottom></v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>

<style scoped>
.ch {
  font-family: "FZZJ-ZMJXLBXSJW";
  font-size: 2vw;
}
</style>
