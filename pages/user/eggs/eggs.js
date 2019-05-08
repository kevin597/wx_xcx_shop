// pages/user/eggs/eggs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    egg:{
      cur:60,
      vip:365,
      sys:30,
      plu:200
    },
    history:[
      { id: 101, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 102, type: '提现鸡蛋', val: '-100', time: '2019-04-23' },
      { id: 103, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 104, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 105, type: '提现鸡蛋', val: '-100', time: '2019-04-23' },
      { id: 106, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 107, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 108, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 109, type: '养鸡成长获得', val: '+100', time: '2019-04-23' },
      { id: 1010, type: '养鸡成长获得', val: '+100', time: '2019-04-23' }
    ]
  },

  //申请提现
  apply_cash:function(){
    wx.showModal({
      title: '申请提现',
      content: '收到您的提现申请后,将尽快为您处理',
      confirmColor:'#f15c6c',
      success:function(res){
        if(res.confirm){
          //点击确定
        };
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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