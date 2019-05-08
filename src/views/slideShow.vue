<template>
        <div id="con">
        <!-- <div class="img-box">
            <img src="../assets/image/index_img/1.jpg" alt="" class="active">
            <img src="../assets/image/index_img/2.jpg" alt="">
            <img src="../assets/image/index_img/3.jpg" alt="">
            <img src="../assets/image/index_img/4.jpg" alt="">
            <img src="../assets/image/index_img/5.jpg" alt="">
        </div>
        <ul class="btn-box">
            <li class="sel"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul> -->
    </div>
</template>
<script> 
            var oCon=document.getElementById('con');
            var oSel=document.getElementsByTagName("li");
            var oActive=document.getElementsByTagName("img");
            var iNow = 0;
            for(var i=0;i<oActive.length;i++){
                oSel[i].idx=i;
                oSel[i].onclick=function(){
                    change(this.idx);
                    iNow = this.idx;
                }
            }
                // 封装函数change()
                function change(index) {
                    for(var j=0;j<oActive.length;j++) {
                        oSel[j].className="";
                        oActive[j].className="";
                }
                oSel[index].className="sel";
                oActive[index].className="active";
        }
</script>
<style scoped>
  #con{
            width:652px;
            height: 315px; 
            background:teal;
            border:1px solid #af2f23;
            border-radius: 10px;
            background: red;
            position: relative;
            overflow: hidden;
        }
        .btn-box{
            list-style: none;
            /* position: absolute;
            left:350px;
            transform: translateX(-20%) */
            
        }
        .btn-box li{
            float:left;
            width:15px;
            height:15px;
            background: rgba(0, 0,0, .5);
            margin-right:5px;
            text-align: center;
            line-height: 20px;
            cursor: pointer;
            border-radius: 50%;
        }
        .img-box img{
            width:652px;
            height: 315px;
            display: none;
        }
        .img-box .active{
            display: block;
        }
        ul{
            position: absolute;
            right:10px;
            bottom:-5px;
        }
       .btn-box .sel{
           background: orangered;
       }
</style>

