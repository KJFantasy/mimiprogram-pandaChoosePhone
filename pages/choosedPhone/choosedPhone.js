// document.write("<script language=javascript src="../choose/choose.js"></script>");
var app = getApp();
Page({
  data: {
    globalBuffer: [],
    price_999: [
      {
        id: 0,
        imgUrl:
          "https://img14.360buyimg.com/n2/s240x240_jfs/t1/147866/25/15853/73035/5fbdc099E8db0fa1f/7821b7c09a3ad1b1.jpg!q70.jpg",
        title_1: "小米 Redmi Note 9 4G",
        title_2:
          "骁龙662处理器 | 4+128GB | 6000mAh大电池 | 18w快充 | 立体双扬声器",
        estimatedPrice: "￥999",
      },
    ],

    price_1999: [
      {
        id: 1,
        imgUrl:
          "https://img12.360buyimg.com/n2/s240x240_jfs/t1/109383/15/11613/242507/5e8c4c3dE901f4367/723da17587f13bb7.jpg!q70.jpg",
        title_1: "荣耀 Play4T Pro",
        title_2:
          "麒麟810 | 8+128GB | 屏幕指纹 | 4800万高感镜头 | 22.5w超级快充",
        estimatedPrice: "￥1788",
      },
    ],
    price_2999: [
      {
        id: 2,
        imgUrl:
          "https://img10.360buyimg.com/n2/s240x240_jfs/t1/136013/4/2911/444519/5ef32450Eb8ab3c52/1c233f664015b793.jpg!q70.jpg",
        title_1: "vivo iQOO Neo3 5G",
        title_2: "高通骁龙865 | 8+128GB | 144竞速屏 | 44W闪充 | 立体双扬声器",
        estimatedPrice: "￥2948",
      },
    ],
    price_3999: [
      {
        id: 3,
        imgUrl:
          "https://img13.360buyimg.com/n2/s240x240_jfs/t1/140612/19/10777/69703/5f87d3c0E66ae5619/41ff823b47c70920.jpg!q70.jpg",
        title_1: "一加 8T 5G",
        title_2: "高通骁龙865 | 12+256GB | 120Hz柔性直屏 | 65w闪充 | 超清四摄",
        estimatedPrice: "￥3699",
      },
    ],
    price_4999: [
      {
        id: 4,
        imgUrl:
          "https://img12.360buyimg.com/n2/s240x240_jfs/t1/134458/1/19973/77882/5fd72de1Eec776a32/027c641d3669f7ec.jpg!q70.jpg",
        title_1: "华为 Mate40 5G",
        title_2: "麒麟9000E | 8+128GB | 5000万超感知徕卡镜头 | 无线快充 | 90Hz",
        estimatedPrice: "￥4999",
      },
    ],
    price_unlimited: [
      {
        id: 5,
        imgUrl:
          "https://img14.360buyimg.com/n2/s240x240_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q70.jpg",
        title_1: "iPhone 12 Pro Max",
        title_2: "A14处理器 | 6+512GB | 超强影像能力 | 20W快充 | 3687mAh ",
        estimatedPrice: "￥13697",
      },
    ],
  },

  rechoose(e) {
    wx.switchTab({
      url: "../choose/choose",
    });
  },

  onLoad: function (options) {
    let { globalBuffer } = this.data;
    globalBuffer = app.globalData.globalPriceRange;

    this.setData({
      globalBuffer,
    });
    // wx.showShareMenu({
    //     withShareTicket: true,
    //     menus: ['shareAppMessage', 'shareTimeline']
    //   }) 设置分享功能，不能成功
  },

//   onShareAppMessage: function () {
    
    
//   },
//   onShareTimeline: function () {
//     return {
//       title: '',
//       query: {
//         key: value
//       },
//       imageUrl: ''
//     }
// },

});
