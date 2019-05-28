<!-- 用户简略卡片 -->
<template>
  <v-container>
    <div class="text-xs-center">
      <v-chip>
        <v-avatar>
          <img v-bind:src="userInfo.avatarUrl" alt="trevor">
        </v-avatar>
        {{userInfo.nickname}}
      </v-chip>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    userInfo: Object
  }
};
</script>
