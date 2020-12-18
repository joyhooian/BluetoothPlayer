<template name="alarms">
	<view>
		<cu-custom bgColor="bg-gradual-red">
			<block slot="content">定时</block>
		</cu-custom>
		<view class="cu-bar bg-white radius-bottom shadow shadow-blur" :style="{position: 'fixed', left: 0, width: '100%', top:CustomBar + 'px', zIndex: 1000}">
			<view class="action flex-sub solids-right">
				<button class="cu-btn round lines-white" @click="Navigate" id="set-time"><text class="text-black text-lg">+定时播放</text></button>
			</view>
			<view class="action flex-sub">
				<button class="cu-btn round lines-white" @click="Navigate" id="time-after"><text class="text-black text-lg">+间隔播放</text></button>
			</view>
		</view>
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
				devices: [],
				primaryServiceUUID: '',
				readUUID: '',
				writeUUID: '',
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
				if (e.currentTarget.id === 'set-time') {
					uni.navigateTo({
						url: '/pages/alarms/set-time'
					})
				} else if (e.currentTarget.id === 'time-after') {
					uni.navigateTo({
						url: '/pages/alarms/time-after'
					})
				}
			},
			uploadData() {
				this.uploadLoading = true
				console.log(this.alarmShow)
				if (this.alarmShow.isSetTime) {
					console.log("上传时间设定")
					let alarmsMessage = new Array
					this.alarmsInfo.forEach((alarm, index) => {
						if (alarm.isUsing) {
							let cmdGroup = new Array
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
							console.log(cmdGroup)
							alarmsMessage.push(cmdGroup)
							// let cmd = "AT+TIMESET" + ((index+1)<10?'0'+(index+1):(index+1)) +
							// 'T' + alarm.startTime.replace(':','') + alarm.stopTime.replace(':','') +
							// 'V' + (alarm.volume<10?'0'+alarm.volume:alarm.volume) +
							// 'J' + (alarm.relayStatus?'01':'00')
							// alarm.weekdays.forEach((weekday) => {
							// 	cmd += 'W' + '0' + (weekday + 1)
							// })
							// alarmsMessage.push(cmd)
						}
					})
					if (alarmsMessage.length == 0)
					{
						wx.showToast({
							title: "请启用要设置的任务!",
							icon: "none"
						})
					} else if (this.primaryServiceUUID != '' && this.writeUUID != ''){
						console.log("发送消息至: Service " + this.primaryServiceUUID + " Write " + this.writeUUID)
						alarmsMessage.forEach((msg, index) => {
							msg.forEach((cmd, cmdNum) => {
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
										},
										fail: (res) => {
											console.log("发送失败")
										}
									})
								}, 5000*index + 1000*cmdNum)
							})
						})
						var stopMessage = "AT+TIMESETOVER"
						setTimeout(() => {
							wx.writeBLECharacteristicValue({
								deviceId: this.devices[0].deviceId,
								serviceId: this.primaryServiceUUID,
								characteristicId: this.writeUUID,
								value: this.MessageToArrayBuffer(stopMessage),
								success: (res) => {
									console.log("发送成功, 发送内容: " + stopMessage)
									let sec = new Date().getSeconds()
									let ms = new Date().getMilliseconds()
									console.log(sec + ":" + ms)
								},
								fail: (res) => {
									console.log("发送失败 " + res.errMsg)
								}
							})
						}, 5000*(alarmsMessage.length))
					} 
				} else if (this.alarmShow.isTimeAfter) {
						console.log("上传间隔时间")
						let cmd = "AT+TIMEJG" + ("0000" + this.timeAfterInfo.secAfter).slice(-4) +
						"V" + (this.volume<10?'0'+this.timeAfterInfo.volume:this.timeAfterInfo.volume) +
						"J" + (this.timeAfterInfo.relayStatus?"01":"00")
						console.log(cmd)
						console.log(this.MessageToArrayBuffer(cmd))
						setTimeout(() => {
							wx.writeBLECharacteristicValue({
								deviceId: this.devices[0].deviceId,
								serviceId: this.primaryServiceUUID,
								characteristicId: this.writeUUID,
								value: this.MessageToArrayBuffer(cmd),
								success: (res) => {
									console.log("发送成功, 发送内容:" + cmd)
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
						}, 500)
					}
				this.uploadLoading = false
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
