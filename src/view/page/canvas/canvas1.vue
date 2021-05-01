<template>
  <div class="canvas1">
    <div class="test-endTime" style="width:500px;margin:0 auto;padding-top:40px;">
      <span>下班倒计时：</span>
      <countdownTime :endTime="endTime"></countdownTime>
    </div>
    <div class="spring-festival-countdown" style="width:500px;margin:0 auto;">
      <span>春节倒计时：</span>
      <span>{{springFestivalCountdown}}</span>
    </div>
    <!-- 动画 -->
    <div class="wrap">
      <ul class="bigger">
        <ul class="small">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { countdown, formatDate } from "@/plugin/dateFormatter";
import countdownTime from "@/components/countdown";
export default {
  components: { countdownTime },
  data() {
    return {
      springFestivalCountdown: ""
    };
  },
  mounted() {
    //春节倒计时
    this.springFestivalCountdown = countdown("2021-02-11 00:00:00");
  },
  computed: {
    //下班倒计时
    endTime() {
      let time = formatDate(new Date().getTime(), "yyyy-MM-dd") + " 18:00:00";

      var newTime = time.replace(/-/g, "/"); //兼容IOS
      newTime = Date.parse(newTime); //返回时间戳
      return newTime;
    }
  },
  methods: {
    countdown
  }
};
</script>

<style lang="scss" scoped>
.canvas1 {
  width: 100%;
  height: 100%;
  background: #000 url("../../../assets/images/girls/ws1.png") no-repeat center
    top;
  color: white;
  font-size: 24px;
}
.wrap {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 200px auto;
  perspective: 2000px;
}
.wrap .bigger,
.wrap .small {
  transform-style: preserve-3d;
  transform: rotateY(60deg);
  transform-origin: top;
  transition: all 2s;
}
.small {
  animation: move 5s linear infinite;
}
.bigger {
  animation: move 5s linear infinite;
}
.small div {
  position: absolute;
  top: 80px;
  left: 80px;
  width: 150px;
  height: 150px;
  transition: all 2s;
  opacity: 0.7;
}
.bigger li {
  position: absolute;
  top: 0;
  left: 0;
  width: 298px;
  height: 298px;
  border: 1px solid #fff;
  transition: all 2s;
}
.small div:nth-child(1) {
  background: url("../../../assets/images/girls/02261T536-9.jpg");
  background-size: 100% 100%;
  transform: translateZ(75px);
}
.small div:nth-child(2) {
  background: url("../../../assets/images/girls/3660d934ab1c0852-16e9a9638e39fcb2-97641e7596e2350a0b735c4ead676a1a.jpg");
  background-size: 100% 100%;
  transform: translateZ(-75px);
}
.small div:nth-child(3) {
  background: url("../../../assets/images/girls/579099df59fbc.jpg");
  background-size: 100% 100%;
  transform: rotateY(90deg) translateZ(75px);
}
.small div:nth-child(4) {
  background: url("../../../assets/images/girls/d73a5f2c2a456487-3c0bcc33d293b66c-b402f455a6e9d73f24a93fa2ae74d582.jpg");
  background-size: 100% 100%;
  transform: rotateY(-90deg) translateZ(75px);
}
.small div:nth-child(5) {
  background: url("../../../assets/images/girls/ws-1.png");
  background-size: 100% 100%;
  transform: rotateX(90deg) translateZ(75px);
}
.small div:nth-child(6) {
  background: url("../../../assets/images/girls/ws-2.png");
  background-size: 100% 100%;
  transform: rotateX(-90deg) translateZ(75px);
}
.bigger li:nth-child(2) {
  background: hsla(0, 50%, 50%, 0.4);
  transform: translateZ(150px);
  background: url("../../../assets/images/girls/3660d934ab1c0852-16e9a9638e39fcb2-97641e7596e2350a0b735c4ead676a1a.jpg");
  background-size: 100% 100%;
}
.bigger li:nth-child(3) {
  background: hsla(60, 50%, 50%, 0.4);
  transform: translateZ(-150px);
  background: url("../../../assets/images/girls/579099df59fbc.jpg");
  background-size: 100% 100%;
}
.bigger li:nth-child(4) {
  background: hsla(120, 50%, 50%, 0.4);
  transform: rotateY(90deg) translateZ(150px);
  background: url("../../../assets/images/girls/d73a5f2c2a456487-3c0bcc33d293b66c-b402f455a6e9d73f24a93fa2ae74d582.jpg");
  background-size: 100% 100%;
}
.bigger li:nth-child(5) {
  background: hsla(180, 50%, 50%, 0.4);
  transform: rotateY(-90deg) translateZ(150px);
  background: url("../../../assets/images/girls/ws-1.png");
  background-size: 100% 100%;
}
.bigger li:nth-child(6) {
  background: hsla(240, 50%, 50%, 0.4);
  transform: rotateX(90deg) translateZ(150px);
  background: url("../../../assets/images/girls/ws-2.png");
  background-size: 100% 100%;
}
.bigger li:nth-child(7) {
  background: hsla(320, 50%, 50%, 0.4);
  transform: rotateX(-90deg) translateZ(150px);
  background: url("../../../assets/images/girls/02261T536-9.jpg");
  background-size: 100% 100%;
}

.wrap:hover .bigger {
  transform: rotateY(360deg);
}

.wrap:hover .bigger li:nth-child(2) {
  transform: translateZ(300px);
}
.wrap:hover .bigger li:nth-child(3) {
  transform: translateZ(-300px);
}
.wrap:hover .bigger li:nth-child(4) {
  transform: rotateY(90deg) translateZ(300px);
}
.wrap:hover .bigger li:nth-child(5) {
  transform: rotateY(-90deg) translateZ(300px);
}
.wrap:hover .bigger li:nth-child(6) {
  transform: rotateX(90deg) translateZ(300px);
}
.wrap:hover .bigger li:nth-child(7) {
  transform: rotateX(-90deg) translateZ(300px);
}
@keyframes move {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>