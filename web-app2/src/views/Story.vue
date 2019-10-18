<template>
  <div>
    <h1 class="subheading grey--text">Story</h1>
    <div>
      <div v-if="data && data.user">
        <v-avatar>
          <img :src="data.user.avatarUrl" />
        </v-avatar>
        <span class="title font-weight-light">{{data.user.nickname}}</span>
      </div>
      <div v-if="data && data.content">
        <p>{{data.content}}</p>
      </div>
      <div>
        <waterFall>
          <template v-slot:content>
            <Card v-for="(item,index) in follows" :item="item" :key="index" class="card"></Card>
          </template>
        </waterFall>
      </div>
    </div>
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