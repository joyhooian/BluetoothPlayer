<!-- 导入音乐页面 -->
<template name="load">
	<view>
		<cu-custom bgColor="bg-gradual-red">
			<block slot="content"><text class="text-bold">导入</text></block>
		</cu-custom>
		<!-- 顶部按钮组 -->
		<view class="cu-bar bg-white shadow shadow-blur radius-bottom" :style="{position: 'fixed', left: 0, width: '100%', top:CustomBar + 'px', zIndex: 1000}">
			<view class="action">
				<button v-if="!isMultiSelect && musicInfo.length != 0" @click="MultiSelectStart" class="cu-btn round lines-black"><text>多选</text></button>
				<button v-if="isMultiSelect && !isSelectedAll" @click="SelectAll" class="cu-btn round lines-black margin-right-sm"><text>全选</text></button>
				<button v-if="isMultiSelect && isSelectedAll" @click="SelectNothing" class="cu-btn round lines-black margin-right-sm"><text>取消全选</text></button>
				<button v-if="isMultiSelect"@click="MultiSelectCancel" class="cu-btn round lines-red"><text>取消</text></button>
			</view>
			<view class="content text-bold"></view>
			<view class="action">
				<button v-if="!isMultiSelect" class="cu-btn round lines-black" @click="importMusic"><text>导入</text></button>
				<button v-else class="cu-btn round lines-red" @click="deleteMusic"><text>删除</text></button>
			</view>
		</view>
		<!-- 音乐列表 -->
		<view class="box" style="margin-bottom: 260rpx; margin-top: 120rpx;">
			<view class="cu-list menu-avatar shadow shadow-blur">
				<view class="cu-item" :class="!isMultiSelect && index==curMusic?'bg-image-grey':''"v-for="(item, index) in musicInfo" :key="index" @click="MusicSelect" :id="index">
					<view v-if="!isMultiSelect" class="cu-avatar round lg bg-white"><text :class="index == curMusic && isPlaying?'cuIconfont-spin':''">{{index + 1}}</text></view>
					<view v-else class="cu-avatar round lg solids" :class="item.isSelect?'bg-blue':'bg-white'"><text v-if="item.isSelect" class="cuIcon text-white cuIcon-check"></text></view>
					<view class="content">
						<view :class="!isMultiSelect && index==curMusic?'text-black':'text-gray'">{{item.name.length>12?item.name.substr(0,12) + '...':item.name}}</view>
					</view>
					<view v-if="index == curMusic" class="action margin-right-sm">
						<text class="text-white">{{remainString + ''}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 音量调整滑块 -->
		<view class="cu-modal bottom-modal" @tap="HideVolume" :class="isShowVolume?'show':''">
			<view class="cu-dialog bg-white">
				<view style="padding: 15rpx">
					<slider min="0" max="100" :value="currentVolume" @changing="ChangeVolume" show-value block-size="20" activeColor="#555555"></slider>
				</view>
			</view>
		</view>
		<!-- 底部按钮组 -->
		<view class="bottomBox" style="height: 160rpx; bottom: 100rpx;">
			<view class="flex justify-center align-center">
				<view class="flex-sub flex justify-center padding align-center">
					<button class="cu-btn cuIcon lines-black round margin-right-sm shadow shadow-blur" @click="ChangePlayMode"><text class="text-black text-shadow" :class="playMode[playModeIndex]"></text></button>
				</view>
				<view class="flex-treble flex justify-center padding align-center">
					<button class="cu-btn cuIcon lines-black round mid margin-left-sm shadow shadow-blur" :disabled="playDisabled" @click="LastMusic"><text class="cuIcon-backwardfill text-black text-shadow"></text></button>
					<button class="cu-btn cuIcon lines-black round lg margin-left-sm margin-right-sm shadow" :disabled="playDisabled" @click="PlayPause"><text class="cuIcon-playfill text-red text-shadow lg" :class="isPlaying?'cuIcon-stop':'cuIcon-playfill'"></text></button>
					<button class="cu-btn cuIcon lines-black round mid margin-right-sm shadow shadow-blur" :disabled="playDisabled" @click="NextMusic"><text class="cuIcon-play_forward_fill text-black text-shadow"></text></button>
				</view>
				<view class="flex-sub flex justify-center padding align-center">
					<button class="cu-btn cuIcon lines-black round margin-left-sm shadow shadow-blur" :disabled="playDisabled" @click="ShowVolume"><text class="cuIcon-notification text-black text-shadow"></text></button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self
	export default {
		name: "load",
		data() {
			return {
				currentVolume: 100,
				isShowVolume: false,
				loading: true,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				tempFile: [],
				musicInfo: [],
				innerAudioContext: null,
				curMusic: null,
				isMultiSelect: false,
				isSelectedAll: false,
				musicSelected: [],
				playModeIndex: 0,
				playMode: ['cuIcon-musicfill', 'cuIcon-refresh', 'cuIcon-order'],
				isPlaying: false,
				remain:0,
				remainSec:0,
				remainMin:0,
				remainHour:0,
				remainString: ''
			}
		},
		computed: {
			playDisabled: () => {
				return _self.musicInfo.length==0?true:false
			}
		},
		methods: {
			// 改变音量
			ChangeVolume(e) {
				if (_self.innerAudioContext.volume != null) {
					_self.innerAudioContext.volume = e.detail.value / 100
				}
			},
			// 显示音量滑块
			ShowVolume() {
				_self.isShowVolume = true
			},
			// 隐藏音量滑块
			HideVolume() {
				_self.isShowVolume = false
			},
			// 进入多选页面
			MultiSelectStart(){
				_self.isMultiSelect = true
			},
			// 全选
			SelectAll(){
				_self.musicInfo.forEach((music, index) => {
					music.isSelect = true
				})
				_self.isSelectedAll = true
			},
			// 全不选
			SelectNothing(){
				_self.musicInfo.forEach((music, index) => {
					music.isSelect = false
				})
				_self.isSelectedAll = false
			},
			// 取消并退出全选页面
			MultiSelectCancel(){
				_self.isMultiSelect = false
				_self.SelectNothing()
			},
			// 删除页面
			deleteMusic(){
				let index = 0
				for(;;){
					if (_self.musicInfo[index].isSelect){
						_self.musicInfo.splice(index, 1)
					} else {
						index++
					}
					if (_self.musicInfo[index] == null){
						break
					}
				}
				if (_self.musicInfo.length == 0) {
					_self.isMultiSelect = false
				}
			},
			// 点击音乐列表时选择音乐
			MusicSelect(e){
				if (_self.isMultiSelect){
					_self.musicInfo[e.currentTarget.id].isSelect = !_self.musicInfo[e.currentTarget.id].isSelect
				} else {
					_self.curMusic = e.currentTarget.id
					getApp().globalData.curMusic = e.currentTarget.id
					if (_self.isPlaying) {
						_self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path
					}
					_self.clearRemain()	
				}
			},
			// 上一首音乐
			LastMusic(){
				let musicCnt = _self.musicInfo.length
				_self.curMusic--
				getApp().globalData.curMusic--
				if (_self.curMusic < 0) {
					_self.curMusic = musicCnt - 1
					getApp().globalData.curMusic = musicCnt - 1
				}
				if (_self.isPlaying) {
					_self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path
					_self.clearRemain()
				}
			},
			// 下一首音乐
			NextMusic() {
				let musicCnt = _self.musicInfo.length
				_self.curMusic++
				getApp().globalData.curMusic++
				if (_self.curMusic >= musicCnt) {
					_self.curMusic
					getApp().globalData.curMusic = 0
				}
				if (_self.isPlaying) {
					_self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path
					_self.clearRemain()
				}
			},
			// 改变播放模式
			ChangePlayMode(){
				_self.playModeIndex++
				if (_self.playModeIndex >= 3){
					_self.playModeIndex = 0
				}
				switch (_self.playModeIndex){
				case 0 :
					wx.showToast({
						title: '单次播放模式',
						icon: "none"
					})
					break
				case 1 :
					wx.showToast({
						title: '单曲循环模式',
						icon: "none"
					})
					break
				case 2:
					wx.showToast({
						title: '全部循环模式',
						icon: "none"
					})
				}
			},
			// 播放和暂停
			PlayPause(){
				if (_self.musicInfo[_self.curMusic] != null)
				{
					//设置播放状态全局flag
					_self.isPlaying = !_self.isPlaying
					getApp().globalData.isPlaying = _self.isPlaying
					if (_self.isPlaying) {
						// 设置音乐文件地址
						_self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path
						// 打开自动播放
						_self.innerAudioContext.autoplay = true
						// 音乐文件可以播放回调函数
						_self.innerAudioContext.onCanplay(() => {
							_self.innerAudioContext.duration
							// 设置延时以读取歌曲的时间长度
							setTimeout(() => {
								_self.musicInfo[_self.curMusic].duration = _self.innerAudioContext.duration
								_self.culculateRemain()
							}, 10)
						})
						// 播放音乐
						_self.innerAudioContext.play()
						// 音乐播放自然停止回调函数
						_self.innerAudioContext.onEnded(() => {
							// 清空剩余时间
							_self.clearRemain()
							// 如果是单曲模式
							if (_self.playModeIndex == 0)
							{
								_self.isPlaying = false
								getApp().globalData.isPlaying = false
							} 
							// 如果是单曲循环模式
							else if (_self.playModeIndex == 1) {
								_self.innerAudioContext.play()
							} 
							// 如果是列表循环模式
							else {
								_self.curMusic++
								if (_self.curMusic > _self.musicInfo.length) {
									_self.curMusic = 0
								}
								_self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path
								_self.innerAudioContext.play()
								
							}
						})
						// 更新剩余播放时长
						_self.innerAudioContext.onTimeUpdate(() => {
							_self.culculateRemain()
						})
					} else {
						_self.innerAudioContext.pause()
					}
				} else {
					wx.showToast({
						title: "请先导入音乐",
						icon: "none"
					})
				}
			},
			// 计算歌曲的剩余播放时间
			culculateRemain(){
				_self.remain = parseInt(_self.innerAudioContext.duration - _self.innerAudioContext.currentTime)
				_self.remainSec = _self.remain % 60
				_self.remainMin = parseInt(_self.remain/60)
				_self.remainHour = parseInt(_self.remain/3600)
				_self.formatTime()
			},
			// 清除歌曲的剩余播放时间
			clearRemain(){
				_self.remain = 0
				_self.remainSec = 0
				_self.remainMin = 0
				_self.remainHour = 0
				_self.formatTime()
			},
			// 格式化时间显示
			formatTime() {
				_self.remainString = ''
				if (_self.remainHour < 10)
				{
					_self.remainString += '0'
				}
				_self.remainString += _self.remainHour.toString() + ':'
				if (_self.remainMin < 10)
				{
					_self.remainString += '0'
				}
				_self.remainString += _self.remainMin.toString() + ':'
				if (_self.remainSec < 10)
				{
					_self.remainString += '0'
				}
				_self.remainString += _self.remainSec.toString()
			},
			// 导入微信聊天中的音乐文件
			importMusic(){
				wx.chooseMessageFile({
					//最大选择的文件数量
					count: 10,
					type: 'file',
					//文件格式筛选
					extension: ['mp3', 'wma', 'flac', 'aac'],
					success: (res) => {
						res.tempFiles.forEach((file) => {
							_self.musicInfo.push({
								name: file.name,
								duration: null,
								path: file.path,
								isSelect: false,
								currentTime: 0
							})
						})
					}
				})
			}
		},
		created() {
			_self = this
			_self.tempFile = getApp().globalData.tempFile
			_self.musicInfo = getApp().globalData.musicInfo
			_self.innerAudioContext = getApp().globalData.innerAudioContext
			_self.curMusic = getApp().globalData.curMusic
			_self.isPlaying = getApp().globalData.isPlaying
		},
		deactivated() {
			console.log("here")
			_self.innerAudioContext.stop()
		}
	}
</script>

<style>
	.bottomBox {
		position: fixed;
		margin: auto;
		height: 160rpx;
		bottom: 100rpx;
		left: 0;
		right: 0;
	}
	.floatBtn {
		position: fixed;
		margin: auto;
		bottom: 240rpx;
		right: 20rpx;
	}
</style>
