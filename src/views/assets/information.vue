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
		<div class="myfoot">
			<el-row :gutter="20">
				<el-col :xs="8" :span="5">
					<div class="grid-content bg-purple">
						<van-cell-group>
							<van-cell title="我的食补" to="/myfoot" :border="false" />
							<van-cell title="我的订单" to="/my" :border="false" />
							<van-cell title="全部订单" is-link :border="false" />
							<van-cell title="待付款" is-link :border="false" />
							<van-cell title="待评价" is-link :border="false" />
							<van-cell title="退款/售后" is-link :border="false" />
						</van-cell-group>
						<van-cell-group>
							<van-cell title="我的收藏" :border="false" />
							<van-cell title="收藏的商家" is-link :border="false" />
							<van-cell title="收藏的团购" is-link :border="false" />
						</van-cell-group>
						<van-cell-group>
							<van-cell title="个人信息" :border="false" />
							<van-cell title="账户设置" to="/information" is-link :border="false" />
						</van-cell-group>
					</div>
				</el-col>
				<el-col :xs="8" :span="19">
					<div class="myinform">
						<div style="height: 70px;border-bottom: 1px solid gainsboro;">
							<div style="font-size: 18px;">个人信息</div>
							<span style="font-size: 12px;color: gray;">账户设置</span>
						</div>
						<div style="height:60px;border-bottom: 1px solid gainsboro;margin-top:20px;">
							<van-row gutter="20" type="flex" justify="center">
								<van-col span="3" style="border-right:1px solid gainsboro ;">
									<div align="center" style="padding-top: 7px;">头像</div>
								</van-col>
								<van-col span="18" style="padding-left: 20px;padding-top: 5px;">
									<van-image round width="30" height="30" :src="require('@/assets/images/tx6.jpg')" />
								</van-col>
								<van-col span="2">
									<van-button round type="default">修改</van-button>
								</van-col>
							</van-row>
						</div>
						<div style="height:60px;border-bottom: 1px solid gainsboro;margin-top:20px;">
							<van-row gutter="20" type="flex" justify="center">
								<van-col span="3" style="border-right:1px solid gainsboro ;">
									<div align="center" style="padding-top:5px;">昵称</div>
								</van-col>
								<van-col span="18" style="padding-left: 20px;padding-top: 5px;">
									<span style="font-size: 12px;color: gray;">吃货小王子</span>
								</van-col>
								<van-col span="2">
									<van-button round type="default">修改</van-button>
								</van-col>
							</van-row>
						</div>
						<div style="height:60px;border-bottom: 1px solid gainsboro;margin-top:20px;">
							<van-row gutter="20" type="flex" justify="center">
								<van-col span="3" style="border-right:1px solid gainsboro ;">
									<div align="center" style="padding-top:5px;">生日</div>
								</van-col>
								<van-col span="18" style="padding-left: 20px;padding-top: 5px;">
									<span style="font-size: 12px;color: gray;">2000-09-08</span>
								</van-col>
								<van-col span="2">
									<van-button round type="default">修改</van-button>
								</van-col>
							</van-row>
						</div>
						<div style="height:60px;border-bottom: 1px solid gainsboro;margin-top:20px;">
							<van-row gutter="20" type="flex" justify="center">
								<van-col span="3" style="border-right:1px solid gainsboro ;">
									<div align="center" style="padding-top:5px;">换绑手机</div>
								</van-col>
								<van-col span="18" style="padding-left: 20px;padding-top: 5px;">
									<span style="font-size: 12px;color: gray;">123****4567</span>
								</van-col>
								<van-col span="2">
									<van-button round type="default">换绑</van-button>
								</van-col>
							</van-row>
						</div>
						<div style="height:40px;margin-top:20px;">
							<van-row gutter="20" type="flex" justify="center">
								<van-col span="3" style="border-right:1px solid gainsboro ;">
									<div align="center" style="padding-top:5px;">登录密码</div>
								</van-col>
								<van-col span="18" style="padding-left: 20px;padding-top: 5px;">
									<span style="font-size: 12px;color: gray;">安全强度：强</span>
								</van-col>
								<van-col span="2">
									<van-button round type="default">修改</van-button>
								</van-col>
							</van-row>
						</div>
					</div>
				</el-col>
			</el-row>
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
				currentDate: new Date(),
				form: {
					name: "",
				},
			};
		},
		components: {
			information,
			footers
		},
		methods: {}
	}
</script>

<style>
	.image {
		width: 100%;
		height: 50%;
		display: block;
	}

	#conten {
		float: left;
		width: 160px;
		height: 80px;
		padding-left: 49px;
	}

	#conten .van-col--20 {
		margin-left: 22px;
		margin-top: -10px;
	}

	.my .bg-purple .el-col-10 {
		margin-top: 10px;
	}

	.my .bg-purple .el-col-4 {
		margin-top: 27.2px;
	}

	.grid-content-myfoot .el-col-14 {
		margin-top: 36px;
	}

	.grid-content-myfoot .el-col-4 {
		margin-top: 56px;
	}

	.my .bg-purple .el-divider--horizontal {
		width: 95%;
		margin-left: 2.5%;
	}

	.my .el-row {
		margin-bottom: 10px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.my .el-col {
		border-radius: 4px;
	}

	.my .bg-purple-dark {
		background: #99a9bf;
	}

	.my .bg-purple-light {
		background: #e5e9f2;
	}

	.myfoot .grid-content {
		border-radius: 4px;
		min-height: 36px;
		border: 1px solid #99A9BF;
		padding: 1px 1px;
	}

	.grid-content-inform {
		/* background-color: #FFD000; */
		min-height: 200px;
		padding: 40px;
	}

	.conten1 {
		min-height: 100px;
		padding: 40px;
	}

	.myinform {
		min-height: 370px;
		border: 1px solid #99A9BF;
		border-radius: 4px;
		padding: 20px;
	}
	.myinform .van-button{
		height: 32px;
	}
	.myfoot-r {
		min-height: 370px;
		border: 1px solid #99A9BF;
		border-radius: 4px;
		margin-top: 20px;
		padding: 20px;
	}

	.my .row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.myfoot {
		width: 1200px;
		margin: auto;
	}

	.myfoot .van-cell {
		font-size: 16px;
		background-color: #f8f8f8;
	}

	.my .van-tabs--line .van-tabs__wrap {
		height: 50px;
		width: 75%;
	}

	.my .van-tabs__line {
		width: 96px;
	}
</style>
