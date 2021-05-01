<template>
  <div class="regular">
    <span>手机电话号：</span>
    <el-input v-model.trim="phone" v-elFocus style="width:400px;"></el-input>
    <button @click="checkPhone()">验证手机电话号</button>
  </div>
</template>

<script>
import { teleAndMobilePhone } from "@/plugin/regular";
export default {
  data() {
    return {
      phone: ""
    };
  },
  created() {
    console.log(this.getInitial("晓晴"));
    // alert(this.getInitial("晓晴"))
  },
  methods: {
    checkPhone() {
      console.log(/[@#$%^&*_+!\d]/.test(this.phone));
      if (teleAndMobilePhone(this.phone)) {
        this.$message("验证通过");
      } else {
        this.$message("手机号电话号不符合");
      }
    },
    getInitial(zh) {
     const zhArr = '阿芭擦搭蛾发噶哈击喀垃妈拿哦啪期然撒塌挖昔压匝'.split('')
    const enArr = 'ABCDEFGHJKLMNOPQRSTWXYZ'.split('')
    const index = zhArr.findIndex((v, i, arr) => v.localeCompare(zh,'zh-Hans-CN') <= 0 && (i + 1 === arr.length || arr[i + 1].localeCompare(zh,'zh-Hans-CN') === 1))
    return enArr[index]
    }
  }
};
</script>

<style>
.el-input__inner {
  width: 100%;
}
</style>