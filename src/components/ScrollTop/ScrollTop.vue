<template>
  <div>
    <div class="container">
      <div class="topBtn1">
        <van-icon color="#ff552e" size="30" name="shop-collect" />免费入驻
      </div>
      <div class="topBtn1">
        <van-icon color="#ff552e" size="30" name="service" />咨询
      </div>
      <div class="topBtn1">
        <van-icon color="#ff552e" size="30" name="enlarge" />立即关注
      </div>
      <div @click="backtop" class="topBtn" v-show="backToTop">
        <van-icon color="#ff552e" size="30" name="arrow-up" />顶部
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      backToTop: false,
    };
  },
  components: {},
  created() {},
  mounted() {
    // 滚动监听事件  三个参数：事件 ， 事件名， 阻止冒泡
    window.addEventListener("scroll", this.showbtn, true);
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.showbtn);
  },
  methods: {
    // 显示回到顶部按钮
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (scrollTop > 200) {
        this.backToTop = true;
      } else {
        this.backToTop = false;
      }
    },
    //     回到顶部功能实现过程：
    //     计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
    //     用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
    //     最后记得在移动到顶部时，清除定时器
    backtop() {
      var timer = setInterval(function () {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
  },
};
</script>

<style  scoped>
.container{
  width: 100px;
  position: fixed;
  display: flex;
  justify-content:space-around;
  flex-direction: column;
  flex-wrap: wrap;
  height: 310px;
  right: 50px;
  bottom: 200px;
}
.topBtn1,
.topBtn {
  width: 70px;
  height: 70px;
  border: none;
  color: black;
  background: #f8f8f8;
  text-align: center;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}
.container div:hover{
  background-color:white;
}
</style>
