<template>
  <div style="weight:100%;height:100%">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props" style="overflow: hidden;">
        <div class="box">
          <div class="box-content">
            <div class="content">
              <p class="some-info">第{{props.index+1}}张图片</p>
              <p class="some-info">{{props.value.info || "hahahah"}}</p>
            </div>
          </div>
        </div>
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
.img-inner-box {
  overflow: hidden;
}

.box-content:after {
  content: "";
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  transform: translateY(-100%);
  position: absolute;
  left: 10px;
  top: 10px;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  display:none;
  transition: all 0.3s;
}


.img-inner-box:hover .box-content:after{
  display: inline;
	transform: translateY(0);
}

</style>
