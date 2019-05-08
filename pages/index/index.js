//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    my_farm: {
      my_food: 32,
      my_egg: 12,
      my_grade:2,//0是普通会员，1是200会员，2是365会员，
      my_first_news:'*朗月成功收获6只鸡蛋'
    },
    number: '../../images/number.png',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navTitleText: {
      "bg_color": "", //默认transparent
      "color": "", //默认transparent
      "flag": 0, //0: 无返回；1：返回上一级；2：home
      "name": "", //默认为空
    },
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['张小姐的口碑农场', '李先生的口碑农场', '王阿姨的口碑农场'], //下拉列表的数据
    index: 0, //选择的下拉列 表下标,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show,
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
})