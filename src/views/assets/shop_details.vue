<template>
	<div class="shop_details">
		<information></information>
		<div class="bg" style="margin-bottom: 20px;">
			<div class="search-container">
				<van-row type="flex">
					<van-col span="3">
						<van-image width="160" height="80" style="margin-top:2em;" :src="require('@/assets/images/logo_pc.png')" />
					</van-col>
					<van-col span="10" offset="11">
						<div style="margin-top:3em;">
							<el-input placeholder="搜索商品">
								<el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
							</el-input>
						</div>
					</van-col>
				</van-row>
			</div>
			<div class="myrecips">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/shopping' }">生鲜</el-breadcrumb-item>
					<el-breadcrumb-item>商品详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="card">
				<van-row>
					<van-col span="6">
						<img src="../../assets/images/details/niuyouguo.jpg" width="100%" height="100%">
					</van-col>
					<van-col span="12" offset="1">
						<div>
							<br />
							<p>进口牛油果 大果6粒装 单果160g起 生鲜水果</p>
							<span class="co-red fo-small-size">【时令爆款】即食牛油果4粒装，促销价低至29.9元！</span>
							<div class="jieshao">
								<table width="100%">
									<tr>
										<td width="10%" class="co-gray">
											<span>价格</span>
										</td>
										<td width="60%">
											<span class="co-red">￥<span class="fo-big-size">43.90</span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="co-blue fo-small-size">降价通知</span>
										</td>
										<td width="20%">
											<span class="co-gray">累计评价</span><br />
											<span class="co-blue">145万+</span>
										</td>
									</tr>
									<tr>
										<td width="10%" class="co-gray">
											<span>配送</span>
										</td>
										<td width="60%">
											现在下单，最快今天15:45-16:15送达<br />
											<span class="co-gray fo-small-size">满39元免配送费（10kg内）</span>
										</td>
									</tr>
									<tr>
										<td width="10%" class="co-gray">
											<span>重量</span>
										</td>
										<td width="60%">
											2.05kg
										</td>
									</tr>
								</table>
								<van-row type="flex" align="center">
									<van-col span="5">
										<van-stepper theme="round" button-size="22" disable-input />
									</van-col>
									<van-col span="6">
										<van-button type="danger">加入购物车</van-button>
									</van-col>
								</van-row>
							</div>
						</div>
						<br />
					</van-col>
					<van-col span="4" offset="1"></van-col>
				</van-row>
			</div>
			<div class="bg-white">
				<van-button type="danger">猜你喜欢</van-button>
				<van-row>
					<van-col align="center" span="4" v-for="item in links" :key="item.id">
						<img :src="item.img" />
						<span class="co-red"><b>￥{{item.title}}</b></span>
					</van-col>
				</van-row>
			</div>
			<div class="bg-white" style="padding-top:20px ;">
				<van-button type="danger">商品介绍</van-button>
				<van-row style="padding: 20px;">
					<van-col span="4" class="co-gray">
						<p>品牌：京觅</p>
						<span>包装：简装</span>
					</van-col>
					<van-col span="4" class="co-gray">
						<p>商品编号：4968338</p>
						<span>原产地：秘鲁</span>
					</van-col>
					<van-col span="4" class="co-gray">
						<p>商品毛重：2.05kg</p>
						<span>重量：1000-1999g</span>
					</van-col>
					<van-col span="4" class="co-gray">
						<p>商品产地：秘鲁</p>
						<span>国产/进口：进口</span>
					</van-col>
				</van-row>
			</div>
			<div>
				<van-row>
					<van-col span="15">
						<img src="@/assets/images/details/NTG1.jpg" />
						<img src="@/assets/images/details/NTG2.jpg" />
						<img src="@/assets/images/details/NTG3.jpg" />
						<img src="@/assets/images/details/NTG4.jpg" />
						<img src="@/assets/images/details/NTG5.jpg" />
						<img src="@/assets/images/details/NTG6.jpg" />
						<div class="tips" style="margin-top: 30px;">
							<h4 align="center">- 价格提示 -</h4>
							<span class="fo-small-size"><b>划线价格：</b></span>
							<span class="co-gary fo-small-size">
								可能是商品的吊牌价、零售价、指导价或该商品曾经在大
								润发门店/大润发优鲜APP展示过的销售价等，并非原价。也由于地区
								与时间的差异，可能使划线价格与您购物时的展示价格不同。因此，
								该价格仅供做为参考用途。
							</span><br />
							<span class="fo-small-size"><b>未划线价格：</b></span>
							<span class="co-gary fo-small-size">
								是商品在大润发优鲜APP的实际销售价。具体成交价格
								会因会员使用优惠券或参与活动而发生变化(本公司保有变更活
								的最终解释权利)，最终价格以订单结算页为主。
							</span>
						</div>
					</van-col>
					<van-col span="9">
						<div style="width: 100%;height: 280px;">
							<div class="ablock">
								<el-carousel height="260px">
									<el-carousel-item v-for="item in 3" :key="item">
										<van-image width="100%" height="100%" :src="require('@/assets/images/xinwen1.jpg')" />
										<van-image width="100%" height="100%" :src="require('@/assets/images/xinwen2.jpg')" />
										<van-image width="100%" height="100%" :src="require('@/assets/images/xinwen3.jpg')" />
									</el-carousel-item>
								</el-carousel>
								<!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
							</div>
						</div>
						<div style="width: 100%;background-color: white;height: 1770px;margin-top: 15px;padding: 17px;">
							<h4 class="co-red" align="center">-火爆热销-</h4>
							<div class="myresta" v-for="(myrestar,index) in myrestars" :key="index.title">
								<div class="myrest-img">
									<van-image width="100%" height="100%" style="display: block;" :src="myrestar.imgurl" />
								</div>
								<div class="mytext1">{{myrestar.title}}</div>
								<div class="mytext2 co-red" align="center"><b>￥{{myrestar.text}}</b></div>
							</div>
						</div>
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
				links: [{
						img: require('@/assets/images/PT.jpg'),
						title: '67.90'
					},
					{
						img: require('@/assets/images/ZAO.jpg'),
						title: '38.8'
					},
					{
						img: require('@/assets/images/MG.jpg'),
						title: '38.80'
					},
					{
						img: require('@/assets/images/HT.jpg'),
						title: '57.90'
					},
					{
						img: require('@/assets/images/CZ.jpg'),
						title: '59.90'
					},
					{
						img: require('@/assets/images/NIU.jpg'),
						title: '65.90'
					}
				],
				myrestars: [{
						imgurl: require("@/assets/images/HLG.jpg"),
						title: "红心火龙果",
						text: "	12.00",
					},
					{
						imgurl: require("@/assets/images/ddan1.jpg"),
						title: "陕西绿心猕猴桃奇异果",
						text: "12.90",
					},
					{
						imgurl: require("@/assets/images/BL.jpg"),
						title: "菲律宾菠萝 2个装",
						text: "29.9",
					},
					{
						imgurl: require("@/assets/images/BLM.jpg"),
						title: "海南黄肉菠萝蜜1个 15-20斤",
						text: "65.9",
					},
					{
						imgurl: require("@/assets/images/BXG.jpg"),
						title: "新鲜百香果2斤",
						text: "12.00",
					},
					{
						imgurl: require("@/assets/images/PZH.png"),
						title: "百觅 攀枝花芒果2斤装",
						text: "12.00",
					},
					{
						imgurl: require("@/assets/images/XYC.png"),
						title: "南非西柚6个大果",
						text: "28.8",
					},
					{
						imgurl: require("@/assets/images/HMG.jpg"),
						title: "西州蜜瓜25号哈密瓜 2粒装",
						text: "37.9",
					},
					{
						imgurl: require("@/assets/images/PG.jpg"),
						title: "烟台红富士苹果12个",
						text: "36.00",
					},
					{
						imgurl: require("@/assets/images/LL.jpg"),
						title: "泰国进口金枕头榴莲 ",
						text: "167.6",
					},
					{
						imgurl: require("@/assets/images/CLZ.jpg"),
						title: "车厘子樱桃 车厘子樱桃2斤",
						text: "128.00",
					},
					{
						imgurl: require("@/assets/images/MGS.jpg"),
						title: "滇派 云南木瓜红心牛奶木瓜4斤",
						text: "12.00",
					},
					{
						imgurl: require("@/assets/images/LZ.jpg"),
						title: "新鲜冻荔枝 冰冻荔枝黑叶荔枝",
						text: "79.9",
					},
					{
						imgurl: require("@/assets/images/HSL.jpg"),
						title: "云南蒙自石榴 高原甜水晶石榴",
						text: "12.00",
					},
				],
			};
		},
		components: {
			information,
			footers,
		},
	};
</script>

<style scoped>
	.bacnner {
		width: 100%;
	}

	.jieshao {
		padding: 10px;
		background-color: #F3F3F3;
		/* border-bottom: 1px solid ; */
	}

	.bacnner img {
		width: 100%;
		height: 200px;
	}

	.shop_details .mytext2 {
		color: red;
	}

	.shop_details .myresta {
		width: 190px;
		height: 240px;
		/* background-color: #f8f8f8; */
		float: left;
		padding: 22px;
	}

	.shop_details .myrecips {
		margin: 10px 0px;
	}

	.shop_details .el-breadcrumb {
		font-size: 20px;
	}

	.bg {
		width: 1200px;
		margin: auto;
	}

	.card {
		background-color: white;
		width: 100%;
	}
</style>
