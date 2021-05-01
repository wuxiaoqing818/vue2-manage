<template>
  <div class="paging clearfix">
    <div class="page-size fl" v-if="isShowTotal">共 {{ total }} 条</div>
    <ul class="page-list fl clearfix">
      <li @click="changePage(currentPage - 1)"><</li>
      <li
        :class="{ active: currentPage == item.val }"
        :key="index"
        v-for="(item, index) in pagelist"
        v-text="item.text"
        @click="changePage(item.val)"
      >
        1
      </li>
      <li @click="changePage(currentPage + 1)">></li>
    </ul>
    <!-- <div class="page-jump fl" v-if="isShowJumper">
      前往<input
        class="input"
        type="text"
        v-model="toPage"
        @keydown="submit(toPage, $event)"
    />页-->
    <!-- <button  @click="changePage(toPage)">确定</button> -->
    <!-- </div> -->
  </div>
</template>
<script>
/*
    组件参数说明
    1、pageSize：请求的条目数量
    2、total：总数
    3、currentPage：当前页码
*/
export default {
  name: "Paging",
  // props:[
  // 	'name'
  // ],
  // prop验证
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    layout: {
      type: String,
    },
  },
  data() {
    return {
      isShowJumper: false,
      isShowTotal: false,
      toPage: "", //跳转到x页
      pageGroup: 10, //可见分页数量 默认10个分页数
    };
  },
  created: function () {
    this.isShowTotal = this.layout.indexOf("total") !== -1;
    this.isShowJumper = this.layout.indexOf("jumper") !== -1;
  },
  computed: {
    totalPage: function () {
      return Math.ceil(this.total / this.pageSize);
    },
    pagelist: function () {
      var list = [];
      var count = Math.floor(this.pageGroup / 2),
        center = this.currentPage;
      var left = 1,
        right = this.totalPage;

      if (this.totalPage > this.pageGroup) {
        if (this.currentPage > count + 1) {
          if (this.currentPage < this.totalPage - count) {
            left = this.currentPage - count;
            right = this.currentPage + count - 1;
          } else {
            left = this.totalPage - this.pageGroup + 1;
          }
        } else {
          right = this.pageGroup;
        }
      }

      // 遍历添加到数组里
      while (left <= right) {
        list.push({
          text: left,
          val: left,
        });
        left++;
      }
      return list;
    },
  },
  methods: {
    changePage: function (idx) {
      if (idx != this.currentPage && idx > 0 && idx <= this.totalPage) {
        this.$parent.currentChange(idx);
      }
    },
    // 回车事件
    submit(toPage, e) {
      if (e.keyCode === 13) {
        //逻辑处理
        this.changePage(toPage);
      }
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.fl {
  float: left;
}
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}
.page-size {
  height: 0.26rem;
  line-height: 0.26rem;
  font-size: 0.16rem;
}
.page-list {
  font-size: 0.16rem;
}
.page-jump {
  height: 0.26rem;
  line-height: 0.26rem;
  margin-left: 0.2rem;
}
.page-jump .input {
  width: 0.32rem;
  padding: 0.04rem 0.02rem;
  border-radius: 0.02rem;
  border: 0.01rem solid #dcdfe6;
  margin: 0 0.04rem;
}
ul {
  list-style: none;
}
ul li {
  float: left;
  color: #606266;
  background: #f4f4f5;
  padding: 0.02rem 0.08rem;
  cursor: pointer;
  border-radius: 0.02rem;
  margin: 0 0.05rem;
}
ul > li.active {
  background: #409eff;
  color: #fff;
}
</style>