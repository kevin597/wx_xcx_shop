// pages/user/index/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      photo:'/images/default/188x188.jpg',
      name:'豆米科技',
      level:'365会员',
      code:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556513919555&di=5ee2e93bce4406130141f820bf5cc379&imgtype=0&src=http%3A%2F%2Fwww.gg-led.com%2FuploadFile%2Fimages%2Fgfwx.jpg',
      eggNum:'20',
      chickenNum:'10',
      levelTime:'284'
    },
    shopCarNum:'0',
  },

  //预览二维码
  view_code:function(){
    var arr = [];
    var url = this.data.user.code;
    arr.push(url);
    wx.previewImage({
      urls:arr
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