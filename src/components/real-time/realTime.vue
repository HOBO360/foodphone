<template>
	<div class="main-container">
		<!-- 饮食资讯 -->
		<div style="background-color:#f8f8f8">
			<van-row type="flex" justify="space-between">
				<!-- 两端对齐 -->
				<van-col span="16">
					<div class="bg-ff">
						<h2 style="padding-bottom:0.5em">饮食资讯</h2>
						<van-row>
							<van-col span="10">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2545198846,49857870&fm=26&gp=0.jpg" width="280"
								height="200" />
							</van-col>
							<van-col span="14" >
								<div class="recommended" >
									<van-icon name="good-job" color="red" size="30" />
									<span>美食流“铺天盖店” | 撬动餐饮行业发展</span>
								</div>
							</van-col>
						</van-row>


						<div class="recommended-det">
							2020年上半年，因为一场突如其来的疫情，我国经济一直处于低迷状态，餐饮行业更是遭受重创。据了解，93%的餐饮企业都选择关闭门店，
							尽管后来在全国各地疫情得到有效控制后，餐饮业也开始复工复产，但餐饮人的营业额损失还是达到了9成以上，同时承受人工、房租的重压，
							有的餐饮人甚至血本无归。随着经济的回温，如何帮助餐饮行业快速复苏是美食流一直思考的问题。
						</div>
						<div class="times">2020-08-26 16:52</div>
					</div>

					<!-- div -->
					<div class="information-two">
						<h2>餐饮常识</h2>

						<van-row type="flex" justify="space-between" v-for="(item,index) in aknowledgeList" :key="index">
							<van-col span="15">
								<div class="conntent-box">
									<div style="font-size: 16px;">{{item.text}}</div>
									<div style="color: #999;text-indent:2em">{{item.content}}</div>
									<div>{{item.timer}}</div>
									<van-divider :style="{borderColor: '#eee', padding: '0 16px' }"></van-divider>
								</div>
							</van-col>
							<van-col span="6">
								<img :src="item.url" width="180px" height="100" />
							</van-col>
						</van-row>
					</div>
				</van-col>
				<van-col span="7" offset="1" style="background-color: white;">
					<div class="bg-right">
						<h2 style="padding-bottom:0.5em">创业经验分享</h2>
						<div v-for="(item,index) in businessList" :key="index">
							<img :src="item.url" width="100%" height="100%" alt="图片记载失败！" />
							<div style="font-weight:800;margin:1em">{{item.txet}}</div>
							<div class="work-experience-det">{{item.content}}</div>
						</div>
					</div>
					<van-button style="margin:2em" plain hairline type="deafault">了解更多创业知识...</van-button>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				businessList: [{
						txet: "开奶茶店",
						content: "我的奶茶店终于在19年的年末开起来了，有人来问我开店的历程，我的开店历程可以总结为以下几点：了解（三个月）",
						url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3234259246,1690565599&fm=26&gp=0.jpg",
					},
					{
						txet: "串串店，如何做到天天客满！",
						content: "餐饮店盈利关键在于懂客户的需求，同时从细节入手满足客户的需求。那开串串店哪些细节是我们应该重视的呢?",
						url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3846679444,1438786263&fm=26&gp=0.jpg",
					},
					{
						txet: "烤鱼店如何宣传？",
						content: "开烤鱼店应该怎样做宣传？烤鱼的市场很大，是创业非常不错的选择，但是想要生意好，还是需要一定的宣传",
						url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1348942125,604009262&fm=26&gp=0.jpg",
					},
					{
						txet: "加盟店经营秘籍，如何快速积累人气",
						content: "新鲜事，新奇物也越来越少，靠品类博得市场的可能性越来越小，那么开店的关键到底是什么呢？答案就两个字“服务”。",
						url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1946793405,3885834187&fm=26&gp=0.jpg",
					},
				],
				aknowledgeList: [{
						text: "喜欢吃海底捞？海底捞学生证有用吗？快来看看",
						url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2504055846,2035698698&fm=26&gp=0.jpg",
						content: "说起冬天最受人们喜爱的食物可能就是火锅了。火锅也是分很多的种类更有许多的品牌，说起近几年很火的火锅品牌就是海底捞",
						timer: "2020.09.07",
					},
					{
						text: "什么口味的披萨最受欢迎？你最喜欢哪种？ ",
						url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2998939706,1983533334&fm=15&gp=0.jpg",
						content: "我们在剧的时候经常见到剧中人物在吃披萨，看起来很美味，忍不住自己也想点一份披萨来吃，披萨在全球范围内都广受欢迎",
						timer: "2020.09.08",
					},
					{
						text: "月饼有什么馅的大全？各种馅都有什么特点？",
						url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1636233324,9716381&fm=26&gp=0.jpg",
						content: "说起冬天最受人们喜爱的食物可能就是火锅了。火锅也是分很多的种类更有许多的品牌，说起近几年很火的火锅品牌就是海底捞",
						timer: "2020.09.08",
					},
					{
						text: "螺蛳粉很臭很臭是不是？螺蛳粉是哪里的小吃？",
						url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2890620279,61731980&fm=26&gp=0.jpg",
						content: "单从饮食上来说，近年来，各种美食都涌入人们的视野，而螺蛳粉就是几年人们常吃的一种小吃，但是螺蛳粉很臭很臭是不是呢",
						timer: "2020.09.08",
					},
					{
						text: "什么火锅底料最好吃牌子",
						url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3918805333,1354872876&fm=15&gp=0.jpg",
						content: "说到火锅，对于我这个四川人来说几乎可以形成分泌唾液的条件反射了，火锅可是我最喜欢的食物没有之一，那么视火锅如命的我今天就来谈谈什么火锅底料最好吃牌子。",
						timer: "2020.09.08",
					},
				],
			};
		},
		components: {},
		created() {},
		mounted() {},
		methods: {},
	};
</script>

<style scoped>
	.main-container {
		width: 1200px;
		margin: 50px auto;
		position: relative;
	}

	.information-two {
		background: #fff;
		padding: 2em;
		width: 800px;
		margin-top: 1em;
	}

	.bg-ff {
		background: #fff;
		width: 800px;
		padding: 2em;
	}

	.bg-right {
		background: #fff;
		width:100%;
		padding: 32px;
	}

	.conntent-box div {
		margin: 1em 0em;
	}

	.recommended {
		font-size: 1.4em;
		font-weight: 800;
	}

	.recommended-det {
		width: 410px;
		position: absolute;
		top: 16em;
		margin-left: 21em;
		text-indent: 1.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;
		font-size: 15px;
		opacity: 0.5;
	}

	.times {
		margin-left: 23em;
		margin-top: -10px;
		font-size: 14px;
		color: #ccc;
	}

	.work-experience-det {
		width: 280px;
		text-indent: 1.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 10px;
		opacity: 0.5;
		margin-bottom: 0.5em;
	}
</style>
