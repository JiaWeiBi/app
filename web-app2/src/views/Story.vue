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
      <v-row v-for="(item,index) in follows" :item="item" :key="index">
        <v-col></v-col>
      </v-row>
      <div>
        <waterFall>
          <template v-slot:content>
            <Card v-for="(item,index) in follows" :item="item" :key="index" class="card"></Card>
          </template>
        </waterFall>
      </div>
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