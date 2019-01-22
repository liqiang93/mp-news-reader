// pages/find/find.js
var api = require("../../api/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
      url: 'https://pic.36krcnd.com/201901/18034029/6i5eunfwm9hr1qmt!1200',
      id: 0
    },
    {
      url: 'https://pic.36krcnd.com/201901/18053554/tyt9hhadx088fl03.png!1200',
      id: 1
    },
    {
      url: 'https://pic.36krcnd.com/201901/17050235/nxavte3eughht25b!1200',
      id: 2
    },
    {
      url: 'https://pic.36krcnd.com/201901/17035843/6vasqwt9bkpyj1v1!1200',
      id: 3
    },
    {
      url: 'https://pic.36krcnd.com/201901/16230922/jayp4lr9zce5qaas!1200',
      id: 4
    },
    {
      url: 'https://pic.36krcnd.com/201901/16084057/grzmjwa1edb2qjgo.jpeg!1200',
      id: 5
    }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFind()
  },

  //查看评论
  comment: function() {
    console.log("触发查看评论")
    wx.showToast({
      title: '暂无内容',
      icon: 'none'
    })
  },

  //写评论
  edit: function() {
    console.log("触发写评论")
    wx.showToast({
      title: '暂无内容',
      icon: 'none'
    })
  },

  //获取发现
  getFind: function () {
    var that = this
    var params = {}
    params.mock = true
    api.activity.find({
      params: params,
      success: function (res) {
        that.setData({
          findContent: res.findContent
        })
        console.log(that.data.findContent)
      },
      fail: function (res) {
        console.log("失败")
      }
    })
  },


  skipArticle: function() {
    wx.navigateTo({
      url: '../webpage/webpage?url=' + "https://36kr.com/p/5172761.html"
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