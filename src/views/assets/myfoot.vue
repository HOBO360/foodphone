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
					<div class="myfoot-l">
						<div class="grid-content-myfoot">
							<el-row :gutter="20">
								<el-col :span="5">
									<van-image round width="150" height="150" :src="require('@/assets/images/tx6.jpg')" />
								</el-col>
								<el-col :span="14">
									<h2>吃货小王子</h2>
									<div>我的余额：￥0</div>
								</el-col>
								<el-col :span="4">
									<div @click="information">
										<van-row>
											<van-col span="19">
												<div>个人信息设置</div>
											</van-col>
											<van-col span="1" style="margin-top: 2px;">
												<van-icon name="arrow" size="20" />
											</van-col>
										</van-row>
									</div>
								</el-col>
							</el-row>
						</div>
						<div class="conten1">
							<div id="conten" v-for="em in ems" :key="em.title">
								<router-link to="/my">
									<van-row type="flex" align="center">
										<van-col span="4">
											<van-icon :name="em.icon" size="32px" />
										</van-col>
										<van-col span="20">
											<span>{{em.title}}</span>
										</van-col>
									</van-row>
								</router-link>
								
							</div>
						</div>
					</div>
					<div class="myfoot-a">
						<div style="padding-left: 15px;margin-top: 10px;">
							<span style="font-size: 20px">猜你喜欢</span>
							<span style="padding-left: 10px;">为您甄选最合适的</span>
						</div>
						<div class="myfoot-r-r" v-for="like in likes" :key="like.title">
							<van-image width="100%" height="150" style="display: block;" :src="like.imgurl" />
							<div style="padding-top: 10px;">
								<div>{{like.text1}}</div>
								<van-row>
									<van-col span="14" style="margin-top: 3px;">
										<van-rate v-model="value" :size="18" color="#ffd21e" void-icon="star" void-color="#eee" />
									</van-col>
									<van-col span="10">{{like.text2}}</van-col>
								</van-row>
								<div>{{like.text3}}</div>
								<!-- <div>{{like.text4}}</div> -->
							</div>
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
				value: 3,
				currentDate: new Date(),
				form: {
					name: "",
				},
				ems: [{
					icon: 'passed',
					title: '全部订单',
				}, {
					icon: 'logistics',
					title: '待付款',
				}, {
					icon: 'flower-o',
					title: '待使用',
				}, {
					icon: 'location-o',
					title: '待评论',
				}, {
					icon: 'after-sale',
					title: '退款/售后',
				}],
				likes: [{
					imgurl: require('@/assets/images/caip4.jpg'),
					text1: '糖醋排骨',
					text2: '507评论',
					text3: '翻糖MM-白之猫猫',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip8.jpg'),
					text1: '油焖大虾',
					text2: '116评论',
					text3: '总干活',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip1.jpg'),
					text1: '重庆豆花鱼',
					text2: '50评论',
					text3: '心清似水淡若云',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip2.jpg'),
					text1: '地三鲜',
					text2: '429个评论',
					text3: '爱美的家',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip3.jpg'),
					text1: '姜爆鸭子',
					text2: '18个评论',
					text3: '心清似水淡若云',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip5.jpg'),
					text1: '红烧肉',
					text2: '308个评论',
					text3: '热爱红烧肉',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip6.jpg'),
					text1: '大盘鸡',
					text2: '445个评论',
					text3: '飘零星',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip7.jpg'),
					text1: '关东煮',
					text2: '487个评论',
					text3: '芷萍',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip9.jpg'),
					text1: '糖醋鲤鱼',
					text2: '281个评论',
					text3: '热爱红烧肉',
					text4: '￥98.0起'
				}, {
					imgurl: require('@/assets/images/caip10.jpg'),
					text1: '青菜烧肉丸',
					text2: '2138个评论',
					text3: '1粗茶淡饭1',
					text4: '￥98.0起'
				}]
			};
		},
		components: {
			information,
			footers
		},
		methods: {
			information() {
				this.$router.push({
					path: "/information"
				});
			}
		}
	}
</script>

<style>
	.myfoot-r-r {
		width: 225px;
		height: 280px;
		/* background-color: #ffaa7f; */
		float: left;
		padding: 8px;
		margin-left: 8px;
	}

	.myfoot-r-r:hover {
		background-color: #faf8f6;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
	}

	.button {
		padding: 0;
		float: right;
	}

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

	.grid-content-myfoot .el-col-14 {
		margin-top: 36px;
	}

	.grid-content-myfoot .el-col-4 {
		margin-top:56px;
	}

	.my .bg-purple .el-divider--horizontal {
		width: 95%;
		margin-left: 2.5%;
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

	.grid-content-myfoot {
		background-color: #ff6a5d;
		min-height: 200px;
		padding: 40px;
	}

	.conten1 {
		min-height: 100px;
		padding: 40px;
	}

	.myfoot-l {
		min-height: 370px;
		border: 1px solid #99A9BF;
		border-radius: 4px;
	}

	.myfoot-a {
		min-height: 900px;
		border: 1px solid #99A9BF;
		border-radius: 4px;
		margin-top: 20px;
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
	}

	.myfoot .van-tabs--line .van-tabs__wrap {
		height:50px;
		width: 75%;
	}
	.conten1 a{
		color: #000000;
		text-decoration: none;
	}
	.conten1 a:hover{
		color: red;
		text-decoration: none;
	}

	/* .my .van-tabs__line {
		width: 6rem;
	} */
</style>
