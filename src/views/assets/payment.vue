<template>
	<div>
		<information />
		<div class="panyment">
			<van-row>
				<van-col span="4">
					<van-image width="160" height="80" :src="require('@/assets/images/logo_pc.png')" />
				</van-col>
				<van-col span="3" style="margin-top: 35px;">
					<h5>收银台</h5>
				</van-col>
				<van-col span="8" offset="9" style="margin-top: 35px;padding-left: 141px;">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/myfoot' }">吃货小王子</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/my">我的订单</a></el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">支付帮助</a></el-breadcrumb-item>
					</el-breadcrumb>
				</van-col>
			</van-row>
		</div>
		<div class="panyment1">
			<van-row>
				<van-col span="16" style="margin-top: 35px;">
					<span>订单提交成功，请尽快付款!</span>
					<span style="padding-right:10px;">订单号：131924545862</span>
				</van-col>
				<van-col span="8" style="margin-top: 15px;padding-left: 256px;">
					<p>应付金额 <span style="color: red;font-size: 30px;">59.9</span> 元</p>
				</van-col>
			</van-row>
		</div>
		<div class="mypay">
			<h3>微信支付</h3>
			<div class="mypay-img">
				<van-row gutter="20">
					<van-col span="10" offset="2" style="margin-top: 30px;">
						<img src="../../assets/images/pay1.jpg" width="400" height="400px" />
						<div class="mypay-btn">
							<van-row type="flex" justify="center" style="padding-top: 20px;">
								<van-col span="5">
									<van-icon name="scan" size="60" color="#ffffff" />
								</van-col>
								<van-col span="10">
									<div class="mypay-txt">请使用微信扫一扫</div>
									<div class="mypay-txt">扫描二维码支付</div>
								</van-col>
							</van-row>
						</div>
					</van-col>
					<van-col span="10">
						<img src="../../assets/images/pay2.png" width="100%" height="600px" />
					</van-col>
				</van-row>
			</div>
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
			};
		},
		components: {
			information,
			footers,
		},
		mounted() {},
		methods: {
			onSearch() {},
			btnpay(){
				this.$router.push({
					path:'/payment'
				})
			}
		},
	};
</script>

<style>
	.panyment {
		width: 1200px;
		margin: auto;
		height: 76px;
		padding-top: 1.25rem;
	}
	.panyment1 {
		width: 1200px;
		margin: auto;
		height: 80px;
		margin-top: 30px;
	}

	.mypay {
		width: 1200px;
		margin: auto;
		height: 700px;
		margin-top: 10px;
		background-color: white;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		margin-bottom: 50px;
		padding: 30px;
	}

	.mypay-btn {
		width: 362px;
		height: 100px;
		background-color: #ff7674;
		margin-left: 14px;
		margin-top: 10px;
	}

	.mypay-txt{
		font-size: 14px;
		line-height: 30px;
		color: #fff;
		font-weight: 700;
	}
</style>
