<template>
  <div>
    <nav>
      <v-app-bar app flat>
        <v-container>
          <v-row>
            <nuxt-link to="/home" tag="span">
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
            <nuxt-link to="/home" tag="tab">
              <span class="my-auto title text-no-wrap" style="color:#2A5082;">文豪野犬</span>
            </nuxt-link>

            <v-col>
              <v-tabs>
                <v-tab>
                  <nuxt-link to="/" tag="tab">
                    <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">首页</span>
                  </nuxt-link>
                </v-tab>
                <v-tab>
                  <nuxt-link to="/">
                    <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">XXX</span>
                  </nuxt-link>
                </v-tab>
                <v-tab>
                  <nuxt-link to="/">
                    <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">XXX</span>
                  </nuxt-link>
                </v-tab>
              </v-tabs>
            </v-col>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn>
              <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">登陆</span>
            </v-btn>
            <v-btn>
              <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">注册</span>
            </v-btn>
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
