<template>
	<div>
		<div id="Restaurant">
			<van-row type="flex" justify="center">
				<van-col span="12">
					<van-divider :style="{ color: '#000000', borderColor: 'linear-gradient(to right, #ff6034, #ee0a24)', padding: '0 20px' }">
						<span style="font-size: 2em;">家常好味道，给你家一般的温暖</span>
					</van-divider>
				</van-col>
			</van-row>
			<div style="font-size: 1.5rem;padding-left: 0.625rem;margin-bottom:2em">
				<h2>热门菜谱</h2>
			</div>
			<div class="myrest" v-for="(myresta,index) in myrestas" :key="index.title" @click="addrec">
				<van-image width="100%" height="200" style="display: block;" :src="myresta.imgurl" />
				<div class="cl">
					<div class="myrest-l">
						<strong>{{myresta.title}}</strong>
						<div style="line-height:1.875rem">{{myresta.text1}}</div>
						<span>{{myresta.text2}}</span>
					</div>
					<div class="myrest-r">
						<van-row style="padding-top:0.8rem;">
							<van-col span="4">
								<van-icon name="manager-o" size="25" color="#ff634f" />
							</van-col>
							<van-col span="18">
								<div>{{myresta.text3}}</div>
							</van-col>
						</van-row>
						<van-row style="padding-top:0.7rem;">
							<van-col span="4">
								<van-icon name="fire-o" size="25" color="#ff634f" />
							</van-col>
							<van-col span="18">
								<div>{{myresta.text4}}</div>
							</van-col>
						</van-row>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				myres: true,
				myres1: false,
				hover: false,
				myrestas: [{
						imgurl: require("@/assets/images/caip4.jpg"),
						title: "糖醋排骨",
						text1: "507评论 34609人气",
						text2: "翻糖MM-白之猫猫",
						text3: "12步 / 大概90分钟",
						text4: "炒 / 酸甜味",
					},{
						imgurl: require("@/assets/images/caip8.jpg"),
						title: "油焖大虾",
						text1: "116评论 603323人气",
						text2: "总干活",
						text3: "11步 / 大概10分钟",
						text4: "焖 / 酸甜味",
					},
					{
						imgurl: require("@/assets/images/caip1.jpg"),
						title: "重庆豆花鱼",
						text1: "50评论 330663人气",
						text2: "心清似水淡若云",
						text3: "20步 / 大概30分钟",
						text4: "煮 / 香辣味",
					},
					{
						imgurl: require("@/assets/images/caip2.jpg"),
						title: "地三鲜",
						text1: "429评论 13026人气",
						text2: "爱美的家",
						text3: "7步 / 大概15分钟",
						text4: "炒 / 香辣味",
					},
					{
						imgurl: require("@/assets/images/caip3.jpg"),
						title: "姜爆鸭子",
						text1: "18评论 154225人气",
						text2: "心清似水淡若云",
						text3: "11步 / 大概60分钟",
						text4: "烧 / 香辣味",
					},
					{
						imgurl: require("@/assets/images/caip5.jpg"),
						title: "红烧肉",
						text1: "308评论 13078人气",
						text2: "热爱红烧肉",
						text3: "18步 / 大概90分钟",
						text4: "烧 / 家常味",
					},
					{
						imgurl: require("@/assets/images/caip6.jpg"),
						title: "大盘鸡",
						text1: "445评论 114376人气",
						text2: "飘零星",
						text3: "23步 / 大概30分钟",
						text4: "炒 / 香辣味",
					},
					{
						imgurl: require("@/assets/images/caip7.jpg"),
						title: "关东煮",
						text1: "487评论 826230人气",
						text2: "芷萍",
						text3: "6步 / 大概15分钟",
						text4: "煮 / 咸鲜味",
					},
					{
						imgurl: require("@/assets/images/caip9.jpg"),
						title: "糖醋鲤鱼",
						text1: "281评论 612465人气",
						text2: "热爱红烧肉",
						text3: "15步 / 大概15分钟",
						text4: "炸 / 酸甜味",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "青菜烧肉丸",
						text1: "429评论 505652人气",
						text2: "1粗茶淡饭1",
						text3: "10步 / 大概30分钟",
						text4: "烧 / 家常味",
					},
				],
				myrestars: [{
						imgurl: require("@/assets/images/zaoc1.jpg"),
						title: "茯苓粥，清甜滋补",
						text: "	茯苓粥，清甜滋补。这道养颜汤是由主料大米、茯苓、红枣、枸杞、以及辅料冰糖一起熬煮而成的，普通的食材相结合，清甜滋补。其实这道清甜滋补的茯苓粥的制作方法是十分简单易学的，下面就让我们来看看这道清甜滋补的茯苓粥是怎么制作的吧哈哈。",
					},
					{
						imgurl: require("@/assets/images/zaoc2.jpg"),
						title: "馄饨面，鲜汤美味",
						text: "之前冰箱里还剩下一点饺子馅，早起想着把它处理了但是想着两个人也不够吃，所以多和了一点面直接做成又有馄饨又有面条的双料汤面的馄饨面，馄饨面用煲了一夜的鸡汤煮的味道鲜的没法说。其实这道鲜汤美味的的馄饨面的做法是简单易学的，下面就让我们来看看鲜汤美味的的馄饨面是怎么做的吧嘻嘻嘻。",
					},
					{
						imgurl: require("@/assets/images/zaoc3.jpg"),
						title: "馒头的华丽蜕变——芝士馒头片",
						text: "馒头，中式早餐中的最普通的一中。当发挥你那机灵点小脑袋时把它用在其他的地方，你会发现馒头它已不在是普通的面点，而是一道拥有五星级酒店级别的高端菜品。在这里我将介绍下它的一种高级吃法，即芝士馒头片，希望你们能够喜欢。",
					},
					{
						imgurl: require("@/assets/images/zaoc4.jpg"),
						title: "美丽应该由内而外的散发出来，来上一碗美容养颜粥",
						text: "现在的女性越来越注重美丽，但是美丽光靠化妆是没有用的，应该有内而外的调养，让好气色从内而外的散发出来。下面给大家推荐一款粥，由各种豆类，米类共同熬煮而成。豆子要提前一晚上泡发，煮这款粥一定要有耐心，小火慢熬才能煮出其中的精华。",
					},
					{
						imgurl: require("@/assets/images/zaoc5.jpg"),
						title: "蒸饼，口感松软，越吃越香",
						text: "蒸饼，是一道由油酥，面粉制作而成的小吃。蒸饼的做法和蒸发糕有些类似，但是前者的做法比后者简单许多。说到蒸饼，它可是我妈的拿手绝活，经由我妈之手做出的蒸饼，我立马分分钟钟秒完。想知道我妈做的蒸饼为什么这么好吃吗？想的话，我把配方告诉你们吧",
					},
					{
						imgurl: require("@/assets/images/zaoc6.jpg"),
						title: "舌尖上的美食——黄油烙饼",
						text: "黄油烙饼，听名字就知道它是用黄油烙出的饼。但它可不是不同的饼，了解过它的背景之后才知道它大有来头。关于黄油烙饼，我是在小学时候读到汪曾祺的散文——《黄油烙饼》才知道的，里面大量描述着关于奶香浓郁，香甜软糯的黄油烙饼的做法，于是我试着还原了它的做法。",
					},
					{
						imgurl: require("@/assets/images/zaoc7.jpg"),
						title: "山药百合粥，香糯可口营养美味",
						text: "山药一般是指淮山药，山药是一种高营养的食品，含有丰富的蛋白质、多种维生素和微量元素等营养成分；百合是百合科植物卷丹或细叶百合的干燥肉质鳞叶，含有丰富的蛋白质和维生素等营养成分。把山药和百合搭配煮成粥，香糯可口，营养又美味。",
					},
					{
						imgurl: require("@/assets/images/zaoc8.jpg"),
						title: "海蛎子豆腐汤，简单又美味",
						text: "海蛎子豆腐汤，是一道很简单的家常菜，它的汤汁非常浓郁，汤中蛎子肉鲜味美，豆腐鲜嫩爽滑，每吃一口都是一种享受。又想吃的伙伴嘛？有的话快来跟我做吧。建议做的时候海蛎子中加入淀粉然后拌匀，个人觉得这么做好吃一些。",
					},
				],
				myrestaas: [{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "橄榄菜豆角，酸爽可口，超级开胃下饭",
						text: "橄榄菜豆角，是一道很常见的家常菜。在我家，桌上一旦摆了一道橄榄菜炒豆角，我分分钟钟就能把它连同米饭一扫而光。在做橄榄菜炒豆角的时候，加点猪肉末进去炒，味道会更香。记得还有一点，炒的时候，豆角一定要焯熟，这样吃着才放心。",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/caip10.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
				],
			};
		},
		methods: {
			restbtn1() {
				this.myres = true;
			},
			restbtn2() {
				this.myres = false;
				this.myres1 = true;
			},
			addrec(){
				this.$router.push({
					path:'/recipes'
				})
			}
		},
	};
</script>

<style scoped>
	#Restaurant {
		width: 1200px;
		height: 790px;
		margin: 30px auto;
	}

	/* #Restaurant-l {
  width: 1200px;
  height: 750px;
  margin: auto;
  background-color: #f9d5c9;
  overflow: hidden;
  cursor: pointer;
} */

	#Restaurant-l .van-button--round:hover {
		background-color: #ff552e;
		color: white;
		border: 1px solid #ff552e;
	}

	.myrest {
		width: 220px;
		height: 310px;
		background-color: #ffffff;
		float: left;
		overflow: hidden;
		margin: 0.9375rem 0.625rem;
	}

	.cl {
		width: 220px;
		height: 220px;
		overflow: hidden;
		transition: all 0.75s;
	}

	.myrest:hover .myrest-r {
		transform: translateY(-100%);
		transition: all 0.75s;
		display: block;
	}

	.myrest:hover .myrest-l {
		transform: translateY(-100%);
		transition: all 0.5s;
		display: block;
		cursor: pointer;
	}

	.myrest-l {
		width: 220px;
		height: 110px;
		padding: 15px 20px;
		transform: translateY(0%);
		transition: all 0.75s;
		cursor: pointer;
	}

	.myrest-r {
		width: 220px;
		height: 120px;
		padding: 20px;
		/* display: none; */
		background: #fafafa;
		transform: translateY(0%);
		transition: all 0.75s;
	}

	.myrest-r span {
		color: red;
		font-size: 0.75rem;
	}

	.myrest-l div {
		color: gray;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.myrest-l span {
		color: red;
		font-size: 0.75rem;
	}

	.myresta {
		width: 280px;
		height: 330px;
		background-color: #f8f8f8;
		float: left;
		padding: 1.25rem;
		margin: 0.9375rem 0.625rem;
	}

	.mytext1 {
		padding-top: 0.625rem;
		width: 245px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.mytext2 {
		padding-top: 0.625rem;
		width: 245px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: gray;
	}

	.myrest-img {
		width: 245px;
		height: 180px;
		overflow: hidden;
		cursor: pointer;
	}

	.myrest-img .van-image {
		transition: 0.5s transform;
		transform: translateZ(0);
	}

	.myrest-img .van-image:hover {
		transition: 0.5s;
		transform: scale(1.2);
	}
</style>
