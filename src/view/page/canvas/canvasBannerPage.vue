<!-- 分享图片生成 -->
<template>
  <div class="container">
    <div class="share-img">
      <img :src="imgUrl" />
    </div>
    <div class="creat-img" :style="{backgroundImage: thisimg}" ref="box">
      <div id="qrcode" class="qrcode"></div>
    </div>
  </div>
</template>
 
<script>
import { qrcanvas } from "qrcanvas";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      imgUrl: "",
      // showText: "CIMT 2021",
       showText: "",
      thisimg: require("../../../assets/images/girls/579099df59fbc.jpg"),
      thisIcon: require("../../../assets/images/girls/579099df59fbc.jpg")
    };
  },
  watch: {
    imgUrl(val, oldval) {
      //监听到imgUrl有变化以后 说明新图片已经生成 隐藏DOM
      this.$refs.box.style.display = "none";
    }
  },
  created() {
    let _this = this;
    _this.$nextTick(function() {
      //生成二维码
      var canvas1 = qrcanvas({
        data: decodeURIComponent("https://testwww.cmtba.show/#/?ch=ceshi&uid=123456"),
        size: 200
      });
      document.getElementById("qrcode").innerHTML = "";
      document.getElementById("qrcode").appendChild(canvas1);

      _this.$refs.box.style.backgroundImage = `url(${_this.thisimg})`;
      // 添加文字
      var span = document.createElement("span");
      span.innerHTML = _this.showText;
      span.className = "testWord";
      // 添加图片
      var img = document.createElement("img");
      img.src = _this.thisIcon;
      img.className = "myicon";

      this.$nextTick(_ => {
        _this.$refs.box.appendChild(span);
        _this.$refs.box.appendChild(img);
        html2canvas(_this.$refs.box).then(function(canvas) {
          _this.imgUrl = URL.createObjectURL(
            _this.base64ToBlob(canvas.toDataURL())
          );
        });
      });
    });
  },

  methods: {
    //base64转blob
    base64ToBlob(code) {
      let parts = code.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;

      let uInt8Array = new Uint8Array(rawLength);

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    }
  }
};
</script>
<style lang='scss' scoped>
.creat-img {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .qrcode {
  }
}
</style>
<style>
.testWord {
  z-index: 2;
  position: absolute;
  font-size: 24px;
  color: black;
  font-weight: bold;
  text-shadow: 1px 1px 0px #ffffff, -1px -1px 0px #ffffff, 2px 2px 0px #ffffff,
    -2px -2px 0px #ffffff, 3px 3px 0px #ffffff, -3px -3px 0px #ffffff;
}
.myicon {
  z-index: 1;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 100px;
  transform: rotate(30deg);
}
</style>