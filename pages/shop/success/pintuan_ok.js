// pages/shop/order/product.js
const orderData = require('../order_data.js');
const data = require('../product_data.js'); //拼团数据

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [],
    order: [],
    totalPrice: 100,
    selectedNum: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order: orderData[0],
      productList: data.dataList.slice(0, 4) //赋值，productList里面就是我们要的数据了
    });
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

  },


  //提交订单
  btn_submit_order: function () {
    var that = this;
    console.log(that.data.totalPrice);
    wx.showModal({
      title: '提示',
      content: '是否确定已收货？',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/shop/comment/comment'
          })
        } else {
          //console.log(res);
        }
      },
      fail: function (res) {
        console.log(res);
      }
    });
  },

  //跳转详情
  skip_product: function (e) {
    var proid = e.currentTarget.dataset.proid;
    //console.log(proid);
    wx.navigateTo({
      url: '/pages/shop/product/product?proid=' + proid,
    })
  },

  //跳转到购物车
  skip_cart: function (e) {
    var myCart = this.data.myCart;
    wx.navigateTo({
      url: '/pages/shop/cart/cart?proid=' + myCart,
    })
  },


  //添加商品到购物车
  add_cart: function (e) {
    var myCart = this.data.myCart;
    var proid = e.currentTarget.dataset.proid;
    myCart.push(proid);
    this.setData({
      myCart: myCart,
    });
  }

})