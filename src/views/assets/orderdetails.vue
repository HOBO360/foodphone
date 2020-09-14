<template>
	<div>
		<information></information>
		<div class="bg">
			<div class="search-container">
				<van-row type="flex">
					<van-col span="3">
						<van-image width="160" height="80" style="margin-top:2em;" :src="require('@/assets/images/logo_pc.png')" />
					</van-col>
					<van-col span="10" offset="11">
						<div style="margin-top:3em;">
							<el-input placeholder="搜索商家或地点" v-model="form.name">
								<el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
							</el-input>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>
		<div class="orderdet">
			<el-card class="box-card" shadow="never">
				<span style="font-size: 2rem;font-weight: bold;">订单详情</span>
				<el-button style="float: right; padding: 15px 0;color:#262626;" type="text" @click="fanhui">返回我的订单</el-button>
				<el-divider></el-divider>
				<el-row class="dingdan">
					<el-col :span="24" :xs="24">
						<div class="grid-content bg-purple-dark">
							<span>当前订单状态：<span style="color: red;">已使用</span></span>
							<span style="float: right;">如需退款，请登录食补app通过订单详情页完成退款操作</span>
						</div>
					</el-col>
				</el-row>
				<el-row class="dingdan1">
					<el-col :span="24" :xs="24">
						<div class="grid-content bg-purple-dark">
							<span>食补券</span>
						</div>
					</el-col>
					<el-col :span="24" :xs="24" class="dingdan2">
						<div class="grid-content bg-purple-dark">
							<el-col :span="24" :xs="24" class="dingdan3">
								<div class="grid-content bg-purple-dark">
									<div class="dingdan-text">小提示：记下或拍下食补券密码向商家出示即可消费，无需等待短信</div>
									<div class="dingdan-text">食补券密码：075641805024 已消费</div>
								</div>
							</el-col>
						</div>
					</el-col>
				</el-row>
				<el-row class="dingdan1">
					<el-col :span="24" :xs="24">
						<div class="grid-content bg-purple-dark">
							<span>订单信息</span>
						</div>
					</el-col>
					<el-col :span="24" :xs="24" class="dingdan2">
						<div class="grid-content bg-purple-dark">
							<van-row>
								<van-col span="6">
									<span>订单编号：6045815854</span>
								</van-col>
								<van-col span="6">
									<span>下单时间：2020-07-04 08:34</span>
								</van-col>
								<van-col span="6">
									<span>付款方式：美团收银台, 促销</span>
								</van-col>
								<van-col span="6">
									<span>付款时间：2020-07-04 08:34</span>
								</van-col>
							</van-row>
						</div>
					</el-col>
				</el-row>
				<el-row class="dingdan1">
					<el-col :span="24" :xs="24">
						<div class="grid-content bg-purple-dark">
							<span>团购信息</span>
						</div>
					</el-col>
					<el-col :span="24" :xs="24" class="dingdan2">
						<div class="grid-content bg-purple-dark">
							<van-row>
								<van-col span="6">
									<div>团购项目</div>
									<div>蛋糕24选1,约8英寸</div>
								</van-col>
								<van-col span="6">
									<div align="center">单价</div>
									<div align="center">89</div>
								</van-col>
								<van-col span="6">
									<div align="center">数量</div>
									<div align="center">1</div>
								</van-col>
								<van-col span="6">
									<div align="center">支付金额</div>
									<div align="center">￥89</div>
								</van-col>
							</van-row>
						</div>
					</el-col>
				</el-row>
			</el-card>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import information from "@/components/topInformation/information.vue";
	import footers from "@/components/footer/footer.vue";
	export default {
		data() {
			return {
				searchValue: "",
				form: {
					name: "",
				},
				active: 0,
			};
		},
		components: {
			information,
			footers
		},
		methods: {
			fanhui() {
				this.$router.push({
					path: "/my"
				});
			}
		}
	}
</script>

<style>
	.orderdet {
		width: 1200px;
		height: 38rem;
		margin: auto;
		border: 1px solid #99A9BF;
		margin-bottom: 1.25rem;
		margin-top: 1.5625rem;
		background-color: #f8f8f8;
	}

	.orderdet .box-card {
		width: 1180px;
		margin-left: 0.625rem;
	}

	.orderdet .el-card__header {
		border-bottom: 0px solid #EBEEF5;
	}

	.orderdet .el-divider--horizontal {
		display: block;
		height: 1px;
		width: 100%;
		margin: 15px 0;
	}

	.orderdet .el-card {
		border: 0px solid #EBEEF5;
		background-color: #FFF;
		color: #303133;
		transition: .3s;
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.dingdan .el-col {
		border-radius: 0px;
	}

	.dingdan .bg-purple-dark {
		background: #fff6db;
		padding: 15px 15px;
	}

	.dingdan1 .el-col {
		border-radius: 0px;
		border: 1px solid #EBEEF5;
	}

	.dingdan1 .bg-purple-dark {
		background: #eee;
		padding: 10px 15px;
	}

	.dingdan2 .el-col {
		border-radius: 0px;
		margin-bottom: 0.625rem;
	}

	.dingdan2 .bg-purple-dark {
		background: #ffffff;
		padding: 10px 15px;
	}

	.dingdan3 .el-col {
		border-radius: 0px;
	}

	.dingdan3 .bg-purple-dark {
		background: #eee;
		padding: 10px 15px;
	}

	.dingdan-text {
		color: gray;
	}
</style>
