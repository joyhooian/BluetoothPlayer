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
				secAfter: 0
			}
		},
		methods: {
			RelayChange(e){
				this.relayStatus = e.detail.value
			},
			changeVolume(e){
				this.volume = e.detail.value
			},
			onInput(e) {
				this.secAfter = e.detail.value
			},
			upload(){
				if (this.secAfter == 0){
					wx.showToast({
						title: "请输入间隔时间!",
						icon: "none"
					})
				} else if (this.secAfter <= 9999) {
					this.isLoading = true
					var cmd = "AT+TIMEJG" + ("0000" + this.secAfter).slice(-4) +
					"V" + (this.volume<10?'0'+this.volume:this.volume) +
					"J" + (this.relayStatus?"01":"00")
					console.log(cmd)
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
					}, 100)
					console.log(this.volume)
					console.log(this.relayStatus)
					console.log(this.secAfter)
					setTimeout(() => {
						this.isLoading = false
					}, 1000)
				} else if (this.secAfter > 9999) {
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
			console.log(this)
		}
	}
</script>

<style>

</style>
