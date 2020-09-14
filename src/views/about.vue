
<template>
  <div></div>
</template>
 
<script>
export default {
  data: () => ({
    msg: "我是子组件的数据！",
  }),
  methods: {
    sonMethod() {
      console.log("我是子组件的方法！");
    },
  },
  computed: {},
  created() {},
};
</script>