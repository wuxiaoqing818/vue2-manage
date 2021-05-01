<template>
  <div>
    <div ref="box">
      <p>1111</p>
      <p>22222</p>
    </div>
    <img :src="imgUrl" alt />
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      imgUrl: ""
    };
  },
  mounted() {
    let _this = this;
    html2canvas(_this.$refs.box).then(function(canvas) {
      _this.imgUrl = URL.createObjectURL(
        _this.base64ToBlob(canvas.toDataURL())
      );
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

<style>
</style>