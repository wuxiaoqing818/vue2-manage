<template>
  <div class="d31">
    <p>
      手机号：
      <input
        v-model="mobile"
        type="tel"
        ref="mobile"
        maxlength="13"
        @keyup="inputMobile"
        @paste="inputMobile"
      />
    </p>
    <p>
      银行卡号：
      <input v-model="card" type="text" @keyup="inputCard" @paste="inputCard" />
    </p>
    {{mobile}}
    <!-- 自定义指令的使用 -->
    <span v-countdown="60000" formatter="HH小时mm分ss秒"></span>
    <el-input v-model="mobile" v-elFocus style="width:400px;"></el-input>
    <input type="text" v-inFocus style="width:400px;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      card: ""
    };
  },
  created() {},
  methods: {
    inputMobile(e) {
      this.formatMobile(e);
      this.mobile = this.$refs.mobile.value;
    },
    formatMobile(e) {
      let val = this.$refs.mobile.value; // 不可直接用this.mobile，第一方便提取该方法降低代码耦合度，第二直接用this.mobile,在输入汉字时按下shift按键会导致无法再输入和删除内容
      let selStart = this.$refs.mobile.selectionStart; // 选中区域左边界位置
      let mobileLen = val.length;
      let value = this.getValue(e, val).substr(0, 11); // 获取输入/粘贴内容,并截取前11位
      let len = value.length;
      if (len > 3 && len < 8) {
        value = value.replace(/^(\d{3})/g, "$1 ");
      } else if (len >= 8) {
        value = value.replace(/^(\d{3})(\d{4})/g, "$1 $2 ");
      }
      this.$refs.mobile.value = value;
      if (selStart !== mobileLen) {
        if (selStart === 3) {
          selStart++;
        }
        // 设置光标位置
        this.$refs.mobile.selectionStart = this.$refs.mobile.selectionEnd = selStart;
      }
    },
    getValue(e, val) {
      let value = "";
      if (e.type === "keyup") {
        value = val.replace(/\D/g, "");
      } else if (e.type === "paste") {
        // window.clipboardData：IE浏览器获取剪贴板数据对象
        // event.clipboardData：Chrome, Firefox, Safari获取剪贴板数据对象
        let clipboardData = event.clipboardData || window.clipboardData;
        value = clipboardData.getData("Text"); // 获取剪贴板text格式的数据
        value = value.replace(/\D/g, "");
      }
      return value;
    },
    inputCard() {
      this.card = this.card.replace(/\D/g, ""); // 不允许输入非数字字符
      this.card = this.card.replace(/(\d{4})(?=\d)/g, "$1 "); // 4位一组，非获取匹配最后一组数字，避免删除到空格时会马上自动补齐
    }
  }
};
</script>

<style lang="scss">
</style>