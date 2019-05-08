// pages/user/agent/agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,
    form:{
      card_frt:'',
      card_rev:''
    },
    eggNum:60,
    store:[
      { id: 301, name: '张小姐的口碑农场', time: '2019-03-24' },
      { id: 302, name: '鲜丰水果直营店', time: '2019-03-24' },
      { id: 303, name: '张小姐的口碑农场', time: '2019-03-24' },
      { id: 304, name: '鲜丰水果直营店', time: '2019-03-24' },
      { id: 305, name: '张小姐的口碑农场', time: '2019-03-24' },
      { id: 306, name: '鲜丰水果直营店', time: '2019-03-24' }
    ]
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

  //上传正面照
  update_frt:function(){
    var _this = this;
    var form = this.data.form;
    wx.chooseImage({
      count:1,
      success: function(res) {
        if(res.tempFilePaths.length > 0){
          form.card_frt = res.tempFilePaths[0];
          _this.setData({
            form:form
          });
        };
      },
    });
  },

  //上传反面照
  update_rev:function(){
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
  submit_form:function(){
    this.setData({
      type:1
    });
  },

  //提现申请
  cash_apply:function(){
    wx.showModal({
      title: '申请提现',
      content: '收到您的提现申请后,将尽快为您处理',
      confirmColor: '#f15c6c',
      success: function (res) {
        if (res.confirm) {
          //点击确定
        };
      }
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