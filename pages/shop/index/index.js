// pages/shop/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [],

    //banner数据
    imgUrls: [{
        src: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        url: "/pages/shop/shop/shop",
        video: "/images/video.mp4",
        isimg: true
      },
      {
        src: "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        url: "/pages/shop/prolist/prolist",
        video: "/images/video.mp4",
        isimg: false
      },
      {
        src: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
        url: "/pages/shop/pintuan_list/ptlist",
        video: "/images/video.mp4",
        isimg: true
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    //nav菜单数据
    nav_arry: [{
        src: "/images/shop/product.jpg",
        id: 1,
        text: "母鸡"
      },
      {
        src: "/images/shop/product.jpg",
        id: 2,
        text: "鸭子"
      },
      {
        src: "/images/shop/product.jpg",
        id: 3,
        text: "乳品"
      },
      {
        src: "/images/shop/product.jpg",
        id: 4,
        text: "蔬菜"
      },
      {
        src: "/images/shop/product.jpg",
        id: 5,
        text: "鲜果"
      },
      {
        src: "/images/shop/product.jpg",
        id: 6,
        text: "海鲜"
      },
      {
        src: "/images/shop/product.jpg",
        id: 7,
        text: "鸡蛋"
      },
      {
        src: "/images/shop/product.jpg",
        id: 8,
        text: "蔬菜"
      },
      {
        src: "/images/shop/product.jpg",
        id: 9,
        text: "鸡蛋"
      },
      {
        src: "/images/shop/product.jpg",
        id: 10,
        text: "蔬菜"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    let data = require('../product_data.js'); //拼团数据
    this.setData({
      productList: data.dataList.slice(0, 4) //赋值，productList里面就是我们要的数据了
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

  },

  // 分类按钮跳转
  btnanniu: function(e) {
    var id = e.currentTarget.dataset.id;
    //console.log(id)
    wx.navigateTo({
      url: '/pages/shop/prolist/prolist?id=' + id,
    })
  },


  //跳转详情
  skip_product: function(e) {
    var proid = e.currentTarget.dataset.proid;
    //console.log(proid);
    wx.navigateTo({
      url: '/pages/shop/pintuan/pintuan?proid=' + proid,
    })
  },


  // 搜索提交
  formSubmit(e) {
    //console.log(e.detail.value)
    let keyword = e.detail.value;
    if (keyword.length == 0) {
      wx.showToast({
        title: '请填写内容',
        icon: 'loading',
        duration: 1000
      });
      return;
    };
    wx.navigateTo({
      url: '/pages/shop/search/search?keyword=' + keyword,
    })
  },

  // 点击banner图跳转
  swipclick: function(e) {
    wx.navigateTo({
      url: e.currentTarget.id
    })
  },
})