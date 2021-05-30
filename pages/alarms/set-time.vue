<!-- 定时播放设置添加页面 -->
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
					<view v-for="(item, index) in weekDays" :key="index" :id="index" class="cu-tag round light margin-right-sm" :class="item.selected?'bg-red':'bg-grey'" @click="SelectWeekday">{{item.name}}</view>
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
					<picker mode="time" start="00:00" end="23:59" :value="startTime" @change="ChangeStartTime">
						<view class="picker text-xl">
							{{startTime}}
						</view>
					</picker>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">结束时间</view>
				<view class="action">
					<picker mode="time" start="00:00" end="23:59" :value="stopTime" @change="ChangeStopTime">
						<view class="picker text-xl">
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
				startTime: '19:00',
				stopTime: '20:00'
			}
		},
		methods: {
			//改变继电器开光状态
			RelayChange(e) {
				this.relayStatus = e.detail.value
			},
			//改变开始时间
			ChangeStartTime(e) {
				this.startTime = e.detail.value
				// 如果开始时间晚于结束时间, 则自动改变结束时间等于开始时间
				if (this.startTime > this.stopTime) {
					this.stopTime = this.startTime
				}
			},
			//改变结束时间
			ChangeStopTime(e) {
				this.stopTime = e.detail.value
				//如果结束时间早于开始时间则弹窗提示
				if (this.stopTime < this.startTime) {
					this.stopTime = this.startTime
					wx.showToast({
						title: "结束时间不能早于开始时间!",
						icon: "none"
					})
				}
			},
			//选择星期
			SelectWeekday(e) {
				this.weekDays[e.currentTarget.id].selected = !this.weekDays[e.currentTarget.id].selected
			},
			//改变音量
			changeVolume(e) {
				this.volume = e.detail.value
			},
			//确认设置
			upload() {
				var tempWeekday = new Array()
				this.weekDays.forEach((item) => {
					if (item.selected) {
						tempWeekday.push(item.index)
					}
				})
				//检查是否选择了重复星期
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
								selectedFile: 0,
								isUsing: false
							})
						} 
						//数组中已有其他定时信息时, 先比较先后顺序
						else {
							try {
								this.alarmsInfo.forEach((alarm, index) => {
									if (this.startTime <= alarm.startTime) {
										this.alarmsInfo.splice(index, 0, {
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											selectedFile: 0,
											isUsing: false,
										})
										throw new Error("结束比较")
									} 
									else if (index == this.alarmsInfo.length - 1) {
										this.alarmsInfo.push({
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											selectedFile: 0,
											isUsing: false
										})
										throw new Error("结束比较")
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
									if (this.startTime <= alarm.startTime) {
										this.alarmsInfo.splice(index, 0, {
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											selectedFile: 0,
											isUsing: false
										})
										throw new Error("结束比较")
									} 
									else if (index == this.alarmsInfo.length - 1) {
										this.alarmsInfo.push({
											weekdays: tempWeekday,
											volume: this.volume,
											relayStatus: this.relayStatus,
											startTime: this.startTime,
											stopTime: this.stopTime,
											selectedFile: 0,
											isUsing: false
										})
										throw new Error("结束比较")
									}
								})
							} catch(e) {
								if (e.message != "结束比较") throw e
							}
						}
					}
					getApp().globalData.alarmShow.isSetTime = true
					getApp().globalData.alarmShow.isTimeAfter = false
					// 返回上一层
					uni.navigateBack({
						
					})
				}
			}
		},
		created() {
			this.alarmsInfo = getApp().globalData.alarmsInfo
			this.startTime = new Date().toString().split(' ')[4].substr(0,5)
			this.stopTime = this.startTime
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
