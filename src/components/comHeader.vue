<template>
    <div id="nav">
      <div class="header"><router-link to="/" class="text-dec">首页</router-link></div>
      <div class="header" @mouseenter="mouseup1" @mouseleave="mouseleave1"><router-link to="/dangxiaozuhui" class="text-dec">三会一课</router-link>
          <div :style="showlist1" class="show-lists">
          <ul class="ul-list">
            <li><router-link to="/dangxiaozuhui" class="text-dec font-color">党小组会</router-link></li>
            <li><router-link to="/zhiweihui" class="text-dec font-color">支委会</router-link></li>
            <li><router-link to="/dangyuandahui" class="text-dec font-color">党员大会</router-link></li>
            <li><router-link to="/dangke" class="text-dec font-color">党课</router-link></li>
          </ul>
          </div>
      </div>
      <div class="header"  @mouseenter="mouseup2" @mouseleave="mouseleave2"><router-link to="/zhibujiaoliu" class="text-dec">主题党日</router-link>
          <div :style="showlist2" class="show-lists">
          <ul class="ul-list">
            <li><router-link to="/zhibujiaoliu" class="text-dec font-color">支部交流</router-link></li>
            <li><router-link to="/zhutishijian" class="text-dec font-color">主题实践</router-link></li>
            <li><router-link to="/lilunxuexi" class="text-dec font-color">理论学习</router-link></li>
          
          </ul>
          </div>
      </div> 
      <div class="header" @mouseenter="mouseup3" @mouseleave="mouseleave3"><router-link to="/sizhengkezhanshi" class="text-dec">培训学习</router-link>
          <div :style="showlist3" class="show-lists">
          <ul class="ul-list">
            <li><router-link to="/sizhengkezhanshi" class="text-dec font-color">思政课展示</router-link></li>
            <li><router-link to="/dangkexuexi" class="text-dec font-color">党课学习</router-link></li>
            <li><router-link to="/shangjiwenjian" class="text-dec font-color">上级文件</router-link></li>
          
          </ul>
          </div>
      </div>
      <div class="header" @mouseenter="mouseup4" @mouseleave="mouseleave4"><router-link to="/minzhushenghuohui" class="text-dec">党员交流</router-link>
          <div :style="showlist4" class="show-lists">
          <ul class="ul-list">
            <li><router-link to="/minzhushenghuohui" class="text-dec font-color">民主生活会</router-link></li>
            <li><router-link to="/luntan" class="text-dec font-color">党课学习</router-link></li>
          </ul>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      showlist1:'',
      showlist2:'',
      showlist3:'',
      showlist4:''
    }
  },
  methods:{
    mouseup1(){
      // this.showlist=!this.showlist;
      this.showlist1="display:block"
    },
    mouseleave1(){
      // this.showlist=!this.showlist;
      this.showlist1="display:none"
    },
    mouseup2(){
      // this.showlist=!this.showlist;
      this.showlist2="display:block"
    },
    mouseleave2(){
      // this.showlist=!this.showlist;
      this.showlist2="display:none"
    },
    mouseup3(){
      // this.showlist=!this.showlist;
      this.showlist2="display:block"
    },
    mouseleave3(){
      // this.showlist=!this.showlist;
      this.showlist2="display:none"
    },
    mouseup4(){
      // this.showlist=!this.showlist;
      this.showlist2="display:block"
    },
    mouseleave4(){
      // this.showlist=!this.showlist;
      this.showlist2="display:none"
    }
  }
}
</script>
<style scoped>
  #nav{
    width: 1000px;
    height: 160px;
    margin:0 auto;
    background: url('../../public/img/common_img/banner-bg.jpg') no-repeat;
    background-size: 1000px 160px; 
    overflow: hidden;
    position: relative;
  }
  .header{
    text-align: center;
    font-size: 17px;
    background-image: url('../../public/img/common_img/button-bg.jpg');
    background-size:cover;
    margin-left: 30px;
    width:130px;
    margin-top:100px;
    float: left;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border:none;
    box-shadow: 2px 2px 1px #000;
    
  }
.text-dec{
  text-decoration: none;
  font-weight: 700px;
  color:rgb(99, 2, 15);
  font-weight: bold;
}
.show-lists{
  width:770px;
  height:20px;
  position: absolute;
  left:30px;
  background:rgb(99, 2, 15);
  opacity: 0.5;
  display: none;
}
.ul-list{
  padding: 0px;
  list-style: none;
  margin-top:2px;
  height:30px;
  line-height: 30px;
  overflow: hidden;
}
.ul-list li{
  float:left;
  margin-left:50px;
}
.font-color{
  color:yellow;
}
</style>
