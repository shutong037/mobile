<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<span class="span1">{{id}}</span>
	<van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant';

export default {
  name: 'Home',
  components: {
    HelloWorld,
	[Button.name]: Button,
  },
  data () {
	return {
		id: '我是测试数据'
	}
  }
}
</script>

<style scoped="scoped">
	.span1{
		display: block;
		width: 1rem;
		height: 1rem;
		font-size: 0.24rem;
		background-color: #0570DB;
	}
</style>