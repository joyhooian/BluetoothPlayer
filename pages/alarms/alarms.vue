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
		<view v-if="alarmShow.isSetTime" class="box" style="margin-bottom: 260rpx; margin-top: 120rpx;">
			<view class="cu-list menu card-menu margin-top sm-border" v-for="(item, index) in alarmsInfo" :key="index">
				<view class="cu-item">
					<view class="centent">{{"编号 " + (index + 1)}}</view>
					<view class="action">
						<button class="cu-btn radius bg-green" :id="index" @click="Edit">编辑</button>
					</view>
				</view>
				<view class="cu-item">
					<view class="centent">时间</view>
					<view class="action">
						<text>{{item.startTime + ' - ' + item.stopTime}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="centent">重复</view>
					<view class="action">
						<view v-for="(weekday, weekdayNum) in alarmsInfo[index].weekdays" :key="weekdayNum" class="cu-tag light sm round bg-red">{{weekdaysString[weekday].string}}</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="centent">{{'音量 ' + item.volume}}</view>
					<view class="action">
						<text>{{item.relayStatus?'继电器 开':'继电器 关'}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="centent">是否启用</view>
					<view class="action">
						<switch @change="ChagngUsing" :id="index"></switch>
					</view>
				</view>
			</view>
		</view>
		<!-- 如果是间隔播放则显示 -->
		<view v-if="alarmShow.isTimeAfter" class="box" style="margin-bottom: 260rpx; margin-top: 120rpx;">
			<view class="cu-list menu card-menu margin-top sm-border">
				<view class="cu-item">
					<view class="centent">间隔播放</view>
				</view>
				<view class="cu-item">
					<view class="centent">{{"音量" + timeAfterInfo.volume}}</view>
					<view class="action">{{timeAfterInfo.relayStatus?"继电器开":"继电器关"}}</view>
				</view>
				<view class="cu-item">
					<view class="centent">间隔时间</view>
					<view class="action">{{timeAfterInfo.secAfter + "S"}}</view>
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
				//[{
				//	isUsing: boolen,
				//	relayStatus: boolen,
				//	startTime: "12:00",
				//	stopTime: "12:00",
				//	volum: number,
				//	weekdays: [0, 1, 2]
				//}]
				alarmShow: {},
				timeAfterInfo: {},
				weekdaysString: [ 
					{index: 0, string: '周一'},
					{index: 1, string: '周二'},
					{index: 2, string: '周三'},
					{index: 3, string: '周四'},
					{index: 4, string: '周五'},
					{index: 5, string: '周六'},
					{index: 6, string: '周日'},
				]
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
						let alarmsMessage = new Array
						//遍历每个生效的设置组
						this.alarmsInfo.forEach((alarm, index) => {
							if (alarm.isUsing) {
								let cmdGroup = new Array
								//指令分包发送
								cmdGroup.push("AT+TMST" + ('0'+(index+1)).slice(-2) + "E1")
								cmdGroup.push("AT+TMST" + alarm.startTime.replace(':','') + alarm.stopTime.replace(':','') + 'E1') 
								cmdGroup.push("AT+TMSTV" + ('0'+alarm.volume).slice(-2) + 'E1')
								cmdGroup.push("AT+TMSTJ" + (alarm.relayStatus?'01':'00') + 'E1')
								let weekdaysString = 'AT+TMSTW'
								alarm.weekdays.forEach((weekday)=>{
									weekdaysString += (weekday+1)
								})
								weekdaysString += "E0"
								cmdGroup.push(weekdaysString)
								alarmsMessage.push(cmdGroup)
							}
						})
						//如果没有时间设置组生效则提醒
						if (alarmsMessage.length == 0)
						{
							wx.showToast({
								title: "请启用要设置的任务!",
								icon: "none"
							})
						} else if (this.primaryServiceUUID != '' && this.writeUUID != ''){
							console.log("发送消息至: Service " + this.primaryServiceUUID + " Write " + this.writeUUID)
							//遍历命令数组并间隔发送
							alarmsMessage.forEach((msg, index) => {
								msg.forEach((cmd, cmdNum) => {
									// 每个命令包之间间隔50ms
									setTimeout(() => {
										wx.writeBLECharacteristicValue({
											deviceId: this.devices[0].deviceId,
											serviceId: this.primaryServiceUUID,
											characteristicId: this.writeUUID,
											value: this.MessageToArrayBuffer(cmd),
											success: (res) => {
												console.log("发送成功, 发送内容: " + cmd)
												// 带上时间戳打印到控制台
												let sec = new Date().getSeconds()
												let ms = new Date().getMilliseconds()
												console.log(sec + ":" + ms)
											},
											fail: (res) => {
												console.log("发送失败")
											}
										})
									}, 250*index + 50*cmdNum)
								})
							})
							//最后发送时间设定结束指令
							setTimeout(() => {
								wx.writeBLECharacteristicValue({
									deviceId: this.devices[0].deviceId,
									serviceId: this.primaryServiceUUID,
									characteristicId: this.writeUUID,
									value: this.MessageToArrayBuffer("AT+TIMESETOVER"),
									success: (res) => {
										console.log("发送成功, 发送内容: AT+TIMESETOVER")
										// 带上时间戳打印到控制台
										let sec = new Date().getSeconds()
										let ms = new Date().getMilliseconds()
										console.log(sec + ":" + ms)
									},
									fail: (res) => {
										console.log("发送失败 " + res.errMsg)
									},
									complete: () => {
										this.uploadLoading = false
									}
								})
							}, 250*(alarmsMessage.length))
						} 
					} 
					//如果是时间间隔设定
					else if (this.alarmShow.isTimeAfter) {
						console.log("上传间隔时间")
						let cmdGroup = new Array
						// 时间间隔分包发送指令
						cmdGroup.push("AT+TIMEJGT" + ("0000"+this.timeAfterInfo.secAfter).slice(-4))
						cmdGroup.push("AT+TIMEJGV" + ("0"+this.timeAfterInfo.volume).slice(-2))
						cmdGroup.push("AT+TIMEJGJ" + (this.timeAfterInfo.relayStatus?"01":"00"))
						console.log(cmdGroup)
						cmdGroup.forEach((cmd, cmdNum) => {
							// 每个指令之间间隔50ms
							setTimeout(() => {
								wx.writeBLECharacteristicValue({
									deviceId: this.devices[0].deviceId,
									serviceId: this.primaryServiceUUID,
									characteristicId: this.writeUUID,
									value: this.MessageToArrayBuffer(cmd),
									success: (res) => {
										console.log("发送成功, 发送内容: " + cmd)
										let sec = new Date().getSeconds()
										let ms = new Date().getMilliseconds()
										console.log(sec + ":" + ms)
										wx.showToast({
											title: "发送成功",
											icon: "none"
										})
									},
									fail: (res) => {
										console.log("发送失败")
										wx.showToast({
											title: "发送失败",
											icon: "none"
										})
									}
								})
							}, 50*cmdNum)
						})
						//最后发送时间间隔设置完毕指令
						setTimeout(() => {
							wx.writeBLECharacteristicValue({
								deviceId: this.devices[0].deviceId,
								serviceId: this.primaryServiceUUID,
								characteristicId: this.writeUUID,
								value: this.MessageToArrayBuffer("AT+TIMEJGOVER"),
								success: (res) => {
									console.log("发送成功, 发送内容: AT+TIMEJGOVER")
									let sec = new Date().getSeconds()
									let ms = new Date().getMilliseconds()
									console.log(sec + ":" + ms)
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
								},
								complete: () => {
									this.uploadLoading = false
								}
							})
						}, 150)
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
			}
		},
		created() {
			_self = this
			_self.alarmsInfo = getApp().globalData.alarmsInfo
			_self.devices = getApp().globalData.devices
			_self.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			_self.readUUID = getApp().globalData.readUUID
			_self.writeUUID = getApp().globalData.writeUUID
			_self.alarmShow = getApp().globalData.alarmShow
			_self.timeAfterInfo = getApp().globalData.timeAfterInfo
			console.log(_self)
		},
		
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
