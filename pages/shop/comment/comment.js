// pages/shop/comment/pic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTitleText: {
      "bg_color": "#fff", //默认transparent
      "color": "#000", //默认transparent
      "flag": 1, //0: 无返回；1：返回上一级；2：home
      "name": "评价", //默认为空
    },
    imgs: [],
    videos: [],
    playVideo: false,       // 播放video
    playVideoSrc: '',       // 播放video地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //videoContext: null,
  onReady: function(res) {
    //this.videoContext = wx.createVideoContext('prew_video');
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


  // 上传图片
  chooseImg: function(e) {
    var that = this;
    var imgs = this.data.imgs;
    if (imgs.length >= 9) {
      this.setData({
        lenMore: 1
      });
      setTimeout(function() {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        // console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 9) {
            that.setData({
              imgs: imgs
            });
            return false;
          } else {
            imgs.push(tempFilePaths[i]);
          }
        }
        that.setData({
          imgs: imgs
        });
      }
    });
  },
  // 删除图片
  deleteImg: function(e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },
  // 预览图片
  previewImg: function(e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgs;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },

  /**
   * 预览视频
   */
  previewVideo: function(e) {
    var videoSrc = e.currentTarget.dataset.videoSrc;
    var videoContext = this.videoContext;
    this.setData({
      playVideoSrc: videoSrc
    })
    videoContext.seek(0);
    videoContext.play();
    videoContext.requestFullScreen();
  },


  // 提交
  bindFormSubmit(e) {
    console.log(e.detail.value.content)
    console.log(this.data.imgs)
    let content = e.detail.value.content;
    let src = this.data.imgs;
    wx.uploadFile({
      url: '/pages/shop/index', //服务器接口
      method: 'POST',
      filePath: src,
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: {
        "content": content
      },
      name: 'files', //服务器定义的Key值
      success: function(res) {
        console.log(res)
        console.log(res.data)
        console.log('上传成功')
      },
      fail: function(res) {
        console.log(err)
        console.log('上传失败')
      }
    })
  },


  //上传视频
  chooseVideo: function() {
    var videos = this.data.videos;
    wx.chooseVideo({
      success: function(res) {
        videos.push(res.tempFilePath);
        this.setData({
          videos: videos
        });

      }.bind(this)
    })
  },

  //删除视频
  deleteVideo: function(e) {
    var videos = this.data.videos;
    var idx = e.currentTarget.dataset.videoIndex;
    videos.splice(idx, 1);
    this.setData({
      videos: videos
    });
  },

})