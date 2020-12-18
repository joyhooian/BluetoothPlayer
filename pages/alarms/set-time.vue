<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" isBack="true">
			<block slot="content">定时播放</block>
		</cu-custom>
		<view class="cu-list menu card-menu margin-top">
			<view class="cu-item">
				<view class="content">
					<text class="text-black">星期</text>
				</view>
				<view class="action">
					<view v-for="(item, index) in weekDays" :key="index" :id="index" class="cu-tag round light margin-right-xs" :class="item.selected?'bg-red':'bg-grey'" @click="SelectWeekday">{{item.name}}</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="content flex-treble">
					<view class="flex">
						<view class="flex-sub">音量</view>
						<slider block-size="20" min="0" max="30" :value="volume" show-value="true" class="flex-treble" style="margin-right: 0; margin-left: 0;" @change="changeVolume"></slider>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					继电器
				</view>
				<view class="action">
					<switch :checked="relayStatus?true:false" @change="RelayChange"></switch>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">开始时间</view>
				<view class="action">
					<picker mode="time" start="00:00" end="23:59" @change="ChangeStartTime">
						<view class="picker">
							{{startTime}}
						</view>
					</picker>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">结束时间</view>
				<view class="action">
					<picker mode="time" start="00:00" end="23:59" @change="ChangeStopTime">
						<view class="picker">
							{{stopTime}}
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="cu-bar btn-group foot radius-top">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="upload">
					<text class="text-sm">确定</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEditing: false,
				editingIndex: null,
				alarmsInfo: [],
				weekDays: [
					{ name: '一', index: 0, selected: false	},
					{ name: '二', index: 1, selected: false	},
					{ name: '三', index: 2, selected: false	},
					{ name: '四', index: 3, selected: false	},
					{ name: '五', index: 4, selected: false	},
					{ name: '六', index: 5, selected: false	},
					{ name: '日', index: 6, selected: false	},
				],
				volume: 15,
				relayStatus: false,
				startTime: '12:00',
				stopTime: '12:00'
			}
		},
		methods: {
			RelayChange(e) {
				this.relayStatus = e.detail.value
			},
			ChangeStartTime(e) {
				this.startTime = e.detail.value
				if (this.startTime > this.stopTime) {
					this.stopTime = this.startTime
				}
			},
			ChangeStopTime(e) {
				this.stopTime = e.detail.value
				if (this.stopTime < this.startTime) {
					this.stopTime = this.startTime
					wx.showToast({
						title: "结束时间不能早于开始时间!",
						icon: "none"
					})
				}
			},
			SelectWeekday(e) {
				this.weekDays[e.currentTarget.id].selected = !this.weekDays[e.currentTarget.id].selected
			},
			changeVolume(e) {
				this.volume = e.detail.value
			},
			upload() {
				var tempWeekday = new Array()
				this.weekDays.forEach((item) => {
					if (item.selected) {
						tempWeekday.push(item.index)
					}
				})
				if (tempWeekday.length == 0) {
					wx.showToast({
						title: "未选择重复星期!",
						icon: "none"
					})
				} else {
					if (!this.isEditing) {
						//添加的第一组定时信息直接push
						if (this.alarmsInfo.length == 0){
							this.alarmsInfo.push({
								weekdays: tempWeekday,
								volume: this.volume,
								relayStatus: this.relayStatus,
								startTime: this.startTime,
								stopTime: this.stopTime,
								isUsing: false
							})
						} 
						//数组中已有其他定时信息时, 先比较先后顺序
						else {
							try {
								this.alarmsInfo.forEach((alarm, index) => {
									//如果星期一致则比较开始时间
									if (tempWeekday[0] == alarm.weekdays[0]) {
										if (this.startTime <= alarm.startTime) {
											this.alarmsInfo.splice(index, 0, {
												weekdays: tempWeekday,
												volume: this.volume,
												relayStatus: this.relayStatus,
												startTime: this.startTime,
												stopTime: this.stopTime,
												isUsing: false,
											})
											throw new Error("结束比较")
										}
									} 
									//比较星期
									else if (tempWeekday[0] < alarm.weekdays[0]) {
										this.alarmsInfo.splice(index, 0, {
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											isUsing: false
										})
										throw new Error("结束比较")
									} 
									//如果是最靠后的就直接添加
									else if (index == this.alarmsInfo.length - 1) {
										this.alarmsInfo.push({
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											isUsing: false
										})
									}
								})
							} catch(e) {
								if (e.message != "结束比较") throw e
							}
						}
					} else {
						//如果被编辑的定时设置是唯一一组则直接赋值
						if (this.alarmsInfo.length == 1){
							this.alarmsInfo[this.editingIndex].weekdays = tempWeekday
							this.alarmsInfo[this.editingIndex].volume = this.volume
							this.alarmsInfo[this.editingIndex].relayStatus = this.relayStatus
							this.alarmsInfo[this.editingIndex].startTime = this.startTime
							this.alarmsInfo[this.editingIndex].stopTime = this. stopTime
						} else {
							//先删除之前的数组元素
							var tempUsing
							tempUsing = this.alarmsInfo[this.editingIndex].isUsing
							this.alarmsInfo.splice(this.editingIndex, 1)
							try {
								//比较更改后的元素与数组内的先后顺序
								this.alarmsInfo.forEach((alarm, index) => {
									//如果星期一致则比较开始时间
									if (tempWeekday[0] == alarm.weekdays[0]) {
										if (this.startTime <= alarm.startTime) {
											this.alarmsInfo.splice(index, 0, {
												weekdays: tempWeekday,
												volume: this.volume,
												relayStatus: this.relayStatus,
												startTime: this.startTime,
												stopTime: this.stopTime,
												isUsing: tempUsing,
											})
											throw new Error("结束比较")
										}
									} 
									//比较星期
									else if (tempWeekday[0] < alarm.weekdays[0]) {
										this.alarmsInfo.splice(index, 0, {
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											isUsing: tempUsing,
										})
										throw new Error("结束比较")
									} 
									//如果是最靠后的就直接添加
									else if (index == this.alarmsInfo.length - 1) {
										this.alarmsInfo.push({
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											isUsing: tempUsing,
										})
									}
								})
							} catch(e) {
								if (e.message != "结束比较") throw e
							}
						}
					}
					getApp().globalData.alarmShow.isSetTime = true
					getApp().globalData.alarmShow.isTimeAfter = false
					uni.navigateBack({
						
					})
				}
			}
		},
		created() {
			this.alarmsInfo = getApp().globalData.alarmsInfo
		},
		onLoad(e) {
			if (e.index) {
				this.isEditing = true
				this.editingIndex = parseInt(e.index)
				this.alarmsInfo[this.editingIndex].weekdays.forEach((item) => {
					this.weekDays[item].selected = true
				})
				this.volume = this.alarmsInfo[this.editingIndex].volume
				this.relayStatus = this.alarmsInfo[this.editingIndex].relayStatus
				this.startTime = this.alarmsInfo[this.editingIndex].startTime
				this.stopTime = this.alarmsInfo[this.editingIndex].stopTime
			}
		}
	}
</script>

<style>

</style>
