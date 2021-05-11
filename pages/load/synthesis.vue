<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" isBack=true>
			<block slot="content"><text class="text-bold">合成</text></block>
		</cu-custom>

		<form>
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" placeholder="请输入要合成的文字" adjust-position=true style="height: 300rpx;" @input="InputText"></textarea>
			</view>
		</form>
		<view class="bottomBox">
			<view class="flex justify-center">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="Upload">
					<text v-if="isLoading" class="cuIcon-loading1 cuIconfont-spin"></text>
					<text v-else class="text-sm">开始合成</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import CryptoJS from "@/node_modules/crypto-js/crypto-js.js"
	const config = {
		hostUrl: "wss://tts-api.xfyun.cn/v2/tts",
		host: "tts-api.xfyun.cn",
		appid: "446df063",
		apiSecret: "YjcwNDc4NzMwZmY4ZTRiYjFiYmU3YTYy",
		apiKey: "ebcb5fe47c86bff63e21006dcc20ece4",
		text: "这是一个例子，请输入您要合成的文本",
		uri: "/v2/tts",
	}
	export default {
		data() {
			return {
				isLoading: false,
				text: ''
			}
		},
		methods: {
			Upload() {
				if (this.text === '') {
					uni.showToast({
						title: "请输入要合成的内容",
						icon: "none"
					})
					return
				}
				uni.showLoading()
				wx.downloadFile({
					url: "https://tts.jhy2015.cn/api/BluetoothPlayerTTS/TTS/" + this.text,
					success: (res) => {
						console.log(res)
						uni.showToast({
							title: "合成成功！",
							icon: "none"
						})
						setTimeout(() => {
							let pages = getCurrentPages();
							let prevPage = pages[pages.length - 2];
							prevPage.$vm.synthesisName = this.text
							prevPage.$vm.synthesisPath = res.tempFilePath
							console.log(prevPage)
						}, 100)
					},
					complete: () => {
						uni.hideLoading()
					},
					fail: () => {
						uni.showToast({
							title: "合成失败！",
							icon: "none"
						})
					}
				})
				setTimeout(() => {
					uni.navigateBack()
				}, 1000)
			},
			InputText(e) {
				this.text = e.detail.value
				console.log(this.text)
			}
		}
	}
</script>

<style>
	.bottomBox {
		position: fixed;
		margin: auto;
		bottom: 0rpx;
		left: 0;
		right: 0;
	}
</style>
