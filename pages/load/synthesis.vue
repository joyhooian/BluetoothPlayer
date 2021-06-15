<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" isBack=true>
			<block slot="content"><text class="text-bold">合成</text></block>
		</cu-custom>

		<form>
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" placeholder="请输入要合成的文字" :value="text" adjust-position=true
					style="height: 300rpx;" @input="InputText"></textarea>
			</view>
		</form>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 历史记录
			</view>
			<view v-if="history.length > 0" class="action">
				<button class="cu-btn round line-gray sm" @tap="clearHistory"><text class="cuIcon-delete text-grey">清空</text></button>
			</view>
		</view>

		<view v-if="history.length == 0" class="cu-bar bg-white solid-bottom">
			<view class="action text-grey">
				(空)
			</view>
		</view>

		<view v-else class="cu-list menu">
			<view v-for="(item, index) in history" :key="index" class="cu-item arrow" @click="replaceText" :id="index">
				<view class="content">
					<text class="text-grey">{{item.length>18?item.slice(0,18) + '...':item}}</text>
				</view>
			</view>
		</view>

		<view class="bottomBox">
			<view class="flex justify-center">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="Upload">
					<text v-if="isLoading" class="cuIcon-loading1 cuIconfont-spin"></text>
					<text v-else class="text-sm">开始合成</text>
				</button>
			</view>
		</view>

		<view v-if="isShowConfirm" class="cu-modal show">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end text-bold">
					<view class="content">提示</view>
				</view>
				<view class="padding-xl bg-white text-lg">
					是否清空输入框内容并替换为历史文本？
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-red text-red" @tap="replaceCancle">取消</button>
						<button class="cu-btn bg-red margin-left" @tap="replaceConfirm">确定</button>
					</view>
				</view>
			</view>
		</view>
		
		<view v-if="isClearConfirm" class="cu-modal show">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end text-bold">
					<view class="content">提示</view>
				</view>
				<view class="padding-xl bg-white text-lg">
					是否清空历史记录？
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-red text-red" @tap="clearCancle">取消</button>
						<button class="cu-btn bg-red margin-left" @tap="clearConfirm">确定</button>
					</view>
				</view>
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
				synthCount: 0,
				history: [],
				text: '',
				isShowConfirm: false,
				isClearConfirm: false,
				replaceIndex: null
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
				var reg = new RegExp("/", "g")
				this.text = this.text.replace(reg, "")
				console.log(this.text)
				var len = this.history.unshift(this.text)
				if (len > 5) {
					this.history.splice(5, 1)
					len = 5
				}
				wx.setStorage({
					key: 'synthCount',
					data: len
				})
				var i = len
				this.history.forEach((item) => {
					wx.setStorage({
						key: 'synth' + i,
						data: item
					})
					i--
				})
				this.synthCount = len
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
					fail: () => {
						uni.showToast({
							title: "合成失败！",
							icon: "none"
						})
					},
					complete: () => {
						uni.hideLoading()
						setTimeout(() => {
							uni.navigateBack()
						}, 1000)
					}
				})
			},
			InputText(e) {
				this.text = e.detail.value
				console.log(this.text)
			},
			replaceText(e) {
				this.replaceIndex = Number(e.currentTarget.id)
				if (this.text.length != 0) {
					this.isShowConfirm = true
				} else {
					this.replaceTextImpl()
				}
			},
			replaceTextImpl() {
				this.text = this.history[this.replaceIndex]
			},
			replaceCancle() {
				this.isShowConfirm = false
			},
			replaceConfirm() {
				this.isShowConfirm = false
				this.replaceTextImpl()
			},
			clearHistory() {
				this.isClearConfirm = true
			},
			clearConfirm() {
				this.isClearConfirm = false
				this.history.length = 0
				this.synthCount = 0
				wx.setStorage({
					key: 'synthCount',
					data: 0
				})
			},
			clearCancle() {
				this.isClearConfirm = false
			}
			
		},
		onShow() {
			wx.getStorage({
				key: 'synthCount',
				success: (res) => {
					console.log("获取到合成文字历史记录个数： " + res.data)
					this.synthCount = Number(res.data)
					for (var i = this.synthCount; i > 0; i--) {
						wx.getStorage({
							key: 'synth' + i,
							success: (res) => {
								this.history.push(res.data)
							}
						})
					}
				},
				fail: () => {
					console.log("未建立合成文字历史记录存储，新建存储")
					this.synthCount = 0
					wx.setStorage({
						key: 'synthCount',
						data: 0
					})
				}
			})
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
