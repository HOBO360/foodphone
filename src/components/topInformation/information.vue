<template>
	<div class="header-bottom">
		<div class="main-container">
			<van-row class="top-head" type="flex" algin="center">
				<van-col span="12">
					<ul class="info-link-left" style="padding-top: 12px;">
						<router-link tag="li" to="/home" v-for="(item,val) in leftHeadInfo" :key="val">{{item}}</router-link>
					</ul>
				</van-col>
				<van-col span="12">
					<ul class="info-link-left" style="float: right; padding-top: 12px;">
						<router-link tag="li" :to="item.to" v-for="(item,index) in rightHeadInfo" :key="index" @click.native="isclearUser(index)">{{item.text}}</router-link>
						<li @click="isRes">退出登录</li>
						<router-link to="/login" tag="li" :v-show="isShowLogin">立即登录</router-link>
					</ul>
				</van-col>
			</van-row>
		</div>
	</div>

</template>

<script type="text/javascript">
	export default {
		name: "information",
		data() {
			return {
				isShowLogin: true,
				isShowRed: false,
				leftHeadInfo: ["首页", "美食推荐", "加盟知识", "加盟资讯", "免费入驻"],
				rightHeadInfo: [
					// { text: "立即登录", to: "/login" },
					{
						text: "注册",
						to: "/login"
					},
					{
						text: "我的订单",
						to: "/my"
					},
					{
						text: "我要投稿",
						to: "/"
					},
					{
						text: "个人中心",
						to: "/"
					},
				],
			};
		},
		components: {},
		methods: {
			isclearUser(index) {
				// router-link 会阻止click事件，在@click.native 即可
				console.log(index);
				// if(index === 6){
				//   this.$store.commit("isRegister","");
				// }
			},
			isRes() {
				if (localStorage.getItem('username')) {
					this.$message({
						type: "success",
						message: "退出成功"
					})
					this.$router.push("/");
					localStorage.removeItem("username");
				} else {
					this.$message({
						type: "error",
						message: "目前处于没登录状态"
					})
				}
			}
		},
	};
</script>

<style scoped>
	.header-bottom {
		border-bottom: 1px solid #e8e8e8;
	}

	.main-container {
		width: 1200px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* top head行 */
	.top-head {
		width: 100%;
		min-width: 1000px;
		padding: 0;
	}

	/* left */
	.info-link-left {
		width: 450px;
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.info-link-left li {
		display: inline;
		color: #595959;
		line-height: 20px;
		padding: 0.3em;
		font-size: 1rem;
		width: 200px;
	}

	.info-link-left li:hover {
		color: red;
		cursor: pointer;
	}

	/* right */
</style>
