// pages/shop/cart/cart.js
const orderData = require('../order_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //订单数据
    order: [],
    page: 1,
    size: 6,
    num: 1, //单个商品数量
    price: 50, //单个商品单价
    totalPrice: 0, //已选择商品总价
    selectedNum: 1 //已选择商品数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    this.onReachBottom();
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
    wx.stopPullDownRefresh();
    wx.showLoading({
      title: '正在刷新',
    });
    //刷新数据
    setTimeout(function() {
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
  onReachBottom: function() {
    wx.showLoading({
      title: '拼命加载中',
    });
    var page = this.data.page++;
    //加载数据
    setTimeout(function() {
      this.setData({
        order: orderData,
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

  add(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    var arr = this.data.order;
    for (var v in arr) {
      if (arr[v].id == id) {
        let goods = arr[v].goods;
        let num = goods[index].num;
        goods[index].num = num + 1;
      } else {}
    }
    this.setData({
      order: arr
    });
    //this.howMorePri(num)
  },
  cut(e) {
    const id = e.currentTarget.dataset.id;
    const index = e.currentTarget.dataset.index;
    var arr = this.data.order;
    for (var v in arr) {
      if (arr[v].id == id) {
        let goods = arr[v].goods;
        let num = goods[index].num;
        if (num <= 1) {
          wx.showLoading({
            title: '不能再少了',
          });
          setTimeout(function() {
            wx.hideLoading()
          }, 1000)
        } else {
          goods[index].num = num - 1;
        }
      } else {}
    }
    this.setData({
      order: arr
    });

    const num = this.data.num - 1;
    this.howMorePri(num)
  },
  inputVl(e) {
    const num = e.detail.value;
    this.howMorePri(num)
  },
  howMorePri(num) {
    this.setData({
      num: num,
      totalPrice: num * this.data.price
    });
  },
  radioChange(e) {
    console.log(e.detail.value)
  },

  checkboxChange(e) {
    console.log(e.detail.value)
  },

  //删除店铺商品
  del_cart: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var arr = this.data.order;
    wx.showModal({
      title: '提示',
      content: '是否确定删除该店铺商品？',
      success: function(res) {
        if (res.confirm) {
          arr.splice(index, 1);
          that.setData({
            order: arr
          });
        } else {
          //console.log(res);
        }
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },

  // 计算总价
  count_price() {
    // 获取商品列表数据
    let list = this.data.order;
    // 声明一个变量接收数组列表price
    let total = 0;
    // 循环列表得到每个数据
    for (let i = 0; i < list.length; i++) {
      // 判断选中计算价格
      if (list[i].selected) {
        // 所有价格加起来 count_money
        total += list[i].num * list[i].price;
      }
    }
    // 最后赋值到data中渲染到页面
    this.setData({
      order: list,
      totalPrice: total.toFixed(2)
    });
  },


  //提交订单
  btn_submit_order: function() {
    var that = this;
    console.log(that.data.totalPrice);
    wx.showModal({
      title: '提示',
      content: '确定提交订单嘛？',
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/shop/submit_order/submit_order'
          });
        } else {
          //console.log(res);
        }
      },
      fail: function(res) {
        console.log(res);
      }
    })

  }

})