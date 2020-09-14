<template>
	<div>
		<div style="background-color:#fff">
			<!-- head -->
			<information />
			<div class="centre">
				<div class="conten">
					<van-row type="flex" align="center">
						<van-col span="6">
							<van-image width="160" height="80" :src="require('@/assets/images/logo_pc.png')" />
						</van-col>
						<van-col span="10">
							<div>
								<el-input placeholder="搜索食材">
									<el-button slot="append" type="success" icon="shopping-cart-o">搜索</el-button>
								</el-input>
							</div>
						</van-col>
						<van-col span="8">
							<div style="font-weight: 700; float: right;" class="hot-project">
								<span>热门项目：</span>
								<a href="javascript:;">冷饮</a>
								<a href="javascript:;">火锅</a>
								<a href="javascript:;">串串</a>
								<a href="javascript:;">小吃</a>
							</div>
						</van-col>
					</van-row>
					<van-row type="flex" align="center">
						<van-col span="5">
							<div align="center" class="bg-black co-white" style="padding: 16px 0px;">生鲜商品分类</div>
						</van-col>
						<van-col span="11">
							<el-menu :default-active="activeIndex" text-color="#000000" active-text-color="#e54616" class="el-menu-demo"
							mode="horizontal" style="padding-left: 50px;">
								<el-menu-item index="1">
									<router-link tag="div" to="/home">首页</router-link>
								</el-menu-item>
								<el-menu-item index="2">
									<router-link tag="div" to="/shopping">生鲜</router-link>
								</el-menu-item>
								<el-menu-item index="3">
									<router-link tag="div" to="/foretaste">试吃</router-link>
								</el-menu-item>
								<el-menu-item index="4">
									<router-link tag="div" to="/select100">优选100</router-link>
								</el-menu-item>
								<el-menu-item index="5">
									<router-link tag="div" to="/my">我的订单</router-link>
								</el-menu-item>
							</el-menu>
						</van-col>
						<van-col span="8">
							<div style="float: right;">
								<div style="font-size:2em;" class="contribution">
									我要投稿，赢
									<span style="color:#ff552e">{{money}}</span>元现金
								</div>
							</div>
						</van-col>
					</van-row>
				</div>
			</div>
			<div class="mu-more-main">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item class="banner-carousel-item1">.</van-swipe-item>
					<van-swipe-item class="banner-carousel-item2">.</van-swipe-item>
					<van-swipe-item class="banner-carousel-item3">.</van-swipe-item>
					<van-swipe-item class="banner-carousel-item4">.</van-swipe-item>
				</van-swipe>

				<!--分类  -->
				<div style="width: 1200px; margin: auto;">
					<van-row>
						<van-col span="4">
							<div class="mu-more">
								<span class="tit">餐饮加盟</span>
								<ul class="clearfix">
									<li v-for="item in restaurantList" :key="item.name">
										<van-icon name="cart-circle-o" />
										<div style="margin-left:1em">{{item.name}}</div>
									</li>
								</ul>
								<span class="tit">美食菜谱</span>
								<ul class="clearfix">
									<li v-for="item in deliciousList" :key="item.name">
										<van-icon name="cart-circle-o" />
										<div style="margin-left:1em">{{item.name}}</div>
									</li>
								</ul>
							</div>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
		<restaurant />
		<!-- 餐饮加盟 -->
		<div style="background-color:#fff;padding:3em 0">
			<div class="mt45 jm-tab-box">
				<van-row type="flex" justify="space-between">
					<van-col span="3" class="title-f24">
						<h2 style="margin-bottom: 40px;">地方菜</h2>
					</van-col>
					<van-col span="10" offset="5">
						<van-tabs>
							<van-tab title="精选"></van-tab>
							<van-tab title="火爆"></van-tab>
							<van-tab title="热门"></van-tab>
							<van-tab title="人气"></van-tab>
							<van-tab title="潜力"></van-tab>
							<van-tab title="火锅"></van-tab>
							<van-tab title="串串"></van-tab>
						</van-tabs>
					</van-col>
				</van-row>
				<!-- end -->
				<!-- 两端对齐 -->
				<van-row type="flex" justify="space-between">
					<van-col span="5">
						<ul class="theme-list theme-list-left">
							<li>
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1438042393,2826460726&fm=26&gp=0.jpg" alt />
								<div style="margin:20px">
									麻辣重点老火锅
									<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
								</div>
							</li>

							<li>
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2097785455,3531594808&fm=26&gp=0.jpg" alt />
								<div style="margin:20px">
									麻辣重点老火锅
									<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
								</div>
							</li>
						</ul>
					</van-col>
					<van-col span="14" style="margin-top: -13px; padding: 0px 16px;">
						<!--  -->
						<van-swipe class="my-swipe1" :autoplay="4000" indicator-color="#ff552e">
							<van-swipe-item>
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3616326031,613455091&fm=26&gp=0.jpg" width="100%"
								height="60%" />
								<div class="det-title">
									<p>龙门飞鱼美蛙鱼头火锅</p>
									<div>
										成都新椒点餐饮管理有限公司龙门飞鱼亮相于成都春熙路，以美蛙鱼头为特色，传承四川巴蜀美食。作为火锅连锁加盟店品牌，
										龙门飞鱼凭借匠心匠艺，以信和志立名，集总部所有力量，全力扶持加盟商开店。
									</div>
								</div>
							</van-swipe-item>
							<!-- 2 -->
							<van-swipe-item>
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1358517655,1818105705&fm=26&gp=0.jpg" width="100%"
								height="60%" />
								<div class="det-title">
									<p>串大侠的串串</p>
									<div>
										成都新椒点餐饮管理有限公司龙门飞鱼亮相于成都春熙路，以美蛙鱼头为特色，传承四川巴蜀美食。作为火锅连锁加盟店品牌，
										龙门飞鱼凭借匠心匠艺，以信和志立名，集总部所有力量，全力扶持加盟商开店。
									</div>
								</div>
							</van-swipe-item>
							<!-- 3 -->
							<van-swipe-item>
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3868440982,1894895582&fm=26&gp=0.jpg" width="100%"
								height="60%" />
								<div class="det-title">
									<p>喵亦烧仙草</p>
									<div>
										成都新椒点餐饮管理有限公司龙门飞鱼亮相于成都春熙路，以美蛙鱼头为特色，传承四川巴蜀美食。作为火锅连锁加盟店品牌，
										龙门飞鱼凭借匠心匠艺，以信和志立名，集总部所有力量，全力扶持加盟商开店。
									</div>
								</div>
							</van-swipe-item>
						</van-swipe>
					</van-col>
					<van-col span="5">
						<ul class="theme-list">
							<li>
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1745580292,680007529&fm=26&gp=0.jpg" />
								<div style="margin:20px">
									麻辣重点老火锅
									<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
								</div>
							</li>

							<li>
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=196176307,2300071726&fm=15&gp=0.jpg" />
								<div style="margin:20px">
									麻辣重点老火锅
									<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
								</div>
							</li>
						</ul>
					</van-col>
				</van-row>
				<div class="shaoya">
					<van-row type="flex" justify="space-between">
						<van-col span="8">
							<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1405226596,2161695833&fm=26&gp=0.jpg" />
							<div style="margin:20px">
								麻辣重点老火锅
								<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
							</div>
						</van-col>
						<van-col span="8" align="center">
							<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2158795681,642808570&fm=26&gp=0.jpg" width="400px" />
							<div style="margin:20px">
								麻辣重点老火锅
								<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
							</div>
						</van-col>
						<van-col span="8">
							<div style="float: right;">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1273415219,2682927965&fm=26&gp=0.jpg" />
								<div style="margin:20px">
									麻辣重点老火锅
									<span style="color: #ff552e;height: 100%;font-weight: 600;">20-150万</span>
								</div>
							</div>

						</van-col>
					</van-row>
				</div>

			</div>
			<!-- 早餐 晚餐 下午茶 -->
			<restaurants />
		</div>

		<!-- 咨询 -->
		<real-time />
		<!-- 返回顶部 -->
		<scroll-top />
		<footers></footers>
	</div>
</template>

<script>
	import information from "@/components/topInformation/information.vue";
	import ScrollTop from "@/components/ScrollTop/ScrollTop.vue";
	import restaurant from "@/components/restaurant/restaurant.vue";
	import restaurants from "@/components/Restaurant-l/Restaurant-l.vue";
	import realTime from "@/components/real-time/realTime.vue";

	import footers from "../components/footer/footer.vue";
	export default {
		data() {
			return {
				form: {
					name: "",
				},
				activeIndex:'1',
				money: "666",
				restaurantList: [{
						name: "火锅"
					},
					{
						name: "串串"
					},
					{
						name: "奶茶"
					},
					{
						name: "饮品"
					},
					{
						name: "咖啡"
					},
					{
						name: "米粉"
					},
					{
						name: "甜品"
					},
					{
						name: "汉堡"
					},
					{
						name: "冒菜"
					},
					{
						name: "全部分类"
					},
				],
				deliciousList: [{
						name: "川菜"
					},
					{
						name: "湘菜"
					},
					{
						name: "粤菜"
					},
					{
						name: "鲁菜"
					},
					{
						name: "苏菜"
					},
					{
						name: "京菜"
					},
					{
						name: "闽菜"
					},
					{
						name: "徽菜"
					},
					{
						name: "冒菜"
					},
					{
						name: "全部分类"
					},
				],
			};
		},
		components: {
			information,
			footers,
			"scroll-top": ScrollTop,
			restaurant,
			restaurants,
			realTime
		},
		mounted() {},
		methods: {
			onSearch() {},
		},
	};
</script>

<style scoped>
	.clearfix {
		display: flex;
		/* justify-content: center; */
		padding: 0;
		margin: 0;
		flex-wrap: wrap;
	}

	.clearfix li {
		display: flex;
		width: 120px;
		height: 30px;
		justify-content: center;
		align-items: center;
		color: #262626;
		font-weight: 500;
	}

	.clearfix li:hover {
		color: red;
		cursor: pointer;
	}

	.tit {
		padding: 18px 20px 0;
		font-size: 18px;
		color: #aaa;
		margin-top: 0.8em;
		display: inline-block;
	}

	/* .title-f24{
  margin-top:2em;
} */
	.mu-more-main {
		position: relative;

	}

	.mu-more {
		width: 251px;
		height: 450px;
		background-color: white;
		position: absolute;
		top: 0px;
		left: 8;

	}

	.hot-project a {
		margin-left: 1em;
		color: #ff552e;
	}

	.hot-project a:hover {
		text-decoration: underline;
	}

	/*  */
	.search-container,
	.category-container {
		width: 1200px;
		margin: 0 auto;
	}

	/* swipe */
	.my-swipe .van-swipe-item {
		line-height: 450px;
		text-align: center;
		/* background-color: #39a9ed; */
	}

	.banner-carousel-item1,
	.banner-carousel-item2,
	.banner-carousel-item3,
	.banner-carousel-item4 {
		width: 100%;
		line-height: 450px;
		background-image: url("../assets/images/banner4.jpg");
		background-size: cover;
	}

	.banner-carousel-item2 {
		background-image: url("../assets/images/banner2.jpg");
	}

	.banner-carousel-item3 {
		background-image: url("../assets/images/banner3.jpg");
	}

	.banner-carousel-item4 {
		background-image: url("../assets/images/banner1.jpg");
	}

	.mu-title {
		padding: 0 60px;
		height: 48px;
		align-content: center;
		background-color: #262626;
		color: #fff;
		line-height: 40px;

	}

	.contribution:hover {
		color: #ff552e;
		cursor: pointer;
	}

	.jm-tab-box {
		width: 1200px;
		margin: auto;
		/* background: chartreuse; */
	}

	.theme-list {
		margin: 0px;
		list-style: none;
		padding: 0px;
	}



	.theme-list li img,
	.theme-list-bottom li img {
		width: 100%;
		height: 100%;
	}

	.shaoya img {
		width: 380px;
		height: 300px;
	}

	.theme-list-bottom {
		width: 100%;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}

	.theme-list-bottom li {
		padding: 30px 25px 0;
		/* background-color: #f8f8f8; */
		float: left;
		width: 270px;
		margin: 1em 5.2em;
	}

	.my-swipe1 {
		width: 100%;
		margin-top: 13px;
		/* padding: 30px; */
	}

	.my-swipe1 .van-swipe-item {
		height: 455px;
		text-align: center;
		background-color: #f8f8f8;
	}

	.det-title div {
		width: 590px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		color: black;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		text-indent: 2em;
		margin-left: 2em;
		text-align: left;
		font-size: 1.5em;
		opacity: 0.5;
	}

	.det-title p {
		float: left;
		margin-left: 2em;
		margin-top: 1.2em;
		font-size: 1.3em;
		font-weight: 600;
	}
</style>
