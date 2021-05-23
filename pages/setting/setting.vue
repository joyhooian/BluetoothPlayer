<template name="setting">
	<view>
		<cu-custom bgColor="bg-gradual-red">
			<block slot="content">设置</block>
		</cu-custom>

		<!-- 上部操作栏 -->
		<view class="cu-bar">
			<view class="cu-list grid col-5">
				<view class="cu-item" @click="Reset">
					<text>恢复出厂</text>
				</view>
				<view class="cu-item" @click="ShutdownBoot">
					<text>开关机</text>
				</view>
				<view class="cu-item light" @click="TimingCancel" :class="mode===1?'bg-red':''">
					<text>定时</text>
				</view>
				<view class="cu-item light" @click="PlayWhenBoot" :class="mode===2?'bg-red':''">
					<text>上电播放</text>
				</view>
				<view class="cu-item light" @click="Mute" :class="mode===3?'bg-red':''">
					<text>到点循环</text>
				</view>
				<view class="cu-item" @click="Delete">
					<text>删除</text>
				</view>
				<view class="cu-item" @click="Last">
					<text>上一曲</text>
				</view>
				<view class="cu-item" @click="Next">
					<text>下一曲</text>
				</view>
				<view class="cu-item" @click="Stop">
					<text>停止</text>
				</view>
				<view class="cu-item" @click="LightMode">
					<text>灯模式</text>
				</view>
				<view class="cu-item" @click="VolumeIncrease">
					<text>音量加</text>
				</view>
				<view class="cu-item" @click="VolumeDecrease">
					<text>音量减</text>
				</view>
			</view>
		</view>
		<!-- 灯模式模态框 -->
		<view class="cu-modal" :class="isSettingLight?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">选择灯模式</view>
				</view>
				<radio-group class="block" @change="ChangeLightMode">
					<view class="cu-list menu text-left">
						<view class="cu-item">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">模式一</view>
								<radio class="round" :class="lightMode=='MODE01'?'checked':''" :value="'MODE01'"
									:checked="lightMode=='MODE01'?true:false"></radio>
							</label>
						</view>
						<view class="cu-item">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">模式二</view>
								<radio class="round" :class="lightMode=='MODE02'?'checked':''" :value="'MODE02'"
									:checked="lightMode=='MODE02'?true:false"></radio>
							</label>
						</view>
						<view class="cu-item">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">模式三</view>
								<radio class="round" :class="lightMode=='MODE03'?'checked':''" :value="'MODE03'"
									:checked="lightMode=='MODE03'?true:false"></radio>
							</label>
						</view>
						<view class="cu-item">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">模式四</view>
								<radio class="round" :class="lightMode=='MODE04'?'checked':''" :value="'MODE04'"
									:checked="lightMode=='MODE04'?true:false"></radio>
							</label>
						</view>
					</view>
				</radio-group>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-red text-red" @tap="LightBack">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="UploadLightMode">确定</button>
					</view>
				</view>
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
							<radio :id="index" class="checked" :checked="(isSelected - 1)==index?true:false"
								@click="Select"></radio>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部操作按钮 -->
		<view class="bottomBox">
			<view class="flex justify-center">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="DownLoadData">
					<text v-if="isDownloading" class="cuIcon-loading1 cuIconfont-spin"></text><text v-else
						class="text-sm">读取文件</text>
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
				lightMode: 'MODE01',
				valueListen: '', //监听的数据
				isMuted: false,
				isSingle: false,
				isAll: false,
				isPlayWhenBoot: false,
				isTimingCancel: false,
				mode: getApp().globalData.mode
			}
		},
		methods: {
			//灯模式返回
			LightBack() {
				this.isSettingLight = false
			},
			//选择灯模式方法
			ChangeLightMode(e) {
				this.lightMode = e.detail.value
				console.log(this.lightMode)
			},
			//下载文件
			DownLoadData() {
				console.log("下载文件")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				
				if (this.isDownloading) {
					return
				}
				
				uni.showToast({
					title: '请稍后...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				
				this.isDownloading = true
				wx.notifyBLECharacteristicValueChange({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.readUUID,
					state: true,
					success: (res) => {
						uni.showToast({
							title: "打开监听Notify成功",
							icon: "none"
						})
					},
					fail: (res) => {
						uni.showToast({
							title: "打开监听Nofity失败",
							icon: 'none'
						})
					}
				})
				wx.onBLECharacteristicValueChange((res) => {
					wx.offBLECharacteristicValueChange()
					let u8Arr = new Uint8Array(res.value)
					console.log(u8Arr)
					let testArr = [0x7E, 0x04, 0x20]
					for (let cnt1 = 0; cnt1 < u8Arr.length; cnt1++) {
						for (let cnt2 = 0; cnt2 < 3; cnt2++) {
							if (u8Arr[cnt1 + cnt2] == testArr[cnt2]) {
								if (cnt2 == 2) {
									this.fileList = []
									let fileNum = (u8Arr[cnt1 + cnt2 + 1] << 8) | (u8Arr[cnt1 + cnt2 + 2])
									for (let cnt = 1; cnt <= fileNum; cnt++) {
										this.fileList.push(cnt)
									}
									uni.showToast({
										title: "成功读取" + fileNum + "个文件",
										icon: "none"
									})
								}
							} else {
								break;
							}
						}
					}
					setTimeout(() => {
						if (this.fileList.length == 0) {
							uni.showToast({
								title: "读取失败, 请再试一次",
								icon: "none"
							})
						}
					}, 100)
					console.log('特征值 ' + res.characteristicId + '已更新, ' + '现在是' + this.valueListen)
				})
				setTimeout(() => {
					let numArr = new Array()
					numArr.push(0x7E)
					numArr.push(0x02)
					numArr.push(0x19)
					numArr.push(0xEF)
					let u8Arr = new Uint8Array(numArr)
					//写特征值
					wx.writeBLECharacteristicValue({
						deviceId: this.devices[0].deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.writeUUID,
						value: u8Arr.buffer,
						success: (res) => {
							console.log("发送成功")
							console.log(u8Arr.buffer)
							uni.showToast({
								title: "发送成功",
								icon: "none"
							})
						},
						fail: () => {
							console.log("发送失败")
							uni.showToast({
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
					wx.offBLECharacteristicValueChange()
				}, 500)
			},
			//打开灯模式二级菜单
			LightMode() {
				console.log("灯模式")
				this.isSettingLight = true
			},
			//下发灯模式信息
			UploadLightMode() {
				console.log("更新灯模式")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '请稍后...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				this.isSettingLight = false
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x03)
				numArr.push(0x17)
				numArr.push(Number(this.lightMode.substr(5, 1)))
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("发送数据成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "更新灯模式成功",
							icon: "none"
						})
					},
					fail: (res) => {
						console.log("发送数据失败")
						uni.showToast({
							title: "更新灯模式失败",
							icon: "none"
						})
					}
				})
			},
			//到点循环或取消到点循环
			Mute() {
				//如果处于到点循环模式就取消到点循环, 下发取消到点循环指令
				console.log("到点循环")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '到点循环...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x03)
				numArr.push(0x15)
				numArr.push(0x00)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log(u8Arr.buffer)
						if (this.mode == 3) {
							console.log("取消到点循环成功")
							this.mode = 0
							getApp().globalData.mode = 0
							uni.showToast({
								title: "取消到点循环成功",
								icon: "none"
							})
						} else {
							console.log("到点循环成功")
							this.mode = 3
							getApp().globalData.mode = 3
							uni.showToast({
								title: "到点循环成功",
								icon: "none"
							})
						}
					},
					fail: (res) => {
						console.log("到点循环成功")
						uni.showToast({
							title: "到点循环失败",
							icon: "none"
						})
					}
				})
			},
			//下发循环指令
			Reset() {
				console.log("恢复出厂设置")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}

				uni.showToast({
					title: '恢复出厂设置...',
					icon: 'loading',
					duration: 6000,
					mask: true
				})

				//打开BLE通知
				wx.notifyBLECharacteristicValueChange({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.readUUID,
					state: true
				})

				//BLE通知回调
				wx.onBLECharacteristicValueChange((res) => {
					let u8Arr = new Uint8Array(res.value)
					console.log("收到监听数据")
					console.log(u8Arr)
					let offset = u8Arr.indexOf(0x7E)
					if (u8Arr[offset + 1] == 0x05 && u8Arr[offset + 2] == 0x99) {
						console.log("收到模式指令")
						let isTiming = u8Arr[offset + 3]
						let isPlayingOncePower = u8Arr[offset + 4]
						let isCycleAtTime = u8Arr[offset + 5]
						console.log("isTiming: " + isTiming)
						console.log("isPlayingOncePower: " + isPlayingOncePower)
						console.log("isCycleAtTime: " + isCycleAtTime)
						if (isTiming == 0x00) {
							getApp().globalData.mode = 1
						} else if (isPlayingOncePower == 0x01) {
							getApp().globalData.mode = 2
						} else if (isCycleAtTime == 0x01) {
							getApp().globalData.mode = 3
						}
						this.mode = getApp().globalData.mode
						this.$forceUpdate()
						uni.showToast({
							title: "恢复出厂设置成功",
							icon: "none"
						})
					}
					wx.offBLECharacteristicValueChange()
				})

				//延迟发送BLE数据
				setTimeout(() => {
					let numArr = new Array()
					numArr.push(0x7E)
					numArr.push(0x02)
					numArr.push(0x16)
					numArr.push(0xEF)
					let u8Arr = new Uint8Array(numArr)
					wx.writeBLECharacteristicValue({
						deviceId: this.devices[0].deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.writeUUID,
						value: u8Arr.buffer,
						success: (res) => {
							console.log("发送数据成功")
							console.log(u8Arr.buffer)
							this.isSingle = false
							this.isAll = true
							getApp().globalData.isSingle = this.isSingle
							getApp().globalData.isAll = this.isAll
						},
						fail: (res) => {
							console.log("发送数据失败")
							uni.showToast({
								title: "恢复出厂设置失败",
								icon: "none"
							})
						}
					})
				}, 100)
			},
			//下发删除指令
			Delete() {
				console.log("删除")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}

				if (this.isSelected) {
					console.log("未选择")
					uni.showToast({
						title: "请选择文件",
						icon: "none"
					})
					return
				}

				uni.showToast({
					title: '删除...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})

				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x03)
				numArr.push(0x14)
				numArr.push(this.isSelected)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("发送数据成功")
						console.log(u8Arr.buffer)
						this.fileList.splice(this.isSelected - 1, 1)
						this.isSelected = null
						uni.hideToast()
						uni.showToast({
							title: "删除文件成功",
							icon: "none"
						})
					},
					fail: (res) => {
						console.log("发送数据失败 " + res.errMsg)
						uni.showToast({
							title: "删除文件失败",
							icon: "none"
						})
					}
				})
			},
			//选中文件单选框方法
			Select(e) {
				this.isSelected = parseInt(e.currentTarget.id) + 1
				console.log("文件" + this.isSelected + "被选中")
			},
			//试听方法
			Play(e) {
				console("试听")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '试听...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x04)
				numArr.push(0x41)
				numArr.push(((parseInt(e.currentTarget.id) + 1) & 0xFF00) >> 8)
				numArr.push((parseInt(e.currentTarget.id) + 1) & 0x00FF)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("成功发送试听命令")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "成功发送试听命令",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("发送试听命令失败")
						uni.showToast({
							title: "发送试听命令失败",
							icon: 'none'
						})
					}
				})
			},
			//上电播放方法
			PlayWhenBoot() {
				console.log("上电播放")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '上电播放...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x22)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log(u8Arr.buffer)
						if (this.mode == 2) {
							console.log("取消上电播放成功")
							this.mode = 0
							getApp().globalData.mode = 0
							uni.showToast({
								title: "取消上电播放成功",
								icon: 'none'
							})
						} else {
							console.log("上电播放成功")
							this.mode = 2
							getApp().globalData.mode = 2
							uni.showToast({
								title: "上电播放成功",
								icon: 'none'
							})
						}
					},
					fail: (res) => {
						console.log("上电播放发送失败")
						uni.showToast({
							title: "上电播放发送失败",
							icon: 'none'
						})
					}
				})
			},
			//开关机方法
			ShutdownBoot() {
				console.log('开关机')
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '开关机...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x82)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("开关机成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "开关机成功",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("开关机失败")
						uni.showToast({
							title: "开关机失败",
							icon: 'none'
						})
					}
				})
			},
			//定时方法
			TimingCancel() {
				console.log('定时')
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '定时...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x84)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log(u8Arr.buffer)
						if (this.mode == 1) {
							console.log("取消定时成功")
							this.mode = 0
							getApp().globalData.mode = 0
							uni.showToast({
								title: "取消定时成功",
								icon: 'none'
							})
						} else {
							console.log("定时成功")
							this.mode = 1
							getApp().globalData.mode = 1
							uni.showToast({
								title: "定时成功",
								icon: 'none'
							})
						}
					},
					fail: (res) => {
						console.log("定时失败")
						uni.showToast({
							title: "定时失败",
							icon: 'none'
						})
					}
				})
			},
			//上一首方法
			Last() {
				console.log("上一首")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '上一首...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x85)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("上一首发送成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "上一首发送成功",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("上一首发送失败")
						uni.showToast({
							title: "上一首发送失败",
							icon: 'none'
						})
					}
				})
			},
			//下一首方法
			Next() {
				console.log("下一首")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '下一首...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x86)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("下一首发送成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "下一首发送成功",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("下一首发送失败")
						uni.showToast({
							title: "下一首发送失败",
							icon: 'none'
						})
					}
				})
			},
			//停止方法
			Stop() {
				console.log("停止")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '停止...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x83)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("停止发送成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "停止发送成功",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("停止发送失败")
						uni.showToast({
							title: "停止发送失败",
							icon: 'none'
						})
					}
				})
			},
			//音量加方法
			VolumeIncrease() {
				console.log("音量加")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '音量加...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x80)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("音量加发送成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "音量加发送成功",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("音量加发送失败")
						uni.showToast({
							title: "音量加发送失败",
							icon: 'none'
						})
					}
				})
			},
			//音量减方法
			VolumeDecrease() {
				console.log("音量减")
				if (this.devices.length == 0) {
					uni.showToast({
						title: "设备未连接",
						icon: "none"
					})
					return
				}
				uni.showToast({
					title: '音量减...',
					icon: 'loading',
					duration: 1000,
					mask: true
				})
				let numArr = new Array()
				numArr.push(0x7E)
				numArr.push(0x02)
				numArr.push(0x81)
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				wx.writeBLECharacteristicValue({
					deviceId: this.devices[0].deviceId,
					serviceId: this.primaryServiceUUID,
					characteristicId: this.writeUUID,
					value: u8Arr.buffer,
					success: (res) => {
						console.log("音量减发送成功")
						console.log(u8Arr.buffer)
						uni.showToast({
							title: "音量减发送成功",
							icon: 'none'
						})
					},
					fail: (res) => {
						console.log("音量减发送失败")
						uni.showToast({
							title: "音量减发送失败",
							icon: 'none'
						})
					}
				})
			}
		},
		beforeCreate() {
			console.log("进入设置页面")
		},
		created() {
			this.devices = getApp().globalData.devices
			this.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			this.readUUID = getApp().globalData.readUUID
			this.writeUUID = getApp().globalData.writeUUID
			this.isMuted = getApp().globalData.isMuted
			this.isSingle = getApp().globalData.isSingle
			this.isAll = getApp().globalData.isAll
			this.isTimingCancel = getApp().globalData.isTimingCancel
			this.isPlayWhenBoot = getApp().globalData.isPlayWhenBoot
			//在页面创建时打开BLE Notify监听
		},
		mounted() {

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
