<template>
  <div class="main-container">
    <information style="background-color:white" />
    <div class="loginbox">
      <ul class="ded-login">
        <li
          v-for="(item,index) in loginbox_h"
          :class="{active:num==index}"
          @click="table(index)"
          :key="index"
        >{{item}}</li>
      </ul>
      <div class="tabContent">
        <div v-show="num===0">
          <!-- 登录 账户-->
          <el-form ref="form" :model="form" style="width:350px;margin:30px auto">
            <el-form-item>
              <el-input placeholder="请输入用户名" v-model="form.name" clearable>
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input placeholder="请输入密码" v-model="form.pwd" show-password>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-checkbox v-model="remember">下次自动登录</el-checkbox>
              <span style="color:#ff552e;float:right;cursor: pointer;">忘记密码？</span>
            </el-form-item>

            <el-form-item>
              <van-button type="info" block @click="isGetLogin">登录</van-button>
            </el-form-item>
          </el-form>
        </div>
        <!--验证登录 -->
        <div v-show="num===1">
          <el-form ref="form" :model="form" style="width:350px;margin:30px auto">
            <el-form-item>
              <el-input placeholder="请输入手机号" v-model="form.phone" maxlength="11" clearable>
                <i slot="prefix" class="el-input__icon el-icon-phone-outline"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input
                placeholder="请输入图形验证码"
                v-model="form.graphical"
                maxlength="4"
                style="width:60%"
                clearable
              >
                <i slot="prefix" class="el-input__icon el-icon-warning-outline"></i>
              </el-input>
              <div @click="changeCode" style="float: right;cursor: pointer;">
                <identify :identifyCode="identifyCode"></identify>
                <!-- 引入验证码组件 -->
              </div>
            </el-form-item>

            <el-form-item style="margin-top:-13px">
              <el-input
                placeholder="请输入短信验证码"
                v-model="form.short"
                maxlength="6"
                style="width:60%"
                clearable
              >
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
              <el-button
                type="default"
                :disabled="disabled"
                style="float: right;"
                @click="sendcode"
              >{{btntxt}}</el-button>
            </el-form-item>

            <el-form-item>
              <van-button type="info" block @click="isVerification">登录</van-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 注册账户 -->
        <div v-show="num===2">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
            style="width:350px;margin:30px auto"
          >
            <el-form-item>
              <el-input placeholder="请输入用户名" v-model="ruleForm.user" clearable>
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入密码"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                placeholder="确认密码"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" style="width:40%" @click="isRegisterBtn">注册</el-button>
              <el-button style="float:right;width:40% " @click="isResetBtn">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import information from "@/components/topInformation/information.vue"; //导航栏
import identify from "@/components/identify/identify.vue"; // 引入验证码组件

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginbox_h: ["登录", "验证登录", "注册"],
      // 验证码初始值
      identifyCode: "1084",
      // 验证码的随机取值范围
      identifyCodes: "1234567890",
      num: 0, //默认显示登录
      remember: false,
      form: {
        name: "",
        pwd: "",
        phone: "",
        graphical: "",
        short: "",
        // registeruser:""
      },
      btntxt: "获取验证码",
      disabled: false,
      sendTime: 60,
      timer: null,
      ruleForm: {
        pass: "",
        checkPass: "",
        user: "",
        registeruser: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  components: { information, identify },
  created() {},
  mounted() {
    // 刷新页面就生成随机验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 登录
    //  let redirect = this.$route.query.redirect || "/"; //重定向
    //         this.$router.push(redirect);
    isGetLogin() {
      if (
        localStorage.getItem("username") === this.form.name &&
        localStorage.getItem("pwd") === this.form.pwd
      ) {
        let redirect = this.$route.query.redirect || "/"; //重定向
        this.$router.push(redirect);
      } else {
        this.$notify.error({
          title: "错误",
          message: "您的用户名没有注册",
        });
      }
    },
    // 验证登录
    isVerification() {
      if (
        this.form.phone != "" &&
        this.form.graphical != "" &&
        this.form.short != ""
      ) {
        let redirect = this.$route.query.redirect || "/"; //重定向
        this.$router.push(redirect);
      } else {
        this.$notify.error({
          title: "错误",
          message: "请先进行验证！！！",
        });
      }
    },
    // 注册事件
    isRegisterBtn() {
      if (
        this.ruleForm.user != "" &&
        this.ruleForm.checkPass != "" &&
        this.ruleForm.pass != ""
      ) {
        this.$notify({
          title: "成功",
          message: "注册成功！前往登录即可",
          type: "success",
        });
        this.num = 0;
        this.$store.commit("isRegister", {
          name: this.ruleForm.user,
          pwd: this.ruleForm.pass,
        });
        this.ruleForm.user = "";
        this.ruleForm.checkPass = "";
        this.ruleForm.pass = "";
      } else {
        this.$notify.error({
          title: "错误",
          message: "请输入对应信息进行注册！！！",
        });
      }
    },
    // isResetBtn 重置事件
    isResetBtn() {
      this.ruleForm.user = "";
      this.ruleForm.checkPass = "";
      this.ruleForm.pass = "";
    },
    table(index) {
      this.num = index; //切换登录 注册 验证
    },
    // 点击验证码刷新验证码
    changeCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)];
      }
    },
    // 发送验证码
    sendcode() {
      setTimeout(() => {
        this.$notify({
          //验证码提示
          title: "验证码",
          message:
            "【食补】验证码419123，您正在进行身份验证，请勿泄露给其他人使用。",
          type: "success",
        });
      }, 2500);
      this.timer = setInterval(() => {
        this.sendTime--;
        this.btntxt = this.sendTime + "s重新获取";
        this.disabled = true;
        if (this.sendTime === 0) {
          clearInterval(this.timer);
          this.sendTime = 60;
          this.btntxt = "获取验证码";
          this.disabled = false;
        }
      }, 800);
    },
  },
};
</script>

<style  scoped>
.main-container {
  width: 100vw;
  height: 100vh;
  background-image: url("https://i3.meishichina.com/attachment/magic/2016/07/20/20160720146900157818213.jpg"); /*背景*/
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.9;
}

.loginbox {
  width: 450px;
  height: 450px;
  background: rgba(255, 255, 255, 0.9);
  /* background: white; */
  margin: auto;
  transform: translateY(50%);
}
.ded-login {
  width: 100%;
  display: flex;
}
.ded-login li {
  flex: 1;
  height: 55px;
  /* background: #fff; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s;
  box-sizing: border-box;
}
.ded-login li.active {
  color: #fff;
  background: #ff552e;
}
</style>
