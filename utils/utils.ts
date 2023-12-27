export const utils = {
	toast(title: string = '数据加载失败') {
		uni.showToast({
			title
		})
	}
}

uni.utils = utils
