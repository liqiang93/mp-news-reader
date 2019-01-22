// pages/index/index.js
var api = require("../../api/api.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        title: '推荐',
        id: 0
      }, {
        title: '关注',
        id: 1
      },
      {
        title: '热榜',
        id: 2
      },
      {
        title: '快讯',
        id: 3
      },
      {
        title: '视频',
        id: 4
      },
      {
        title: '科技',
        id: 5
      },
      {
        title: '生活',
        id: 6
      },
      {
        title: '职场',
        id: 7
      }
    ],
    active: 0,
    movies: [{
        url: 'https://pic.36krcnd.com/201901/12074030/qpnyru3405b0yl6d.jpg!1200',
        id: 0
      },
      {
        url: 'https://pic.36krcnd.com/201901/13231618/obat2wk60mipdzso!1200',
        id: 1
      },
      {
        url: 'https://pic.36krcnd.com/201901/13165225/j04auzgyfxqlvl6a.png!1200',
        id: 2
      }
    ],

    shareContent: {
      avatar: '',
      nickname: '',
      awardMoney: '',
      showShareModel: false
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.gainNew()
    this.getAttention()
  },

  //视频播放出错时触发
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  //探索更多
  searchMore: function() {
    wx:wx.navigateTo({
      url: '../search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //点击分享卡
  selectDate: function() {
    this.setData({
      shareContent: {
        avatar: 'https://i.yunxi.tv/f326ecd6-60a0-48d8-a7de-b145e0cfd0ea',
        nickname: '潇洒哥',
        awardMoney: '四季如春',
        showShareModel: true
      }
    })
  },

  //选择推荐轮播图
  selectImge: function(event) {
    var selectImgeId = event.target.dataset.currentid
    // console.log(selectImgeId)
    switch (selectImgeId) {
      case 0:
        wx.navigateTo({
          url: '/pages/webpage/webpage?url=' + "https://www.36kr.com/p/5171878"
        })
      case 1:
        wx.navigateTo({
          url: '/pages/webpage/webpage?url=' + "https://36kr.com/p/5172004.html"
        })
      case 2:
        wx.navigateTo({
          url: '/pages/webpage/webpage?url=' + "https://36kr.com/p/5171997.html"
        })
    }
  },

  //选择推荐文章
  selectArticle: function(e) {
    var articleid = e.currentTarget.dataset.articleid
    var activities = this.data.activities
    var attention = this.data.attention
    var videoList = this.data.videoList
    var flashList = this.data.flashList
    var articleArry = []
    if (this.data.id == "0") {
      articleArry.push(activities[articleid].kerUrl)
    } else if (this.data.id == "1") {
      articleArry.push(attention[articleid].kerUrl)
    } else if (this.data.id == "2") {
      articleArry.push(activities[articleid].kerUrl)
    } else if (this.data.id == "3") {
     console.log("文本不需要传递URL到webpage界面")
    } else if (this.data.id == "4") {
      console.log("视频不需要传递URL到webpage界面")
    } else if (this.data.id == "5") {

    } else if (this.data.id == "6") {

    } else if (this.data.id == "7") {

    }
    wx.navigateTo({
      url: '/pages/webpage/webpage?url=' + articleArry
    })
  },

  //获取快讯
  getFlash: function () {
    var that = this
    var params = {}
    params.mock = true
    api.activity.flash({
      params: params,
      success: function (res) {
        that.setData({
          flashList: res.activities
        })
        console.log(that.data.flashList)
      },
      fail: function (res) {
        console.log("失败")
      }
    })
  },

  //获取视频
  getVideo: function () {
    var that = this
    var params = {}
    params.mock = true
    api.activity.video({
      params: params,
      success: function (res) {
        that.setData({
          videoList: res.activities
        })
      },
      fail: function (res) {
        console.log("失败")
      }
    })
  },

  //获取关注
  getAttention: function() {
    var that = this
    var params = {}
    params.mock = true
    api.activity.attention({
      params: params,
      success: function(res) {
        that.setData({
          attention: res.activities
        })
      },
      fail: function(res) {
        console.log("失败")
      }
    })
  },

  //获取推荐
  gainNew: function() {
    var that = this
    var params = {}
    params.mock = true
    api.activity.list({
      params: params,
      success: function(res) {
        that.setData({
          activities: res.activities
        })
      },
      fail: function(res) {
        console.log("失败")
      }
    })
  },

  handleTabChange: function(e) {
    this.setData({
      selectedId: e.detail,
    })
    this.choseModule(e.detail)
  },

  choseModule: function(num) {
    var selectId = this.data.list[num.index]
    console.log(selectId)
    switch (selectId.id) {
      case 0:
        this.setData({
          movies: this.data.movies,
          id: selectId.id
        })
      case 1:
        this.setData({
          id: selectId.id
        })
        this.getAttention()
      case 2:
        this.setData({
          id: selectId.id
        })
        this.gainNew()
      case 3:
        this.setData({
          id: selectId.id
        })
        this.getFlash()
      case 4:
        this.setData({
          id: selectId.id
        })
        this.getVideo()
      case 5:
        this.setData({
          id: selectId.id
        })
      case 6:
        this.setData({
          id: selectId.id
        })
      case 7:
        this.setData({
          id: selectId.id
        })
        
    }

  },

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})