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
		<view class="box" style="margin-bottom: 260rpx; margin-top: 120rpx;">
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
						<view v-for="(weekday, weekdayNum) in alarmsInfo[index].weekdays" :key="weekdayNum" class="cu-tag light round bg-red">{{weekdaysString[weekday].string}}</view>
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
				var alarmsMessage = new Array
				this.alarmsInfo.forEach((alarm, index) => {
					if (alarm.isUsing) {
						var cmd = "AT+TIMESET" + ((index+1)<10?'0'+(index+1):(index+1)) +
						'T' + alarm.startTime.replace(':','') + alarm.stopTime.replace(':','') +
						'V' + alarm.volume +
						'J' + (alarm.relayStatus?'01':'00')
						alarm.weekdays.forEach((weekday) => {
							cmd += 'W' + '0' + (weekday + 1)
						})
						alarmsMessage.push(cmd)
					}
				})
				console.log(this)
				if (this.primaryServiceUUID != '' && this.writeUUID != ''){
					alarmsMessage.forEach((item, index) => {
						setTimeout(() => {
							wx.writeBLECharacteristicValue({
								deviceId: this.deviceId,
								serviceId: this.primaryServiceUUID,
								characteristicId: this.writeUUID,
								value: this.MessageToArrayBuffer(item),
								success: (res) => {
									console.log(res)
								},
								fail: (res) => {
									console.log(res)
								}
							})
						}, 100*(index+1))
					})
					var stopMessage = "AT+TIMESETOVER"
					wx.writeBLECharacteristicValue({
						deviceId: this.deviceId,
						serviceId: this.primaryServiceUUID,
						characteristicId: this.writeUUID,
						value: this.MessageToArrayBuffer(stopMessage),
						success: (res) => {
							console.log(res)
						},
						fail: (res) => {
							console.log(res)
						}
					})
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
