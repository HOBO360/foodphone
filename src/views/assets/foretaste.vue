<template>
	<div>
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
		<div class="centre">
			<div class="bacnner">
				<img src="http://img12.360buyimg.com/cms/jfs/t14581/140/1037536546/191736/c07c86/5a420c1eN6441e83f.jpg" />
			</div>
			<div class="centrens">
				<div class="try">
					<van-cell title="本期试吃" is-link value="我的试用中心" />
				</div>
				<div class="try1">
					<van-row>
						<van-col span="12" v-for="item in uls" :key="item.title">
							<div class="try1-1"  >
								<van-row>
									<van-col span="8">
										<img :src="item.img" />
									</van-col>
									<van-col span="16" style="padding: 10px 0px 10px 20px;">
										<p class="grey">{{item.title}}</p>
										<span class="font">提供<span class="co-green fo-big-size"><b>{{item.count}}</b></span>份</span><br />
										<span class="font">已有<span class="co-red fo-big-size"><b>{{item.count2}}</b></span>人报名</span><br />
										<span class="co-gray ">活动已结束</span><br />
										<van-button plain hairline type="danger">{{item.btn}}</van-button>
									</van-col>
								</van-row>
							</div>
						</van-col>
					</van-row>
				</div>
				
			</div>
		</div>
		<!-- <scroll-top/> -->
		<footers></footers>
	</div>
</template>

<script>
	import information from "@/components/topInformation/information.vue";
	import footers from "@/components/footer/footer.vue";

	export default {
		data() {
			return {
				activeIndex2: "2",
				uls:[{
					img:'https://img30.360buyimg.com/pop/s400x400_jfs/t17188/221/1695611462/263077/7eb98c45/5ad54ed2Nf920c0ba.jpg',
					title:'【爆款·领券减100】聚天鲜 （特大号） 厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只',
					count:'5',
					count2:'16198',
					btn:'价值¥99.00',
				},{
					img:'http://img10.360buyimg.com/trial/jfs/t1/29091/35/5607/69670/5c40187fEfbd71b74/30937488ae53e218.jpg',
					title:'千味央厨 安心大油条 240g（4根）早餐 火锅 包子 豆浆伴侣',
					count:'200',
					count2:'8642',
					btn:'暂无报价',
				},{
					img:'http://img10.360buyimg.com/trial/jfs/t1/28192/2/5024/381270/5c384157E71702f14/17674d610f5393f5.jpg',
					title:'佳士博 火锅油条 500g（20根 火锅食材 油炸素食）',
					count:'120',
					count2:'9789',
					btn:'暂无报价',
				},{
					img:'http://img10.360buyimg.com/trial/jfs/t1/7180/19/13661/171862/5c483314Ebfedfe6e/31cb88136dc00bea.jpg',
					title:'渔港 冷冻渤海鱿鱼圈 650g 65-85个 野生海捕 袋装 火锅 海鲜年货',
					count:'20',
					count2:'8336',
					btn:'价值¥49.90',
				},{
					img:'https://img30.360buyimg.com/pop/s400x400_jfs/t1/19106/15/2103/184442/5c19e2d4E2ab8dc32/19e43a07fed1d605.jpg',
					title:'百万庄园牛排澳洲原肉原切西冷牛排开心家庭套餐团购5片装牛排',
					count:'3',
					count2:'19028',
					btn:'暂无报价',
				},{
					img:'https://img30.360buyimg.com/pop/s400x400_jfs/t1/1658/32/6540/206329/5ba374b9E47e721c8/37d96082d20dc1cf.jpg',
					title:'宁夏盐池滩羊肉 羊脖片500g 1.2cm厚/2cm厚 火锅 烧烤食材羊肉 正宗散养 拒绝育肥',
					count:'5',
					count2:'16198',
					btn:'暂无报价',
				},{
					img:'http://img10.360buyimg.com/trial/jfs/t1/24018/25/6096/59398/5c483f60E5396160f/6ae3b1f053467346.jpg',
					title:'獐子岛 冷冻大连半壳虾夷扇贝 850g 26-30只 袋装 海鲜水产',
					count:'9',
					count2:'12182',
					btn:'价值¥75.90',
				},{
					img:'http://img10.360buyimg.com/trial/jfs/t1/25206/23/6012/31435/5c46db2fEaf4fb88f/7aa43eac92427e2b.jpg',
					title:'三口一品 韩国风味泡菜 切件瓶装白菜泡菜 1050g/瓶 量贩装',
					count:'12',
					count2:'5457',
					btn:'价值¥31.90',
				}]
			};
		},
		components: {
			information,
			footers,
			// ScrollTop,
		},
	};
</script>

<style scoped>
	.centrens{
		width: 1200px;
		margin: auto;
	}
	.try{
		width: 100%;
		margin-bottom: 20px;
	}
	.try .van-cell {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 16px;
		overflow: hidden;
		color: #323233;
		font-size: 18px;
		line-height: 35px;
		background-color: #fff;
	}
	.try .van-icon-arrow::before {
		margin-top: 5px;
		content: '\F00A';
	}
	.try1-1{
		background-color: white;
		padding: 15px;
		width: 100%;
		height: 235px;
	}
	.try1-1 img{
		width: 100%;
		height: 100%;
	}
   .font{
		margin-bottom: 15px;
	}
	.bacnner {
		width: 100%;
	}

	.bacnner img {
		width: 100%;
		height: 200px;
	}
	.grey:hover{
		color: #5CE08A;
	}
</style>
