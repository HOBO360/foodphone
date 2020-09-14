<template>
	<div>
		<information class="bg"></information>
		<!-- 搜索 -->
		<div class="bg">
			<div class="search-container">
				<van-row type="flex">
					<van-col span="3">
						<van-image width="160" height="80" style="margin-top:2em;" :src="require('@/assets/images/logo_pc.png')" />
					</van-col>
					<van-col span="10" offset="11">
						<div style="margin-top:3em;">
							<el-input placeholder="搜索宝贝" v-model="form.name">
								<el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
							</el-input>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>
		<!-- 购物 -->
		<div id="eval-container" v-cloak>
			<div style="margin-bottom: 280px;">
				<div v-if="list.length">
					<ul class="ul-header">
						<li style="padding-left:28px;">
							<input id="all" @click="selAll" type="checkbox" checked />
							{{selectAll}}
						</li>
						<li style="width: 200px;">商品名称</li>
						<li style="padding-left:50px;">商品单价</li>
						<li style="padding-left:30px;">购买数量</li>
						<li style="padding-left:40px;">操作</li>
					</ul>
					<ol v-for="(item, index) in list" :key="index" class="ol-content">
						<li>
							<input type="checkbox" :checked="item.check" @click="item.check = !item.check" />
						</li>
						<li>
							<img :src="item.url" width="120" height="120" alt />
							{{ item.name }}
						</li>
						<li style="font-weight: 800">￥{{ item.price }}</li>
						<li class="fsize">
							<button @click="reduce(index)" class="selectAdd" :disabled="item.count == 1">-</button>
							{{ item.count }}
							<button @click="add(index)" class="selectAdd">+</button>
						</li>
						<li>
							<button @click="remove(index)" class="remove">移除</button>
						</li>
					</ol>
					<div class="total-price">
						<div style="width: 270px;">
							合计（不含运费）：
							<strong style="color: #f40; font-weight: 800;font-size:1.5em">￥{{ totalPrices }}</strong>
						</div>
						<button @click="order">结算</button>
					</div>
				</div>
				<div v-else>
					<van-empty description="购物车没有商品" />
				</div>
			</div>

		</div>

		<!-- 底部 -->
		<footers class="footer"></footers>
	</div>
</template>

<script>
	import information from "../components/topInformation/information.vue";
	import footers from "../components/footer/footer.vue";
	export default {
		data() {
			return {
				form: {
					name: "",
				},
				selectAll: "全选",
				list: [{
						id: 1,
						name: "海味道五花肉",
						price: 59.9,
						count: 1,
						check: true,
						url: require('@/assets/images/wuhuar1.jpg'),
					},
					{
						id: 2,
						name: "国产山东白虾",
						price: 88.8,
						count: 1,
						check: false,
						url: require('@/assets/images/baixia1.png'),
					},
					{
						id: 3,
						name: "新鲜绿罗沙生菜",
						price: 23.06,
						count: 1,
						check: false,
						url: require('@/assets/images/shengcai1.jpg'),
					},
				],
			};
		},
		components: {
			information,
			footers,
		},
		computed: {
			totalPrices() {
				//计算总价
				let totalPrices = 0;

				this.list.forEach(function(val) {
					if (val.check == true) totalPrices += parseFloat(val.price * val.count);
				});

				return totalPrices.toFixed(2).replace(/\B(?=(\d{3})+$)/g, ","); //每三位数中间加一个‘，’
			},
		},
		methods: {
			order() {
				this.$router.push({
					path: '/order'
				})
			},
			remove(index) {
				//移除商品
				this.list.splice(index, 1);
			},
			reduce(index) {
				//减少商品
				this.list[index].count--;
			},
			add(index) {
				//增加商品
				this.list[index].count++;
			},
			selAll() {
				//商品全选
				let isAll = document.querySelector("#all");

				if (isAll.checked == true) {
					this.list.forEach(function(item) {
						item.check = true;
					});
				} else {
					this.list.forEach((item) => {
						item.check = false;
					});
				}
			},
		},
	};
</script>

<style scoped>
	#eval-container {
		background: #fff;
	}

	.footer {
		background-color: #262626;
		height: 230px;
		font-size: 2.5rem;
		position: fixed;
		bottom: 0;
		width: 100%;
	}


	#eval-container,
	.search-container {
		width: 1200px;
		margin: 0 auto;
	}

	.bg {
		background: #fff;
	}

	.fsize {
		font-size: 1.2em;
	}

	.ul-header {
		height: 50px;
	}

	.ul-header,
	.ol-content {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* padding: 0; */
		margin-top: 3em;
		padding-top: 40px;
	}

	.ul-header li {
		width: 120px;
	}

	[v-cloak] {
		display: none;
	}

	.ol-content {
		background: #fff8e1;
		padding: 20px;
	}

	.ol-content .selectAdd {
		border-radius: 20%;
		border: none;
		color: black;
		/* background: #ffff; */
		width: 50px;
	}

	.total-price {
		width: 100%;
		background: #f3f3f3;
		height: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.total-price button {
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

	.remove {
		width: 60px;
		height: 40px;
		border-radius: 10px;
		background: #fff;
		border: none;
	}

	input[type="checkbox"] {
		cursor: pointer;
		width: 50px;
		height: 20px;
	}
</style>
