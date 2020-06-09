<template>
  <nav>
    <v-app-bar app flat>
      <!-- <v-container class="lighten-5"> -->
      <!-- <v-layout>
          <v-img
            src="/logo.png"
            class="mr-5"
            contain
            style="cursor:pointer;"
            height="48"
            width="48"
            max-width="48"
            @click="home()"
          />
          <span class="my-auto title text-no-wrap" style="color:#2A5082;">文豪野犬</span>
          <v-tabs id="app-bar-tabs" background-color="transparent" class="ml-12">
            <v-tab class="ml-0 hidden-sm-and-down subtitle-1" @click="$router.push('/')">首页</v-tab>
            <v-tab class="ml-0 hidden-sm-and-down subtitle-1" @click="$router.push('/explore')">文笔</v-tab>
            <v-tab class="ml-0 hidden-sm-and-down subtitle-1" @click="$router.push('/explore')">书写</v-tab>
            <v-tab
              v-if="name"
              class="ml-0 hidden-sm-and-down subtitle-1"
              @click="$router.push('/link')"
            >友链</v-tab>
            <v-tab class="ml-0 hidden-sm-and-down subtitle-1" @click="$router.push('/about')">关于</v-tab>
          </v-tabs>
          <v-btn icon color="gray" @click="$router.push('/search')">
            <v-icon>fa-search</v-icon>
          </v-btn>

          <v-btn v-if="!name" class="ml-auto my-auto" text @click="login = true">登录</v-btn>
          <v-btn v-if="!name" class="ml-1 my-auto" color="primary" @click="register = true">注册</v-btn>

          <v-menu v-if="name" open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-avatar class="ml-6 my-auto pr-2" size="36" style="cursor:pointer;">
                <img v-on="on" :src="user.profile_pic" :alt="user.name" />
              </v-avatar>
            </template>
            <v-list>
              <v-list-item @click="$router.push('/setting/account')">
                <v-list-item-title>设置</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/follow')">
                <v-list-item-title>关注列表</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/myarticle')">
                <v-list-item-title>我的文章</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/edit')">
                <v-list-item-title>发表文章</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/mycomment')">
                <v-list-item-title>我的评论</v-list-item-title>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-title>退出</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
       
      </v-layout>-->
      <v-container>
        <v-row>
          <v-img
            src="/logo.png"
            class="mr-5"
            contain
            style="cursor:pointer;"
            height="48"
            width="48"
            max-width="48"
            @click="home()"
          />
          <span class="my-auto title text-no-wrap" style="color:#2A5082;">文豪野犬</span>

          <v-col>
            <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">首页</span>
            <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">XXX</span>
            <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">XXX</span>
          </v-col>
          
            <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">登陆</span>
            <span class="my-auto ml-12 hidden-sm-and-down subtitle-1">注册</span>
          
        </v-row>
      </v-container>
      <!-- </v-container> -->
    </v-app-bar>
  </nav>
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
