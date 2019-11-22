<template>
  <nav>
    <v-app-bar app color="#a4b0be">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="ch">
        <a href="/" style="text-decoration:none;color:black">最完美的故事就是由你亲手写下结局</a>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="#786fa6">
      <div v-if="this.Global.userInfo">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="this.Global.userInfo.avatarUrl"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{this.Global.userInfo.userName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <!-- <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>-->
      </div>
      <div v-else style="height: 100%">
        <v-list-item :class="'d-flex align-center'" style="height: 100%">
          <v-list-item-content>
            <Login></Login>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Login from "./Login"

export default {
  components: {
    Login
  },
  data() {
    return {
      drawer: false
      ,isLogin: false
    };
  },
  methods: {
    showLogin(){
      this.isLogin = !this.isLogin;
    }
  }
};
</script>

<style scoped>
.ch {
  /* font-family: "font5"; */
  font-size: 2vw;
}
@media (min-width: 992px) and (max-width: 1300px) {
  .ch {
    font-size: 2vw;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .ch {
    font-size: 2vw;
  }
}

@media (max-width: 767px) {
  .ch {
    font-size: 3vw;
  }
}
</style>
