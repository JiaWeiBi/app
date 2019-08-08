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
    <div class="ch">凉风有信，秋月无边。思娇情绪好比度日如年。小生缪姓莲仙字，为忆多情妓女麦氏秋娟。见渠声色性情人赞羡，更兼才貌的确两相全。今日天隔一方难见面，是以孤舟沉寂晚景凉天。你睇斜阳照住个对双飞燕，独倚蓬窗思悄然。

　　耳畔听得秋声桐叶落，又只见平桥衰柳锁寒烟。第一触景更添情懊恼，亏你怀人愁对月华圆。旧约难如潮有信，新愁似海无边。亏我情绪悲秋同宋玉，况且在客途抱恨你话对乜谁言。记得青楼邂逅个晚中秋夜，我共你并肩携手拜月婵娟。我亦记不尽许多情与义，真正缠绵相爱又复相怜。共你肝胆情投将有两个月，唔想同群催趱要整归鞭。</div>
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
  display: none;
  transition: all 0.3s;
}

.img-inner-box:hover .box-content:after {
  display: inline;
  transform: translateY(0);
}

.ch {
  font-family: "wanghanzhongzhongxing";
}
</style>
