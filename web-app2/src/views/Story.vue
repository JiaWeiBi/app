<template>
  <div>
    <h1 class="subheading grey--text">Story</h1>
    <div>
    <v-avatar>
      <img :src="data.user.avatarUrl" />
    </v-avatar>
    <span class="title font-weight-light">{{data.user.nickname}}</span>
    <p>{{data.content}}</p>
    
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionUrl: "/api/content/story/get",
      data: null
    };
  },
  mounted: function() {
    this.axios
      .get(this.actionUrl, { params: { id: this.$route.params.id } })
      .then(res => {
        this.data = res.data.data;
        console.log("=====", res);
      });
  }
};
</script>