<template>
  <div>
    <v-container>
      <v-row>
        <div v-if="data && data.user">
          <v-avatar>
            <img :src="data.user.avatarUrl" />
          </v-avatar>
          <strong v-html="data.user.nickname" style="padding: 10px"></strong>
          <!-- <span class="title font-weight-light">{{data.user.nickname}}</span> -->
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
          <v-list-item
          :key="item.title"
        >
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
      follows: []
    };
  },
  components: {
    Card,
    waterFall
  },
  mounted: function() {
    this.axios
      .get(this.actionUrl, { params: { id: this.$route.params.id } })
      .then(res => {
        this.data = res.data.data.data;
        this.follows = res.data.data.followList;
        // console.log("=====", res);
      });
  }
};
</script>