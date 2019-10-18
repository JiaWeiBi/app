<template>
  <v-card class="mx-auto" :elevation="24" color="#26c6da" dark max-width="400" @click="click">
    <v-card-title>
      <v-avatar>
        <img :src="item.user.avatarUrl" />
      </v-avatar>
      <span class="title font-weight-light">{{item.user.nickname}}</span>
    </v-card-title>

    <v-card-text class="ch">{{item.content}}</v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-btn text color="black accent-4" @click="click">阅读更多</v-btn>
          <div class="flex-grow-1"></div>
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">{{item.likedCount}}</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data: () => ({}),
  methods: {
    click() {
      this.$router.push({
        path: `/story/${this.item.commentId}`
      });
    }
  }
};
</script>

<style scoped>
.ch {
  font-family: "font5";
}
</style>