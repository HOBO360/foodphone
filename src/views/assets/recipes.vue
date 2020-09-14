<template>
	<div>
		<!-- 糖醋排骨 -->
		<div>
			<!-- head -->
			<information />
			<!-- logo 搜索框 -->
			<div class="bg" style="margin-bottom: 20px;">
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
			<div class="myrecip">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>糖醋排骨</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="myrest-a">
					<div class="myrest-a-img">
						<van-image width="100%" height="100%" :src="require('@/assets/images/tcpg.jpg')" />
					</div>
					<div class="myrest-a-text">
						<van-row type="flex" justify="space-around">
							<van-col span="10">
								<h1>糖醋排骨</h1>
								<van-row gutter="5" style="margin-top: 30px;">
									<van-col span="5">
										<van-button type="primary">补肾</van-button>
									</van-col>
									<van-col span="5">
										<van-button type="primary">润肺</van-button>
									</van-col>
								</van-row>
							</van-col>
							<van-col span="10">
								<van-row>
									<van-col span="10">
										<van-button type="danger" size="large">收藏(4548)</van-button>
									</van-col>
									<van-col span="14">
										<van-button color="#e7e7e7" size="large">分享到：</van-button>
									</van-col>
								</van-row>
							</van-col>
						</van-row>
						<div class="recip-info">
							<ul class="info-ul1">
								<li class="ulli1">
									<span style="color: gray;">工艺</span>
									<p style="color: red;font-size: 26px;">炒</p>
								</li>
								<li class="ulli2">
									<span style="color: gray;">难度</span><br />
									<van-row>
										<van-col span="17" style="margin-left: -6px;margin-top: 5px;">
											<van-image width="200" height="45" :src="require('@/assets/images/q1.png')" />
										</van-col>
										<van-col span="5" style="margin-top: 15px;">
											<div style="color: gray;">新手尝试</div>
										</van-col>
									</van-row>
								</li>
								<li class="ulli3">
									<span style="color: gray;">人数</span>
									<van-row>
										<van-col span="17" style="margin-left: -6px;margin-top: 5px;">
											<van-image width="200" height="45" :src="require('@/assets/images/q2.png')" />
										</van-col>
										<van-col span="4" style="margin-top: 15px;">
											<div style="color: gray;">2人份</div>
										</van-col>
									</van-row>
								</li>
							</ul>
							<ul class="info-ul2">
								<li class="ulli1">
									<span style="color: gray;">口味</span>
									<p style="color: red;font-size: 26px;">酸甜味</p>
								</li>
								<li class="ulli2">
									<span style="color: gray;">准备时间</span>
									<van-row>
										<van-col span="17" style="margin-left: -6px;margin-top: 5px;">
											<van-image width="200" height="45" :src="require('@/assets/images/q3.png')" />
										</van-col>
										<van-col span="4" style="margin-top: 15px;">
											<div style="color: gray;">5分钟</div>
										</van-col>
									</van-row>
								</li>
								<li class="ulli3">
									<span style="color: gray;">烹饪时间</span>
									<van-row>
										<van-col span="17" style="margin-left: -6px;margin-top: 5px;">
											<van-image width="200" height="45" :src="require('@/assets/images/q4.png')" />
										</van-col>
										<van-col span="4" style="margin-top: 15px;">
											<div style="color: gray;">5分钟</div>
										</van-col>
									</van-row>
								</li>
							</ul>
						</div>
						<van-row style="padding-left: 30px;padding-top: 18px;">
							<van-col span="3">
								<van-image round width="80" height="80" :src="require('@/assets/images/tx6.jpg')" />
							</van-col>
							<van-col span="20">
								<div style="line-height: 30px;">翻糖MM-白之猫猫</div>
								<span>菜谱：131 / 关注：1 / 粉丝：8569</span><br />
								<span>2014-10-16 / 3575647人看过</span>
							</van-col>
						</van-row>
					</div>
				</div>
			</div>
			<div class="yongfa">
				<van-row gutter="20">
					<van-col span="16">
						<div style="width: 100%;background-color: white;padding: 20px;height: 405px;">
							<p>“我家的私房菜有一项必不可少的就是糖醋排骨，如果有人来吃饭，这道菜是必做哒，我家的做法比较奇葩，不过也是非常简单的，味美简单，管它做法奇不奇葩。”</p>
							<h3>用料</h3>
							<div class="zhuliao">
								<div class="btna">
									<van-button type="danger" size="small">主料</van-button>
								</div>
								<ul class="zhuliao-ul">
									<li class="zhuliao-l1">
										<van-row>
											<van-col span="4">
												<van-image width="50" height="50" :src="require('@/assets/images/xzp1.jpg')" />
											</van-col>
											<van-col span="16" style="margin-top: 10px;">排骨</van-col>
											<van-col span="4" style="margin-top: 10px;color: gray;">适量</van-col>
										</van-row>
									</li>
									<li class="zhuliao-l2"></li>
								</ul>
							</div>
							<div class="zhuliao1">
								<div class="btnab">
									<van-button color="#e7e7e7" size="small">辅料</van-button>
								</div>
								<ul class="zhuliao-ua">
									<li class="zhuliao-l3">
										<van-row>
											<van-col span="20">油</van-col>
											<van-col span="4" style="color: gray;">适量</van-col>
										</van-row>
									</li>
									<li class="zhuliao-l4">
										<van-row>
											<van-col span="20">盐</van-col>
											<van-col span="4" style="color: gray;">适量</van-col>
										</van-row>
									</li>
								</ul>
								<ul class="zhuliao-ua">
									<li class="zhuliao-l3">
										<van-row>
											<van-col span="20">冰糖</van-col>
											<van-col span="4" style="color: gray;">适量</van-col>
										</van-row>
									</li>
									<li class="zhuliao-l4">
										<van-row>
											<van-col span="20">番茄酱</van-col>
											<van-col span="4" style="color: gray;">适量</van-col>
										</van-row>
									</li>
								</ul>
								<ul class="zhuliao-ua">
									<li class="zhuliao-l3">
										<van-row>
											<van-col span="20">料酒</van-col>
											<van-col span="4" style="color: gray;">适量</van-col>
										</van-row>
									</li>
									<li class="zhuliao-l4">
										<van-row>
											<van-col span="20">红醋</van-col>
											<van-col span="4" style="color: gray;">适量</van-col>
										</van-row>
									</li>
								</ul>
							</div>
						</div>
						<div style="width: 100%;background-color: white;padding: 20px;margin-top: 20px;">
							<h3>糖醋排骨的做法</h3>
							<el-divider></el-divider>
							<div class="caozuo" v-for="(caoz,index) in caozs" :key="index.tilet">
								<span style="color: red;font-size: 60px;"><em>{{caoz.tilet}}</em></span>
								<span style="padding-left: 20px;">{{caoz.text}}</span>
								<div style="padding-left:70px;padding-top: 20px;">
									<van-image width="600" height="500" :src="caoz.imgurl" />
								</div>
							</div>
							<h3 style="margin-top: 50px;">糖醋排骨展示图</h3>
							<el-divider></el-divider>
							<div>
								<van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" width="600px" style="margin-left: 70px;">
									<van-swipe-item>
										<van-image width="600" height="500" :src="require('@/assets/images/tcpg1.jpg')" />
									</van-swipe-item>
									<van-swipe-item>
										<van-image width="600" height="500" :src="require('@/assets/images/tcpg2.jpg')" />
									</van-swipe-item>
									<van-swipe-item>
										<van-image width="600" height="500" :src="require('@/assets/images/tcpg3.jpg')" />
									</van-swipe-item>
								</van-swipe>
							</div>
						</div>
						<div style="width: 100%;background-color: white;padding: 20px;margin-top: 20px;">
							<h3>糖醋排骨的讨论区</h3>
							<el-divider></el-divider>
							<div>
								<van-row gutter="20">
									<van-col span="3">
										<van-image width="80" height="80" :src="require('@/assets/images/tx5.png')" />
									</van-col>
									<van-col span="20">
										<div>
											<van-row>
												<van-col span="5">
													<div style="font-size: 12px;color: gray;padding-top: 5px;">给内容一个标签：</div>
												</van-col>
												<van-col span="4">
													<van-button type="danger" size="small">随意吐槽</van-button>
												</van-col>
												<van-col span="4">
													<van-button color="#e7e7e7" size="small">提问求解</van-button>
												</van-col>
											</van-row>
										</div>
										<div class="cell" style="margin-top: 20px;">
											<van-field v-model="message" rows="2" type="textarea" maxlength="50" placeholder="想说点什么..." show-word-limit />
										</div>
										<van-row style="margin-top: 10px;">
											<van-col span="6">
												<van-button type="danger" size="large">上传成果作品</van-button>
											</van-col>
											<van-col span="4" offset="14">
												<van-button type="danger" size="large">提交</van-button>
											</van-col>
										</van-row>
									</van-col>

								</van-row>
								<van-row style="padding-top: 20px;">
									<van-col span="3">
										<div style="font-size: 12px;color: gray;padding-top: 5px;">评论排序：</div>
									</van-col>
									<van-col span="2" style="margin-left: 10px;">
										<van-button type="danger" size="small">最新</van-button>
									</van-col>
									<van-col span="2">
										<van-button type="danger" size="small">最热</van-button>
									</van-col>
								</van-row>
							</div>
							<el-divider></el-divider>
							<div v-for="(pingl,index) in pingls" :key="index.tilet">
								<van-row gutter="20">
									<van-col span="3">
										<van-image width="80" height="80" :src="pingl.imgurl" />
									</van-col>
									<van-col span="20" style="padding-top: 10px;">
										<van-row>
											<van-col span="3">
												<div style="font-size: 12px;color:red;padding-top: 5px;">{{pingl.text1}}</div>
											</van-col>
											<van-col span="21">
												<div style="font-size: 12px;color:#757575;padding-top: 5px;">{{pingl.text2}}</div>
											</van-col>
										</van-row>
										<van-row>
											<van-col span="7">
												<div style="font-size: 12px;color:gray;padding-top: 5px;">{{pingl.text3}}</div>
											</van-col>
											<van-col span="3">
												<div style="font-size: 12px;color:red;padding-top: 5px;">{{pingl.text4}}</div>
											</van-col>
											<van-col span="1" offset="10" style="margin-top: 1px;">
												<van-icon name="good-job-o" size="20" />
											</van-col>
											<van-col span="1">
												<div style="font-size: 12px;color:#757575;">{{pingl.text5}}</div>
											</van-col>
											<van-col span="2">
												<div style="font-size: 12px;color:#757575;">{{pingl.text6}}</div>
											</van-col>
										</van-row>
									</van-col>
								</van-row>
								<div style="font-size: 12px;color: gray;padding-top: 5px;">{{pingl.text7}}</div>
								<el-divider></el-divider>
							</div>
						</div>
					</van-col>
					<van-col span="8">
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
						<div style="width: 100%;background-color: white;height: 1430px;margin-top: 15px;">
							<div class="myresta" v-for="(myrestar,index) in myrestars" :key="index.title">
								<div class="myrest-img">
									<van-image width="100%" height="200" style="display: block;" :src="myrestar.imgurl" />
								</div>
								<div class="mytext1">{{myrestar.title}}</div>
								<!-- <div class="mytext2">{{myrestar.text}}</div> -->
							</div>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>
		<scroll-top />
		<footers></footers>
	</div>
</template>

<script>
	import information from "@/components/topInformation/information.vue";
	import ScrollTop from "@/components/ScrollTop/ScrollTop.vue";

	import footers from "@/components/footer/footer.vue";

	export default {
		data() {
			return {
				form: {
					name: "",
				},
				money: "666",
				message: '',
				caozs: [{
					tilet: '1.',
					text: '排骨块掉水，放盐，捞出水滤干。',
					imgurl: require('@/assets/images/zuof1.jpg'),
				}, {
					tilet: '2.',
					text: '下油锅炸，炸金黄捞出滤油。',
					imgurl: require('@/assets/images/zuof2.jpg'),
				}, {
					tilet: '3.',
					text: '做糖醋汁，先炒冰糖，加番茄酱翻炒，加水，给调汤汁调味，放排骨，收汁。',
					imgurl: require('@/assets/images/zuof3.jpg'),
				}, {
					tilet: '4.',
					text: '加些红醋提色，摆盘',
					imgurl: require('@/assets/images/zuof4.jpg'),
				}],
				pingls: [{
					imgurl: require('@/assets/images/tx1.png'),
					text1: '[随意吐槽]',
					text2: '好看哦。不错',
					text3: '2020-9-9 21:34:45来自',
					text4: '食补',
					text5: '0',
					text6: '回复',
					text7: '余生请多指教',
				}, {
					imgurl: require('@/assets/images/tx2.png'),
					text1: '[随意吐槽]',
					text2: '土豪标配！！！！',
					text3: '2020-9-9 13:43:23来自',
					text4: '食补',
					text5: '0',
					text6: '回复',
					text7: '睿妈下午',
				}, {
					imgurl: require('@/assets/images/tx3.png'),
					text1: '[随意吐槽]',
					text2: '每次都这么做。朋友都夸我是大厨',
					text3: '2020-9-9 21:34:45来自',
					text4: '食补',
					text5: '0',
					text6: '回复',
					text7: '淘淘2015',
				}, {
					imgurl: require('@/assets/images/tx4.jpg'),
					text1: '[随意吐槽]',
					text2: '今天尝试了做糖醋排骨，没有找到什么自己觉得适合的方法，后来凭感觉做的，方法跟这个方子累似，还蛮不错的',
					text3: '2020-9-9 21:34:45来自',
					text4: '食补',
					text5: '0',
					text6: '回复',
					text7: '茉莉的莉',
				}],
				myrestars: [{
						imgurl: require("@/assets/images/zaoc1.jpg"),
						title: "茯苓粥，清甜滋补",
						text: "	茯苓粥，清甜滋补。这道养颜汤是由主料大米、茯苓、红枣、枸杞、以及辅料冰糖一起熬煮而成的，普通的食材相结合，清甜滋补。其实这道清甜滋补的茯苓粥的制作方法是十分简单易学的，下面就让我们来看看这道清甜滋补的茯苓粥是怎么制作的吧哈哈。",
					},
					{
						imgurl: require("@/assets/images/zaoc7.jpg"),
						title: "山药百合粥，香糯可口营养美味",
						text: "山药一般是指淮山药，山药是一种高营养的食品，含有丰富的蛋白质、多种维生素和微量元素等营养成分；百合是百合科植物卷丹或细叶百合的干燥肉质鳞叶，含有丰富的蛋白质和维生素等营养成分。把山药和百合搭配煮成粥，香糯可口，营养又美味。",
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
			}
		},
		components: {
			information,
			footers,
			"scroll-top": ScrollTop,
		},
		mounted() {},
		methods: {
			onSearch() {},
		},
	};
</script>

<style>
	.myresta {
		width: 190px;
		height: 200px;
		/* background-color: #f8f8f8; */
		float: left;
		padding: 15px;
	}

	.myrecip .el-breadcrumb {
		font-size: 20px;
		line-height: 1;
	}

	.mytext1 {
		padding-top: 0.625rem;
		width: 170px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
	}

	.mytext2 {
		padding-top: 0.625rem;
		width: 170px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: gray;
	}

	.myrest-img {
		width: 170px;
		height: 150px;
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

	.yongfa .el-divider--horizontal {
		margin: 26px 0px;
	}

	.cell .van-cell {
		background: #fcfcfc;
		color: #000000;
		font-size: 14px;
		border: 1px solid #ddd;
		height: 120px;
	}

	.ablock {
		width: 100%;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.yongfa ul {
		margin-bottom: 0px;
	}

	.zhuliao-ul {
		/* float: left; */
		width: 750px;
		height: 85px;

	}

	.zhuliao-ua {
		/* float: left; */
		width: 750px;


	}

	.caozuo {}

	.zhuliao-ua .zhuliao-l3,
	.zhuliao-ua .zhuliao-l4 {
		border-bottom: 1px solid #eee;
	}

	.zhuliao-l1 {
		float: left;
		width: 340px;
		border-right: 1px solid #eee;
		height: 100px;
		padding-top: 24px;
	}

	.zhuliao-l3 {
		float: left;
		width: 340px;
		border-right: 1px solid #eee;
		height: 60px;
		padding-top: 20px;
	}

	.btna {
		float: left;
		width: 70px;
		height: 100px;
		padding-top: 10px;
	}

	.btnab {
		float: left;
		width: 70px;
		height: 300px;
		padding-top: 10px;
	}

	.zhuliao-l2 {
		float: left;
		width: 340px;
		height: 100px;
	}

	.zhuliao-l4 {
		float: left;
		width: 340px;
		height: 60px;
		padding-top: 20px;
		padding-left: 15px;
	}

	.zhuliao {
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}

	.search-container,
	.category-container {
		width: 1200px;
		margin: 0 auto;
	}

	.myrecip {
		width: 1200px;
		margin: 0 auto;
		height: 540px;
		/* background-color: gainsboro; */
	}

	/* .myrecip .el-breadcrumb {
		font-size: 25px;
	} */

	.myrest-a {
		width: 1200px;
		margin: 0 auto;
		margin-top: 20px;
	}

	.yongfa {
		width: 1200px;
		margin: 0 auto;
		height: auto;
		margin-top: 10px;
	}

	.myrest-a-img {
		width: 340px;
		height: 480px;
		float: left;
	}

	.myrest-a-text {
		width: 860px;
		height: 480px;
		float: left;
		background-color: white;
		padding-top: 30px;
	}

	.recip-info {
		width: 860px;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		height: 180px;
		margin-top: 30px;
	}

	.info-ul1 li {
		float: left;
		height: 90px;
		/* border-right: 1px solid #e6e6e6; */
		/* padding: 10px 0px 20px 0px; */
		padding-left: 30px;
		padding-top: 10px;
		border-bottom: 1px solid #e6e6e6;
	}

	.info-ul2 li {
		float: left;
		height: 90px;
		/* border-right: 1px solid #e6e6e6; */
		padding-left: 30px;
		padding-top: 10px;
	}

	.ulli1 {
		width: 180px;
		border-right: 1px solid #e6e6e6;
	}

	.ulli2 {
		width: 340px;
		border-right: 1px solid #e6e6e6;
	}

	.ulli3 {
		width: 340px;
	}
</style>
