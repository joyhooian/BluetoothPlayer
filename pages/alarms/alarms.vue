<!-- 时间设置主页面 -->
<template name="alarms">
	<view>
		<cu-custom bgColor="bg-gradual-red">
			<block slot="content">定时</block>
		</cu-custom>
		<!-- 顶部操作按钮 -->
		<view class="cu-bar bg-white radius-bottom shadow shadow-blur" :style="{position: 'fixed', left: 0, width: '100%', top:CustomBar + 'px', zIndex: 1000}">
			<view class="action flex-sub solids-right">
				<button class="cu-btn round lines-white" @click="Navigate" id="set-time"><text class="text-black text-lg">+定时播放</text></button>
			</view>
			<view class="action flex-sub">
				<button class="cu-btn round lines-white" @click="Navigate" id="time-after"><text class="text-black text-lg">+间隔播放</text></button>
			</view>
		</view>
		<!-- 如果是时间设定则显示 -->
		<view v-if="alarmShow.isSetTime" class="box" style="margin-bottom: 320rpx; margin-top: 120rpx;">
			<view class="cu-list menu card-menu margin-top sm-border" v-for="(item, index) in alarmsInfo" :key="index">
				<view class="cu-item">
					<view class="content">{{"编号 " + (index + 1)}}</view>
					<view class="action">
						<button class="cu-btn radius bg-green" :id="index" @click="Edit">编辑</button>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">时间</view>
					<view class="action">
						<text>{{item.startTime + ' - ' + item.stopTime}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">重复</view>
					<view class="action">
						<view v-for="(weekday, weekdayNum) in alarmsInfo[index].weekdays" :key="weekdayNum" class="cu-tag light sm round bg-red">{{weekdaysString[weekday].string}}</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">{{'音量 ' + item.volume}}</view>
					<view class="action">
						<text>{{item.relayStatus?'继电器 开':'继电器 关'}}</text>
					</view>
				</view>
				<view class="cu-item arrow" @click="ShowFileModal" :id="index">
					<view class="content">音频</view>
					<view class="action">
						<text>{{item.selectedFile == null ? "请选择" : item.selectedFile}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">是否启用</view>
					<view class="action">
						<switch @change="ChagngUsing" :id="index" :checked="item.isUsing"></switch>
					</view>
				</view>
			</view>
			<view style="padding-bottom: 320rpx;"></view>
		</view>
		<!-- 如果是间隔播放则显示 -->
		<view v-if="alarmShow.isTimeAfter" class="box" style="margin-bottom: 260rpx; margin-top: 120rpx;">
			<view class="cu-list menu card-menu margin-top sm-border">
				<view class="cu-item">
					<view class="content">间隔播放</view>
				</view>
				<view class="cu-item">
					<view class="content">{{"音量" + timeAfterInfo.volume}}</view>
					<view class="action">{{timeAfterInfo.relayStatus?"继电器开":"继电器关"}}</view>
				</view>
				<view class="cu-item">
					<view class="content">间隔时间</view>
					<view class="action">{{timeAfterInfo.secAfter + "S"}}</view>
				</view>
				<view class="cu-item arrow" @click="ShowFileModal" :id="0">
					<view class="content">音频</view>
					<view class="action">
						<text>{{timeAfterInfo.selectedFile == null ? "请选择" : timeAfterInfo.selectedFile}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="isShowFileModal ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">选择音频</view>
				</view>
				<radio-group v-if="fileList.length > 0" class="block" @change="FileChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="file in fileList" :key="file">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">音频 {{file}}</view>
								<radio class="round" :class="alarmsInfo[currentAlarmIndex].selectedFile == file ? 'checked' : ''" :checked="alarmsInfo[currentAlarmIndex].selectedFile==file?true:false"
								 :value="file"></radio>
							</label>
						</view>
					</view>
				</radio-group>
				<view v-else class="margin padding">没有音频文件</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-blue" @tap="UpdateFile">同步文件</button>
						<button class="cu-btn bg-green margin-left" @tap="hideFileModal">确定</button>
					</view>
				</view>
			</view>

		</view>
		<!-- 底部按钮 -->
		<view class="bottomBox">
			<view class="flex justify-center">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="uploadData">
					<text v-if="uploadLoading" class="cuIcon-loading1 cuIconfont-spin"></text><text v-else class="text-sm">设置同步</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	var _self
	export default {
		name: "alarms",
		data() {
			return {
				devices: [], //设备列表
				primaryServiceUUID: '', //主服务UUID
				readUUID: '', //监听UUID
				writeUUID: '', //写入UUID
				uploadLoading: false,
				CustomBar: this.CustomBar,
				alarmsInfo: [],
				alarmShow: {},
				timeAfterInfo: {},
				weekdaysString: [{
						index: 0,
						string: '周一'
					},
					{
						index: 1,
						string: '周二'
					},
					{
						index: 2,
						string: '周三'
					},
					{
						index: 3,
						string: '周四'
					},
					{
						index: 4,
						string: '周五'
					},
					{
						index: 5,
						string: '周六'
					},
					{
						index: 6,
						string: '周日'
					},
				],
				fileList: [],
				selectedFile: null,
				currentAlarmIndex: null,
				isShowFileModal: false
			}
		},
		methods: {
			Navigate(e) {
				//如果是添加时间设定则跳转到时间设定页面
				if (e.currentTarget.id === 'set-time') {
					uni.navigateTo({
						url: '/pages/alarms/set-time'
					})
				}
				//否则跳转到时间间隔设置页面
				else if (e.currentTarget.id === 'time-after') {
					uni.navigateTo({
						url: '/pages/alarms/time-after'
					})
				}
			},
			//上传时间设定
			uploadData() {
				//防止重复点击
				if (!this.uploadLoading) {
					this.uploadLoading = true
					console.log(this.alarmShow)
					//如果是重复时间设置
					if (this.alarmShow.isSetTime) {
						console.log("上传时间设定")
						let alarmsMessage = new Array()
						//遍历每个生效的设置组
						this.alarmsInfo.forEach((alarm, index) => {
							if (alarm.isUsing) {
								let numArr = new Array()
								numArr.push(0x7E)
								numArr.push(0x0A + alarm.weekdays.length)
								numArr.push(0x13)
								numArr.push(index + 1)
								numArr.push(Number(alarm.startTime.substr(0, 2)))
								numArr.push(Number(alarm.startTime.substr(3, 2)))
								numArr.push(Number(alarm.stopTime.substr(0, 2)))
								numArr.push(Number(alarm.stopTime.substr(3, 2)))
								numArr.push(alarm.volume)
								numArr.push(alarm.relayStatus ? 0x01 : 0x00)
								alarm.weekdays.forEach((weekday) => {
									numArr.push(weekday + 1)
								})
								numArr.push(alarm.selectedFile?alarm.selectedFile:0)
								numArr.push(0xEF)
								let u8Arr = new Uint8Array(numArr)
								alarmsMessage.push(u8Arr.buffer)
							}
						})
						//如果没有时间设置组生效则提醒
						if (alarmsMessage.length == 0) {
							wx.showToast({
								title: "请启用要设置的任务!",
								icon: "none"
							})
							this.uploadLoading = false
						} else if (this.primaryServiceUUID != '' && this.writeUUID != '') {
							console.log("发送消息至: Service " + this.primaryServiceUUID + " Write " + this.writeUUID)
							//遍历命令数组并间隔发送
							alarmsMessage.forEach((msg, index) => {
								setTimeout(() => {
									wx.writeBLECharacteristicValue({
										deviceId: this.devices[0].deviceId,
										serviceId: this.primaryServiceUUID,
										characteristicId: this.writeUUID,
										value: msg,
										success: (res) => {
											console.log("发送成功")
											console.log(msg)
										},
										fail: (res) => {
											console.log("发送失败")
										}
									})
								}, 200 * index)
							})
							setTimeout(() => {
								let u8Arr = new Uint8Array([0x7E, 0x02, 0x55, 0xEF])
								wx.writeBLECharacteristicValue({
									deviceId: this.devices[0].deviceId,
									serviceId: this.primaryServiceUUID,
									characteristicId: this.writeUUID,
									value: u8Arr.buffer,
									success: (res) => {
										console.log("发送成功")
										console.log(u8Arr.buffer)
										uni.showToast({
											title: "设置成功！",
											icon: "success"
										})
									},
									fail: (res) => {
										console.log('发送失败')
									},
									complete: () => {
										this.uploadLoading = false
									}
								})
							}, 200 * alarmsMessage.length)
						} else {
							console.log(alarmsMessage)
							wx.showToast({
								title: '请连接设备！',
								icon: 'none'
							})
							this.uploadLoading = false
						}
					}
					//如果是时间间隔设定
					else if (this.alarmShow.isTimeAfter) {
						console.log("上传间隔时间")
						let numArr = new Array()
						// 时间间隔分包发送指令
						numArr.push(0x7E)
						numArr.push(0x07)
						numArr.push(0x18)
						numArr.push((this.timeAfterInfo.secAfter & 0xFF00) >> 8)
						numArr.push(this.timeAfterInfo.secAfter & 0x00FF)
						numArr.push(this.timeAfterInfo.volume)
						numArr.push(this.timeAfterInfo.relayStatus ? 0x01 : 0x00)
						numArr.push(this.timeAfterInfo.selectedFile ? this.timeAfterInfo.selectedFile : 0)
						numArr.push(0xEF)
						let u8Arr = new Uint8Array(numArr)
						wx.writeBLECharacteristicValue({
							deviceId: this.devices[0].deviceId,
							serviceId: this.primaryServiceUUID,
							characteristicId: this.writeUUID,
							value: u8Arr.buffer,
							success: (res) => {
								console.log("发送成功")
								console.log(u8Arr.buffer)
							},
							fail: (res) => {
								console.log("发送失败")
							}
						})
					}
				}
			},
			ChagngUsing(e) {
				this.alarmsInfo[e.currentTarget.id].isUsing = e.detail.value
			},
			Edit(e) {
				uni.navigateTo({
					url: '/pages/alarms/set-time?index=' + e.currentTarget.id
				})
			},
			Download() {
				if (this.primaryServiceUUID) {
					wx.notifyBLECharacteristicValueChange({
						deviceId: this.devices[0].deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.readUUID,
						state: true,
						success: () => {
							console.log("打开监听成功")
						},
						fail: () => {
							console.log("打开监听失败")
							return
						}
					})
					wx.onBLECharacteristicValueChange((res) => {
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
										console.log("成功读取" + fileNum + "个文件")
										uni.showToast({
											title: "成功读取" + fileNum + "个文件",
											icon: "none"
										})
									}
								}
							}
						}
						setTimeout(() => {
							if (this.fileList.length == 0) {
								uni.showToast({
									title: "没有读取到文件",
									icon: "none"
								})
							}
						}, 500)
					})
					setTimeout(() => {
						let numArr = new Array()
						numArr.push(0x7E)
						numArr.push(0x02)
						numArr.push(0x19)
						numArr.push(0xEF)
						let u8Arr = new Uint8Array(numArr)
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
				} else {
					uni.showToast({
						title: "请先连接设备",
						icon: "none"
					})
				}
			},
			ShowFileModal(e) {
				this.currentAlarmIndex = Number(e.currentTarget.id)
				if (this.fileList.length == 0) {
					this.Download()
				}
				this.isShowFileModal = true
			},
			hideFileModal() {
				this.isShowFileModal = false
				this.currentAlarmIndex = null
			},
			FileChange(e) {
				if (this.alarmShow.isSetTime) {
					this.alarmsInfo[this.currentAlarmIndex].selectedFile = e.detail.value
				} else {
					this.timeAfterInfo.selectedFile = e.detail.value
				}
			},
			UpdateFile() {
				this.fileList = []
				this.Download()
			}
		},
		beforeCreate() {},
		created() {
			_self = this
			_self.alarmsInfo = getApp().globalData.alarmsInfo
			_self.devices = getApp().globalData.devices
			_self.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			_self.readUUID = getApp().globalData.readUUID
			_self.writeUUID = getApp().globalData.writeUUID
			_self.alarmShow = getApp().globalData.alarmShow
			_self.timeAfterInfo = getApp().globalData.timeAfterInfo
		},
		mounted() {
			console.log("定时页面")

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
