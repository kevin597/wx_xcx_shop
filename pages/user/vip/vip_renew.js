// pages/user/vip/vip_renew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vip:[
      {id:'201',name:'200会员'},
      {id:'202',name:'365会员'}
    ],
    fram_list:[
      '赵小姐的口碑农场',
      '钱先生的口碑农场',
      '孙小姐的口碑农场',
      '李小姐的口碑农场',
      '周先生的口碑农场',
      '武小姐的口碑农场',
      '郑小姐的口碑农场',
      '王先生的口碑农场',
      '张小姐的口碑农场',
      '陈小姐的口碑农场'
    ],
    index:0,
    form:{
      vipId:'201',
      fram:'',
      year:1
    }
  },

  //选择会员类别
  sel_vip:function(e){
    var form = this.data.form;
    form.vipId = e.currentTarget.dataset.vipId;
    this.setData({
      form:form
    });
  },

  //选择农场
  sel_fram:function(e){
    var form = this.data.form;
    form.fram = this.data.fram_list[e.detail.value];
    this.setData({
      form: form,
      index: e.detail.value
    });
  },

  //增加年数
  add_num:function(){
    var form = this.data.form;
    form.year ++ ;
    this.setData({
      form:form
    });
  },

  //减小年数
  reduce_num:function(){
    var form = this.data.form;
    if (form.year > 1){
      form.year--;
      this.setData({
        form: form
      });
    };
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