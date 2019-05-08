// pages/shop/prolist/prolist.js
let data = require('../product_data.js'); //拼团数据

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCart: [],
    productList: [],
    page: 1,
    size: 4,
    //自定义顶部标题
    navTitleText: {
      "bg_color": "#ffffff", //默认transparent
      "color": "#000000", //默认transparent
      "flag": 1, //0: 无返回；1：返回上一级；2：home
      "name": "鸡蛋", //默认为空
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //this.onReachBottom();

    var filmId = options.keyword;

    this.formSubmit(filmId);

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
    // wx.stopPullDownRefresh();
    // wx.showLoading({
    //   title: '正在刷新',
    // });
    // //刷新数据
    // setTimeout(function() {
    //   this.setData({
    //     productList: data.dataList,
    //     page: 1
    //   });
    //   wx.hideLoading();
    // }.bind(this), 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    // wx.showLoading({
    //   title: '拼命加载中',
    // });
    // var page = this.data.page++;
    // //加载数据
    // setTimeout(function() {
    //   this.setData({
    //     productList: data.dataList,
    //     page: page
    //   });
    //   wx.hideLoading();
    // }.bind(this), 1000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //跳转详情
  skip_product: function(e) {
    var proid = e.currentTarget.dataset.proid;
    //console.log(proid);
    wx.navigateTo({
      url: '/pages/shop/product/product?proid=' + proid,
    })
  },

  //跳转到购物车
  skip_cart: function(e) {
    var myCart = this.data.myCart;
    wx.navigateTo({
      url: '/pages/shop/cart/cart?proid=' + myCart,
    })
  },


  //添加商品到购物车
  add_cart: function(e) {
    var myCart = this.data.myCart;
    var proid = e.currentTarget.dataset.proid;
    myCart.push(proid);
    this.setData({
      myCart: myCart,
    });
  },




  searchValueInput: function(e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
    this.formSubmit(e.detail.value);
  },



  formSubmit: function(key) {
    var key = key; //this.data.searchValue;
    //console.log(key);
    if (key == '') { //用户没有输入 全部显示
      this.setData({
        productList: []
      })
      return;
    }
    var arr = []; //临时数组 用于存放匹配到的数据
    for (let i in data.dataList) {
      if (data.dataList[i].title.indexOf(key) >= 0) { //查找
        arr.push(data.dataList[i])
      }
    }
    if (arr.length == 0) {
      this.setData({
        productList: []
      })
    } else {
      this.setData({
        productList: arr //在页面显示找到的数据
      })
    }
  }

})