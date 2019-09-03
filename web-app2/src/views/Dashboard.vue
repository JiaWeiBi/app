<template>
  <div class="dashboard" style="height:100%;">
    <h1 class="subheading grey--text">Dashboard</h1>

    <waterFall v-on:load-more="loadMore">
      <template v-slot:content>
        <Card v-for="(item,index) in imgsArr" :item="item" :key="index" class="card"></Card>
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
import axios from "@/src/commen/request";

export default {
  data() {
    return {
      imgsArr: [
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调，但是需要注意的是，这仅指最低利率，实际发放的利率还会受调控政策、银行信贷资源的影响，预计执行利率短期内很难出现显著的、普遍性下降。”李万斌坦言。"
        },
        {},
        {},
        {},
        {},
        {},
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调，但是需要注意的是，这仅指最低利率，实际发放的利率还会受调控政策、银行信贷资源的影响，预计执行利率短期内很难出现显著的、普遍性下降。”李万斌坦言。"
        },
        {},
        {},
        {},
        {},
        {},
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调，但是需要注意的是，这仅指最低利率，实际发放的利率还会受调控政策、银行信贷资源的影响，预计执行利率短期内很难出现显著的、普遍性下降。”李万斌坦言。"
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调."
        },
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调，但是需要注意的是，这仅指最低利率，实际发放的利率还会受调控政策、银行信贷资源的影响，预计执行利率短期内很难出现显著的、普遍性下降。”李万斌坦言。"
        },
        {},
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调."
        },
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调，但是需要注意的是，这仅指最低利率，实际发放的利率还会受调控政策、银行信贷资源的影响，预计执行利率短期内很难出现显著的、普遍性下降。”李万斌坦言。"
        },
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调，但是需要注意的是，这仅指最低利率，实际发放的利率还会受调控政策、银行信贷资源的影响，预计执行利率短期内很难出现显著的、普遍性下降。”李万斌坦言。"
        },
        {},
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调."
        },
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调."
        },
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调."
        },
        {
          content:
            "“后期，如果LPR利率下调，根据央行的这一规定，首套、二套房贷的最低利率自然也会随之下调."
        }
      ]
    };
  },
  created() {},
  mounted() {
    
  },
  components: {
    Card,
    waterFall
  },
  computed: {},
  methods: {
    loadMore() {
      this.imgsArr = this.imgsArr.concat(this.imgsArr);
      // alert("loadMore");
    }
  }
};
</script>

<style scoped>
.waterfall {
  column-gap: 10px;
  column-count: 6;
  width: 100%;
}
.card {
  padding: 10px;
  margin-bottom: 10px;
  break-inside: avoid;
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
