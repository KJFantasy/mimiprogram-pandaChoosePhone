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
    recommendation: [
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
        title_1: "学生首选",
        title_2: "性价比出众",
        phone: [
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/152373/19/3970/518181/5f9a81bbE0975b14c/5e0663da179c6943.png!q70",
            info: "iPhone 8",
          },
          {
            imgUrl:
              "https://img11.360buyimg.com/n2/s240x240_jfs/t1/139560/35/15779/97911/5fbdfbdfE244aee62/b0fe4cfb07693742.jpg!q70.jpg",
            info: "红米 Note 9",
          },
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/114670/20/10222/107624/5ee86e10E2afc55f7/549ceeeca82f0d02.jpg!q70.dpg",
            info: "荣耀 9X",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/45475/38/15371/85356/5dc92f4fE86867b1b/ae6e6589212a1cd2.jpg!q70.dpg",
            info: "iPhone 7",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/109265/22/13522/238337/5ea139e0Ec857833d/340a37886f483e67.jpg!q70.dpg",
            info: "OPPO A52",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/144923/13/3714/78612/5f1a6046E68de4a0c/ac2e400e42e5db33.jpg!q70.jpg",
            info: "vivo iQOO Z1x",
          },
        ],
      },
      {
        id: 2,
        title_1: "拍照手机",
        title_2: "逆光也清晰 照亮你的美",
        phone: [
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s240x240_jfs/t1/120369/26/3618/346059/5ed23046E5a5e4d75/062b0c503309f0ea.jpg!q70.jpg",
            info: "华为 P40 Pro",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/127706/32/6270/114018/5eff261bEe5e8bade/79edd4448d0ebd6c.jpg!q70.jpg",
            info: "OPPO Reno3 Pro",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s270x270_jfs/t1/134955/8/8643/102379/5f492469Ebd94dc2c/68dc99bcdc5b4dde.jpg!q70.dpg",
            info: "三星 S20",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/18610/28/12743/414715/5c9a785bEb5eac03b/848101e41fa04a90.jpg!q70.jpg",
            info: "华为 P30 Pro",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/87913/22/6908/148626/5df75272E07f8fab2/0c930ccc45462cfd.jpg!q70.jpg",
            info: "红米 K30",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/148894/22/3698/64829/5f1a5f37Ea337bd39/f5c8cd13effd7b8b.jpg!q70.dpg",
            info: "vivo IQOO U1",
          },
        ],
      },
      {
        id: 3,
        title_1: "游戏手机",
        title_2: "专为游戏而生",
        phone: [
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/149177/15/3457/117920/5f16cf3dEe0375d2a/41b1855a5ad94923.jpg!q70.jpg",
            info: "联想拯救者 电竞版",
          },
          {
            imgUrl:
              "https://img11.360buyimg.com/n2/s240x240_jfs/t1/139126/24/17671/84638/5fd09b16E9c166b08/be4f94134cdf04fc.jpg!q70.jpg",
            info: "黑鲨 游戏手机3",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s270x270_jfs/t1/116953/38/11230/162521/5ef9a041Ea0b31b85/c97e3c267b1718bd.jpg!q70.dpg",
            info: "OPPO Ace2",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s270x270_jfs/t1/129071/32/7903/107049/5f19242dEbdf0509d/5e0390474729a559.jpg!q70.dpg",
            info: "ROG 游戏手机3",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s270x270_jfs/t1/111016/14/13541/106109/5f1f9674Ed4f002e2/58b09f5a5f1c1835.jpg!q70.dpg",
            info: "努比亚 红魔5s",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s270x270_jfs/t1/146302/24/15100/75780/5fb641cbE361371dd/4693f8ad72a24952.jpg!q70.dpg",
            info: "realme Q2 Pro",
          },
        ],
      },
    ],
    iPhone: [
      {
        id: 0,
        title_1: "苹果手机",
        title_2: "设计简洁 流畅不卡顿",
        phone: [
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s300x300_jfs/t1/147564/27/10740/61500/5f861436Ec145cee7/4297977df96064cf.jpg!q70.dpg",
            info: "iPhone 12 Pro Max",
          },
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s240x240_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q70.jpg",
            info: "iPhone 12 Pro",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/132022/23/12216/60913/5f86195bEacd08599/c5dc348d3f943324.jpg!q70.jpg",
            info: "iPhone 12",
          },
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s240x240_jfs/t1/133308/15/12277/65488/5f861700E7afef10d/c6a86f988f63c4fc.jpg!q70.jpg",
            info: "iPhone 12 mini",
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
