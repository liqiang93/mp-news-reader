// pages/search/search.js
import config from './config';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      // {
      //   // 导航名称
      //   text: '所有城市',
      //   // 该导航下所有的可选项
      //   children: [...config.pro1, ...config.pro2]
      // }, 
      {
        // 导航名称
        text: config.pro1Name,
        // 该导航下所有的可选项
        children: config.pro1
      }, {
        text: config.pro2Name,
        children: config.pro2
      }, {
        text: config.pro3Name,
        //disabled: true,
        children: config.pro3
      }, {
        text: config.pro4Name,
        children: config.pro4
      }, {
        text: config.pro5Name,
        children: config.pro5
      }, {
        text: config.pro6Name,
        children: config.pro6
      }, {
        text: config.pro7Name,
        children: config.pro7
      }, {
        text: config.pro8Name,
        children: config.pro8
      }
    ],
    mainActiveIndex: 0,
    activeId: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  //左侧导航点击时，触发的事件
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    })
    console.log("左侧导航点击时:" + this.data.mainActiveIndex)
  },

  //右侧选择项被点击时，会触发的事件
  onClickItem({
    detail = {}
  }) {
    this.setData({
      activeId: detail.id
    })
    console.log("右侧选择项被点击时:" + this.data.activeId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})