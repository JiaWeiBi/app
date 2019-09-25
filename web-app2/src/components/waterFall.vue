<template>
  <v-container class="ma-0" fill-height fluid>
    <div class="waterfall" fill-height>
      <slot name="content"></slot>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    // 是否检测滚动条触底
    checkScroll: {
      type: Boolean,
      default: true
    },
    // 判断滚动条触底的临界值
    scrollCheckSize: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {};
  },
  created() {
    const self = this;
    if (this.checkScroll) {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=
          self.scrollCheckSize;
        if (bottomOfWindow) {
          self.$emit("load-more");
        }
      };
    }
  },
  destroyed() {
    window.onscroll = null;
  }
};
</script>
<style scoped>
.waterfall {
  column-gap: 10px;
  column-count: 6;
  width: 100%;
}

@media (min-width: 992px) and (max-width: 1300px) {
  .waterfall {
    column-count: 4;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .waterfall {
    column-count: 3;
  }
}

@media (max-width: 767px) {
  .waterfall {
    column-count: 1;
  }
}
</style>
