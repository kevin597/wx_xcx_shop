// pages/user/components/orderNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav:{
      type:String,
      value:'0'
    },
    statu:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 订单状态切换
    nav_tab: function (e) {
      var nav = e.currentTarget.dataset.statuId;
      this.triggerEvent('tabNav',nav);
    },
  },
  options:{
    addGlobalClass: true,
  }
})
