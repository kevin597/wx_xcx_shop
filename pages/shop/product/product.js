// pages/shop/product/product.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
        src: "",
        url: "/pages/shop/shop/shop",
        video: "/images/night.mp4",
        isimg: false
      },
      {
        src: "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        url: "/pages/shop/prolist/prolist",
        video: "",
        isimg: true
      },
      {
        src: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
        url: "/pages/shop/pintuan_list/ptlist",
        video: "",
        isimg: true
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    current: 0,
    product: {
      title: "纯天然鲜活有机柴鸡蛋正宗100只（10kg）",
      price: 50.00,
      buy: 123,
      free: "免运费",
      pinglun: 12344,
      content: "品牌名称：密农人家 \n储藏方法：冰箱冷藏 \n产地: 中国大陆 \n保质期：40 天 \n规格: 100枚"
    },
    pinglun: [{
        name: "张小姐",
        img: "/images/default/188x188.jpg",
        time: "2019-04-11",
        content: "包装严实整齐，发货快!赞赞赞!感谢客服冬瓜细心周到的服务!赞赞赞!",
        src: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        video: ["/images/night.mp4"]
      },
      {
        name: "张小姐",
        img: "/images/default/188x188.jpg",
        time: "2019-04-11",
        content: "包装严实整齐，发货快!赞赞赞!感谢客服冬瓜细心周到的服务!赞赞赞!",
        src: [],
        video: []
      },
      {
        name: "张小姐",
        img: "/images/default/188x188.jpg",
        time: "2019-04-11",
        content: "包装严实整齐，发货快!赞赞赞!感谢客服冬瓜细心周到的服务!赞赞赞!",
        src: ["/images/default/180x180.jpg", "/images/default/180x180.jpg"],
        video: []
      }
    ]
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
  //焦点图显示数字
  swiperChange: function(e) {
    var that = this;
    that.setData({
      current: e.detail.current
    })
  },

  // 预览图片
  previewImg: function(e) {
    var imgs = e.currentTarget.dataset.imgs;
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: imgs, // 当前显示图片的http链接
      urls: src, // 需要预览的图片http链接列表
    })
  },


  //提交订单
  btn_submit_order: function() {
    var that = this;
    wx.navigateTo({
      url: '/pages/shop/submit_order/submit_order'
    })
  }
})