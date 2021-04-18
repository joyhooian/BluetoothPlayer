<!-- 主页面 -->
<template>
	<view>
		<links v-if="PageCur=='links'"></links>
		<alarms v-if="PageCur=='alarms'"></alarms>
		<load ref="load" v-if="PageCur=='load'"></load>
		<setting v-if="PageCur=='setting'"></setting>
		<!-- <basics v-if="PageCur=='basics'"></basics> -->
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white foot radius-top">
			<view class="action" @click="NavChange" data-cur="links">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/links' + [PageCur=='links'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-black':'text-gray'">连接</view>
			</view>
			<view class="action" @click="NavChange" data-cur="alarms">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/alarms' + [PageCur == 'alarms'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='alarms'?'text-black':'text-gray'">定时</view>
			</view>
			<view class="action" @click="NavChange" data-cur="load">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/load' + [PageCur == 'load'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='load'?'text-black':'text-gray'">导入</view>
			</view>
			<view class="action" @click="NavChange" data-cur="setting">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/setting' + [PageCur == 'setting'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='setting'?'text-black':'text-gray'">设置</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'links',
				synthesisPath: null,
				synthesisName: null
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		onShow() {
			console.log("进入index")
			if (this.PageCur === 'load') {
				if (this.synthesisName != null && this.synthesisPath != null) {
					this.$refs.load.addAudio({
						name: this.synthesisName,
						path: this.synthesisPath
					})
				}
				this.synthesisName = null
				this.synthesisPath = null
			}
		}
	}
</script>

<style>

</style>
