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
					<picker mode="time" :start="startTime" end="23:59" @change="ChangeStopTime">
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
				if (!this.isEditing) {
					this.alarmsInfo.push({
						weekdays: tempWeekday,
						volume: this.volume,
						relayStatus: this.relayStatus,
						startTime: this.startTime,
						stopTime: this.stopTime,
						isUsing: false
					})
				} else {
					this.alarmsInfo[this.editingIndex].weekdays = tempWeekday
					this.alarmsInfo[this.editingIndex].volume = this.volume
					this.alarmsInfo[this.editingIndex].relayStatus = this.relayStatus
					this.alarmsInfo[this.editingIndex].startTime = this.startTime
					this.alarmsInfo[this.editingIndex].stopTime = this. stopTime
				}
				uni.navigateBack({
					
				})
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
				this. stopTime = this.alarmsInfo[this.editingIndex].stopTime
			}
		}
	}
</script>

<style>

</style>
