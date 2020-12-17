// pages/collect/collect.js
Page({
    data: {
        priceRange: [
            {
                id: 0,
                name: "不限价格",
                isActive: false,
            },
            {
                id: 1,
                name: "0-1499",
                isActive: false,
            },
            {
                id: 2,
                name: "1500-1999",
                isActive: false,
            },
            {
                id: 3,
                name: "2000-2999",
                isActive: false,
            },
            {
                id: 4,
                name: "3000-3999",
                isActive: false,
            },
            {
                id: 5,
                name: "4000以上",
                isActive: false,
            }
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
            }
        ],
      },
    methods: {
        
    }
});