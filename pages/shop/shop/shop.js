// pages/shop/shop/shop.js
let data = require('../product_data.js'); //商品数据

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCart: [],
    productList: [],
    page: 1,
    size: 6,
    //自定义顶部标题
    navTitleText: {
      "bg_color": "", //默认transparent
      "color": "#ffffff", //默认transparent
      "flag": 1, //0: 无返回；1：返回上一级；2：home
      "name": "店铺详情", //默认为空
    },
    currentTab: 0,
    shop: {
      src: "/images/shop/product.jpg",
      name: "张小姐的口碑农场"
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      productList: data.dataList.slice(0, 6) //赋值，productList里面就是我们要的数据了
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
  onShareAppMessage: function() {

  },

  //点击切换tab
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  
  
  //商品跳转详情
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