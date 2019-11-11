<template>
  <div>
    <v-container>
      <v-row  >
        <v-btn class="ma-2" color="green darken-2" dark @click="goBack">
          <v-icon dark left>mdi-arrow-left</v-icon>返回
        </v-btn>
        <v-spacer></v-spacer>
         <v-btn class="ma-2" color="green darken-2" dark @click="lastClick">
            <v-icon dark left>mdi-arrow-up</v-icon>前篇
          </v-btn>
      </v-row>
      <v-row>
        <div v-if="data && data.user">
          <v-avatar>
            <img :src="data.user.avatarUrl" />
          </v-avatar>
          <strong v-html="data.user.nickname" style="padding: 10px"></strong>
        </div>
      </v-row>
      <v-row>
        <div v-if="data && data.content">
          <p>{{data.content}}</p>
        </div>
      </v-row>
      <v-divider></v-divider>
      <v-list three-line>
        <template v-for="(item,index) in follows">
          <v-list-item :key="item.title" link :href="item.commentId">
            <v-list-item-avatar>
              <v-img :src="item.user.avatarUrl"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.user.nickname"></v-list-item-title>
              <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="index" :insert="item.insert || true"></v-divider>
        </template>
      </v-list>
      <v-container class="max-width">
        <v-pagination
          v-model="page"
          class="my-4"
          :length="totalPages"
          :total-visible="5"
          circle
          @input="pageInput"
        ></v-pagination>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Card from "../components/ContentCard";
import waterFall from "../components/waterFall";
export default {
  data() {
    return {
      actionUrl: "/api/content/story/get",
      data: null,
      follows: [],
      page: 1,
      perPage: 10,
      totalPages: 10
    };
  },
  components: {
    Card,
    waterFall
  },
  mounted: function() {
    this.page = parseInt(this.$route.query.page || 1);
    this.doSearch();
  },
  methods: {
    doSearch() {
      this.axios
        .get(this.actionUrl, {
          params: {
            id: this.$route.params.id,
            page: this.page,
            perPage: this.perPage
          }
        })
        .then(res => {
          this.data = res.data.data.data;
          const followData = res.data.data.followData;
          this.follows = followData.data;
          this.totalPages = followData.totalPages;
        });
    },
    pageInput(page) {
      this.doSearch();
      this.$router.replace({path: this.$route.path, query:{
        page
      }}).catch(err => {err})
    },
    lastClick(data){
      this.$router.push({path: `/story/${this.data.beReplied[0].beRepliedCommentId}`}).catch(err => {err})
    },
    goBack(data){
      this.$router.go(-1)
    }
  }
};
</script>