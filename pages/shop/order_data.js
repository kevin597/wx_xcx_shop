//模拟订单数据, statu: 1,待付款，2,待发货, 3,待收货，4,待评价，5,已完成，6,已取消
var order_data = [
  {
    id:'1001',
    code:'201912457784',
    store:'合肥先锋水果自营店1',
    statu:'1',
    goods:[
      {
        id: '201',
        photo: '/images/shop/product.jpg',
        name:'东北长白山土鸡蛋10只（1kg）',
        single:'50.00',
        selected: true,
        num:2
      }, {
        id: '202',
        photo: '/images/default/180x180.jpg',
        name: '纯天然深林山鸡蛋20只（2kg）',
        single: '50.00',
        selected: false,
        num: 1
      }
    ],
    total:'150.00',
    pay:'150.00'
  }, {
    id: '1002',
    code: '201912457785',
    store: '合肥先锋生鲜自营店2',
    statu: '2',
    goods: [
      {
        id: '201',
        photo: '/images/shop/product.jpg',
        name: '纯天然鲜活有机柴鸡蛋50只（6kg）',
        single: '50.00',
        selected: false,
        num: 2
      }
    ],
    total: '150.00',
    pay: '150.00'
  }, {
    id: '1003',
    code: '201912457786',
    store: '合肥先锋水果自营店3',
    statu: '3',
    goods: [
      {
        id: '201',
        photo: '/images/default/180x180.jpg',
        name: '农家散养土鸡蛋40只（3kg）',
        single: '50.00',
        selected: false,
        num: 2
      }, {
        id: '202',
        photo: '/images/default/180x180.jpg',
        name: '纯天然鲜活有机柴鸡蛋正宗100只（10kg）',
        single: '50.00',
        selected: false,
        num: 1
      }, {
        id: '203',
        photo: '/images/default/180x180.jpg',
        name: '农家散养土鸡蛋10只（1kg）',
        single: '50.00',
        selected: false,
        num: 1
      }
    ],
    total: '150.00',
    pay: '150.00'
  }, {
    id: '1004',
    code: '201912457787',
    store: '合肥先锋水果自营店4',
    statu: '4',
    goods: [
      {
        id: '201',
        photo: '/images/default/180x180.jpg',
        name: '吉林无公害蛋30只（2.5kg）',
        single: '50.00',
        selected: false,
        num: 2
      }, {
        id: '202',
        photo: '/images/default/180x180.jpg',
        name: '纯天然鲜活有机柴鸡蛋正宗100只（10kg）',
        single: '50.00',
        selected: false,
        num: 1
      }, {
        id: '202',
        photo: '/images/default/180x180.jpg',
        name: '东北长白山土鸡蛋10只（1kg）',
        single: '50.00',
        selected: false,
        num: 1
      }
    ],
    total: '150.00',
    pay: '150.00'
  }, {
    id: '1005',
    code: '201912457788',
    store: '合肥先锋水果自营店5',
    statu: '5',
    goods: [
      {
        id: '201',
        photo: '/images/default/180x180.jpg',
        name: '农家散养土鸡蛋10只（1kg）',
        single: '50.00',
        selected: false,
        num: 2
      }, {
        id: '202',
        photo: '/images/default/180x180.jpg',
        name: '吉林无公害蛋30只（2.5kg）',
        single: '50.00',
        selected: false,
        num: 1
      }
    ],
    total: '150.00',
    pay: '150.00'
  }, {
    id: '1006',
    code: '201912457789',
    store: '合肥先锋水果自营店6',
    statu: '6',
    goods: [
      {
        id: '201',
        photo: '/images/default/180x180.jpg',
        name: '纯天然深林山鸡蛋20只（2kg）',
        single: '50.00',
        selected: false,
        num: 2
      }
    ],
    total: '150.00',
    pay: '150.00'
  }
];

module.exports = order_data; 