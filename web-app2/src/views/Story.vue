<template>
  <div class="team">
    <h1 class="subheading grey--text">Story</h1>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionUrl: '/api/content/story/get',
      data: null
    }
  },
  mounted: function(){
    this.axios.get(this.actionUrl, {params: {id:this.$route.params.id}}).then((res)=>{
      this.data = res.data.data;
      console.log('=====',res)
    })
  }
}
</script>