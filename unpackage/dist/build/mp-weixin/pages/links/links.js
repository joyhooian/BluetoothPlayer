(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/links/links"],{"0372":function(e,t,c){"use strict";c.r(t);var i=c("057d"),n=c("5ef4");for(var o in n)"default"!==o&&function(e){c.d(t,e,(function(){return n[e]}))}(o);c("e2ab");var s,a=c("f0c5"),r=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=r.exports},"057d":function(e,t,c){"use strict";var i;c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"5ef4":function(e,t,c){"use strict";c.r(t);var i=c("9784"),n=c.n(i);for(var o in i)"default"!==o&&function(e){c.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},9784:function(e,t,c){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"links",data:function(){return{primaryServiceUUID:"",readUUID:"",writeUUID:"",searchingLoading:!1,devices:[]}},methods:{uploadTime:function(){var e=new Array,t=(new Date).toString().split(" ")[4].substr(0,2),c=(new Date).toString().split(" ")[4].substr(3,2),i=(new Date).getDay();e.push(126),e.push(4),e.push(18),e.push(Number(i)),e.push(Number(t)),e.push(Number(c)),e.push(239);var n=new Uint8Array(e);return n.buffer},autoLinkDevice:function(){wx.getBluetoothAdapterState({success:function(e){e.available?(i.searchingLoading=!0,wx.startBluetoothDevicesDiscovery({success:function(e){setTimeout((function(){wx.getBluetoothDevices({success:function(e){console.log("搜索设备数目"+e.devices.length),console.log("设备信息\n"),e.devices.forEach((function(e,t){console.log(e),"JHY-SMART001"==e.name&&wx.createBLEConnection({deviceId:e.deviceId,success:function(t){console.log("设备"+e.name+"已连接"),wx.showToast({title:"设备"+e.name+"已连接",icon:"none"}),i.devices.splice(0,i.devices.length),i.devices.push({name:e.name,deviceId:e.deviceId,status:"connected",avatar:"static/bluetooth_con.png",services:[]}),i.isConnected=!0,i.devices.forEach((function(e,t){wx.getBLEDeviceServices({deviceId:e.deviceId,success:function(t){console.log(t),e.services=t.services,e.services.forEach((function(t){wx.getBLEDeviceCharacteristics({deviceId:e.deviceId,serviceId:t.uuid,success:function(e){t.characteristics=e.characteristics}})}))}})})),setTimeout((function(){i.SaveUUID(),console.log("UUDI: "+i.primaryServiceUUID+" write: "+i.writeUUID),""!=i.primaryServiceUUID&&""!=i.writeUUID&&setTimeout((function(){wx.writeBLECharacteristicValue({deviceId:i.devices[0].deviceId,serviceId:i.primaryServiceUUID,characteristicId:i.writeUUID,value:i.uploadTime(),success:function(e){console.log("发送成功 "+e.errMsg),console.log(e)},fail:function(e){console.log("发送失败 "+e.errMsg)}})}),1e3)}),1e3),wx.stopBluetoothDevicesDiscovery(),i.searchingLoading=!1},fail:function(){wx.showToast({title:"连接失败",icon:"none"}),console.log("连接失败"),i.searchingLoading=!1}})}))},complete:function(){wx.stopBluetoothDevicesDiscovery(),setTimeout((function(){i.searchingLoading=!1}),5e3)}})}),3e3)},fail:function(e){wx.stopBluetoothDevicesDiscovery()}})):wx.showToast({title:"请打开蓝牙功能",icon:"none"})},fail:function(){wx.showToast({title:"请打开蓝牙功能",icon:"none"})}})},disconnectDevice:function(e){var t=this;"connected"==i.devices[e.currentTarget.id].status?(i.devices[e.currentTarget.id].status="changingStatus",wx.closeBLEConnection({deviceId:i.devices[e.currentTarget.id].deviceId,success:function(){i.devices[e.currentTarget.id].status="disconnected",console.log("已断开"),wx.showToast({title:"设备断开成功",icon:"none"}),i.devices[e.currentTarget.id].avatar="static/bluetooth.png"},fail:function(){i.devices[e.currentTarget.id].status="connected",console.log("断开失败"),wx.showToast({title:"设备断开失败",icon:"none"})}})):"disconnected"==i.devices[e.currentTarget.id].status&&(i.devices[e.currentTarget.id].status="changingStatus",wx.createBLEConnection({deviceId:i.devices[e.currentTarget.id].deviceId,success:function(){i.devices[e.currentTarget.id].status="connected",console.log("已连接"),wx.showToast({title:"设备已连接",icon:"none"}),i.devices[e.currentTarget.id].avatar="static/bluetooth_con.png",setTimeout((function(){wx.writeBLECharacteristicValue({deviceId:t.devices[0].deviceId,serviceId:t.primaryServiceUUID,characteristicId:t.writeUUID,value:t.uploadTime(),success:function(e){console.log("发送成功 "+e.errMsg)},fail:function(){console.log("发送失败 "+res.errMsg)}})}),100)},fail:function(){i.devices[e.currentTarget.id].status="disconnected",console.log("连接失败"),wx.showToast({title:"设备连接失败",icon:"none"})}}))},SaveUUID:function(){i.devices[0].services.forEach((function(e,t){-1!=e.uuid.split("-")[0].indexOf("FF00")&&(i.primaryServiceUUID=e.uuid,getApp().globalData.primaryServiceUUID=e.uuid,e.characteristics.forEach((function(e){-1!=e.uuid.split("-")[0].indexOf("03")&&(i.readUUID=e.uuid,getApp().globalData.readUUID=e.uuid),-1!=e.uuid.split("-")[0].indexOf("02")&&(i.writeUUID=e.uuid,getApp().globalData.writeUUID=e.uuid)})))})),console.log(i)}},beforeCreate:function(){console.log("进入连接页面")},created:function(){i=this,i.devices=getApp().globalData.devices,i.primaryServiceUUID=getApp().globalData.primaryServiceUUID,i.readUUID=getApp().globalData.readUUID,i.writeUUID=getApp().globalData.writeUUID},mounted:function(){wx.getBluetoothAdapterState({success:function(e){0==e.available&&wx.openBluetoothAdapter({success:function(){console.log("打开蓝牙适配器成功")},fail:function(){console.log("打开蓝牙适配器失败"),wx.showToast({title:"请打开蓝牙功能",icon:"none"})}})},fail:function(e){wx.openBluetoothAdapter({success:function(){console.log("打开蓝牙适配器成功")},fail:function(){console.log("打开蓝牙适配器失败"),wx.showToast({title:"请打开蓝牙功能",icon:"none"})}})}})}};t.default=n},b42c:function(e,t,c){},e2ab:function(e,t,c){"use strict";var i=c("b42c"),n=c.n(i);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/links/links-create-component',
    {
        'pages/links/links-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0372"))
        })
    },
    [['pages/links/links-create-component']]
]);
