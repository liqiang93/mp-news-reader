// pages/friend/friend.js
var api = require("../../api/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFriend()
  },

  //发布评论
  comment: function (){
    console.log("触发写评论")
    wx.showToast({
      title: '暂无内容',
      icon: 'none'
    })
  },

  //获取朋友圈
  getFriend: function () {
    var that = this
    var params = {}
    params.mock = true
    api.activity.friend({
      params: params,
      success: function (res) {
        that.setData({
          friendContent: res.friendContent
        })
        console.log(res.friendContent)
      },
      fail: function (res) {
        console.log("失败")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})