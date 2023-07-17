// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.getTabBar().init();
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    });
  },
  onShow() {
		// 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
	    this.getTabBar().setData({active: 1})
	},
})
