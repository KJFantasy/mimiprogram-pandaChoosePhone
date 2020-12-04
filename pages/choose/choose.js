// pages/collect/collect.js
Page({
    data: {
            color: 'pink',
            color2: 'yellow'
    },

    col: function () {
        let temp = 'color'
        // 更改
        if (this.data.color == "pink") {
          this.setData({
            [temp]: "yellow"
          })
        } 
      }
});