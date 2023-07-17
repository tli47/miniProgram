// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    value: '',
    active: 1,
    imageURL: '/asset/room.jpg'
  },

  onLoad() {
    // this.getTabBar().init();
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
	onShow() {
		// 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
	    this.getTabBar().setData({active: 0})
	},
})