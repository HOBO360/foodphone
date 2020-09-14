<template>
  <div class>
    <div class="footer-bar">
      <van-row class="conter">
        <van-col span="12" offset="2">
          <van-row type="flex" align="center">
            <van-col span="24"  style="margin-top:40px;font-size: 2rem;">
              <div style="color:red">
                客服电话：
                <span style="font-weight: 500;">1000100020</span>
                <van-button
                  color="red"
                  icon="phone"
                  plain
                  size="mini"
                  style="background-color:transparent;margin-left:3rem;"
                >在线咨询</van-button>
              </div>
            </van-col>
          </van-row>
          <van-row type="flex" justify="space-between">
            <van-col span="24"  style="margin-top:10px">
              <ul class="info-link-left">
                <router-link
                  tag="li"
                  to="/about"
                  v-for="(item,val) in bottomHeadInfo"
                  :key="val"
                >{{item}}</router-link>
              </ul>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="20" style="margin-top:10px">
              <p
                style="color:#666;font-size:0.5rem"
              >友情提示：本站为用户免费提供信息发布展示与咨询服务！投资有风险 加盟需谨慎。使用本站服务,即代表您已阅读并同意</p>
            </van-col>
          </van-row>
        </van-col>
        <van-col span="8" offset="2">
          <van-row>
            <van-col span="7">
              <van-image
                width="100"
                style="margin-top:5rem"
                height="100"
                :src="require('@/assets/images/generate_qrcode.png')"
              />
              <div style="color:white;font-size:0.3rem;margin-left:0.8em">扫描食补二维码</div>
            </van-col>
            <van-col span="10" offset="1">
              <van-image
                width="100"
                style="margin-top:5rem"
                height="100"
                :src="require('@/assets/images/generate_left.png')"
              />
              <div style="color:white;font-size:0.3rem">扫描安装食补APP</div>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      bottomHeadInfo: [
        "关于我们",
        "使用帮助",
        "网站首页",
        "加盟项目",
        "加盟知识",
        "加盟专题",
        "免费入驻",
      ],
    };
  },
  components: {},
  methods: {},
};
</script>

<style  scoped>
/*  */
.footer-bar {
  background-color: #262626;
  height:230px;
  font-size: 2.5rem;
}
.footer-bar .conter{
  width: 1200px;
  margin: 0 auto;
}
/* top head行 */
.top-head {
  width: 100%;
  min-width: 1000px;
  padding: 0;
  margin: 0;
}
/* left */
.info-link-left {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info-link-left li {
  display: inline;
  padding: 0.6em;
  color: #fff;
  font-size: 1rem;
}
.info-link-left li:hover {
  color: red;
  cursor: pointer;
}
</style>