<template>
	<div>
		<information />
		<div class="order">
			<van-row>
				<van-col span="4">
					<van-image width="160" height="80" :src="require('@/assets/images/logo_pc.png')" />
				</van-col>
				<van-col span="3" style="margin-top: 35px;">
					<h4>结算页</h4>
				</van-col>
				<van-col span="8" offset="7" style="margin-top: 35px;">
					<el-steps :space="200" :active="2" finish-status="success" align-center>
						<el-step title="1.购物车"></el-step>
						<el-step title="2.填写核对订单"></el-step>
						<el-step title="3.成功提交订单"></el-step>
					</el-steps>
				</van-col>
			</van-row>
		</div>
		<div style="width: 1200px;margin: auto;height:50px;font-size: 25px;">
			填写并核对订单
		</div>
		<div class="myorder">
			<van-row>
				<van-col span="4">收货人信息</van-col>
				<van-col span="4" offset="16" style="padding-left: 97px;">新增收货地址</van-col>
			</van-row>
			<div style="padding-top: 25px;">
				<van-row>
					<van-col span="4">
						<button type="button" class="shbtn">小冰 广西</button>
					</van-col>
					<van-col span="18" style="margin-top: 5px;">
						<span>小冰 广西 南宁市 西乡塘区 丰达路6号宏桂217青年社区 176****7027 </span>
						<el-button type="info" size="mini">默认地址</el-button>
					</van-col>
					<van-col span="2" style="padding-left: 64px;">编辑</van-col>
				</van-row>
			</div>
			<el-divider></el-divider>
			<van-row>
				<van-col span="4">支付方式</van-col>
			</van-row>
			<div style="padding-top: 25px;">
				<van-row>
					<van-col span="3">
						<button type="button" class="zfbtn1">货到付款</button>
					</van-col>
					<van-col span="3">
						<button type="button" class="zfbtn2">在线支付</button>
					</van-col>
					<van-col span="2" style="margin-top: 10px;">更多>></van-col>
				</van-row>
			</div>
			<el-divider></el-divider>
			<van-row>
				<van-col span="4">送货清单</van-col>
			</van-row>
			<div class="songh1">
				<van-row>
					<van-col span="5">配送方式</van-col>
					<van-col span="5" offset="14">对应商品</van-col>
				</van-row>
				<van-row>
					<van-col span="4" style="margin-top: 20px;">
						<button type="button" class="shbtn">食补外卖</button>
					</van-col>
				</van-row>
				<van-row style="margin-top: 20px;">
					<van-col span="5">
						<span>标准达：</span>
					</van-col>
					<van-col span="19">
						<div>预计 9月12日<span style="color: red;">[周六]</span>09:00-21:00 送达</div>
					</van-col>
				</van-row>
			</div>
			<div class="songh2">
				<van-row>
					<van-col span="4">
						<img :src="require('@/assets/images/wuhuar1.jpg')" width="100" height="100" alt />
					</van-col>
					<van-col span="12"  style="margin-top: 40px;">
						海味道五花肉
					</van-col>
					<van-col span="4"  style="margin-top: 40px;">
						<div>￥59.9</div>
						<div>1kg</div>
					</van-col>
					<van-col span="2"  style="margin-top: 40px;padding-left:80px;">x1</van-col>
				</van-row>
			</div>
			<div class="total-price">
				<div style="width: 200px;">
					应付总金额：
					<strong style="color: #f40; font-weight: 800;font-size:1.5em">￥59.9</strong>
				</div>
			</div>
			<div class="total-price">
				<div style="padding-right: 23px;">
					<span style="padding-right: 23px;">送至：广西 南宁市 西乡塘区 丰达路6号宏桂217青年社区</span>
					<span>收货人：小冰 176****7027 </span>
				</div>
			</div>
			<div class="order-btn">
				<button @click="btnpay">提交订单</button>
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

<style scoped>
	.order {
		width: 1200px;
		margin: auto;
		height: 100px;
		margin-top: 20px;
	}

	.order .el-steps {
		width: 520px;
	}

	.myorder {
		width: 1200px;
		margin: auto;
		height: 700px;
		/* border: 1px solid #000000; */
		padding: 20px;
		background-color: white;
	}

	.shbtn {
		width: 180px;
		height: 40px;
		background-color: white;
		border: 2px solid #FF6A5D;
	}

	.zfbtn1 {
		width: 120px;
		height: 40px;
		background-color: white;
		border: 1px solid #dcdcdc;
	}

	.zfbtn2 {
		width: 120px;
		height: 40px;
		background-color: white;
		border: 2px solid #FF6A5D;
	}

	.myorder .el-divider--horizontal {
		margin: 25px 0px;
	}

	.songh1 {
		width: 400px;
		height: 170px;
		float: left;
		background-color: #F8F8F8;
		margin-top: 15px;
		padding: 20px;
	}

	.songh2 {
		width: 758px;
		height: 170px;
		float: left;
		background-color: #fffaf2;
		margin-top: 15px;
		padding: 30px 0px 20px 20px;
	}

	.ol-content {
		/* background: #fff8e1;
		padding: 20px; */
	}

	.ol-content li {
		float: left;
		width: 120px;
	}
	.total-price {
		width: 1158px;
		background: #f4f4f4;
		height: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.order-btn{
		width: 1158px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 50px;
		margin-top: 20px;
	}
	.order-btn button {
		display: inline-block;
		background-color: #f40;
		color: #fff;
		font-weight: 500;
		text-align: center;
		line-height: 50px;
		width: 120px;
		height: 50px;
		border: none;
		font-family: "Lantinghei SC", "Microsoft Yahei";
		font-size: 20px;
		
	}
</style>
