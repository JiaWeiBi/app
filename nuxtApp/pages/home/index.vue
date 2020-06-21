<template>
  <div>
    <v-container>
      <v-banner v-for="(item, index) in data" :key="index">
        <v-avatar slot="icon" color="deep-purple accent-4" size="40">
          <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
        </v-avatar>
        <span>{{ item.content }}</span>
        <template v-slot:actions>
          <v-btn text color="deep-purple accent-4">Action</v-btn>
          <v-btn text color="deep-purple accent-4">Action</v-btn>
        </template>
      </v-banner>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: "default",
  components: {},
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get('/home/home/storyList');
    return { data:data.data }
  },
  data: () => ({
    data: null
  })
};
</script>

