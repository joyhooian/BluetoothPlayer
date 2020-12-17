<template name="links">
	<view>
		<cu-custom bgColor="bg-gradual-red">
			<block slot="content"><text class="text-bold">连接</text></block>
		</cu-custom>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in devices" :key="index">
				<view class="cu-avatar round lg bg-white" :style="[{ backgroundImage:'url(' + item.avatar + ')' }]"></view>
				<view class="content">
					<view class="text-grey">{{item.name}}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">{{item.status=="connected"?"已连接":"已保存"}}</view>
					</view>
				</view>
				<view class="action">
					<view class="cu-tag round lg" :class="item.status=='connected'?'bg-red':'bg-green'" @click="disconnectDevice" :id="index">
						<text v-if="item.status=='changingStatus'" class="cuIcon-loading2 cuIconfont-spin"></text>
						<text v-else>{{(item.status=="connected"?"断开":"") + (item.status=="disconnected"?"连接":"")}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottomBox">
			<view class="flex justify-center">
				<button class="cu-btn bg-red shadow-blur round lg" style="width: 240rpx;" @click="autoLinkDevice">
					<text v-if="searchingLoading" class="cuIcon-loading1 cuIconfont-spin"></text><text v-else class="text-sm">搜索设备</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	var _self
	export default {
		name: "links",
		data() {
			return {
				primaryServiceUUID: '',
				readUUID: '',
				writeUUID: '',
				searchingLoading: false,
				devices: [
					// {
					// 	name: "",
					// 	deviceId: null,
					// 	service: [{
					// 		serviceUuid: null,
					// 		characteristics: []
					// 	},
					// 	status: null
					// }]
				]
			};
		},
		methods: {
			getTime() {
				var time = new Date().toString().split(" ")[4].substr(0, 5).replace(":", "")
				return time
			},
			uploadTime() {
				var message = 'AT+TIMECRC' + _self.getTime()
				var messageBuffer = this.MessageToArrayBuffer(message)
				return messageBuffer
			},
			autoLinkDevice() {
				wx.getBluetoothAdapterState({
					success: (res) => {
						if (res.available){
							_self.searchingLoading = true
							wx.startBluetoothDevicesDiscovery({
								success: (res) => {
									setTimeout(() => {
										wx.getBluetoothDevices({
											success: (res) => {
												console.log('搜索设备数目' + res.devices.length)
												console.log('设备信息\n')
												res.devices.forEach((item, index) => {
													console.log(item)
													if (item.name == "JHY-SMART001"){
													//if (item.name == "Mi Air2"){
														wx.createBLEConnection({
															deviceId: item.deviceId,
															success: (res) => {
																console.log("设备" + item.name + "已连接")
																wx.showToast({
																	title: '设备' + item.name + '已连接',
																	icon: 'none'
																})
																_self.devices.splice(0, _self.devices.length)
																_self.devices.push({
																	name:item.name,
																	deviceId:item.deviceId,
																	status: 'connected',
																	avatar: 'static/bluetooth_con.png',
																	services: []
																})
																console.log(this)
																_self.isConnected = true
																_self.devices.forEach((device, i) => {
																	wx.getBLEDeviceServices({
																		deviceId: device.deviceId,
																		success: (res) => {
																			console.log(res)
																			device.services = res.services
																			device.services.forEach((service) => {
																				wx.getBLEDeviceCharacteristics({
																					deviceId: device.deviceId,
																					serviceId: service.uuid,
																					success: (res) => {
																						service.characteristics = res.characteristics
																					}
																				})
																			})
																		}
																	})
																})
																setTimeout(() => {
																	_self.SaveUUID()
																	console.log("UUDI: " + _self.primaryServiceUUID + " write: " + _self.writeUUID)
																	if (_self.primaryServiceUUID != '' && _self.writeUUID != '') {
																		setTimeout(() => {
																			wx.writeBLECharacteristicValue({
																				deviceId: _self.devices[0].deviceId,
																				serviceId: _self.primaryServiceUUID,
																				characteristicId: _self.writeUUID,
																				value: _self.uploadTime(),
																				success: (res) => {
																					console.log("发送成功 " + res.errMsg)
																				},
																				fail: (res) => {
																					console.log("发送失败 " + res.errMsg)
																				}
																			})
																		}, 1000)
																	}
																},1000)
																console.log(_self)
																wx.stopBluetoothDevicesDiscovery()
																_self.searchingLoading = false
															},
															fail: () => {
																wx.showToast({
																	title: '连接失败',
																	icon: 'none'
																})
																console.log("连接失败")
																_self.searchingLoading = false
															}
														})
													}
												})
											},
											complete: () => {
												wx.stopBluetoothDevicesDiscovery()
												setTimeout(() => {
													_self.searchingLoading = false
												}, 5000)
											}
										})
									}, 3000)
								},
								fail: (res) => {
									wx.stopBluetoothDevicesDiscovery()
								}
							})
						}
						else {
							wx.showToast({
								title: "请打开蓝牙功能",
								icon: "none"
							})
						}
					},
					fail: () => {
						wx.showToast({
							title: "请打开蓝牙功能",
							icon: "none"
						})
					}
				})
			},
			disconnectDevice(e){
				if (_self.devices[e.currentTarget.id].status == "connected"){
					_self.devices[e.currentTarget.id].status = "changingStatus"
					wx.closeBLEConnection({
						deviceId: _self.devices[e.currentTarget.id].deviceId,
						success: () => {
							_self.devices[e.currentTarget.id].status = "disconnected"
							console.log("已断开")
							wx.showToast({
								title: '设备断开成功',
								icon: 'none'
							})
							_self.devices[e.currentTarget.id].avatar = 'static/bluetooth.png' 
						},
						fail: () => {
							_self.devices[e.currentTarget.id].status = "connected"
							console.log("断开失败")
							wx.showToast({
								title: '设备断开失败',
								icon: 'none'
							})
						}
					})
				}
				else if (_self.devices[e.currentTarget.id].status == "disconnected"){
					_self.devices[e.currentTarget.id].status = "changingStatus"
					wx.createBLEConnection({
						deviceId: _self.devices[e.currentTarget.id].deviceId,
						success: () => {
							_self.devices[e.currentTarget.id].status = "connected"
							console.log("已连接")
							wx.showToast({
								title: '设备已连接',
								icon: 'none'
							})
							_self.devices[e.currentTarget.id].avatar = 'static/bluetooth_con.png' 
						},
						fail: () => {
							_self.devices[e.currentTarget.id].status = "disconnected"
							console.log("连接失败")
							wx.showToast({
								title: "设备连接失败",
								icon: 'none'
							})
						}
					})
				}
			},
			hideModal() {
				_self.bottomInfoIsShow = false
			},
			SaveUUID() {
				_self.devices[0].services.forEach((service, i) => {
					if (service.uuid.split("-")[0].indexOf('FF00') != -1){
					//if (service.uuid.split("-")[0].indexOf('AF00') != -1){
						_self.primaryServiceUUID = service.uuid
						getApp().globalData.primaryServiceUUID = service.uuid
						service.characteristics.forEach((characteristic) => {
							if (characteristic.uuid.split("-")[0].indexOf("01") != -1){
								_self.readUUID = characteristic.uuid
								getApp().globalData.readUUID = characteristic.uuid
							}
							if (characteristic.uuid.split("-")[0].indexOf("02") != -1){
								_self.writeUUID = characteristic.uuid
								getApp().globalData.writeUUID = characteristic.uuid
							}
						})
					}
				})
				console.log(_self)
			}
		},
		created() {
			console.log(this)
			_self = this
			_self.devices = getApp().globalData.devices
			_self.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			_self.readUUID = getApp().globalData.readUUID
			_self.writeUUID = getApp().globalData.writeUUID
		},
		mounted() {
			_self.uploadTime()
			_self.getTime(),
			wx.getBluetoothAdapterState({
				success: (res) => {
					if (res.available == false){
						wx.openBluetoothAdapter({
							success: () => {
								console.log("打开蓝牙适配器成功")
							},
							fail: () => {
								console.log("打开蓝牙适配器失败")
								wx.showToast({
									title: "请打开蓝牙功能",
									icon: "none"
								})
							}
						})
					}
				},
				fail: (res) => {
					wx.openBluetoothAdapter({
						success: () => {
							console.log("打开蓝牙适配器成功")
						},
						fail: () => {
							console.log("打开蓝牙适配器失败")
							wx.showToast({
								title: "请打开蓝牙功能",
								icon: "none"
							})
						}
					})
				}
			})
		},
		beforeCreate() {
			console.log("进入连接页面")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	.bottomBox {
		position: fixed;
		margin: auto;
		bottom: 60rpx;
		left: 0;
		right: 0;
	}
	.centerBox {
		display: flex;
	}
</style>
