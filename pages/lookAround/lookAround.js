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
    phoneList: [
      {
        id: 0,
        title_1: "旗舰手机",
        title_2: "八仙过海 各显神通",
        phone: [
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/147564/27/10740/61500/5f861436Ec145cee7/4297977df96064cf.jpg!q70.dpg",
            info: "iPhone 12 Pro Max",
          },
          {
            imgUrl:
              "//img14.360buyimg.com/n2/s270x270_jfs/t1/128785/40/8932/67952/5f2d0cfbEef0bb230/d49bb3021e21d778.jpg!q70.dpg",
            info: "三星Note20 Ultra",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/138395/3/11802/83855/5f91ade5Ea91cd21f/6c0fb3805cbbcc02.jpg!q70.dpg",
            info: "华为Mete40 Pro",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/154579/30/5288/185715/5fa9f069E8539a48f/d3811af9f06dd9a7.png!q70",
            info: "小米10至尊纪念版",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/142279/5/17220/106883/5fcdf822E3296feb0/cff0d85af2198991.jpg!q70.dpg.webp",
            info: "OPPO Reno5 Pro",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/120847/30/5547/174174/5ef30950Ee8f823ad/1783ad4e2f5d6a9f.jpg!q70.dpg",
            info: "vivo X50 Pro+",
          },
        ],
      },
      {
        id: 1,
        title_1: "旗舰手机",
        title_2: "八仙过海 各显神通",
        phone: [
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/147564/27/10740/61500/5f861436Ec145cee7/4297977df96064cf.jpg!q70.dpg",
            info: "iPhone 12 Pro Max",
          },
          {
            imgUrl:
              "//img14.360buyimg.com/n2/s270x270_jfs/t1/128785/40/8932/67952/5f2d0cfbEef0bb230/d49bb3021e21d778.jpg!q70.dpg",
            info: "三星Note20 Ultra",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/138395/3/11802/83855/5f91ade5Ea91cd21f/6c0fb3805cbbcc02.jpg!q70.dpg",
            info: "华为Mete40 Pro",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/154579/30/5288/185715/5fa9f069E8539a48f/d3811af9f06dd9a7.png!q70",
            info: "小米10至尊纪念版",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/142279/5/17220/106883/5fcdf822E3296feb0/cff0d85af2198991.jpg!q70.dpg.webp",
            info: "OPPO Reno5 Pro",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/120847/30/5547/174174/5ef30950Ee8f823ad/1783ad4e2f5d6a9f.jpg!q70.dpg",
            info: "vivo X50 Pro+",
          },
        ],
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
