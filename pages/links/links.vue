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
    <u-popup :show="isShowPopup" mode="center" :round="10" :closeable="true" @close="popupClose">
      <view style="display: flex; justify-content: center; line-height: 120rpx; font-weight: 600;">设备列表</view>
      <view style="width: 600rpx; height: 500rpx;">
        <scroll-view scroll-y="true" style="height: 500rpx; z-index: 99;">
          <u-cell-group :border="false">
            <u-cell 
              v-for="(device,index) in searchList" 
              :key="index" 
              :title="device.name" 
              :border="false"
              :isLink="true"
              @click="connectDevice(device)">
              <view slot="right-icon">
                <u-tag :text="'信号: '+device.RSSI" :type="device.RSSI>50?'success':device.RSSI<20?'error':'warning'" size="mini"></u-tag>
              </view>
            </u-cell>
          </u-cell-group>
        </scroll-view>
      </view>
    </u-popup>
	</view>
</template>

<script>
	var _self
  const deviceList = [
    {
      name: 'JHY-SMART001',
      rssi: '1'
    }, {
      name: 'JHY-SMART001',
      rssi: '2'
    }, {
      name: 'JHY-SMART001',
      rssi: '3'
    }, {
      name: 'JHY-SMART001',
      rssi: '4'
    }, {
      name: 'JHY-SMART001',
      rssi: '5'
    }
  ]
	export default {
		name: "links",
		data() {
			return {
				primaryServiceUUID: '', //主服务UUID
				readUUID: '', //通知UUID
				writeUUID: '', //写入UUID
				searchingLoading: false,
				devices: [],
				isLoadingShow: false,
				isSyncing: false,
        
        isShowPopup: false,
        searchList: [],
        demoDeviceList: deviceList
			};
		},
		methods: {
      popupClose() {
        this.isShowPopup = false
        this.searchingLoading = false
        this.searchList = []
      },
      connectDevice(device) {
        this.popupClose()
        wx.showLoading({
          title: '设备连接中',
          icon: 'none'
        })
        wx.createBLEConnection({
        	deviceId: device.deviceId,
        	success: (res) => {
        		_self.isLoadingShow = false
        		console.log("设备" + device.name + "已连接")
        		wx.showToast({
        			title: '设备' + device.name + '已连接',
        			icon: 'none'
        		})
        		wx.showLoading({
        			title: '同步数据中...',
        			mask: true
        		})
        		console.log("同步数据Loading")
        		_self.isSyncing = true
        		setTimeout(() => {
        			if (_self.isSyncing) {
        				wx.hideLoading()
        				_self.isSyncing = false
        				console.log("同步数据Loading关闭")
        			}
        		}, 8000)
        		//保证重复连接时只出现一个设备
        		_self.devices.splice(0, _self.devices.length)
        		_self.devices.push({
        			name: device.name,
        			deviceId: device.deviceId,
        			status: 'connected',
        			avatar: 'static/bluetooth_con.png',
        			services: []
        		})
        		_self.isConnected = true
        		_self.devices.forEach((device, i) => {
        			//获取连接的设备的服务列表
        			wx.getBLEDeviceServices({
        				deviceId: device.deviceId,
        				success: (res) => {
        					console.log(res)
        					device.services = res.services
        					device.services.forEach((service) => {
        						//获取所有服务下的特征值
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
        			//保存指定的服务及其特征值
        			_self.SaveUUID()
        			console.log("UUDI: " + _self.primaryServiceUUID + " write: " + _self.writeUUID)
        			if (_self.primaryServiceUUID != '' && _self.writeUUID != '') {
        				setTimeout(() => {
        					wx.notifyBLECharacteristicValueChange({
        						deviceId: this.devices[0].deviceId,
        						serviceId: this.primaryServiceUUID,
        						characteristicId: this.readUUID,
        						state: true
        					})
        					wx.onBLECharacteristicValueChange((res) => {
        						let u8Arr = new Uint8Array(res.value)
        						console.log("收到监听数据")
        						console.log(u8Arr)
        						let offset = u8Arr.indexOf(0x7E)
        						if (u8Arr[offset + 1] == 0x05 && u8Arr[offset + 2] == 0x99) {
        							console.log("收到模式指令")
        							let isTiming = u8Arr[offset + 3]
        							let isPlayingOncePower = u8Arr[offset + 4]
        							let isCycleAtTime = u8Arr[offset + 5]
        							console.log("isTiming: " + isTiming)
        							console.log("isPlayingOncePower: " + isPlayingOncePower)
        							console.log("isCycleAtTime: " + isCycleAtTime)
        							if (isTiming == 0x00) {
        								getApp().globalData.mode = 1
        							}
        							else if (isPlayingOncePower == 0x01) {
        								getApp().globalData.mode = 2
        							}
        							else if (isCycleAtTime == 0x01) {
        								getApp().globalData.mode = 3
        							}
        							_self.$forceUpdate()
        							if (_self.isSyncing) {
        								_self.isSyncing = false
        								wx.hideLoading()
        								console.log("同步数据Loading关闭")
        							}
        						}
        						wx.offBLECharacteristicValueChange()
        					})
        					//写特征值操作
        					setTimeout(() => {
        						wx.writeBLECharacteristicValue({
        							deviceId: _self.devices[0].deviceId,
        							serviceId: _self.primaryServiceUUID,
        							characteristicId: _self.writeUUID,
        							value: _self.uploadTime(),
        							success: (res) => {
        								console.log("发送成功 " + res.errMsg)
        								console.log(res)
        							},
        							fail: (res) => {
        								console.log("发送失败 " + res.errMsg)
        								if (_self.isSyncing) {
        									_self.isSyncing = false
        									wx.hideLoading()
        									console.log("同步数据Loading关闭")
        								}
        							}
        						})
        					}, 100)
        				}, 1000)
        			}
        		}, 1000)
        	},
        	fail: (res) => {
        		wx.showToast({
        			title: '连接失败 ' + res.errorCode,
        			icon: 'none'
        		})
        		console.log("连接失败")
        		if (_self.isConnected) {
        			return
        		}
        		wx.closeBluetoothAdapter({
        			success: res => {
        				console.log("关闭蓝牙适配器成功")
        				setTimeout(() => {
        					wx.openBluetoothAdapter({
        						success: res => {
        							console.log("重新打开蓝牙适配器成功")
        						},
        						fail: res => {
        							console.log("重新打开蓝牙适配器失败")
        						}
        					})
        				}, 100)
        			},
        			fail: res => {
        				console.log("关闭蓝牙适配器失败")
        			},
        			complete: () => {
        				_self.searchingLoading = false
        			}
        		})
        	}
        })
      },
			//通过AT指令上传时间
			uploadTime() {
				let numArr = new Array()
				let hour = new Date().toString().split(" ")[4].substr(0, 2)
				let min = new Date().toString().split(" ")[4].substr(3, 2)
				let weekday = new Date().getDay()
				numArr.push(0x7E)
				numArr.push(0x04)
				numArr.push(0x12)
				numArr.push(Number(weekday))
				numArr.push(Number(hour))
				numArr.push(Number(min))
				numArr.push(0xEF)
				let u8Arr = new Uint8Array(numArr)
				return u8Arr.buffer
			},
			autoLinkDevice() {
				if (this.searchingLoading) {
					return
				}
				//查看蓝牙适配器状态
				wx.getBluetoothAdapterState({
					success: (res) => {
						if (!res.available) {
							wx.showToast({
								title: "请打开蓝牙功能",
								icon: "none"
							})
							return
						}
						if (res.discovering) {
							return
						}
						
						//注册断开链接回调
						wx.onBLEConnectionStateChange((res) => {
							if (!res.connected) {
								_self.devices[0].status = "disconnected"
								wx.showToast({
									title: "失去蓝牙链接",
									icon: "none"
								})
							}
						})
						
						_self.searchingLoading = true
						wx.showLoading({
							title: '请稍后...',
							mask: true
						})
						_self.isLoadingShow = true
						console.log("Loading 已开启")
						setTimeout(() => {
							if (_self.isLoadingShow) {
								console.log("Loading 已关闭")
								_self.isLoadingShow = false
								wx.hideLoading()
							}
						}, 1000 * 3)
						//打开[蓝牙发现]
						wx.startBluetoothDevicesDiscovery({
							success: (res) => {
								//设置延时3s以搜索周围设备
								setTimeout(() => {
									//获取[设备信息]
									wx.getBluetoothDevices({
										success: (res) => {
                      this.searchingLoading = false
											console.log('搜索设备数目' + res.devices.length)
                      res.devices.sort((a,b) => {
                        return b.RSSI - a.RSSI
                      })
											res.devices.forEach((item, index) => {
                        item.RSSI = 100 + parseInt(item.RSSI)
												console.log(item)
                        this.searchList.push(item)
                        if (item.name.includes('JHY-SMART')) {
                          this.searchList.push(item)
                        }
                        if (this.searchList.length > 0) {
                          this.isShowPopup = true
                        }
											})
										},
										complete: () => {
											//关闭[蓝牙发现]以节省系统资源
											wx.stopBluetoothDevicesDiscovery()
											setTimeout(() => {
												_self.searchingLoading = false
											}, 5000)
										}
									})
								}, 3000)
							},
							fail: (res) => {
								//关闭[蓝牙发现]以节省系统资源
								wx.stopBluetoothDevicesDiscovery()
								_self.searchingLoading = false
							}
						})
					},
					fail: () => {
						wx.showToast({
							title: "请打开蓝牙功能",
							icon: "none"
						})
					}
				})
			},
			//断开设备连接
			disconnectDevice(e) {
				//如果设备是连接状态
				if (_self.devices[e.currentTarget.id].status == "connected") {
					_self.devices[e.currentTarget.id].status = "changingStatus"
					//断开BLE设备连接
					wx.offBLEConnectionStateChange()
					wx.closeBLEConnection({
						deviceId: _self.devices[e.currentTarget.id].deviceId,
						//断开成功
						success: () => {
							_self.devices[e.currentTarget.id].status = "disconnected"
							console.log("已断开")
							wx.showToast({
								title: '设备断开成功',
								icon: 'none'
							})
							_self.devices[e.currentTarget.id].avatar = 'static/bluetooth.png'
						},
						//断开失败
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
				//如果设备处于断开状态
				else if (_self.devices[e.currentTarget.id].status == "disconnected") {
					_self.devices[e.currentTarget.id].status = "changingStatus"
					//蓝牙连接BLE设备
					wx.onBLEConnectionStateChange((res) => {
						if (!res.connected) {
							_self.devices[0].status = "disconnected"
							wx.showToast({
								title: "失去蓝牙链接",
								icon: "none"
							})
						}
					})
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
							//重新手动连接成功后下发时间信息
							setTimeout(() => {
								wx.writeBLECharacteristicValue({
									deviceId: this.devices[0].deviceId,
									serviceId: this.primaryServiceUUID,
									characteristicId: this.writeUUID,
									value: this.uploadTime(),
									success: (res) => {
										console.log("发送成功 " + res.errMsg)
									},
									fail: () => {
										console.log("发送失败 " + res.errMsg)
									}
								})
							}, 100)
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
			SaveUUID() {
				//遍历设备服务树, 以全局变量保存需要的服务UUID和特征值UUID
				_self.devices[0].services.forEach((service, i) => {
					if (service.uuid.split("-")[0].indexOf('FF00') != -1) {
						_self.primaryServiceUUID = service.uuid
						//保存全局变量-服务UUID
						getApp().globalData.primaryServiceUUID = service.uuid
						service.characteristics.forEach((characteristic) => {
							if (characteristic.uuid.split("-")[0].indexOf("03") != -1) {
								_self.readUUID = characteristic.uuid
								//保存全局变量-特征值UUID
								getApp().globalData.readUUID = characteristic.uuid
							}
							if (characteristic.uuid.split("-")[0].indexOf("02") != -1) {
								_self.writeUUID = characteristic.uuid
								//保存全局变量-特征值UUID
								getApp().globalData.writeUUID = characteristic.uuid
							}
						})
					}
				})
				console.log(_self)
			}
		},
		beforeCreate() {
			console.log("进入连接页面")
		},
		created() {
			_self = this
			_self.devices = getApp().globalData.devices
			_self.primaryServiceUUID = getApp().globalData.primaryServiceUUID
			_self.readUUID = getApp().globalData.readUUID
			_self.writeUUID = getApp().globalData.writeUUID
		},
		mounted() {
			//页面挂载后打开蓝牙适配器
			wx.getBluetoothAdapterState({
				success: (res) => {
					if (res.available == false) {
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
