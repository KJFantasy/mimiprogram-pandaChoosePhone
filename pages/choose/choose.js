// pages/collect/collect.js
var app = getApp();
Page({
  data: {
    priceRange: [
      {
        id: 0,
        name: "0-999",
        isActive: false,
      },
      {
        id: 1,
        name: "1000-1999",
        isActive: false,
      },
      {
        id: 2,
        name: "2000-2999",
        isActive: false,
      },
      {
        id: 3,
        name: "3000-3999",
        isActive: false,
      },
      {
        id: 4,
        name: "4000-4999",
        isActive: false,
      },
      {
        id: 5,
        name: "5000+",
        isActive: false,
      },
    ],
    preference: [
      {
        id: 0,
        name: "性能",
        isActive: false,
      },
      {
        id: 1,
        name: "拍照",
        isActive: false,
      },
      {
        id: 2,
        name: "视频",
        isActive: false,
      },
      {
        id: 3,
        name: "游戏",
        isActive: false,
      },
      {
        id: 4,
        name: "轻薄",
        isActive: false,
      },
      {
        id: 5,
        name: "续航",
        isActive: false,
      },
    ],
    enterTips: "确定",
  },
  methods: {},
  handlePriceRangeBgc(e) {
    const { index } = e.currentTarget.dataset;
    let { priceRange } = this.data;
    priceRange.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
   
    app.globalData.globalPriceRange = priceRange;

    this.setData({
      priceRange,
      
    });
  },

  handlePreferBgc(e) {
    const { index } = e.currentTarget.dataset;
    let { preference } = this.data;

    preference.forEach((v, i) => {
      if (i === index && v.isActive == false) {
        v.isActive = true;
      } else {
        if (i === index) {
          v.isActive = false;
        } else {
        }
      }
    });
    this.setData({
      preference,
      enterTips: "确定",
    });
  },

  reset(e) {
    const { index } = e.currentTarget.dataset;
    let { preference } = this.data;
    let { priceRange } = this.data;
    priceRange.forEach((v, i) => (v.isActive = false));
    preference.forEach((v, i) => (v.isActive = false));
    this.setData({
      preference,
      priceRange,
    });
  },

  enter(e) {
    let priceRangEnterFlag = false;
    let preferenceEnterFlag = false;

    const { index } = e.currentTarget.dataset;
    let { preference } = this.data;
    let { priceRange } = this.data;
    let { enterTips } = this.data;

    priceRange.forEach((v, i) =>
      v.isActive == true ? (priceRangEnterFlag = true) : ""
    );
    preference.forEach((v, i) => {
      if (v.isActive == true) {
        preferenceEnterFlag = true;
      }
    });

    if (priceRangEnterFlag == true && preferenceEnterFlag == true) {
      wx.navigateTo({
        url: "../choosedPhone/choosedPhone",
      });
    } else {
      this.setData({
        enterTips: "请先选择价格和偏好",
      });
    }
  },
});
