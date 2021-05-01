<template>
  <div>
    <i class="iconfont">&#xe685;</i>
    <i class="iconfont">&#xe66b;</i>
    <span :title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>

    <!-- 鼠标悬浮一个盒子显示另一个盒子 -->
    <div class="a">
      外面的盒子
      <div class="b">里面的盒子</div>
    </div>
    {{globalVariable.IP}}
    <!-- 前端实现自动化导入组件 -->
    <encryption></encryption>
    <regular></regular>
  </div>
</template>

<script>
//笨方法
const path = require("path");
const files = require.context("./regular", false, /\.vue$/);
const modules = {};
console.log(files.keys());
files.keys().forEach(key => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
export default {
  components: modules,
  created() {},
  mounted() {
    console.log(process.env.BASE_URL);
  },
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString()
    };
  }
};
</script>

<style lang="scss" scoped>
/* 格式display
		属性none是让其消失而不是隐藏 而属性visible是隐藏而不是消失  属性*/
.a {
  margin-top: 100px;
  width: 100px;
  height: 60px;
  background-color: red;
  position: relative;
}

.b {
  width: 90px;
  height: 20px;
  background-color: blue;
  position: relative;
  top: -80%;
  right: -100%;
  display: none;
}
.a:hover .b {
  display: block;
  animation: myfirst 5s;
  -webkit-animation: myfirst 5s; /* Safari and Chrome */
}
@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    display: block;
  }
}

@-webkit-keyframes myfirst /* Safari and Chrome */ {
  from {
    opacity: 0;
  }
  to {
    display: block;
  }
}
</style>