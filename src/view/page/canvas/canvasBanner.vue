<template>
  <div>
    <div id="qrcode">二维码生成的位置</div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  methods: {
    data() {
      return {
        ctx: null,
        point: {
          x: 0,
          y: 0
        },
        moving: false // 是否正在绘制中且移动
      };
    },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 100,
        height: 100, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
        text: "testwww.cmtba.show" // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
      console.log(qrcode);
    }
  },
  mounted() {
    //调用
    this.qrcode();
  }
};
</script>

<style scoped lang='scss'>
</style>