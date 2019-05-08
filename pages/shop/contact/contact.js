// pages/shop/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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


  // 提交
  bindFormSubmit(e) {
    console.log(e.detail.value)
    let content = e.detail.value;
    if (content.length == 0) {
      wx.showToast({
        title: '请填写内容',
        icon: 'loading',
        duration: 1000
      });
      return;
    };
    wx.request({
      url: '',
      data: {
        content: content
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(result) {
        //console.log(result.data)
        wx.showToast({
          title: '数据保存成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function() {
        // fail
        //console.log("保存失败")
        wx.showToast({
          title: '保存失败',
          icon: 'loading',
          duration: 1000
        });
      },
      complete: function() {
        // complete
      }
    })
  },

})