import uniFetch from '../utils/uni-fetch'
import { loginApi } from './types/loginApi1'

export const login = (data: loginApi) => {
	return uniFetch({
		url: '/driver/login/account',
		method: 'POST',
		data
	})
}
//验证码
export const captcha = (data: string) => {
	return uniFetch({
		url: '/driver/register/captcha',
		method: 'GET',
		data
	})
}
