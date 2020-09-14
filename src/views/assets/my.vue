<template>
	<div class="my-a">
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
					<div align="center" class="bg-white" style="padding: 19px 0px;">我的食补</div>
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
		
		<div class="my">
			<el-row :gutter="20">
				<el-col :xs="8" :span="5">
					<div class="grid-content bg-purple">
						<van-cell-group v-model="active1">
							<van-cell title="我的食补" to="/myfoot" :border="false" />
							<van-cell title="我的订单" :border="false" />
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
					<div class="grid-content bg-purple ac">
						<van-tabs v-model="active" background="#f8f8f8">
							<van-tab title="全部订单">
								<!-- v-for="(img,index) in imgs" :key="index" -->
								<div v-for="(mygutter,index) in mygutters" :key="index.title">
									<el-row :gutter="20" style="padding:0px 20px;padding-top: 0.9375rem;">
										<el-col :span="3">
											<van-image width="100" height="105" :src="mygutter.imgurl" @click="myimg1" />
										</el-col>
										<el-col :span="10">
											<div style="line-height:2.5rem;font-size: 1.125rem;">{{mygutter.title}}</div>
											<div style="font-size: 12px;color: gray;">{{mygutter.text1}}</div>
											<div style="font-size: 12px;color: gray;">{{mygutter.text2}}</div>
										</el-col>
										<el-col :span="4">
											<div>{{mygutter.text3}}</div>
										</el-col>
										<el-col :span="4">
											<div>{{mygutter.text4}}</div>
										</el-col>
									</el-row>
									<!-- <el-divider></el-divider> -->
									<van-divider :style="{borderColor: '#ababab', padding: '0 16px' }" />
								</div>
							</van-tab>
							<van-tab title="待付款">
								<div align="center" style="padding: 1.25rem;">对不起，没有需要付款的订单</div>
							</van-tab>
							<van-tab title="待使用">
								<div v-for="(mygutter,index) in mygutters" :key="index.title">
									<el-row :gutter="20" style="padding:0px 20px;padding-top: 0.9375rem;">
										<el-col :span="3">
											<van-image width="100" height="105" :src="mygutter.imgurl" @click="myimg1" />
										</el-col>
										<el-col :span="10">
											<div style="line-height:2.5rem;font-size: 1.125rem;">{{mygutter.title}}</div>
											<div style="font-size: 12px;color: gray;">{{mygutter.text1}}</div>
											<div style="font-size: 12px;color: gray;">{{mygutter.text2}}</div>
										</el-col>
										<el-col :span="4">
											<div>{{mygutter.text3}}</div>
										</el-col>
										<el-col :span="4">
											<div>{{mygutter.text4}}</div>
										</el-col>
									</el-row>
									<!-- <el-divider></el-divider> -->
									<van-divider :style="{borderColor: '#ababab', padding: '0 16px' }" />
								</div>
							</van-tab>
							<van-tab title="待评价">
								<div v-for="(mygutter,index) in mygutters" :key="index.title">
									<el-row :gutter="20" style="padding:0px 20px;padding-top: 0.9375rem;">
										<el-col :span="3">
											<van-image width="100" height="105" :src="mygutter.imgurl" @click="myimg1" />
										</el-col>
										<el-col :span="10">
											<div style="line-height:2.5rem;font-size: 1.125rem;">{{mygutter.title}}</div>
											<div style="font-size: 12px;color: gray;">{{mygutter.text1}}</div>
											<div style="font-size: 12px;color: gray;">{{mygutter.text2}}</div>
										</el-col>
										<el-col :span="4">
											<div>{{mygutter.text3}}</div>
										</el-col>
										<el-col :span="4">
											<div>{{mygutter.text4}}</div>
										</el-col>
									</el-row>
									<!-- <el-divider></el-divider> -->
									<van-divider :style="{borderColor: '#ababab', padding: '0 16px' }" />
								</div>
							</van-tab>
							<van-tab title="退款/售后">
								<div align="center" style="padding: 1.25rem;">对不起，没有需要付款的订单</div>
							</van-tab>
						</van-tabs>
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
				activeIndex2:'4',
				form: {
					name: "",
				},
				active: 0,
				active1: 0,
				mygutters: [{
					imgurl: require('@/assets/images/wuhuar1.jpg'),
					title: '海味道五花肉',
					text1: '下单时间: 2020-07-04 08:34',
					text2: '数量: 1',
					text3: '总价：￥59.9',
					text4: '待评价'
				}, {
					imgurl: require('@/assets/images/ddan1.jpg'),
					title: '陕西眉县徐香猕猴桃奇异果',
					text1: '下单时间: 2020-07-04 08:34',
					text2: '数量: 1',
					text3: '总价：￥29.9',
					text4: '待评价'
				}, {
					imgurl: require('@/assets/images/ddan2.jpg'),
					title: '绿鲜知 长黄瓜 绿黄瓜',
					text1: '下单时间: 2020-07-04 08:34',
					text2: '数量: 1',
					text3: '总价：￥29.9',
					text4: '待评价'
				}, {
					imgurl: require('@/assets/images/ddan3.jpg'),
					title: 'CP正大玉米蔬菜猪肉蒸饺饺子',
					text1: '下单时间: 2020-07-04 08:34',
					text2: '数量: 1',
					text3: '总价：￥15.9',
					text4: '待评价'
				}]
			};
		},
		components: {
			information,
			footers
		},
		methods: {
			myimg1() {
				this.$router.push({
					path: "/orderdetails"
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	body {
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
		background-color: #f5f7fa;
		-moz-osx-font-smoothing: grayscale;
	}

	.my-a .van-tabs__nav {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		background-color: #F8F8F8;
		-webkit-user-select: none;
		user-select: none;
	}

	.my .bg-purple .el-col-10 {
		margin-top: 0.625rem;
	}

	.my .bg-purple .el-col-4 {
		margin-top: 1.7rem;
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

	.my .grid-content {
		border-radius: 4px;
		min-height: 36px;
		border: 1px solid #99A9BF;
		padding: 1px 1px;
	}

	.my .row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.my {
		width: 1200px;
		margin: auto;
	}

	.my .van-cell {
		font-size: 1rem;
		background-color: #f8f8f8;
	}

	.my .van-tab--active,
	.my .van-tab__text--ellipsis {
		font-size: 1.25rem;
		overflow: inherit;
	}

	.my .van-tabs--line .van-tabs__wrap {
		height: 3.125rem;
		width: 75%;
	}

	.my .van-tabs__line {
		width: 6rem;
	}
</style>
