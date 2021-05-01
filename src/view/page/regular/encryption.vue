<template>
  <div class="encryption">
    <el-button @click="popActive=true">遮罩</el-button>
    <transition name="fade">
      <div class="popContainer" @click="cancelPop()" v-show="popActive">
        <div class="content" @click.stop="popActive=true">11111111</div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  getBase64,
  splitObj,
  qs,
  getArrMaxNum,
  splitArr
} from "@/plugin/common";
export default {
  data() {
    return {
      popActive: false
    };
  },
  created() {
    this.getImgUrl();
    let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

    let nameNum = names.reduce((pre, cur) => {
      if (cur in pre) {
        pre[cur]++;
      } else {
        pre[cur] = 1;
      }
      return pre;
    }, {});
    console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
    const List = len => [...new Array(len).keys()];
    const list = List(Math.pow(2, 2)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(list);
    const paramObj = {
      id: 0,
      name: "吴晓晴",
      character: "开朗",
      list: [1, 2, 3, 4]
    };
    console.log(getArrMaxNum([1, 2, 3, 5, 58, 6]));
    console.log(splitObj(paramObj));
    console.log(qs(paramObj));
    let paramArr = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 }
    ];
    console.log(splitArr(paramArr, 2));
    console.log(paramArr);

    let flatArr = [
      [1, 2, 8, 9],
      [2, 4, 9, 12],
      [4, 7, 10, 13],
      [6, 8, 11, 15]
    ];
    console.log(flatArr.flat(Infinity));
  },
  methods: {
    getBase64,
    getImgUrl() {
      //   console.log(getBase64("../../../assets/images/girls/02261T536-9.jpg"));
      getBase64(
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3296239940,3706579877&fm=26&gp=0.jpg",
        dataURL => {
          // console.log(dataURL);
        }
      );
    },
    cancelPop() {
      this.popActive = !this.popActive;
    }
  }
};
</script>

<style scoped lang='scss'>
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  .content {
    width: 500px;
    height: 500px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>