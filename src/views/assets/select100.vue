<template>
	<div class="">
		<information></information>
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
				<van-col span="4" offset="4">
					<van-button icon="shopping-cart-o" type="default" to="/cart">购物车</van-button>
				</van-col>
			</van-row>
			<van-row type="flex" align="center">
				<van-col span="4">
					<div align="center" class="bg-black co-white" style="padding: 19px 0px;">生鲜商品分类</div>
				</van-col>
				<van-col span="16">
					<el-menu :default-active="activeIndex2" text-color="#000000" active-text-color="#e54616" class="el-menu-demo" mode="horizontal"
					style="padding-left: 50px;">
						<el-menu-item index="0">
							<router-link tag="div" to="/home">首页</router-link>
						</el-menu-item>
						<el-menu-item index="1">
							<router-link tag="div" to="/shopping">生鲜</router-link>
						</el-menu-item>
						<el-menu-item index="2">
							<router-link tag="div" to="/foretaste">试吃</router-link>
						</el-menu-item>
						<el-menu-item index="3">
							<router-link tag="div" to="/select100">优选100</router-link>
						</el-menu-item>
						<el-menu-item index="4">
							<router-link tag="div" to="/my">我的订单</router-link>
						</el-menu-item>
					</el-menu>
				</van-col>
				<van-col span="4">
					<div class="baozhang">
						<van-icon name="gem-o" />
						<span style="margin-left: 10px;">品质保障</span>
					</div>
				</van-col>
			</van-row>
		</div>
		<div class="swipe100">
			<div class="conten5 co-white">
				<van-row>
					<van-col span="10">
						<div class="hea-d" v-for="ad in 3" :key="ad">
							<van-row type="flex" align="center">
								<van-col span="12">
									<van-icon name="diamond-o" size="1.5rem" />
								</van-col>
								<van-col span="10">
									<span style="width: 15px;">精挑细选</span>
								</van-col>
							</van-row>
						</div>
					</van-col>
					<van-col span="4">
						<div align="center">
							<img src="../../assets/images/sprite_top100.png" width="30%" height="30%" />
							<br />
							<br />
							<span class="co-white">/ 精挑细选100分健康美味 /</span>
						</div>
					</van-col>
					<van-col span="10">
						<div class="hea-d float-right" v-for="ad in 3" :key="ad">
							<van-row type="flex" align="center">
								<van-col span="12">
									<van-icon name="diamond-o" size="1.5rem" />
								</van-col>
								<van-col span="10">
									<span style="width: 15px;">精挑细选</span>
								</van-col>
							</van-row>
						</div>
					</van-col>
				</van-row>
				<div id="zyao" style="margin-top: 30px;">
					<template>
						<el-carousel :interval="4000" type="card" height="400px">
							<el-carousel-item v-for="item in egs" :key="item.id">
								<img :src="item.img" />
							</el-carousel-item>
						</el-carousel>
					</template>
				</div>
			</div>
		</div>
		<div class="let-po">
			<img src="../../assets/images/sprite_fs_bg.png" />
		</div>
		<div class="conten6">
			<van-row>
				<van-col span="10">
					<img src="@/assets/images/left_1.png" width="405px" />
					<img src="@/assets/images/line_left.png" width="80px" height="50px" />
				</van-col>
				<van-col span="4">
					<h3 align="center" style="margin-bottom: 2.75rem;">
						<div>
							本/期/优/选
							<br />
							<span class="fo-small-size co-gary">每期鲜味 精心为你</span>
						</div>
					</h3>
				</van-col>
				<van-col span="10">
					<img src="@/assets/images/line_right.png" width="70px" height="50px" />
					<img src="@/assets/images/left_1.png" />
				</van-col>
			</van-row>

			<div class="diamon">
				<van-row>
					<van-col span="12" v-for="um in 4" :key="um.id">
						<div style="padding:30px 20px;">
							<p class="co-yellow" align="center">
								<b>“优选卖点</b>
								<span>| 真鳕鱼低脂肪高蛋白宝宝辅食</span>
								<b>”</b>
							</p>
							<van-row style="border: 2px dashed #00c700;">
								<van-col span="10">
									<img src="https://m.360buyimg.com/babel/jfs/t1/98460/13/17073/53998/5e81b83fEe277ec5a/78ca09bd2bb86f66.png"
									width="200px" height="200px" />
								</van-col>
								<van-col span="14">
									<div class="float-right bg-white" style="width: 300px; height: 200px; padding: 50px;">
										<p class="fo-big-size">
											<b>爱吃鱼挪威北极鳕鱼500g/盒</b>
										</p>
										<p class="co-red fo-big-size" style="margin-top: 30px;">￥89.00</p>
									</div>
								</van-col>
							</van-row>
						</div>
					</van-col>
				</van-row>
			</div>
			<div class="img-sizr"></div>
			<div class="img-sizr2"></div>
		</div>
		
		<div class="conten7">
			<div class="con-tab">
				<van-row>
					<van-col span="10">
						<img src="@/assets/images/left_2.png" width="405px" />
						<img src="@/assets/images/line_left.png" width="80px" height="50px" />
					</van-col>
					<van-col span="4">
						<h3 align="center" style="margin-bottom: 2.75rem;">
							<div>
								优/品/合/集
								<br />
								<span class="fo-small-size co-gary">时间沉淀 值得回购</span>
							</div>
						</h3>
					</van-col>
					<van-col span="10">
						<img src="@/assets/images/line_right.png" width="70px" height="50px" />
						<img src="@/assets/images/left_2.png" />
					</van-col>
				</van-row>
				<div class="tab1 bg-white">
					<van-tabs v-model="active">
						<van-tab title="新鲜果蔬" v-for="oom in 4" :key="oom.id">
							<div style="margin: 20px;">
								<div class="commodity" align="center" v-for="(conn,index) in funs " :key="index.title">
									<img :src="conn.tu" />
									<br />
									<span class="hidden fo-small-size">{{conn.title}}</span>
									<br />
									<span class="co-gray fo-small-size">
										<s>￥{{conn.original}}</s>
									</span>
									<br />
									<span class="co-gary">
										<span class="co-red">￥{{conn.geshu}}.</span>
										<span class="co-red fo-small-size">{{conn.fenshu}}</span>
										<span class="fo-small-size">/{{conn.company}}</span>
									</span>
								</div>
							</div>
						</van-tab>
						<!-- <van-tab title="标签 2">内容 2</van-tab>
						<van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>-->
					</van-tabs>
				</div>
				<div class="hlb"></div>
			</div>
		</div>
		<scroll-top />
		<footers></footers>
	</div>
</template>

<script>
	import information from "@/components/topInformation/information.vue";
	import footers from "@/components/footer/footer.vue";
	import ScrollTop from "@/components/ScrollTop/ScrollTop.vue";
	export default {
		data() {
			return {
				activeIndex2: "3",
				activeName: "first",
				egs: [{
						img:require('@/assets/images/f1.png'),
					},
					{
						img:require('@/assets/images/f2.png'),
					},
					{
						img:require('@/assets/images/f3.png'),
					},
				],
				active: 0,
				funs: [{
						tu: require("@/assets/images/SYHB (1).jpg"),
						title: "精选青瓜580g",
						original: "5.9",
						geshu: "3",
						fenshu: "9",
						company: "份",
					},
					{
						tu: require("@/assets/images/SYHB (5).jpg"),
						title: "淡水鲈鱼500g以上/条",
						original: "39.8",
						geshu: "29",
						fenshu: "8",
						company: "条",
					},
					{
						tu: require("@/assets/images/SHQ.jpg"),
						title: "精选上海青300g",
						original: "4",
						geshu: "2",
						fenshu: "9",
						company: "份",
					},
					{
						tu: require("@/assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
					},
					{
						tu: require("@/assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
					},
					{
						tu: require("@/assets/images/SYHB (1).jpg"),
						title: "精选青瓜580g",
						original: "5.9",
						geshu: "3",
						fenshu: "9",
						company: "份",
					},
					{
						tu: require("@/assets/images/SYHB (5).jpg"),
						title: "淡水鲈鱼500g以上/条",
						original: "39.8",
						geshu: "29",
						fenshu: "8",
						company: "条",
					},
					{
						tu: require("@/assets/images/SHQ.jpg"),
						title: "精选上海青300g",
						original: "4",
						geshu: "2",
						fenshu: "9",
						company: "份",
					},
					{
						tu: require("@/assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
					},
					{
						tu: require("@/assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
					},
					{
						tu: require("@/assets/images/SYHB (1).jpg"),
						title: "精选青瓜580g",
						original: "5.9",
						geshu: "3",
						fenshu: "9",
						company: "份",
					},
					{
						tu: require("@/assets/images/SYHB (5).jpg"),
						title: "淡水鲈鱼500g以上/条",
						original: "39.8",
						geshu: "29",
						fenshu: "8",
						company: "条",
					},
					{
						tu: require("@/assets/images/SHQ.jpg"),
						title: "精选上海青300g",
						original: "4",
						geshu: "2",
						fenshu: "9",
						company: "份",
					},
					{
						tu: require("@/assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
					},
					{
						tu: require("@/assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
					},
				],
			};
		},
		components: {
			information,
			footers,
			ScrollTop,
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
		},
	};
</script>

<style scoped>
	.conten5,
	.conten6,
	.con-tab {
		width: 1200px;
		margin: auto;
		/* margin-bottom: 50px; */
		padding: 16px;
	}
	.select100{
		background-color: white;
	}
	.con-tab {
		padding-top: 50px;
		margin-top: 50px;
		position: relative;
	}

	.conten7 {
		width: 100%;
		height: 1150px;
		background-color: #f0f0f8;
	}

	.conten6 {
		margin-top: 200px;
		position: relative;
	}

	.tab1 {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
		padding: 20px;
		border-radius: 18px;
	}

	.swipe100 {
		position: relative;
		width: 100%;
		height: 400px;
		background: url(../../assets/images/fs_bg1.jpg);
		background-size: 100% 100%;
		/* margin-bottom: 50px; */
	}

	.hea-d {
		float: left;
		width: 100px;
		height: 50px;
		/* margin: 16px; */
	}

	.fo-big-size {
		font-size: 20px;
	}

	.float-right {
		float: right;
	}

	.co-yellow {
		color: #b59a69;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.let-po {
		position: absolute;
		left: 8%;
		top: 500px;
	}

	.diamon {
		background-color: #f7f7fb;
		width: 100%;
		height: 650px;
		padding: 20px;
	}

	.diamon img {
		z-index: 99;
	}

	.img-sizr {
		position: absolute;
		z-index: 3;
		left: -76px;
		bottom: -10px;
		width: 147px;
		height: 261px;
		background: url(../../assets/images/week_bg1.png);
	}

	.img-sizr2 {
		position: absolute;
		z-index: -1;
		left: 949px;
		bottom: 464px;
		width: 400px;
		height: 261px;
		background: url(../../assets/images/week_bg2.png);
	}

	.commodity {
		float: left;
		width: 217px;
		height: 280px;
		transition: all 0.5s;
		/* padding: 20px 0px; */
	}

	.select100 .commodity:hover {
		transform: translateY(-5px);
		box-shadow: rgba(0, 0, 0, 0.1) 0 10px 10px;
	}

	.select100 .commodity img {
		width: 150px;
		height: 150px;
	}

	.tab1 {
		width: 100%;
		height: 940px;
	}
	.tab1 img{
		width: 150px;
		height: 150px;
	}
	.hlb {
		position: absolute;
		z-index: 0;
		left: -76px;
		bottom: 18px;
		width: 90px;
		height: 240px;
		background: url(../../assets/images/more_bg2.png);
	}

	.zyao img {
		width: 100%;
		height: 100%;
	}

	.select100 .van-cell {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 18px 16px;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
