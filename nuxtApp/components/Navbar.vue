<template>
  <div id="nav_bar">
    <nav>
      <v-app-bar app flat>
        <v-container>
          <v-row>
            <nuxt-link to="/" class="ml-auto my-auto">
              <v-img
                src="/logo.png"
                class="mr-5"
                contain
                style="cursor:pointer;"
                height="48"
                width="48"
                max-width="48"
              />
            </nuxt-link>
            <nuxt-link to="/" class="ml-auto my-auto nav-a">
              <span class="my-auto title text-no-wrap" style="color:#2A5082;">文豪野犬</span>
            </nuxt-link>

            <v-col class="ml-12">
              <v-tabs color="black">
                <v-tab v-for="(item, index) in navList" :key="item.url+index">
                  <nuxt-link :to="item.url">
                    <span class="my-auto ml-auto hidden-sm-and-down subtitle-1">{{ item.name }}</span>
                  </nuxt-link>
                </v-tab>
              </v-tabs>
            </v-col>
            <v-btn icon class="ml-auto my-auto">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn class="ml-auto my-auto" text color="deep-purple accent-4">登陆</v-btn>
            <v-btn class="ml-auto my-auto" text color="deep-purple accent-4">注册</v-btn>
          </v-row>
        </v-container>
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
import Login from "./Login";

export default {
  components: {
    Login
  },
  data() {
    return {
      navList: [
        { name: "首页", url: "/index" },
        { name: "XXX", url: "/xxx" },
        { name: "XXX", url: "/xxx" }
      ],
      justify: ["start", "center", "space-around"]
    };
  },
  methods: {
    showLogin() {
      this.isLogin = !this.isLogin;
    }
  }
};
</script>

<style scoped>
#nav_bar a {
  text-decoration: none;
}

.ch {
  font-family: "font5";
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
