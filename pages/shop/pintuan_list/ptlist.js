// pages/shop/prolist/prolist.js
let data = require('../product_data.js'); //拼团数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [],
    page: 1,
    size: 6,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
    productList: data.dataList.slice(0, 6) //赋值，productList里面就是我们要的数据了
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
    wx.stopPullDownRefresh();
    wx.showLoading({
      title: '正在刷新',
    });
    //刷新数据
    setTimeout(function () {
      this.setData({
        productList: data.dataList,
        page: 1
      });
      wx.hideLoading();
    }.bind(this), 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '拼命加载中',
    });
    var page = this.data.page++;
    //加载数据
    setTimeout(function () {
      this.setData({
        productList: data.dataList,
        page: page
      });
      wx.hideLoading();
    }.bind(this), 1000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //跳转详情
  skip_product: function (e) {
    var proid = e.currentTarget.dataset.proid;
    //console.log(proid);
    wx.navigateTo({
      url: '/pages/shop/pintuan/pintuan?proid=' + proid,
    })
  }
})