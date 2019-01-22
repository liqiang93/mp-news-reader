// pages/course/course.js
var api = require("../../api/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
        url: 'https://pic.36krcnd.com/201901/04034723/gtpbgqbgpfqwyyyy',
        id: 0
      },
      {
        url: 'https://pic.36krcnd.com/201812/22050042/0jvrxougixrxlbwu',
        id: 1
      },
      {
        url: 'https://pic.36krcnd.com/201812/19022001/g0v9igvzsbqcw7j5',
        id: 2
      },
      {
        url: 'https://pic.36krcnd.com/201812/17035744/kzij7ss2qdtn0ee5',
        id: 3
      },
      {
        url: 'https://pic.36krcnd.com/201812/13083939/y4zj5o2cqojy3j3i',
        id: 4
      },
      {
        url: 'https://pic.36krcnd.com/201901/16090742/3h01w9ak0avg3pld',
        id: 5
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCourse()
  },

  //跳转查看更多界面传递参数
  more: function(e) {
    console.log("点击type ID:" + e.currentTarget.dataset.type)
    let type = e.currentTarget.dataset.type
    let courseMore = this.data.courseList
    this.setData({
      arrayCourse: courseMore[type]
    })
    console.log(this.data.arrayCourse)
    wx.navigateTo({
      url: '../more/more?arrayCourse=' + escape(JSON.stringify(this.data.arrayCourse))
    })

  },

  //捕捉轮播图点击事件
  selectImge: function(e) {
    console.log("点击轮播图ID:" + e.target.dataset.currentid)
    wx.showToast({
      title: '暂无内容',
      icon: 'none'
    })
  },

  //捕捉课程列表点击事件
  selectCourse: function(e) {
    console.log("点击课程ID:" + e.currentTarget.dataset.courseid)
    wx.showToast({
      title: '暂无内容',
      icon: 'none'
    })
  },

  //获取课程
  getCourse: function() {
    let that = this
    let params = {}
    params.mock = true
    api.activity.course({
      params: params,
      success: function(res) {
        let courseList = res.courseList
        // courseList.forEach(function(element) {
        //   element.children.splice(2)
        //   console.log(element)
        // })
        that.setData({
          courseList: courseList,
        })
      },
      fail: function(res) {
        console.log("失败")
      }
    })
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