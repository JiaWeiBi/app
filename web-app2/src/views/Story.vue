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