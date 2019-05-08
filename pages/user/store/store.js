// pages/user/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,
    form: {
      card_str:'',
      card_frt: '',
      card_rev: ''
    },
    eggNum: 60,
    time:['日','月','年'],
    nav:0,
    total:[
      { name: '成交量', val: '100', unit: '件' },
      { name: '注册会员', val: '20', unit: '个' },
      { name: '退款金额', val: '231', unit: '元' },
      { name: '成交金额', val: '500', unit: '元' },
      { name: '退款数量', val: '2', unit: '个' }
    ]
  },

  //时间切换
  time_tab:function(e){
    var idx = e.currentTarget.dataset.index;
    this.setData({
      nav:idx
    });
  },

  //预览二维码
  view_code: function () {
    var arr = [];
    var url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556513919555&di=5ee2e93bce4406130141f820bf5cc379&imgtype=0&src=http%3A%2F%2Fwww.gg-led.com%2FuploadFile%2Fimages%2Fgfwx.jpg';
    arr.push(url);
    wx.previewImage({
      urls: arr
    });
  },

  //上传营业执照
  update_str: function () {
    var _this = this;
    var form = this.data.form;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        if (res.tempFilePaths.length > 0) {
          form.card_str = res.tempFilePaths[0];
          _this.setData({
            form: form
          });
        };
      },
    });
  },

  //上传正面照
  update_frt: function () {
    var _this = this;
    var form = this.data.form;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        if (res.tempFilePaths.length > 0) {
          form.card_frt = res.tempFilePaths[0];
          _this.setData({
            form: form
          });
        };
      },
    });
  },

  //上传反面照
  update_rev: function () {
    var _this = this;
    var form = this.data.form;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        if (res.tempFilePaths.length > 0) {
          form.card_rev = res.tempFilePaths[0];
          _this.setData({
            form: form
          });
        };
      },
    });
  },

  //提交审核
  submit_form: function () {
    this.setData({
      type: 1
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