<template>
	<div class="divider">
	    <!-- enter(i)  i就是索引 -->
	    <div v-for="(v,i) in list" :key="i" @mouseover="enter(i)" @mouseout="isHide=false" class="demo">
	      <strong>
	        {{v.name}}
	        <div v-show="isShowssss===i">   <!-- 如：1===1 就显示对应的内容，不至于全部显示 -->
	          <ul v-for="(item,k) in v.itemlist" :key="k" v-show="isHide">
	            <li>
	              <div>{{item.type}}</div>
	              <div>{{item.name}}</div>
	              <div>{{item.start}}</div>
	              <div>{{item.end}}</div>
	            </li>
	          </ul>
	        </div>
	      </strong>
	    </div>
	  </div>
</template>

<script>
	export default {
	  data() {
	    return {
	      isHide: false, //默认隐藏
	      isShowssss: 0, //索引
	      list: [
	        {
	          name: "杭州",
	          itemlist: [
	            {
	              type: "资产杭州",
	              name: "资产总计",
	              start: 1110000,
	              end: 12223541,
	            },
	            {
	              type: "资产",
	              name: "资产总计",
	              start: 1110000,
	              end: 12223541,
	            },
	          ],
	        },
	        {
	          name: "桂林",
	          itemlist: [
	            {
	              type: "资产桂林",
	              name: "其中：客户存款",
	              start: 125000,
	              end: 12534567,
	            },
	          ],
	        },
	        {
	          name: "南宁",
	          itemlist: [
	            {
	              type: "资产南宁",
	              name: "其中：客户存款",
	              start: 125000,
	              end: 12534567,
	            },
	          ],
	        },
	        {
	          name: "柳州",
	          itemlist: [
	            {
	              type: "资产柳州",
	              name: "其中：客户存款",
	              start: 125000,
	              end: 12534567,
	            },
	          ],
	        },
	      ],
	    };
	  },
	  methods: {
	    enter(i) {
	      this.isHide = true;
	      this.isShowssss = i;//把选中索引赋值给isShowssss    
	    },
	  },
	};
</script>

<style>
	.divider {
	  margin: 200px auto;
	  width: 600px;
	}
	.demo {
	  display: flex;
	  justify-content: space-between;
	  width: 400px;
	  height: 250px;
	  border: 2px solid red;
	}
	.demo strong {
	  display: inline-block;
	  font-size: 2em;
	  /* flex: 1; */
	  background: pink;
	  width: 300px;
	  width: 100px;
	}
	ul {
	  border: 1px solid #999;
	  width: 200px;
	  height: 10%;
	}
</style>
