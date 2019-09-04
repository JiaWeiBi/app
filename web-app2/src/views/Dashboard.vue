<template>
  <div class="dashboard" style="height:100%;">
    <h1 class="subheading grey--text">Dashboard</h1>

    <waterFall v-on:load-more="loadMore">
      <template v-slot:content>
        <Card v-for="(item,index) in dataList" :item="item" :key="index" class="card"></Card>
      </template>
    </waterFall>
    <!-- <v-container class="my-5" fill-height>
      <div class="waterfall" fill-height>
        <Card v-for="(item,index) in imgsArr" :item="item" :key="index" class="card"></Card>
      </div>
    </v-container>-->
  </div>
</template>

<script>
import Card from "../components/ContentCard";
import waterFall from "../components/waterFall";
// import axios from "../commen/request";

export default {
  data() {
    return {
      actionUrl: '/api/home/home/storyList',
      dataList: []
    };
  },
  created() {},
  mounted() {
    this.axios.get(this.actionUrl).then((res)=>{
      this.dataList = res.data.data;
    })
  },
  components: {
    Card,
    waterFall
  },
  computed: {},
  methods: {
    loadMore() {
      this.dataList = this.dataList.concat(this.dataList);
      // alert("loadMore");
    }
  }
};
</script>

<style scoped>
.card {
  padding: 10px;
  margin-bottom: 10px;
  break-inside: avoid;
}
</style>
