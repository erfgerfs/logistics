<template>
	<view>
		<view class="inputView">
			<text class="leftTitle">{{leftTitle}}</text>
			<input v-if="type == 'text'" class="rightInput" type="text" :password="password" :name="name"
				v-model="value" :placeholder="placeholder" />
			<input v-if="type == 'number'" class="rightInput" type="number" :password="password" :name="name"
				v-model="value" :placeholder="placeholder" />
			<input v-if="type == 'idcard'" class="rightInput" type="idcard" :password="password" :name="name"
				v-model="value" :placeholder="placeholder" />

			<input v-if="type == 'digit'" class="rightInput" type="digit" :password="password" :name="name"
				v-model="value" :placeholder="placeholder" />
			<input v-if="type == 'tel'" class="rightInput" type="tel" :password="password" :name="name" v-model="value"
				:placeholder="placeholder" />
			<input v-if="type == 'safe-password'" class="rightInput" type="safe-password" :password="password"
				:name="name" v-model="value" :placeholder="placeholder" />
			<input v-if="type == 'nickname'" class="rightInput" type="nickname" :password="password" :name="name"
				v-model="value" :placeholder="placeholder" />

			<!-- 是否带右标题 -->
			<text v-if="rigTitle.length" class="rightTitle">{{rigTitle}}</text>
		</view>

		<view class="line"></view>
	</view>
</template>

<script>
	export default {

		props: {

			// 输入框input类型
			type: {
				type: String,
				default: "text"
			},
			// 是否密码输入框
			password: {
				type: Boolean,
				default: false
			},

			// 左边标题栏
			leftTitle: {
				type: String,
				default: ""
			},
			// 右边标题栏
			rigTitle: {
				type: String,
				default: ""
			},
			// 默认输入占位符
			placeholder: {
				type: String,
				default: ""
			},
			// 输入框name
			name: {
				type: String,
				default: ""
			},
			// 选择输入框值
			value: {
				type: String,
				default: ""
			},

		},
		data() {
			return {

			}
		},
		methods: {


		}

	}
</script>

<style scoped>
	.inputView {
		flex-direction: row;
		display: flex;
		height: 50px;
		align-items: center;
		width: 100%;
	}





	.leftTitle {
		margin-left: 12px;
		width: 68px;
		font-size: 28rpx;
		color: #333333;
	}



	.rightInput {
		width: calc(100vw - 106px);
		font-size: 28rpx;
		height: 50px;
		color: #161616;
	}

	.rightTitle {
		margin-left: -50px;
		width: 40px;
		font-size: 28rpx;
		color: #666666;
		text-align: right;
	}



	.line {
		width: 90%;
		height: 2rpx;
		margin-left: -2rpx;
		background-color: #f8f8f8;
		margin-left: 5%;

	}
</style>