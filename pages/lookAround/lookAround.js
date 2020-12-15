// pages/lookAround/lookAround.js
Page({
  data: {
    tabs: [
      {
        id: 0,
        name: "推荐",
        isActive: true,
      },
      {
        id: 1,
        name: "iPhone",
        isActive: false,
      },
      {
        id: 2,
        name: "华为",
        isActive: false,
      },
      {
        id: 3,
        name: "小米",
        isActive: false,
      },
      {
        id: 4,
        name: "OPPO",
        isActive: false,
      },
      {
        id: 5,
        name: "vivo",
        isActive: false,
      },
      {
        id: 6,
        name: "荣耀",
        isActive: false,
      },
      {
        id: 7,
        name: "一加",
        isActive: false,
      },
      {
        id: 8,
        name: "魅族",
        isActive: false,
      },
      {
        id: 9,
        name: "红米",
        isActive: false,
      },
      {
        id: 10,
        name: "三星",
        isActive: false,
      },
      {
        id: 11,
        name: "锤子",
        isActive: false,
      },
      {
        id: 12,
        name: "中兴",
        isActive: false,
      },
      {
        id: 13,
        name: "联想",
        isActive: false,
      },
      {
        id: 14,
        name: "realme",
        isActive: false,
      },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  handleItemChange(e) {
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
    this.setData({
      tabs,
    });
  },
});
