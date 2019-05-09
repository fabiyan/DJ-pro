<template>
  <div class="content">
    <!-- 轮播图与登陆注册 -->
    <div class="con">
      <!-- 轮播图 -->
      <Swiper v-if="list.length > 0" class="banner-swipe">
       <Slide v-for="(obj,index) in list" :key="index">
         <img :src="obj.src" alt="" class="slide-img">
       </Slide>
      </Swiper>
      <div class="log-reg">
        <!-- 登陆注册切换选项 -->
          <ul class="btn-box">
            <li @click="showLogin()">登陆  &nbsp;|</li>
            <li @click="showRegister()">注册</li>
          </ul>
        <div class="show">
          <!-- 登陆 -->
            <div v-show="showLog" class="log">
              <form class="login">
                <div class="input">手机号&frasl;邮箱：<input type="text"></div>
                <div class="input">&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：<input type="password"></div>
                <div class="sub"><input type="submit" value="登陆"></div>
                <div class="forget">忘记密码</div>
              </form>
            </div>
            <!-- 注册 -->
            <div v-show="showReg" class="reg">
              <form class="register">
                <div class="input">手机号&frasl;邮箱：<input type="text"></div>
                <div class="input">&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：<input type="password"></div>
                <div class="sel"><input type="radio" value="student"> 学生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="teacher">教师</div>
                <div class="iden">&nbsp;&nbsp;&nbsp;&nbsp;用户身份：<select name="" id="">
                    <option value="">普通用户</option>
                    <option value="">支部管理员</option>
                    <option value="">本支部党员</option>
                    <option value="">其他支部党员</option>
                  </select>
                  
                </div>
                <div class="sub"><input type="submit" value="注册"></div>
                <!-- <div class="forget">忘记密码</div> -->
              </form>
            </div>
        </div>
      </div>
    </div>
       <!-- 大事记时间轴 -->
    <div class="timeline">
     
	  </div>
    <div class="news-show">
        <ul class="news">
          <li v-for="(obj,index) in news" :key="index">{{obj.title}}<span>{{obj.time}}</span></li>
        </ul>
        <div class="show-people">
          <div class="people-img">
            <img src="../../public/p2.jpg" alt="">
          </div>
          <ul class="people-detail">
            <li>姓名：</li>
            <li>党龄：</li>
            <li>主要事迹：</li>
            <p>青奥会翡翠啊很嗲u粗啊是擦是你才能就按市场价看错你骄傲青而粉丝纷纷为凤尾违法日期二分为父亲为服务违法威风威风威风为凤尾法文俄文法文范围奥会翡翠啊很嗲u粗啊是擦是你才能就按市场价看错你骄傲青奥会翡翠啊很嗲u粗啊是ayHDIUASHD</p>
              <span>更多></span>
          </ul>
        </div>
    </div>
 
  </div>
</template>


<script src="http://www.lanrenzhijia.com/ajaxjs/1.6.2/jquery-1.6.2.min.js" type="text/javascript"></script>
<script src="../assets/js/jquery.timelinr-0.9.3.js" type="text/javascript"></script>
<script>
import Axios from 'axios';
import { Swiper, Slide } from 'vue-swiper-component';
export default {
    data() {
    return {
      list:[],
      news:[],
      showLog:true,
      showReg:false
    }
  },
  components: {
    Swiper,
    Slide
  },
  methods: {
    showLogin() {
      this.showLog=true;
      this.showReg=false
    },
    showRegister() {
      this.showLog=false;
      this.showReg=true;
    }
  },
  // created() {
  //   Axios.get("/data/banner.json")
  //   .then((result)=>{
  //     this.list=result.data.imgList;
  //     console.log(result.data.imgList);
  //   })
  // },
  beforeCreate() {
    Axios.get("/data/banner.json")
    .then((result)=>{
      this.list=result.data.imgList;
      console.log(result.data.imgList);
    })
    Axios.get("/data/news.json")
    .then((result)=>{
      // result.filters()
      this.news=result.data.news.filter(function(obj,index){
        return index<=9;
      })
      // this.news=result.data.news
    })
  },
}
</script>
<style scoped>
/* 轮播图样式 */

.banner-swipe {
  height:300px;
  width:700px;
  background: red;
  border-radius: 5px;
  float:left;
}
.slide-img {
  width:700px;
  height:300px;
}
/* 登陆框样式 */
.log-reg {
  float: left;
  height:300px;
  width:296px;
  margin:0 2px;
  /* background: red; */
}
.log-reg .btn-box {
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
.log-reg .btn-box li {
  list-style: none;
  float:left;
  margin-right:10px;
}
.show>div {
  width:290px;
  height:270px;
  margin: 0 auto;
  margin-top:-12px;
  /* background: whitesmoke; */
}
.show .login {
  position: relative;
}
.show .login .input {
  padding-top: 30px;
  height: 40px;
  margin-top:10px;
  /* background: green; */
}
.show .login .sub {
  height:40px;
  width:120px;
  background: yellow;
  margin: 0 auto;
  margin-top:20px;
  margin-left:97px;
}
.show .login .sub input {
  height:40px;
  width:120px;
  line-height:40px;
  border-radius: 5px;
  background: rgba(34,164,255,.6)
}
.show .login .forget {
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
/* 注册框样式 */
.reg .register .input {
  margin:5px auto;
  padding-top: 20px;
}
.reg .register .input input {
  width:170px;
}
.reg .register .sel {
  margin-top : 20px;
  margin-left: 100px;
}
.reg .register .iden select {
  height:22px;
  width:174px;
  margin-top:20px;
}
.reg .register .sub {
  width:120px;
  height:40px;
  margin:20px auto;
  margin-left:97px;
}
.reg .register .sub input {
  width:120px;
  height:40px;
  border-radius: 5px;
  background: rgba(34,164,255,.6)
}
.timeline {
  width:1000px;
  height:300px;
  background: slategray;
  overflow: hidden;
}
.news-show {
  width:1000px;
  height:260px;
  /* background: red; */
  overflow: hidden;
}
.news {
  padding-left: 25px;
  padding-top:10px;
  margin-top:0px;
  width:650px;
  height:250px;
  /* background: yellow; */
  float: left;
  overflow: hidden;
}
.news li {
  width: 650px;
  height:30px;
  line-height: 30px;
  border-bottom: 1px solid gray;
  position: relative;
  float:left;
}
.news li span {
  position: absolute;
  right:10px;
  /* bottom: 5px; */
}
.show-people {
  width:320px;
  height:260px;
  background: white;
  float: left;
  margin-left:2px;
  overflow: hidden;
}
.people-img {
  margin-top:10px;
  margin-left:10px;
  float: left;
}
.people-img img {
  width:150px;
  height:200px;
  margin-top:25px;
}
.people-detail {
  float: left;
  list-style: none;
  padding-left:0px;
  margin-top:25px;
  position: relative;
}
.people-detail li {
  margin-top:8px;
  margin-left:5px;
  font-size:13px;
}
.people-detail p {
  margin-top:0px;
  margin-left:5px;
  width:150px;
  height:135px;
  background: red;
  font-size:13px;
  -webkit-line-clamp:8;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow: ellipsis;
}
.people-detail span {
  position: absolute;
  left:5px;
  bottom:-5px;
  font-size:13px;
}
</style>
