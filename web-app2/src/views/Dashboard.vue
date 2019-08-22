<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <waterfall :data="data" :col="5" :width="150" :gutterWidth="gutterWidth" @loadmore="loadmore" @scroll="scroll">
        <template>
          <div class="cell-item" v-for="(item,index) in data" :key="index">
            <img v-if="item.img" :src="item.img" alt="加载错误" />
            <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                <div class="name">{{item.user}}</div>
                <div class="like" :class="item.liked?'active':''">
                  <i></i>
                  <div class="like-total">{{item.liked}}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        },
        {
          img: "https://p3.music.126.net/jwRMEy3eouDAZnaUTuGuMQ==/3265549536774639.jpg",
          title: "test"
        }
      ]
    };
  },
  computed:{
          itemWidth(){  
                return (138*0.5*(document.documentElement.clientWidth/375)) 
          },
          gutterWidth(){
                return (9*0.5*(document.documentElement.clientWidth/375))  
          }
        },
  methods: {
    scroll() {
      // console.log(scrollData);
    },
    loadmore() {
      alert('test')
      this.data = this.data.concat(this.data);
    }
  }
};
</script>

<style>
</style>
