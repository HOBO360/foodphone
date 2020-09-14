<template>
	<div class>
		<div id="Restaurant-l" style="margin-top: 20px;">
			<van-row type="flex" justify="center" style="margin-bottom: 15px;">
				<van-col span="2">
					<van-button round type="default" @click="restbtn1">早餐</van-button>
				</van-col>
				<van-col span="2">
					<van-button round type="default" @click="restbtn2">午餐</van-button>
				</van-col>
				<van-col span="2">
					<van-button round type="default" @click="restbtn3">下午茶</van-button>
				</van-col>
				<van-col span="2">
					<van-button round type="default" @click="restbtn4">晚餐</van-button>
				</van-col>
				<van-col span="2">
					<van-button round type="default" @click="restbtn5">夜宵</van-button>
				</van-col>
			</van-row>
			<div>
				<div class="myresta" v-show="myres" v-for="(myrestar,index) in myrestars" :key="index.title">
					<div class="myrest-img">
						<van-image width="100%" height="200" style="display: block;" :src="myrestar.imgurl" />
					</div>
					<div class="mytext1">{{myrestar.title}}</div>
					<div class="mytext2">{{myrestar.text}}</div>
				</div>
				<div class="myresta" v-show="myres1" v-for="(myrestaa,index) in myrestaas" :key="index.title">
					<div class="myrest-img">
						<van-image width="100%" height="180" style="display: block;" :src="myrestaa.imgurl" />
					</div>
					<div class="mytext1">{{myrestaa.title}}</div>
					<div class="mytext2">{{myrestaa.text}}</div>
				</div>
				<div class="myresta" v-show="myres2" v-for="(myrestab,index) in myrestabs" :key="index.title">
					<div class="myrest-img">
						<van-image width="100%" height="180" style="display: block;" :src="myrestab.imgurl" />
					</div>
					<div class="mytext1">{{myrestab.title}}</div>
					<div class="mytext2">{{myrestab.text}}</div>
				</div>
				<div class="myresta" v-show="myres3" v-for="(myrestac,index) in myrestacs" :key="index.title">
					<div class="myrest-img">
						<van-image width="100%" height="180" style="display: block;" :src="myrestac.imgurl" />
					</div>
					<div class="mytext1">{{myrestac.title}}</div>
					<div class="mytext2">{{myrestac.text}}</div>
				</div>
				<div class="myresta" v-show="myres4" v-for="(myrestad,index) in myrestads" :key="index.title">
					<div class="myrest-img">
						<van-image width="100%" height="180" style="display: block;" :src="myrestad.imgurl" />
					</div>
					<div class="mytext1">{{myrestad.title}}</div>
					<div class="mytext2">{{myrestad.text}}</div>
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
				myres2: false,
				myres3: false,
				myres4: false,
				hover: false,
				myrestas: [{
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
						imgurl: require("@/assets/images/caip4.jpg"),
						title: "糖醋排骨",
						text1: "507评论 34609人气",
						text2: "翻糖MM-白之猫猫",
						text3: "12步 / 大概90分钟",
						text4: "炒 / 酸甜味",
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
						imgurl: require("@/assets/images/wuc1.jpg"),
						title: "橄榄菜豆角，酸爽可口，超级开胃下饭",
						text: "橄榄菜豆角，是一道很常见的家常菜。在我家，桌上一旦摆了一道橄榄菜炒豆角，我分分钟钟就能把它连同米饭一扫而光。在做橄榄菜炒豆角的时候，加点猪肉末进去炒，味道会更香。记得还有一点，炒的时候，豆角一定要焯熟，这样吃着才放心。",
					},
					{
						imgurl: require("@/assets/images/wuc2.jpg"),
						title: "豆腐干炒芹菜让你吃出家的味道",
						text: "豆腐干炒芹菜是一道常见的家常菜，味道鲜美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，家里来客人的时候，做上一道豆腐干炒芹菜，既美味又有面子。如果你对这道豆腐干炒芹菜感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
					{
						imgurl: require("@/assets/images/wuc3.jpg"),
						title: "醋泡花生米，酸甜可口的下酒菜可口营养美味",
						text: "喝酒的时候总要有点花生米做下酒菜才有感觉，吃过蒜香花生米、咸水花生米，那你有尝过醋泡花生米吗？醋泡花生米是以花生米为主料，再配上醋、白砂糖和酱油制作而成的。醋泡花生米酸甜可口，特别适合做下酒菜，做法简单方便，自己在家也可以轻松制作。",
					},
					{
						imgurl: require("@/assets/images/wuc4.jpeg"),
						title: "台式卤肉饭，经典台湾好味道",
						text: "台式卤肉饭已经成为内地最耳熟能详的一道台湾风味小吃。洁白香软的米饭配上入口即化的卤肉，被酱汁浸透的米饭真的超级下饭，加上青菜的点缀，少许的油脂也能轻松被化解。卤肉饭做法比较简单，一个人做起来也很方便，除了卤肉，还能放入香干或是鸡蛋一起卤，口感更加丰富。",
					},
					{
						imgurl: require("@/assets/images/wuc5.jpg"),
						title: "糖醋咕噜肉，就是这个味道，酸酸甜甜，酥酥脆脆",
						text: "糖醋咕噜肉孩子非常喜欢吃，外表酥脆，内里香嫩多汁，裹上酸酸甜甜的糖醋汁，甭提多好吃了。主要食材，猪的里脊肉，此部位的肉比较鲜嫩。先将猪里脊肉切条腌制好，下锅油炸至金黄酥脆，调好糖醋汁下锅煎熟，油炸好的猪里脊倒进去翻炒均匀，出锅，撒上芝麻葱丝即可。",
					},
					{
						imgurl: require("@/assets/images/wuc6.jpg"),
						title: "记忆中的味道——大头菜咸菜",
						text: "在我小的时候，母亲每次在早上给我做好早点摆桌上时，都会为我特意准备一叠自制的开胃下饭的大头菜咸菜，喝一口粥，吃一口大头菜咸菜，那滋味真的好吃到无法用语言形容。母亲做的大头菜咸菜，直到我长大后仍对它的味道难以忘怀，它早已成为了我心中的一部分",
					},
					{
						imgurl: require("@/assets/images/wuc7.jpg"),
						title: "一锅”重口味”的汤——榴莲煲鸡",
						text: "榴莲这种水果闻起来臭臭的，但是吃起来却很香。我不太喜欢它的味道，但我爸爸他老人家最爱吃这种水果了。每次我老爸从外地回老家一趟，我都会给买他最爱吃的榴莲，榴莲肉吃完了，剩下的榴莲壳留下来。因为我准备为他煮一道关于榴莲的靓汤——榴莲煲鸡汤来给他尝尝",
					},
					{
						imgurl: require("@/assets/images/wuc8.jpg"),
						title: "牦牛肉干让你过足嘴瘾",
						text: "耗牛肉干是一道著名的小吃，色香味美，嚼劲十足。且取材简单，制作方法也很方便，深受人们的喜爱，家里来客人的时候，做上一碟耗牛肉干，既美味又有面子。如果你对这道菜感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
				],
				myrestabs: [{
						imgurl: require("@/assets/images/xiawuc1.jpeg"),
						title: "拔丝泡芙塔，殿堂级别的西式甜点",
						text: "拔丝泡芙塔常见于西方的婚礼上，多用于宴请宾客等大型场合。拔丝泡芙塔造型讲究，颜色金黄炫丽，需要细心耐心的制作。泡芙是常见的西点之一，外皮酥脆，里面却松软无比，奶油是泡芙里的常见搭配，一口下去爆发出的浓郁奶油香，让人实在是停不下来。这次制作的是原味的拔丝泡芙塔，口感与味道更加纯粹。",
					},
					{
						imgurl: require("@/assets/images/xiawuc2.jpg"),
						title: "西式糕点之马卡龙，带你感受西方甜点的美味",
						text: "马卡龙，西方的小圆饼干，它诞生于浪漫的法国国度。因其外酥里软，软糯馨香，入口即化，被誉为甜品界的&quot;皇后”。不知道你们喜不喜欢吃马卡龙，我猜女孩子们应该很喜欢吃吧。在下午茶时光里，马卡龙搭配咖啡和红茶，绝对是一种享受。",
					},
					{
						imgurl: require("@/assets/images/xiawuc3.jpg"),
						title: "拥有云朵般外表的甜点——云彩面包",
						text: "云彩面包，正如她的名字一样，它拥有云彩般的外表与柔软。当你轻轻用叉子按压一下，如云朵般的柔软回弹。当你慢慢的褪去它表面的外衣时，如云朵般的纯洁展现在你眼前。在高颜值的外表下，它犹如一件艺术品，使你不忍心动口去吃它",
					},
					{
						imgurl: require("@/assets/images/xiawuc4.jpg"),
						title: "雪绵豆沙，一个拥有云朵般外表的甜点",
						text: "雪绵豆沙，这道菜可是大有来头的，它曾是清朝宫廷的名菜之一。直到现在这道菜已经传承了百年历史。关于它的做法，主要由蛋清，豆沙，白糖等食材制作而成的。当豆沙裹上一层蛋白霜，犹如云朵般的洁白与柔软。制作好的雪明豆沙，再撒上一些砂糖，更像是铺铺上一层厚厚的雪。",
					},
					{
						imgurl: require("@/assets/images/xiawuc5.jpg"),
						title: "自制饮料之泡沫咖啡，保证比奶茶店的好喝",
						text: "最近我家隔壁的奶茶店新出了一款在韩国本土最火的饮料，它就是泡沫咖啡。然后因为好奇去喝了一下，个人觉得他比普通拿铁好喝。想喝嘛，想喝的话我把秘方告诉你们吧。其实最关键的是在于咖啡这一块，咖啡加水之后一定要打发至泡沫状，要不然做不成泡沫咖啡的",
					},
					{
						imgurl: require("@/assets/images/xiawuc6.jpg"),
						title: "冻芝士蛋糕，作为夏天的下午茶是再好不过你们吧！",
						text: "冻芝士蛋糕的口味有很多，对于新手小白建议第一次做的话，还是先从原味的开始做起，夏天很热，吃普通的蛋糕可能会觉得比较腻，一款冻芝士蛋糕作为夏天的下午茶是再好不过的选择了，操作起来也不是很难，味道浓香，入口即化，非常美味",
					},
					{
						imgurl: require("@/assets/images/xiawuc7.jpg"),
						title: "奥利奥冰激淋蛋糕，奶香浓郁，入口即化",
						text: "奥利奥饼干，它承载了我高中时的记忆。我还记得那时候我经常和同学一起去学校的小卖部买它。学着电视上的奥利奥饼干广告把它扭一扭，舔一舔，特别有味。不知道你们喜不喜欢奥利奥饼干？喜欢的话，我推荐你们一款用奥利奥做的冰淇淋蛋糕，超级好吃。",
					},
					{
						imgurl: require("@/assets/images/xiawuc8.jpg"),
						title: "吃起来没有负罪感的酸奶蓝莓蛋糕",
						text: "这道蓝莓酸奶蛋糕吃起来真的是没一点负罪感了，鸡蛋，酸奶，很像是戚风蛋糕的做法，但是没有加一点油，脂肪也很低，按照自己的想法加上了一些蓝莓，口感更丰富，颜值也是超级高，很适合嘴馋的时候吃，也不用担心热量。",
					},
				],
				myrestacs: [{
						imgurl: require("@/assets/images/wanc1.jpg"),
						title: "粤菜家常菜，红烧排骨煲仔饭简单美味",
						text: "今天做的这道家常菜是红烧排骨煲仔饭，简单美味。这道煲仔饭是由猪肋排和大米一起熬煮而成的，其实这道简单美味的红烧排骨煲仔饭制作方法是十分简单易学的，下面就让我们来看看这道简单美味的红烧排骨煲仔饭是怎么制作的吧哈哈。",
					},
					{
						imgurl: require("@/assets/images/wanc2.jpg"),
						title: "一枝春红烧五花肉带你领略风味人间",
						text: "红烧五花肉是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一锅红烧五花肉，既美味又暖身子。如果你对这道红烧五花肉感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
					{
						imgurl: require("@/assets/images/wanc3.jpg"),
						title: "家常烧鱼带你领略风味人间",
						text: "烧鱼是一道常见的家常菜，香气浓郁，味道鲜美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一盘家常烧鱼，既美味又暖身子。如果你对这道家常烧鱼感兴趣的话，就赶快跟我一起来学习它的烹饪方法吧!。",
					},
					{
						imgurl: require("@/assets/images/wanc4.jpg"),
						title: "糖醋香橙排骨，给你带来满满“橙”意",
						text: "糖醋香橙排骨，一道由香橙，排骨烹饪而成的美食，凑近闻一下，浓浓橙香扑鼻，吃一口，橙肉酸甜与排骨鲜嫩在口中碰撞，产生出奇妙的味道，征服你的味蕾。想到这，你们是不是也想吃呢？想吃的话，快来跟我一起来做这道菜吧。",
					},
					{
						imgurl: require("@/assets/images/wanc5.jpg"),
						title: "麻辣火锅底料，让你不用去重庆就能吃上正宗的麻辣火锅",
						text: "要想吃火锅，就必定要选重庆的火锅，重庆的火锅具有麻而不烈，辣而不燥，口感醇厚，回味悠长的特点。下面就给大家介绍一下正宗麻辣锅底料的熬制方法，所用的材料较多，做法讲究，虽然制作比较复杂，但是保证你不会后悔，让你不用去重庆就能吃上正宗的麻辣火锅。。",
					},
					{
						imgurl: require("@/assets/images/wanc6.jpg"),
						title: "侉炖鱼，搅动你沉睡已久的味觉",
						text: "侉炖鱼，山东的传统特色菜之一。那它要怎么做呢？我现在告诉你们吧。首先草鱼洗净切块，加入葱丝，姜蒜片，盐，生抽，料酒腌制10分钟，使其更入味。然后再裹上一层鸡蛋面糊，放入油锅中炸至金黄色，炸好后与豆腐放入事先煮好的汤，煮熟即可",
					},
					{
						imgurl: require("@/assets/images/wanc7.jpg"),
						title: "喝酒人士最爱的下酒菜——家常酱猪手",
						text: "在我家，我爸每次工作完回家吃中饭时都会喝上一瓶酒，而我妈偶尔都会为他准备一盘酱猪手。现在的他几乎餐餐不离一盘酱猪手，因为那是他的最爱。由我妈亲自下厨做的酱猪手，我爸怎么可能不会喜欢呢!现在我将我家的独家秘方告诉你们，保证你们会爱上它的",
					},
					{
						imgurl: require("@/assets/images/wanc8.jpg"),
						title: "辣炒熏马肉带给你味蕾极致的享受",
						text: "辣炒熏马肉是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一碗辣炒熏马肉，既美味又暖身子。如果你对这道辣炒熏马肉感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
				],
				myrestads: [{
						imgurl: require("@/assets/images/xy1.jpg"),
						title: "盐焗鸡粉盐焗鸡好吃到让你停不下来",
						text: "盐焗鸡粉盐焗鸡是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，在冬天来上一只爽口的盐焗鸡，既美味又暖身子。香软细腻的鸡皮配上嚼劲十足的鸡肉，简直是没有人能抗拒的美味！",
					},
					{
						imgurl: require("@/assets/images/xy2.jpg"),
						title: "脆皮玉米肠让你爱不释口甜爽净",
						text: "脆皮玉米肠是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，家里来客人的时候，做上一道脆皮玉米肠，既美味又有面子。如果你对这道菜感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
					{
						imgurl: require("@/assets/images/xy3.jpg"),
						title: "简易牛杂好吃到让你根本停不下来",
						text: "简易牛杂是一道常见的家常菜，色香味美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，家里来客人的时候，做上一道简易牛杂，既美味又有面子。如果你对这道菜感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
					{
						imgurl: require("@/assets/images/xy4.jpg"),
						title: "平遥牛肉炖土豆带给你家的温馨",
						text: "平遥牛肉炖土豆是一道常见的家常菜，味道鲜美，营养丰富，取材简单，制作方法也很方便，深受人们的喜爱，家里来客人的时候，做上一道平遥牛肉炖土豆，既美味又有面子。如果你对这道菜感兴趣的话，就赶快一起来学习它的烹饪方法吧!",
					},
					{
						imgurl: require("@/assets/images/xy5.jpg"),
						title: "白灼水白菜金针菇，每吃一口都是一种享受",
						text: "水白菜，是一种常见的蔬菜，外表跟白菜一样。关于它的做法，我先介绍其中一种，即白灼水白菜金针菇，它呢比较清淡，可以说是胖友们的最爱。首先把水白菜，金针菇准备好，把它们下锅焯水一遍，然后再将老姜，沙姜，红葱头切末炒香，之后再将它与水白菜，金针菇拌着吃即可",
					},
					{
						imgurl: require("@/assets/images/xy6.jpg"),
						title: "舌尖上的美味———私房一品煲",
						text: "一品煲，就是把所有的食材放进去用砂锅炖，类似于大杂烩”。在过年的时候，我母亲经常做这道菜来宴请亲戚们，尝过的人都对它赞不绝口。那它要怎么做呢？别急，现在我就将我老妈的私家菜谱——白菜一品煲分享给你们吧，保证你们会爱上它哒~",
					},
					{
						imgurl: require("@/assets/images/xy7.jpg"),
						title: "茄子双菜花泥，营养美味易消化",
						text: "自从宝宝开始添加辅食之后，每天都要绞尽脑汁想着做什么营养又美味的辅食给宝宝，生怕宝宝营养跟不上。今天给大家介绍一款做法简单方便又营养的辅食——茄子双菜花泥。茄子双菜花泥是由番茄、菜花和西兰花煮熟后用搅拌机粉碎做成的，营养美味易消化，特别适合宝宝吃。",
					},
					{
						imgurl: require("@/assets/images/xy8.jpg"),
						title: "五香仔鸽，香味浓郁回味悠长",
						text: "鸽子是一种十分常见的鸟类，在世界各地都被广泛地饲养。鸽子肉是一种高蛋白、低脂肪、易消化的肉类食品，鸽子肉的营养价值非常高，既是鲜香美味的佳肴，又是营养滋补的佳品。今天给大家介绍一款香味浓郁、回味悠长的美食——五香仔鸽。",
					},
				],
			};
		},
		methods: {
			restbtn1() {
				this.myres = true;
				this.myres1 = false;
				this.myres2 = false;
				this.myres3 = false;
				this.myres4 = false;
			},
			restbtn2() {
				this.myres2 = false;
				this.myres3 = false;
				this.myres4 = false;
				this.myres = false;
				this.myres1 = true;
			},
			restbtn3() {
				this.myres2 = true;
				this.myres3 = false;
				this.myres4 = false;
				this.myres = false;
				this.myres1 = false;
			},
			restbtn4() {
				this.myres2 = false;
				this.myres3 = true;
				this.myres4 = false;
				this.myres = false;
				this.myres1 = false;
			},
			restbtn5() {
				this.myres2 = false;
				this.myres3 = false;
				this.myres4 = true;
				this.myres = false;
				this.myres1 = false;
			},
		},
	};
</script>


<style scoped>
	#Restaurant {
		width: 1200px;
		height: 750px;
		margin: 30px auto;
		/* background-color: #F0F0F8; */
	}

	#Restaurant-l {
		width: 1200px;
		height: 750px;
		margin: auto;
		/* background-color: #f9d5c9; */
		overflow: hidden;
		cursor: pointer;
	}

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
	}

	.myrest-l {
		width: 220px;
		height: 110px;
		padding: 15px 20px;
		transform: translateY(0%);
		transition: all 0.75s;
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
	}

	.myrest-l span {
		color: red;
		font-size: 0.75rem;
	}

	.myresta {
		width:300px;
		height: 330px;
		background-color: #f8f8f8;
		float: left;
		padding: 30px;
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
