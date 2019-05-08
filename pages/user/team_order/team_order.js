// pages/user/team_order/team_order.js
const orderData = require('../order_data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //订单分类
    statu: [
      { type: 0, name: '全部' },
      { type: 1, name: '待付款' },
      { type: 2, name: '待发货' },
      { type: 3, name: '待收货' },
      { type: 4, name: '待评价' }
    ],
    nav: 0,
    //订单数据
    order: [],
    page: 1,
    size: 6,
  },

  // 订单状态切换
  nav_tab: function (e) {
    this.setData({
      nav: e.detail
    });
  },

  //跳转详情
  skip_dtl: function (e) {
    var id = e.currentTarget.dataset.orderId;
    wx.navigateTo({
      url: '/pages/shop/order/product?id=' + id,
    })
  },

  //取消订单
  cancel_order: function (e) {
    var id = e.currentTarget.dataset.orderId;
    var order = this.data.order;
    wx.showModal({
      title: '提示',
      content: '是否确定取消该订单？',
      success: function (res) {
        if (res.confirm) {
          for (var i in order) {
            if (order[i].id == id) {
              order[i].statu = 6;
              this.setData({
                order: order
              })
            };
          };
        };
      }.bind(this)
    });
  },

  //立即支付
  pay: function (e) {
    var id = e.currentTarget.dataset.orderId;
    wx.showModal({
      content: '你点击了立即支付',
    });
  },

  //联系客服
  contact: function (e) {
    var id = e.currentTarget.dataset.orderId;
    wx.navigateTo({
      url: '/pages/user/customer/customer?id=' + id
    });
  },

  //确认收货
  enter_order: function (e) {
    var id = e.currentTarget.dataset.orderId;
    var order = this.data.order;
    wx.showModal({
      title: '提示',
      content: '是否确定已收货？',
      success: function (res) {
        if (res.confirm) {
          for (var i in order) {
            if (order[i].id == id) {
              order[i].statu = 5;
              this.setData({
                order: order
              })
            };
          };
        };
      }.bind(this)
    });
  },

  //立即评价
  comment_order: function (e) {
    var id = e.currentTarget.dataset.orderId;
    wx.navigateTo({
      url: '/pages/user/comment/comment?id=' + id
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onReachBottom();
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
        order: orderData,
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
        order: orderData,
        page: page
      });
      wx.hideLoading();
    }.bind(this), 1000);
  }
})