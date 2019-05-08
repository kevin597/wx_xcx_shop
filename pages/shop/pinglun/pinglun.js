// pages/shop/pinglun/pinglun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pinglun: [{
      name: "张小姐",
      img: "/images/default/188x188.jpg",
      time: "2019-04-11",
      content: "包装严实整齐，发货快!赞赞赞!感谢客服冬瓜细心周到的服务!赞赞赞!",
      src: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ]
    },
    {
      name: "张小姐",
      img: "/images/default/188x188.jpg",
      time: "2019-04-11",
      content: "包装严实整齐，发货快!赞赞赞!感谢客服冬瓜细心周到的服务!赞赞赞!",
      src: []
    },
    {
      name: "张小姐",
      img: "/images/default/188x188.jpg",
      time: "2019-04-11",
      content: "包装严实整齐，发货快!赞赞赞!感谢客服冬瓜细心周到的服务!赞赞赞!",
      src: ["/images/default/180x180.jpg", "/images/default/180x180.jpg"]
    }
    ]
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

  },

  
  // 预览图片
  previewImg: function (e) {
    var imgs = e.currentTarget.dataset.imgs;
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: imgs, // 当前显示图片的http链接
      urls: src, // 需要预览的图片http链接列表
    })
  }
})