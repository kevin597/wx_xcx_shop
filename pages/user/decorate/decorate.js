// pages/user/decorate/decorate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      name:'',
      photo:'',
      intro:'',
      videos:[],
      imgs:[]
    }
  },

  //店铺名称
  set_name:function(e){
    var form = this.data.form;
    form.name = e.detail.value;
    this.setData({
      form: form
    });
  },

  //上传店铺头图
  update_storePhoto:function(){
    var form = this.data.form;
    wx.chooseImage({
      count:1,
      success: function(res) {
        form.photo = res.tempFilePaths[0];
        this.setData({
          form:form
        });
      }.bind(this)
    })
  },

  //店铺介绍
  set_intro:function(e){
    var form = this.data.form;
    form.intro = e.detail.value;
    this.setData({
      form: form
    });
  },

  //上传视频
  update_video:function(){
    var form = this.data.form;
    wx.chooseVideo({
      success:function(res){
        form.videos.push(res.tempFilePath);
        this.setData({
          form:form
        });

      }.bind(this)
    })
  },

  //删除视频
  del_video:function(e){
    var form = this.data.form;
    var idx = e.currentTarget.dataset.videoIndex;
    form.videos.splice(idx,1);
    this.setData({
      form: form
    });
  },

  //上传商铺图片
  update_img: function () {
    var form = this.data.form;
    wx.chooseImage({
      count:1,
      success: function (res) {
        form.imgs.push(res.tempFilePaths[0]);
        this.setData({
          form: form
        });
      }.bind(this)
    })
  },

  //删除商铺图片
  del_img: function (e) {
    var form = this.data.form;
    var idx = e.currentTarget.dataset.imgIndex;
    form.imgs.splice(idx, 1);
    this.setData({
      form: form
    });
  },

  //提交
  submit_form:function(){
    console.log(this.data.form);
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