// pages/user/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      name:'',
      val:'',
      fare:'',
      num:'',
      type:'',
      ad_videos:[],
      ad_imgs:[],
      intro:'',
      details:[]
    },
    index:0,
    arr:['美食','五金','电子器械','餐饮','电子商务'],
  },

  //设置商品名称
  set_name:function(e){
    var form = this.data.form;
    form.name = e.detail.value;
    this.setData({
      form:form
    });
  },

  //设置商品价格
  set_val:function(e){
    var form = this.data.form;
    form.val = e.detail.value;
    this.setData({
      form: form
    });
  },

  //设置运费
  set_fare:function(e){
    var form = this.data.form;
    form.fare = e.detail.value;
    this.setData({
      form: form
    });
  },

  //设置购买人数
  set_num:function(e){
    var form = this.data.form;
    form.num = e.detail.value;
    this.setData({
      form: form
    });
  },

  //设置商品分类
  set_type:function(e){
    var form = this.data.form;
    form.type = this.data.arr[e.detail.value];
    this.setData({
      form: form
    });
  },

  //上传商品banner-视频
  update_video:function(){
    var form = this.data.form;
    wx.chooseVideo({
      success: function (res) {
        form.ad_videos.push(res.tempFilePath);
        this.setData({
          form: form
        });

      }.bind(this)
    });
  },

  //删除商品banner-视频
  del_video:function(){
    var form = this.data.form;
    var idx = e.currentTarget.dataset.videoIndex;
    form.ad_videos.splice(idx, 1);
    this.setData({
      form: form
    });
  },

  //上传商品banner-图片
  update_img:function(){
    var form = this.data.form;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        form.ad_imgs.push(res.tempFilePaths[0]);
        this.setData({
          form: form
        });
      }.bind(this)
    });
  },

  //删除商品banner-图片
  del_img:function(){
    var form = this.data.form;
    var idx = e.currentTarget.dataset.imgIndex;
    form.ad_imgs.splice(idx, 1);
    this.setData({
      form: form
    });
  },

  //设置商品介绍
  set_intro:function(e){
    var form = this.data.form;
    form.intro = e.detail.value;
    this.setData({
      form: form
    });
  },

  //上传详情图片
  update_details: function () {
    var form = this.data.form;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        form.details.push(res.tempFilePaths[0]);
        this.setData({
          form: form
        });
      }.bind(this)
    });
  },

  //删除详情图片
  del_details: function () {
    var form = this.data.form;
    var idx = e.currentTarget.dataset.imgIndex;
    form.details.splice(idx, 1);
    this.setData({
      form: form
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