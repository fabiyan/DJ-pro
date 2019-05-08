<template>
  <div class="content">
    <div class="con">
      <Swiper v-if="list.length > 0" class="banner-swipe">
       <Slide v-for="(obj,index) in list" :key="index">
         <img :src="obj.src" alt="" class="slide-img">
       </Slide>
      </Swiper>
      <div class="log-reg">
          <ul class="btn-box">
            <li @click="showlogin()">登陆  &nbsp;|</li>
            <li @click="showregister()">注册</li>
          </ul>
        <div class="show">
            <div v-show="showlog" class="log">
              <form class="login">
                <div class="input">手机号&frasl;邮箱：<input type="text"></div>
                <div class="input">&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：<input type="password"></div>
                <div class="sub"><input type="submit" value="登陆"></div>
                <div class="forget">忘记密码</div>
              </form>
            </div>
            <div v-show="showreg" class="reg">
              <form class="login">
                <div class="input">手机号&frasl;邮箱：<input type="text"></div>
                <div class="input">&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：<input type="password"></div>
                <div class="sub"><input type="submit" value="登陆"></div>
                <div class="forget">忘记密码</div>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default{
    data() {
    return {
      list:[
        {src:"http://seopic.699pic.com/photo/50053/1930.jpg_wh1200.jpg"},
        {src:'http://seopic.699pic.com/photo/40006/7029.jpg_wh1200.jpg'},
        {src:'http://seopic.699pic.com/photo/50045/8274.jpg_wh1200.jpg'},
        {src:'http://seopic.699pic.com/photo/50042/4367.jpg_wh1200.jpg'},
        {src:'http://seopic.699pic.com/photo/50060/4798.jpg_wh1200.jpg'},
      ],
      showlog:true,
      showreg:false
    }
  },
  components: {
    Swiper,
    Slide
  },
  methods: {
    showlogin(){
      this.showlog=true;
      this.showreg=false
    },
    showregister(){
      this.showlog=false;
      this.showreg=true;
    }
  },
}
</script>
<style scoped>
.banner-swipe{
  height:300px;
  width:700px;
  background: red;
  border-radius: 5px;
  float:left;
}
.slide-img{
  width:700px;
  height:300px;
}
.log-reg{
  float: left;
  height:300px;
  width:296px;
  margin:0 2px;
  /* background: red; */
}
.log-reg .btn-box{
  padding: 0px 12px;
  padding-right:2px;
  padding-bottom: 2px;
  overflow: hidden;
  margin-top:2px;
  margin-left:4px;
  overflow: hidden;
  border-bottom: 1px solid black;
  width:99px;
}
.log-reg .btn-box li{
  list-style: none;
  float:left;
  margin-right:10px;
}
.show>div{
  width:290px;
  height:270px;
  margin: 0 auto;
  margin-top:-10px;
  background: whitesmoke;
}
.show .login{
  position: relative;
}
.show .login .input{
  padding-top: 30px;
  height: 40px;
  margin-top:10px;
  /* background: green; */
}
.show .login .sub{
  height:40px;
  width:120px;
  background: yellow;
  margin: 0 auto;
  margin-top:20px;
}
.show .login .sub input{
  height:40px;
  width:120px;
  line-height:40px;
  border-radius: 5px;
  background: rgba(34,164,255,.6)
}
.show .login .forget{
  height:30px;
  line-height: 30px;
  width:80px;
  font-size: 14px;
  text-align: center;
  /* background: grey; */
  position: absolute;
  bottom: -60px;
  right:0px;
  opacity: 0.5;
}
</style>
