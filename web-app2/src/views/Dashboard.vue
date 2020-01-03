<template>
  <div class="dashboard" style="height:100%;">
    <!-- <h1 class="subheading grey--text">Dashboard</h1> -->

    <waterFall :checkScroll="false">
      <template v-slot:content>
        <Card v-for="(item,index) in dataList" :item="item" :key="index" class="card"></Card>
      </template>
    </waterFall>
  </div>
</template>

<script>
import Card from "../components/ContentCard";
import waterFall from "../components/waterFall";

export default {
  data() {
    return {
      actionUrl: '/api/home/home/storyList',
      dataList: [],
      page: 1
    };
  },
  created() {},
  mounted() {
    this.doSearch();
  },
  components: {
    Card,
    waterFall
  },
  computed: {},
  methods: {
    doSearch(){
      this.axios.get(this.actionUrl, {
      params:{
        page: this.page
      }
      }).then((res)=>{
      this.dataList = res.data.data;
    })
    },
    loadMore() {
      this.page++;
      this.doSearch();
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
