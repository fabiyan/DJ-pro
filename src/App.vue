<template>
  <div id="app">
    <Cheader></Cheader>
   <router-view></router-view>
  </div>
</template>
<script>
import Cheader from '@/components/comHeader.vue'
export default {
   components:{
    Cheader
}
}
</script>
<style scoped>
*{
  margin:0px;
  padding: 0px;
}
  #app{
    padding-top:0px;
    width:1000px;
    margin:0 auto;
    background: pink;  
  }

</style>
