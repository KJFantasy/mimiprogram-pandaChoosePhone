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
    huawei: [
      {
        id: 0,
        title_1: "Mate系列",
        title_2: "爵士人生",
        phone: [
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/135650/26/13207/74562/5f91a4bbE16ccc689/912b028c15e6d854.jpg!q70.dpg",
            info: "华为 Mate 40 Pro+",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/134458/1/19973/77882/5fd72de1Eec776a32/027c641d3669f7ec.jpg!q70.jpg",
            info: "华为 Mate 40",
          },
          {
            imgUrl:
              "https://img11.360buyimg.com/n2/s240x240_jfs/t1/152671/11/3093/141850/5f917c84Ecd7cb45d/2fc85ec507a7a055.jpg!q70.jpg",
            info: "华为 Mate 30 Pro",
          },
          {
            imgUrl:
              "https://img11.360buyimg.com/n2/s240x240_jfs/t1/145926/35/11669/139480/5f917c42E2d145d44/ab88025bedcf729c.jpg!q70.jpg",
            info: "华为 Mate 30",
          },
        ],
      },
    ],
    xiaomi: [
      {
        id: 0,
        title_1: "旗舰系列",
        title_2: "为发烧而生",
        phone: [
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/140839/13/5234/103954/5f338529E0a07989c/34d17d79e564a530.jpg!q70.dpg",
            info: "小米 10 至尊纪念版",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/103824/9/13856/110894/5e607ee2E751d3753/5e921c3a11f04398.jpg!q70.dpg",
            info: "小米 10",
          },
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/108026/34/14255/109472/5ea55bdfEedeec507/e21a69a1456dd33c.jpg!q70.dpg",
            info: "小米 10 青春版",
          },
        ],
      },
    ],
    OPPO: [
      {
        id: 0,
        title_1: "Reno系列",
        title_2: "人像四摄 超级快充",
        phone: [
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/145997/34/18284/122247/5fd58a70E4007b0a6/a43c9f8dadf9f2ef.jpg!q70.jpg",
            info: "OPPO Reno5 Pro",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/151380/38/10990/108009/5fdc0c19Ebd1bf616/589dcbba6a0ac118.jpg!q70.jpg",
            info: "OPPO Reno5",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/118010/19/12664/122321/5f12b22dEdd4b5b71/6047ec35c7469808.jpg!q70.jpg",
            info: "OPPO Reno4 Pro",
          },
        ],
      },
    ],
    vivo: [
      {
        id: 0,
        title_1: "旗舰系列",
        title_2: "专业影像 蔡司镜头",
        phone: [
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/146262/35/18051/42099/5fd4a49cE8f205cec/62bf25fe6d1aa9e5.jpg!q70.dpg",
            info: "vivo X60 Pro",
          },
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/129204/32/16376/57218/5f980800E447304bf/4c3e44c2050dbcf4.jpg!q70.dpg",
            info: "vivo X50 Pro+",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/125496/19/5473/388453/5ef3097dE95fe1da4/407a505c11d40d79.jpg!q70.dpg",
            info: "vivo X50",
          },
        ],
      },
    ],
    honor: [
      {
        id: 0,
        title_1: "数字旗舰",
        title_2: "勇敢做自己 做自己最荣耀",
        phone: [
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/109773/5/12845/66987/5e99da56Ec087f7d6/808b6fe515435501.jpg!q70.jpg",
            info: "荣耀30 Pro+",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/123339/14/9726/89778/5f367514Ee6fd5fe2/665827bcb344eecf.jpg!q70.jpg",
            info: "荣耀30 Pro",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/66943/25/7434/745611/5d563118E7f2e5077/a92fd7c6b40597ac.png!q70",
            info: "荣耀20 Pro",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/92468/5/1915/727351/5dc7a313E8e476b54/0e2575edb82b09ec.png",
            info: "荣耀20",
          },
        ],
      },
    ],
    oneplus: [
      {
        id: 0,
        title_1: "数字旗舰",
        title_2: "不将就 Never Settle",
        phone: [
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s240x240_jfs/t1/102178/11/19054/171376/5e985077E8c4147dc/396e3307b14e6a91.jpg!q70.jpg",
            info: "一加8 Pro",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s240x240_jfs/t1/140612/19/10777/69703/5f87d3c0E66ae5619/41ff823b47c70920.jpg!q70.jpg",
            info: "一加 8T",
          },
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/109397/31/12641/171206/5e984fe7E56b8e7a3/cf7a207c3de8c06e.jpg!q70.jpg",
            info: "一加 8",
          },
        ],
      },
    ],
    meizu: [
      {
        id: 0,
        title_1: "数字旗舰",
        title_2: "轻易不说完美",
        phone: [
          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s240x240_jfs/t1/114037/35/13461/52919/5f22f189E75eaa8bf/72471f5430611933.jpg!q70.jpg",
            info: "魅族 17 Pro",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/135821/23/2709/206234/5eee2f73E082b8d23/a9d7992529e411b8.jpg!q70.jpg",
            info: "魅族 17",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s270x270_jfs/t1/141089/15/11651/53115/5f92a7edE9c2c7f87/f487c309c7788167.jpg!q70.dpg",
            info: "魅族 16T",
          },
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/111327/37/15474/66382/5f3ce14bE751dbe12/130a30429017dea2.jpg!q70.dpg",
            info: "魅族 16Xs",
          },
        ],
      },
    ],
    redmi: [
      {
        id: 0,
        title_1: "旗舰系列",
        title_2: "5G先锋 无所畏惧",
        phone: [
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/147326/14/12559/224942/5f9b88edE530fac65/be750ece1e3f1e8d.png!q70",
            info: "红米 K30S",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/107928/29/17769/387348/5ebcbf83E3eff351d/39c50bc2e712651b.png!q70",
            info: "红米 K30 Pro",
          },
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/87913/22/6908/148626/5df75272E07f8fab2/0c930ccc45462cfd.jpg!q70.jpg",
            info: "红米 K30",
          },
        ],
      },
    ],
    sumsung: [
      {
        id: 0,
        title_1: "Note系列",
        title_2: "卓然天成 为你而生",
        phone: [
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/128785/40/8932/67952/5f2d0cfbEef0bb230/d49bb3021e21d778.jpg!q70.dpg",
            info: "三星 Note20 Ultra",
          },
          {
            imgUrl:
              "https://img13.360buyimg.com/n2/s270x270_jfs/t1/114311/12/14270/93362/5f2d0b2eEe2afa02f/85919467d6c7fc38.jpg!q70.dpg",
            info: "三星 Note20",
          },
        ],
      },
    ],
    Smartisan: [
      {
        id: 0,
        title_1: "旗舰系列",
        title_2: "明明可以靠脸 偏偏要靠才华",
        phone: [
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/139267/34/11514/134041/5f8edafaE7e40017d/0f86494c7569cad0.jpg!q70.jpg",
            info: "锤子 坚果 R2",
          },
        ],
      },
    ],
    ZTE: [
      {
        id: 0,
        title_1: "天机旗舰",
        title_2: "未来 不等待",
        phone: [
          {
            imgUrl:
              "https://img10.360buyimg.com/n2/s240x240_jfs/t1/145519/3/7210/54255/5f4df8b1E24c84a77/db576bae737a07af.jpg!q70.jpg",
            info: "中兴 Axon 20",
          },

          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/126108/36/6536/95369/5f03d9e1Ed0cf690d/00364176974299b6.jpg!q70.dpg",
            info: "中兴 Axon 11",
          },
        ],
      },
    ],
    lenovo: [
      {
        id: 0,
        title_1: "乐檬系列",
        title_2: "永不止步 never stand still",
        phone: [
          {
            imgUrl:
              "https://img14.360buyimg.com/n2/s270x270_jfs/t1/149610/13/17555/80183/5fd06d77Ef92040f1/757f488b6a26215a.jpg!q70.dpg",
            info: "乐檬 K12 Pro",
          },

          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/153705/28/9095/52745/5fd1c18fE299ef660/3fd8bd0a284e7257.jpg!q70.dpg",
            info: "乐檬 K12",
          },
        ],
      },
    ],
    realme: [
      {
        id: 0,
        title_1: "旗舰系列",
        title_2: "敢越级",
        phone: [
          {
            imgUrl:
              "https://img11.360buyimg.com/n2/s240x240_jfs/t1/133473/9/7856/118125/5f431a91E11f1c01f/9cc05dd2930f1d53.jpg!q70.jpg",
            info: "真我 X7 Pro",
          },

          {
            imgUrl:
              "https://img12.360buyimg.com/n2/s270x270_jfs/t1/111194/40/1591/146910/5e998744E96519292/3aff4ad707222db4.jpg!q70.dpg",
            info: "真我 X50 Pro",
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
