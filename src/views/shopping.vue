<template>
	<div class="shopping">
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
					style="padding-left: 50px;" @select="handleSelect">
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
		<div class="bjt">
			<div class="conten2">
				<van-row>
					<van-col span="4">
						<div class="fenlei">
							<ul>
								<li v-for="em in classifys" :key="em.title" name="h1">
									<a href="#">
										<van-row type="flex" align="center">
											<van-col span="4">
												<i :class="em.icon" size="1.5rem"></i>
												<!-- <van-icon :name="em.icon"  /> -->
											</van-col>
											<van-col span="20">
												<span>{{em.title}}</span>
												<br />
												<span class="fo-small-size co-gray">{{em.text}}</span>
											</van-col>
										</van-row>
									</a>
								</li>
								<!-- <li><a href="#">肉蛋水产</a></li>
								<li><a href="#">蔬菜菌菇</a></li>
								<li><a href="#">冷藏饮乳</a></li>
								<li><a href="#">粮油调味</a></li>
                <li><a href="#">酒水饮料</a></li>-->
							</ul>
						</div>
					</van-col>
					<van-col span="16">
						<div class="nav_list" id="nav_list">
							<dl>
								<dt>的话是否健康</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
								<!-- <a href="#" class="colk">{{em.les1}}</a> -->
							</dl>
						</div>
						<!-- <div class="cok"  v-show="false">
							<dl>
								<dt>热销水果</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
							</dl>
						</div>
						<div class="cok1"  v-show="false">
							<dl>
								<dt>热销sc</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
							</dl>
						</div>
						<div class="cok2"  v-show="false">
							<dl>
								<dt>热销肉了</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
							</dl>
						</div>
						<div class="cok3"  v-show="false">
							<dl>
								<dt>热销饮料</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
							</dl>
						</div>
						<div class="cok4"  v-show="false">
							<dl>
								<dt>热销肉了</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
							</dl>
						</div>
						<div class="cok5"  v-show="false">
							<dl>
								<dt>热销优酸乳</dt>
								<dd>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
									<a href="#" class="colk">苹果</a>
								</dd>
							</dl>
            </div>-->
						<div class="block">
							<el-carousel trigger="click" height="400px">
								<el-carousel-item v-for="item in bgimg" :key="item.img">
									<img :src="item.img" />
								</el-carousel-item>
							</el-carousel>
						</div>
					</van-col>
					<van-col span="4">
						<div class="bg-white toutiao">
							<p align="center">
								-
								<span class="co-red">生鲜</span>头条 -
							</p>
							<ul>
								<li>
									<a href="#">精挑细选100分健康美味</a>
								</li>
								<li>
									<a href="#">0元试吃 全新上线 抓紧尝鲜</a>
								</li>
								<li>
									<a href="#">一键立享 用心做顿好饭</a>
								</li>
							</ul>
						</div>
						<img src="../assets/images/yue.png" />
					</van-col>
				</van-row>

				<div id="conten2" v-for="em in ems" :key="em.title">
					<van-row type="flex" align="center">
						<van-col span="4">
							<van-icon :name="em.icon" size="32px" />
						</van-col>
						<van-col span="20">
							<span>{{em.title}}</span>
							<br />
							<span class="fo-small-size co-gray">{{em.text}}</span>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
		<div class="conten3">
			<h3 align="center">
				<img src="../assets/images/left_1.png" />
				<img src="../assets/images/line_left.png" width="80px" height="50px" />
				身/临/食/感
				<img src="../assets/images/line_right.png" width="70px" height="50px" />
				<img src="../assets/images/left_1.png" />
			</h3>
			<van-tabs>
				<van-tab title="爆款专区">
					<div class="pz">
						<van-row>
							<van-col span="9" type="flex" algin="center">
								<p class="pao" align="center">爆款专区</p>
								<p class="pao1">大家都在买的热销食材</p>
								<img src="../assets/images/bg_6.png" width="420px" />
							</van-col>
							<van-col span="15">
								<div class="good">
									<van-swipe :loop="false" :width="175" :show-indicators="false">
										<van-swipe-item v-for="(comm,index) in comms " :key="index.title">
											<van-tag mark type="danger">{{comm.tag}}</van-tag>
											<router-link to="/shop_details">
												<div class="commodity" align="center">
													<img :src="comm.tu" />
													<br />
													<span class="hidden fo-small-size co-back">{{comm.title}}</span>
													<br />
													<span class="co-gray fo-small-size">
														<s>￥{{comm.original}}</s>
													</span>
													<br />
													<span class="co-gary">
														<span class="co-red">￥{{comm.geshu}}.</span>
														<span class="co-red fo-small-size co-back">{{comm.fenshu}}</span>
														<span class="fo-small-size co-back">/{{comm.company}}</span>
													</span>
												</div>
											</router-link>

										</van-swipe-item>
									</van-swipe>
								</div>
							</van-col>
						</van-row>
					</div>
				</van-tab>
				<van-tab title="品质优选">
					<div class="pz">
						<van-row>
							<van-col span="9" type="flex" algin="center">
								<p class="pao" align="center">品质优选</p>
								<p class="pao1">好货鲜推荐</p>
								<img src="../assets/images/bg_4.png" width="440px" />
							</van-col>
							<van-col span="15">
								<div class="good">
									<van-swipe :loop="false" :width="175" :show-indicators="false">
										<van-swipe-item v-for="(comm,index) in meats " :key="index.title">
											<van-tag mark type="danger">{{comm.tag}}</van-tag>
											<div class="commodity" align="center">
												<img :src="comm.tu" />
												<br />
												<span class="hidden fo-small-size">{{comm.title}}</span>
												<br />
												<span class="co-gray fo-small-size">
													<s>￥{{comm.original}}</s>
												</span>
												<br />
												<span class="co-gary">
													<span class="co-red">￥{{comm.geshu}}.</span>
													<span class="co-red fo-small-size">{{comm.fenshu}}</span>
													<span class="fo-small-size co-gary">/{{comm.company}}</span>
												</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</van-col>
						</van-row>
					</div>
				</van-tab>
				<van-tab title="火锅诱惑">
					<div class="pz">
						<van-row>
							<van-col span="9" type="flex" algin="center">
								<p class="pao" align="center">火锅诱惑</p>
								<p class="pao1">不出门吃火锅。叫上几个好友，加上好吃的食物，热热闹闹涮起来。</p>
								<img src="../assets/images/bg_5.png" width="440px" />
							</van-col>
							<van-col span="15">
								<div class="good">
									<van-swipe :loop="false" :width="175" :show-indicators="false">
										<van-swipe-item v-for="(comm,index) in huoguos " :key="index.title">
											<van-tag mark type="danger">{{comm.tag}}</van-tag>
											<div class="commodity" align="center">
												<img :src="comm.tu" />
												<br />
												<span class="hidden fo-small-size">{{comm.title}}</span>
												<br />
												<span class="co-gray fo-small-size">
													<s>￥{{comm.original}}</s>
												</span>
												<br />
												<span class="co-gary">
													<span class="co-red">￥{{comm.geshu}}.</span>
													<span class="co-red fo-small-size">{{comm.fenshu}}</span>
													<span class="fo-small-size co-gary">/{{comm.company}}</span>
												</span>
											</div>
										</van-swipe-item>
									</van-swipe>
								</div>
							</van-col>
						</van-row>
					</div>
				</van-tab>
			</van-tabs>
		</div>

		<div class="conten4">
			<div class="flexwith">
				<div class="title">
					<h3 align="center">
						<img src="../assets/images/left_2.png" />
						<img src="../assets/images/line_left.png" width="80px" height="50px" />
						生/鲜/宴
						<img src="../assets/images/line_right.png" width="70px" height="50px" />
						<img src="../assets/images/left_2.png" />
					</h3>
				</div>
				<div class="conel" v-for="model in models" :key="model.title">
					<van-row>
						<van-col span="4">
							<div class="green-bg" :style="{ 'background-image': 'url(' + model.bg + ')','background-repeat':'no-repeat','background-size':'cover' }">
								<h4>{{model.title}}</h4>
								<p class="fruits">{{model.text}}</p>
								<van-button size="small" type="primary" plain round style="margin-right:15px">{{model.btn1}}</van-button>
								<van-button size="small" type="primary" plain round>{{model.btn2}}</van-button>
								<br />
								<br />
								<van-button size="small" type="primary" plain round style="margin-right:15px">{{model.btn3}}</van-button>
								<van-button size="small" type="primary" plain round>{{model.btn4}}</van-button>
								<br />
								<br />
								<van-button type="primary" plain block round>{{model.btn5}}</van-button>
							</div>
						</van-col>
						<van-col span="12">
							<img :src="model.img1" width="100%" height="100%" />
						</van-col>
						<van-col span="8">
							<img :src="model.img2" width="440px" />
						</van-col>
					</van-row>
					<div class="import-fruits">
						<van-swipe :loop="false" :width="200" :show-indicators="false">
							<van-swipe-item v-for="(comm,index) in fruithots " :key="index.title">
								<!-- <van-tag mark type="danger">{{comm.tag}}</van-tag> -->
								<div class="commodity" align="center">
									<img :src="comm.tu" />
									<br />
									<span class="hidden fo-small-size">{{comm.title}}</span>
									<br />
									<!-- <span class="co-gray fo-small-size">
										<s>￥{{comm.original}}</s>
									</span>
									<br /> -->
									<span class="co-gary">
										<span class="co-red">￥{{comm.geshu}}.</span>
										<span class="co-red fo-small-size">{{comm.fenshu}}</span>
										<span class="fo-small-size co-gary">/{{comm.company}}</span>
									</span>
								</div>
							</van-swipe-item>
						</van-swipe>
					</div>
				</div>
			</div>
		</div>
		<scroll-top />
		<footers></footers>
	</div>
</template>

<script>
	import information from "../components/topInformation/information.vue";
	import footers from "../components/footer/footer.vue";
	import ScrollTop from "@/components/ScrollTop/ScrollTop.vue";
	export default {
		data() {
			return {
				// bid: false,
				activeIndex2: "1",
				active: 0,
				seen: true,
				bgimg: [{
						img: "https://m.360buyimg.com/babel/jfs/t1/134274/11/8709/93272/5f4cc64eE7eb89c38/5dd18af70ada8d20.jpg",
					},
					{
						img: require("../assets/images/bg_7.png"),
					},
					{
						img: "https://m.360buyimg.com/babel/jfs/t1/143480/22/7202/148788/5f4c522dE39cc4861/2304ff145e274a63.jpg",
					},
					{
						img: "https://m.360buyimg.com/babel/jfs/t1/128564/11/11573/88611/5f4fab49E8121acf2/9e7f827b00e1f63e.jpg",
					},
				],
				ems: [{
						icon: "passed",
						title: "食品安全",
						text: "精选生鲜 严格质检",
					},
					{
						icon: "logistics",
						title: "全程冷链",
						text: "自营物流 安全可控",
					},
					{
						icon: "flower-o",
						title: "鲜活天然",
						text: "绿色生态 京东精选",
					},
					{
						icon: "location-o",
						title: "产地直采",
						text: "限定产源 质量保证",
					},
					{
						icon: "after-sale",
						title: "无忧售后",
						text: "优鲜赔 售后通道",
					},
				],
				comms: [{
						tu: require("../assets/images/details/niuyouguo.jpg"),
						title: "进口牛油果 大果6粒装",
						original: "43.9",
						geshu: "29",
						fenshu: "9",
						company: "份",
						tag: "省14元",
					},
					{
						tu: require("../assets/images/SYHB (5).jpg"),
						title: "淡水鲈鱼500g以上/条",
						original: "39.8",
						geshu: "29",
						fenshu: "8",
						company: "条",
						tag: "省10元",
					},
					{
						tu: require("../assets/images/SHQ.jpg"),
						title: "精选上海青300g",
						original: "4",
						geshu: "2",
						fenshu: "9",
						company: "份",
						tag: "省1.1元",
					},
					{
						tu: require("../assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
						tag: "省9元",
					},
				],
				meats: [{
						tu: require('@/assets/images/SYHB (2).jpg'),
						title: '精选无土西红柿450g',
						text: '皮薄肉厚，酸甜可口',
						original: '6.9',
						geshu: '5',
						fenshu: '9',
						company: '份',
						tag: '省1元',
					},
					{
						tu: require('@/assets/images/Fruits/CZ (4).jpg'),
						title: '南非橙4个/盒900g',
						text: '',
						original: '24',
						geshu: '19',
						fenshu: '9',
						company: '盒',
						tag: '省4.1元',
					},
					{
						tu: require('@/assets/images/Fruits/XG(2).jpg'),
						title: '白香瓜/个',
						text: '皮薄肉多 香甜多汁',
						original: '7.9',
						geshu: '6',
						fenshu: '9',
						company: '个',
						tag: '省1元',
					},
					{
						tu: require('@/assets/images/ME/YR.jpg'),
						title: '冻半边鸭850g/片',
						text: '肉质鲜美，美味难档。解冻过后更滋味哟！',
						original: '15.6',
						geshu: '12',
						fenshu: '5',
						company: '片',
						tag: '省3.1元',
					},
				],
				huoguos: [{
						tu: require('@/assets/images/ME/sheli.jpg'),
						title: '花蛤380g/盒',
						text: '建议用盐水饲养1小时以上再烹饪，效果更佳',
						original: '13.8',
						geshu: '10',
						fenshu: '76',
						company: '盒',
						tag: '省3.04元',
					},
					{
						tu: require('@/assets/images/ME/JXR.jpg'),
						title: '冻鸡大胸300g/盒',
						text: '低脂美食，轻松享"瘦"',
						original: '11.9',
						geshu: '8',
						fenshu: '9',
						company: '盒',
						tag: '省2元',
					},
					{
						tu: require('@/assets/images/ME/FN.jpg'),
						title: '精选肥羊牛肉片300g/袋',
						text: '火锅有它才完整，在家就能下馆子',
						original: '40.9',
						geshu: '39',
						fenshu: '9',
						company: '袋',
						tag: '省1元',
					},
					{
						tu: require('@/assets/images/VM/WWC.jpg'),
						title: '娃娃菜 400g',
						text: '鲜嫩脆爽，入口水润清甜',
						original: '8.9',
						geshu: '',
						fenshu: '9',
						company: '包',
						tag: '省1元',
					},
				],
				fruithots: [{
						tu: require("../assets/images/SYHB (1).jpg"),
						title: "精选青瓜580g",
						original: "5.9",
						geshu: "3",
						fenshu: "9",
						company: "份",
						tag: "省1元",
					},
					{
						tu: require("../assets/images/SYHB (5).jpg"),
						title: "淡水鲈鱼500g以上/条",
						original: "39.8",
						geshu: "29",
						fenshu: "8",
						company: "条",
						tag: "省10元",
					},
					{
						tu: require("../assets/images/SHQ.jpg"),
						title: "精选上海青300g",
						original: "4",
						geshu: "2",
						fenshu: "9",
						company: "份",
						tag: "省1.1元",
					},
					{
						tu: require("../assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
						tag: "省9元",
					},
					{
						tu: require("../assets/images/SHQ.jpg"),
						title: "精选上海青300g",
						original: "4",
						geshu: "2",
						fenshu: "9",
						company: "份",
						tag: "省1.1元",
					},
					{
						tu: require("../assets/images/SYHB (6).jpg"),
						title: "带皮猪腿上肉300g/盒",
						original: "27",
						geshu: "18",
						fenshu: "8",
						company: "盒",
						tag: "省9元",
					},
				],
				models: [{
						title: "新鲜水果",
						text: "应时而采，新鲜特供",
						btn1: "橙子",
						btn2: "车厘子",
						btn3: "火龙果",
						btn4: "进口水果",
						btn5: "更多水果",
						bg: require('../assets/images/green.png'),
						img1: require("../assets/images/SHMY.png"),
						img2: 'https://m.360buyimg.com/babel/jfs/t1/140808/32/7265/124040/5f4cd17cE9c4e9f82/928fd412f90eb4c8.png',
					},
					{
						title: "肉蛋水产",
						text: "肉香四溢，大快朵颐",
						btn1: "猪肉",
						btn2: "鸡翅",
						btn3: "牛肉",
						btn4: "冷鲜肉",
						btn5: "更多肉类",
						bg: require('../assets/images/blue.png'),
						img1: require("../assets/images/seafood.png"),
						img2: 'https://m.360buyimg.com/babel/jfs/t1/130149/7/8860/50720/5f4cdbb5Ec29874ab/6ac9704ba7f83603.png',
					},
					{
						title: "蔬菜菌菇",
						text: "来自田间，清香犹存",
						btn1: "绿菜叶",
						btn2: "金针菇",
						btn3: "上海青",
						btn4: "茄子",
						btn5: "更多蔬菜",
						bg: require('../assets/images/orgin.png'),
						img1: require("../assets/images/vw2.jpg"),
						img2: 'https://m.360buyimg.com/babel/jfs/t1/118542/13/17554/50091/5f58adddEa7e8b152/e1ee7e7b6ea40866.png',
					},
					{
						title: "冷藏乳饮",
						text: "冷藏美味，乐享生活",
						btn1: "乳酸菌",
						btn2: "养乐多",
						btn3: "畅轻",
						btn4: "冠益乳",
						btn5: "更多酸奶",
						bg: require('../assets/images/purple.png'),
						img1: "https://m.360buyimg.com/babel/jfs/t1/127278/12/11274/121519/5f4e28daEc1afa94f/3f48d870bd925a23.jpg",
						img2: 'https://m.360buyimg.com/babel/jfs/t1/113400/15/16534/83770/5f48a0d2E48501648/ea47a8c7d5d681dd.png',
					},
				],
				classifys: [{
						icon: "el-icon-grape",
						title: "新鲜水果",
						text: "橙子 | 车厘子 | 火龙果 ",
					},
					{
						icon: "el-icon-dish",
						title: "肉蛋水产",
						text: "猪肉 | 鸡翅 | 牛肉",
					},
					{
						icon: "el-icon-orange",
						title: "蔬菜菌菇",
						text: "西兰花 | 白菜 | 空心菜",
					},
					{
						icon: "el-icon-ice-cream-round",
						title: "冷藏乳饮",
						text: "乳酸菌 | 冠益乳 | 养乐多",
					},
					{
						icon: "el-icon-burger",
						title: "粮油调味",
						text: "酱油 | 油 | 蚝油",
					},
					{
						icon: "el-icon-milk-tea",
						title: "酒水饮料",
						text: "雪碧 | 百事可乐 | 百威",
					},
				],
			};
		},
		components: {
			information,
			footers,
			ScrollTop
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>

<style lang="scss">
	.conten,
	.conten2,
	.conten3,
	.flexwith {
		width: 1200px;
		margin: auto;
		/* margin-bottom: 50px; */
	}

	.shopping .van-button--primary {
		color: #fff;
		background-color: white;
		border: 1px solid white;
	}

	.baozhang {
		width: 100%;
		height: 100%;
		color: #000000;
		background-color: white;
		padding: 18px 10px;
	}

	.router-link {
		text-decoration: none;
	}

	.nav_list {
		background-color: white;
		width: 800px;
		height: 400px;
		/* position: absolute; */
		z-index: 99;
		/* left: 281px;
		top: 279px; */
		display: none;
	}

	.conten3 {
		padding-top: 30px;
		margin-bottom: 70px;
		background-color: white;
	}

	.flexwith {
		padding-top: 15px;
	}

	.conten4 {
		width: 100%;
		margin-bottom: 50px;
	}

	.co-red {
		color: red;
	}

	.co-green {
		color: green;
	}

	.co-white {
		color: white;
	}

	.co-back {
		color: #000000;
	}

	.co-blue {
		color: royalblue;
	}

	#conten2 {
		float: left;
		width: 210px;
		height: 60px;
		margin-top: 20px;
		margin-left: 20px;
	}

	.nav {
		height: 30px;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}

	.bjt {
		background: url(../assets/images/bg_1.png);
		background-size: 100% 110%;
		height: 500px;
		background-color: #f0f0f8;
	}

	.block {
		width: 800px;
		margin: auto;
	}

	.fo-small-size {
		font-size: 12px;
	}

	.fo-big-size {
		font-size: 24px;
	}

	.bg-black {
		background-color: #212529;
	}

	.bg-white {
		background-color: white;
	}

	.co-gray {
		color: gray;
	}

	.fenlei {
		width: 100%;
		height: 100%;
		background-color: #f9f9fa;
	}

	.fenlei ul li {
		padding: 9.5px 10px;
	}

	.fenlei ul li a {
		color: #000000;
		text-decoration: none;
	}

	.fenlei ul li:hover {
		background-color: white;
	}

	.fenlei ul li a:hover {
		color: red;
	}

	.pz {
		width: 100%;
		height: 445px;
		background: url(../assets/images/bg_2.png);
		background-size: 100% 100%;
	}

	.good {
		margin-top: 127px;
		background-color: #f6f6f5;
		padding: 16px;
		margin-right: 20px;
		border-radius: 10px;
	}

	.good img {
		width: 150px;
		height: 150px;
	}

	.import-fruits img {
		width: 173px;
		height: 173px;
	}

	.pao {
		font-size: 30px;
		color: white;
		margin-top: 150px;
	}

	.pao1 {
		font-size: 18px;
		color: white;
		margin-top: 58px;
		margin-left: 160px;
		padding-right: 16px;
	}

	.pao:after {
		content: "";
		position: absolute;
		left: 167px;
		bottom: 222px;
		width: 90px;
		height: 4px;
		background: #fff;
		transition: all 0.4s ease;
	}

	.shopping .van-tag--danger {
		background-color: #ee0a24;
		padding: 3px;
		position: absolute;
		left: 14px;
	}

	.shopping .van-tabs--line .van-tabs__wrap {
		width: 500px;
		height: 44px;
		align-items: center;
		margin: auto;
	}

	.shopping .van-tabs__line {
		width: 55px;
		background-color: #212529;
	}

	.shopping .van-tab {
		font-size: 20px;
	}

	.conten4 {
		background-color: #f0f0f8;
	}

	.title {
		margin: 30px 0;
	}

	.green-bg {
		padding: 16px;
		color: white;
		width: 100%;
		height: 300px;
		background-size: 100% 100%;
	}

	.fruits {
		margin: 16px 0px;
	}

	.green-bg .van-button--plain.van-button--primary {
		color: #323233;
	}

	.shopping .van-swipe-item {
		padding-bottom: 16px;
		background-color: white;
	}

	.conel {
		margin: 50px 0px;
	}

	.toutiao {
		padding: 6px 16px 5px 16px;
		border-top: 3px solid red;
	}

	.toutiao ul li a {
		font-size: 13px;
		color: black;
	}

	.toutiao ul li a:hover {
		color: red;
	}

	.shopping .van-tree-select__nav-item {
		padding: 23.5px 12px;
	}

	.cok {
		color: gray;
	}

	.cok a {
		border-left: 1px solid darkgray;
		text-decoration: none;
		color: black;
	}

	.shopping [class*=" el-icon-"],
	[class^="el-icon-"] {
		font-family: element-icons !important;
		speak: none;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		vertical-align: baseline;
		display: inline-block;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
