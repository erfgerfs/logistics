<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">title</text>
			<button @click="add">登录</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import { login } from '@/api/login'
// import { utils } from '../../utils/utils'

const add = async () => {
	const res = await login({
		account: 'xbsj001',
		password: '123456'
	})
	if (res.data.code == 200) {
		console.log(res.data.data)
	} else {
		uni.utils.toast()
	}
	// console.log(res)
}
</script>

<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
