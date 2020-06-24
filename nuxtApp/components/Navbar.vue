<template>
  <div id="nav_bar">
    <nav>
      <v-app-bar app flat>
        <v-container>
          <v-row class="d-flex flex-nowrap">
            <nuxt-link to="/" class="ml-auto my-auto">
              <v-img
                src="/logo.png"
                class="mr-1"
                contain
                style="cursor:pointer;"
                height="48"
                width="48"
                max-width="48"
              />
            </nuxt-link>
            <nuxt-link to="/" class="my-auto">
              <span class="my-auto title text-no-wrap" style="color:#2A5082;">文豪野犬</span>
            </nuxt-link>

            <v-col class="ml-12 d-none d-sm-flex d-md-flex">
              <nuxt-link
                class="my-auto"
                :to="item.url"
                v-for="(item, index) in navList"
                :key="item.url+index"
              >
                <v-btn text color="primary">
                  <span class="my-auto mx-auto subtitle-1">{{ item.name }}</span>
                </v-btn>
              </nuxt-link>
            </v-col>
            <v-btn icon class="ml-auto my-auto">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <!-- <nuxt-link to="/user/login" class="my-auto"> -->
            <v-btn class="my-auto" text color="deep-purple accent-4"  @click="showLogin = true">登陆</v-btn>
            <!-- </nuxt-link> -->
            <nuxt-link to="/user/register" class="my-auto">
              <v-btn class="my-auto" text color="deep-purple accent-4">注册</v-btn>
            </nuxt-link>
          </v-row>
        </v-container>
      </v-app-bar>
    </nav>
    <login v-if="showLogin" @close="close"></login>
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
        { name: "首页", url: "/home" },
        { name: "XXX", url: "/xxx" },
        { name: "XXX", url: "/xxx" }
      ],
      showLogin: false,
      pageValue: null
    };
  },
  watch: {
    pageValue: function(newValue, oldValue) {
      console.log("===", newValue, oldValue);
    }
    // $route(to, from) {
    //   console.log(to.path)
    // }
  },
  methods: {
    home() {
      this.pageValue = null;
    },
    close(){
      this.showLogin = false;
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
