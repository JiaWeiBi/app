<template>
  <div style="weight:100%;height:100%">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <p class="some-info">{{props.value.info}}</p>
      </div>
      <div class="box-content" slot-scope="props">
        <div class="content">
          <span class="post">Web designer</span>
          <h3 class="title">Williamson</h3>
        </div>
        <ul class="icon">
          <li>
            <a href="#">
              <i class="fa fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-link"></i>
            </a>
          </li>
        </ul>
      </div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  data: () => ({
    imgsArr: []
  }),
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      this.imgsArr = this.imgsArr.concat([
        {
          // src:
          //   "https://raw.githubusercontent.com/lfyfly/vue-waterfall-easy/master/demo/static/img/17.jpg",
          href: "/",
          info: "this is test info"
        },
        {
          src:
            "https://raw.githubusercontent.com/lfyfly/vue-waterfall-easy/master/demo/static/img/17.jpg",
          href: "/"
        },
        {
          src:
            "https://raw.githubusercontent.com/lfyfly/vue-waterfall-easy/master/demo/static/img/17.jpg",
          href: "/"
        },
        {
          src:
            "https://raw.githubusercontent.com/lfyfly/vue-waterfall-easy/master/demo/static/img/17.jpg",
          href: "/"
        },
        {
          src:
            "https://raw.githubusercontent.com/lfyfly/vue-waterfall-easy/master/demo/static/img/17.jpg",
          href: "/"
        }
      ]);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
</style>
