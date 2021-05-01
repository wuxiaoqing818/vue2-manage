<template>
  <div>
    <!-- <encryption></encryption>
    <regular></regular>-->
    <!-- 全局组件示例 -->
     <!-- 分页组件 -->
    <Paging
      :page-size="pageSize"
      :total="totalCount"
      layout="jumper,total"
      :currentPage="currentPage"
    />
    <el-button @click="goPrevPage()">跳转上一个页面</el-button>
  </div>
</template>

<script>
import { files } from "@/plugin/requireContext";
export default {
  // components: ,
  data(){
    return {
      pageSize:10,
      totalCount:0,
      currentPage:1
    }
  },
  mounted() {
    // console.log(files('../canvas'));
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to.path);
  //   console.log(from.path);
  //   if (from.name == "regular") {
  //     next("/");
  //   } else {
  //   }
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log(to.path);
  //   console.log(from.path);
  //   if (to.name == "regular") {
  //     next("/");
  //   } else {
  //   }
  //   next();
  // },
   created() {
    for (var i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  },
  methods: {
    goPrevPage() {
      this.$router.go(-1);
    },
       // 切换页数
    currentChange(page) {
      this.currentPage = page;
      // this.getStateTableList();
    },
  }
};
</script>

<style>
</style>