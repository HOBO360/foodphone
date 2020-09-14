<template>
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
				<van-col span="2" offset="4">
					<van-button icon="shopping-cart-o" type="default" to="/my">购物车</van-button>
				</van-col>
			</van-row>
			<van-row type="flex" align="center">
				<van-col span="4">
					<div align="center" class="bg-black co-white" style="padding: 19px 0px;">生鲜商品分类</div>
				</van-col>
				<van-col span="16">
					<el-menu :default-active="activeIndex2"  @select="handleSelect" text-color="#000000" active-text-color="#e54616" class="el-menu-demo" mode="horizontal"
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
						<span>品质保障</span>
					</div>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      activeIndex2: "",
	    };
	  },
	  methods: {
	  	handleSelect(key, keyPath) {
	  		console.log(key, keyPath);
	  	},
	  },
	};
</script>

<style>
	.baozhang{
		width: 100%;
		height: 100%;
		color: #000000;
		background-color: white;
		padding: 18px 10px;
	}
</style>
