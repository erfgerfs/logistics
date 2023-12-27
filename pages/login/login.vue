<template>
	<view class="box1">
		<view class="box">
			<h4>神领快递</h4>
		</view>

		<view class="cll">
			<view class="">
				<h1 class="hh">{{ a.a1 == true ? '手机号登录' : '账号登录' }}</h1>
			</view>
			<view class="" style="display: flex">
				<span class="zh">
					{{ a.a1 == false ? '手机号登录' : '账号登录' }}
				</span>
				<p @click="add">></p>
				<!-- <image src="../../static/右三角 (1)(1).png" mode=""></image> -->
			</view>
		</view>
		<view class="" v-if="a.a1 == true">
			<uni-forms :modelValue="formData" :rules="rules">
				<uni-forms-item name="name1">
					<input type="text" style="padding: 20px" v-model="formData.name1" placeholder="请输入账号" />
				</uni-forms-item>
				<uni-forms-item name="pas">
					<input type="password" style="padding: 20px" v-model="formData.pas" placeholder="请输入密码" />
				</uni-forms-item>
			</uni-forms>
			<button @click="submitForm" class="dl">登录</button>
		</view>
		<view class="" v-else>22</view>
	</view>
</template>

<script setup lang="ts">
import { login } from '@/api/login'
import { ref, reactive } from 'vue'

const formData = reactive({
	name1: 'xbsj001',
	pas: '123456'
})
const rules = reactive({
	name1: {
		rules: [
			{
				format: 'name1',
				errorMessage: '请输入正确的邮箱地址'
			}
		]
	},
	pas: {
		rules: [
			{
				format: 'pas',
				errorMessage: '请输入正确的邮箱地址'
			}
		]
	}
})
// const account = ref(formData.name1)
// const password = ref(formData.pas)

const submitForm = async () => {
	const res = await login({
		account: formData.name1,
		password: formData.pas
	})
	if (res.data.code == 200) {
		console.log(res.data.data)
	} else {
		uni.utils.toast()
	}
}

const a = reactive({
	a1: true
})
const add = () => {
	// console.log(11)
	a.a1 = !a.a1
	console.log(a)
}
</script>

<style lang="scss">
.dl {
	width: 309px;
	height: 50px;
	background: #fadcd9;
	border-radius: 24.77px;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.uni-btn-v {
	width: 100%;
	height: auto;
}

.botBtn {
	width: 90%;
	margin-top: 36px;
}

.tipText {
	width: 100%;
	margin-left: 0px;
	text-align: center;
	color: #666666;
	margin-top: 36px;
	margin-bottom: 36px;
	font-size: 28rpx;
}

.box1 {
	width: 400px;
	height: 812px;
}
.hh {
	width: 120px;
	height: 33px;
	font-family: PingFangSC-SNaNpxibold;
	font-weight: 600;
	font-size: 24px;
	color: #2a2929;
	letter-spacing: 0;
}
.zh {
	width: 64px;
	height: 22px;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	font-size: 16px;
	color: #ef4f3f;
	letter-spacing: 0;
	text-align: right;
}

.box {
	width: 100vw;
	text-align: center;
}
.cll {
	// margin: 0 32rpx;
	padding: 0 32rpx;
	// width: 748rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
