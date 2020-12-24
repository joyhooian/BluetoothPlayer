<template name="setting">
	<view>
		<cu-custom bgColor="bg-gradual-red">
			<block slot="content">设置</block>
		</cu-custom>
		<!-- 上部操作栏 -->
		<view class="cu-bar bg-white shadow shadow-blur radius-bottom" :style="{position: 'fixed', left: 0, width: '100%', top:CustomBar + 'px', zIndex: 1000}">
			<!-- 左侧操作按钮 -->
			<view class="action">
				<button v-if="!isSettingLight" class="cu-btn round lines-red" @click="Delete"><text>删除</text></button>
				<button v-else class="cu-btn round lines-black sm" @click="LightBack"><text class="text-sm">返回</text></button>
			</view>
			<view class="content text-bold"></view>
			<view class="action">
				<button v-if="!isSettingLight" @click="Mute" class="cu-btn round margin-right-xs" :class="isMuted?'bg-red':'lines-black'"><text>静音</text></button>
				<button v-if="!isSettingLight" @click="All" class="cu-btn round margin-right-xs" :class="isAll?'bg-red':'lines-black'"><text>循环</text></button>
				<button v-if="!isSettingLight" @click="Single" class="cu-btn round margin-right-xs" :class="isSingle?'bg-red':'lines-black'"><text>单曲</text></button>
				<button v-if="isSettingLight" id="MODE01" @click="SelectLight" :class="lightMode=='MODE01'?'bg-red':'lines-black'" class="cu-btn round sm margin-right-xs"><text class="text-xs">模式一</text></button>
				<button v-if="isSettingLight" id="MODE02" @click="SelectLight" :class="lightMode=='MODE02'?'bg-red':'lines-black'" class="cu-btn round sm margin-right-xs"><text class="text-xs">模式二</text></button>
				<button v-if="isSettingLight" id="MODE03" @click="SelectLight" :class="lightMode=='MODE03'?'bg-red':'lines-black'" class="cu-btn round sm margin-right-xs"><text class="text-xs">模式三</text></button>
				<button v-if="isSettingLight" id="MODE04" @click="SelectLight" :class="lightMode=='MODE04'?'bg-red':'lines-black'" class="cu-btn round sm margin-right-xs"><text class="text-xs">模式四</text></button>
				<button v-if="!isSettingLight" @click="LightMode" class="cu-btn round lines-black"><text>灯模式</text></button>
				<button v-if="isSettingLight" @click="UploadLightMode" class="cu-btn round lines-black sm"><text class="text-sm">确定</text></button>
			</view>
		</view>
		<!-- 文件列表 -->
		<view class="box" style="margin-bottom: 260rpx; margin-top: 120rpx;">
			<view class="cu-list menu margin-top sm-border">
				<view class="cu-item" v-for="(file, index) in fileList" :key="index">
					<view class="content">
						<text class="text-lg">{{"文件 " + (index + 1)}}</text>
					</view>
					<view class="action">
						<view class="flex padding align-center">
							<button class="cu-btn sm round bg-red margin-right-sm" :id="index" @click="Play">试听</button>
							<radio :id="index" class="checked" :checked="isSelected==index?true:false" @click="Select"></radio>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部操作按钮 -->
		<view class="bottomBox">
			<view class="flex justify-center">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="DownLoadData">
					<text v-if="isDownloading" class="cuIcon-loading1 cuIconfont-spin"></text><text v-else class="text-sm">读取文件</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "setting",
		data() {
			return {
				devices: [], //设备列表
				primaryServiceUUID: '', //主服务UUID
				readUUID: '', //通知UUID
				writeUUID: '', //写入UUID
				isSettingLight: false,
				isDownloading: false,
				isSelected: null,
				fileList: [], //文件列表
				lightMode: '',
				valueListen: '', //监听的数据
				isMuted: false,
				isSingle: false,
				isAll: false
			}
		},
		methods: {
			//灯模式返回
			LightBack() {
				this.isSettingLight = false
			},
			//下载文件
			DownLoadData() {
				if(!this.isDownloading) {
					this.isDownloading  = true
					console.log("下载文件")
					wx.notifyBLECharacteristicValueChange({
						deviceId: this.devices[0].deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.readUUID,
						state: true,
						success: (res) => {
							wx.showToast({
								title: "打开监听Notify成功",
								icon: "none"
							})
						},
						fail: (res) => {
							wx.showToast({
								title: "打开监听Nofity失败",
								icon: 'none'
							})
						}
					})	
					wx.onBLECharacteristicValueChange((res) => {
						wx.offBLEConnectionStateChange()
						this.valueListen = this.ArrayBufferToMessage(res.value)
						if (this.valueListen.indexOf("AT+FILE") != -1) {
							this.fileList = []
							let fileNum = parseInt(this.valueListen.replace(/[^0-9]/ig,""))
							for (let cnt = 1 ; cnt <= fileNum; cnt++) {
								this.fileList.push(cnt)
							}
							wx.showToast({
								title: "成功读取" + fileNum + "个文件",
								icon: "none"
							})
						}
						else {
							wx.showToast({
								title: "未读取到文件, 请重新读取",
								icon: "none"
							})
						}
						console.log('特征值 ' + res.characteristicId + '已更新, ' + '现在是' + this.valueListen)
					})
					setTimeout(() => {
						//写特征值
						wx.writeBLECharacteristicValue({
							deviceId: this.devices[0].deviceId,
							serviceId: this.primaryServiceUUID,
							characteristicId: this.writeUUID,
							value: this.MessageToArrayBuffer("AT+FILEREAD"),
							success: (res) => {
								console.log("发送成功, 发送内容: AT+FILEREAD")
								wx.showToast({
									title: "发送成功",
									icon: "none"
								})
							},
							fail: () => {
								console.log("发送失败")
								wx.showToast({
									title: "发送失败",
									icon: "none"
								})
							}
						})
					}, 100)
					setTimeout(() => {
						this.isDownloading = false
						wx.notifyBLECharacteristicValueChange({
							deviceId: this.devices[0].deviceId,
							serviceId: this.primaryServiceUUID,
							characteristicId: this.readUUID,
							state: false
						})
						wx.offBLEConnectionStateChange()
					}, 500)
				}
			},
			//打开灯模式二级菜单
			LightMode() {
				console.log("灯模式")
				this.isSettingLight = true
			},
			//选择灯模式
			SelectLight(e) {
				this.lightMode = e.currentTarget.id
				console.log(this.lightMode)
			},
			//下发灯模式信息
			UploadLightMode() {
				console.log("更新灯模式")
				var message = "AT+" + this.lightMode
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: this.MessageToArrayBuffer(message),
					success: (res) => {
						console.log("发送数据成功 " + res.errMsg)
						wx.showToast({
							title: "更新灯模式成功",
							icon: "none"
						})
					},
					fail: (res) => {
						console.log("发送数据失败 " + res.errMsg)
						wx.showToast({
							title: "更新灯模式失败",
							icon: "none"
						})
					}
				})
			},
			//静音或取消静音
			Mute() {
				//如果处于静音模式就取消静音, 下发取消静音指令
				if (this.isMuted){
					this.isMuted = false
					getApp().globalData.isMuted = this.isMuted
					console.log("取消静音")
					var message = "AT+MUTEDIS"
					wx.writeBLECharacteristicValue({
						deviceId: this.devices[0].deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.writeUUID,
						value: this.MessageToArrayBuffer(message),
						success: (res) => {
							console.log("发送数据成功 " + res.errMsg)
							wx.showToast({
								title: "取消静音成功",
								icon: "none"
							})
						},
						fail: (res) => {
							console.log("发送数据失败 " + res.errMsg)
							wx.showToast({
								title: "取消静音失败",
								icon: "none"
							})
						}
					})
				} else { //下发静音指令
					console.log("静音")
					var message = "AT+MUTEEN"
					wx.writeBLECharacteristicValue({
						deviceId: this.devices[0].deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.writeUUID,
						value: this.MessageToArrayBuffer(message),
						success: (res) => {
							console.log("发送数据成功 " + res.errMsg)
							wx.showToast({
								title: "静音成功",
								icon: "none"
							})
							this.isMuted = true
							getApp().globalData.isMuted = this.isMuted
						},
						fail: (res) => {
							console.log("发送数据失败 " + res.errMsg)
							wx.showToast({
								title: "静音失败",
								icon: "none"
							})
						}
					})
				}
			},
			//下发单曲指令
			Single() {
				console.log("单曲")
				var message = "AT+ONLY"
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: this.MessageToArrayBuffer(message),
					success: (res) => {
						console.log("发送数据成功 " + res.errMsg)
						wx.showToast({
							title: "设置单曲播放成功",
							icon: "none"
						})
						this.isSingle = true
						this.isAll = false
						getApp().globalData.isSingle = this.isSingle
						getApp().globalData.isAll = this.isAll
					},
					fail: (res) => {
						console.log("发送数据失败 " + res.errMsg)
						wx.showToast({
							title: "设置单曲播放失败",
							icon: "none"
						})
					}
				})
			},
			//下发循环指令
			All() {
				console.log("循环")
				var message = "AT+ALL"
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: this.MessageToArrayBuffer(message),
					success: (res) => {
						console.log("发送数据成功 " + res.errMsg)
						wx.showToast({
							title: "设置循环播放成功",
							icon: "none"
						})
						this.isSingle = false
						this.isAll = true
						getApp().globalData.isSingle = this.isSingle
						getApp().globalData.isAll = this.isAll
					},
					fail: (res) => {
						console.log("发送数据失败 " + res.errMsg)
						wx.showToast({
							title: "设置循坏播放失败",
							icon: "none"
						})
					}
				})
			},
			//下发删除指令
			Delete() {
				console.log("删除")
				var message = "AT+DLE" + ((this.isSelected+1)<10?'0'+(this.isSelected+1):(this.isSelected+1))
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: this.MessageToArrayBuffer(message),
					success: (res) => {
						console.log("发送数据成功 " + res.errMsg)
						wx.showToast({
							title: "删除文件成功",
							icon: "none"
						})
					},
					fail: (res) => {
						console.log("发送数据失败 " + res.errMsg)
						wx.showToast({
							title: "删除文件失败",
							icon: "none"
						})
					}
				})
				this.fileList.splice(this.isSelected, 1)
				this.isSelected = null
			},
			//选中文件单选框方法
			Select(e) {
				this.isSelected = parseInt(e.currentTarget.id)
				console.log("文件" + (this.isSelected + 1) + "被选中")
			},
			//试听方法
			Play(e) {
				let playIndex = ('0' + (parseInt(e.currentTarget.id) + 1)).slice(-2)
				let cmd = "AT+PLAY" + playIndex
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: this.MessageToArrayBuffer(cmd),
					success: (res) => {
						console.log("成功发送试听命令" + res.errMsg)
						wx.showToast({
							title: "成功发送试听命令",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("发送试听命令失败" + res.errMsg)
						wx.showToast({
							title: "发送试听命令失败",
							icon: 'none'
						})
					}
				})
			}
		},
		created() {
			this.devices = getApp().globalData.devices
			this.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			this.readUUID = getApp().globalData.readUUID
			this.writeUUID = getApp().globalData.writeUUID
			this.isMuted = getApp().globalData.isMuted
			this.isSingle = getApp().globalData.isSingle
			this.isAll = getApp().globalData.isAll
			//在页面创建时打开BLE Notify监听
			console.log(this)
		}
	}
</script>

<style>
.bottomBox {
		position: fixed;
		margin: auto;
		bottom: 60rpx;
		left: 0;
		right: 0;
	}
</style>
