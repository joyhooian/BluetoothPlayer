<!-- 间隔时间设置页面 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" isBack="true">
			<block slot="content">定时播放</block>
		</cu-custom>
		<view class="cu-list menu card-menu margin-top">
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
			<view class="cu-item">
				<view class="content">
					<view class="flex">
						<view class="flex-sub">间隔时间</view>
						<input placeholder="请输入间隔时间(单位: 秒)" focus="true" type="number" @input="onInput" class="flex-treble"></input>
					</view>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="cu-bar btn-group foot radius-top">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="upload">
					<text v-if="isLoading" class="cuIcon-loading1 cuIconfont-spin"></text><text v-else class="text-sm">确定</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: false,
				volume: 15,
				relayStatus: false,
				secAfter: 0,
				timeAfterInfo: {}
			}
		},
		methods: {
			//改变继电器状态
			RelayChange(e){
				this.relayStatus = e.detail.value
			},
			//改变音量
			changeVolume(e){
				this.volume = e.detail.value
			},
			//输入时间间隔
			onInput(e) {
				this.secAfter = e.detail.value
			},
			//保存设置
			upload(){
				//如果没有设置时间间隔则提示
				if (this.secAfter == 0){
					wx.showToast({
						title: "请输入间隔时间!",
						icon: "none"
					})
				} 
				else if (this.secAfter <= 9999) {
					this.timeAfterInfo.volume = this.volume
					this.timeAfterInfo.relayStatus = this.relayStatus
					this.timeAfterInfo.secAfter = this.secAfter
					getApp().globalData.alarmShow.isTimeAfter  = true
					getApp().globalData.alarmShow.isSetTime = false
					console.log(this.volume)
					console.log(this.relayStatus)
					console.log(this.secAfter)
					console.log(this.timeAfterInfo)
					uni.navigateBack()
				} 
				//如果时间间隔设置大于9999s则报错
				else if (this.secAfter > 9999) {
					this.secAfter = 9999
					wx.showToast({
						title: "间隔时间不得超过9999s!",
						icon: "none"
					})
				}
			}
		},
		created() {
			this.devices = getApp().globalData.devices
			this.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			this.readUUID = getApp().globalData.readUUID
			this.writeUUID = getApp().globalData.writeUUID
			this.timeAfterInfo = getApp().globalData.timeAfterInfo
			console.log(this)
		}
	}
</script>

<style>

</style>
