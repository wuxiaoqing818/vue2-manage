
<template>
  <div class="all" ref="providall">
    <ul>
      <li v-for="(item,index) of iconlistall" :key="index">
        <div class="lileft">
          <p class="lilefttop">
            <span class="spanleft">已完成</span>
            <span>(提供帮助123456)</span>
          </p>
          <!-- <p>订单编号:123456</p>
              <p>预约时间：2018/10/10  14:31:56</p>
          <p>到期打款时间：</p>-->
          <p v-if="item.pre_at > 0">计时：{{time(item.pre_at)}}</p>
          <p v-else>计时: 已超时</p>
          <p>付款方式：支付宝</p>
        </div>
        <div class="liright">
          <p class="lirighttop">2000$</p>
          <p class="butp">查看截图</p>
          <p class="butp">详细资料</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconlist: [],
      ticker: null
    };
  },
  computed: {
    //这里是监听自定义数组的变化 因为有一个计时器每秒都会减去数组中字段的时间 所以 数组是每秒更新的
    iconlistall: {
      get() {
        return this.iconlist;
      }
    }
  },
  created() {
    //这里是假的数据
    let list = [
      {
        pre_at: "2021-03-01"
      },
      {
        pre_at: "2021-03-01 16:18:36"
      },
      {
        pre_at: "2021-03-04"
      }
    ];
    //首先循环数组 在 正常的情况下这个数组是后台传递过来的 然后将这个数组中的最后截止时间减去当前时间获得时间戳
    for (let i = 0, len = list.length; i < len; i++) {
      const item = list[i];
      item.pre_at = new Date(item.pre_at).getTime() - new Date().getTime();
    }
    this.iconlist = list; //将改变后的数组赋值给自定义的数组 然后调用计时器 每秒减去指定字段的时间戳 -1000毫秒
    if (this.ticker) {
      //这一段是防止进入页面出去后再进来计时器重复启动
      clearInterval(this.ticker);
    }
    this.beginTimer(); //启动计时器减指定字段的时间
    //清除定时器
    this.$once("hook:beforeDestroy", () => {
      clearInterval(this.ticker);
      this.ticker = null;
    });
  },
  mounted() {
  },
  methods: {
    beginTimer() {
      //这个计时器是每秒减去数组中指定字段的时间
      this.ticker = setInterval(() => {
        for (let i = 0, len = this.iconlist.length; i < len; i++) {
          const item = this.iconlist[i];
          if (item.pre_at > 0) {
            item.pre_at = item.pre_at - 1000;
          }
        }
        console.log("11");
      }, 1000);
    },
    time(time) {
      //这个函数是每秒把时间重新计算下
      if (time >= 0) {
        let d = Math.floor(time / 1000 / 60 / 60 / 24);
        let h = Math.floor((time / 1000 / 60 / 60) % 24);
        let m = Math.floor((time / 1000 / 60) % 60);
        let s = Math.floor((time / 1000) % 60);
        return "还有" + d + "天" + h + "时" + m + "分" + s + "秒";
      }
    }
  },

  beforeDestroy() {}
};
</script>

<style scoped lang='scss'>
.all {
  display: flex;
  padding: 0 30px;
  background: #ffffff;
  ul {
    width: 100%;
  }
  li {
    height: 210px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    .lileft {
      text-align: left;
      p {
        font-size: 24px;
        color: #999999;
        margin-bottom: 11px;
      }
      .lilefttop {
        font-size: 30px;
        color: #999999;
        .spanleft {
          color: #333333;
        }
      }
    }
    .liright {
      text-align: right;
      .lirighttop {
        font-size: 30px;
        color: #333333;
      }
      .butp {
        width: 140px;
        height: 50px;
        background-color: #999999;
        border-radius: 10px;
        font-size: 24px;
        color: #ffffff;
        line-height: 50px;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>

