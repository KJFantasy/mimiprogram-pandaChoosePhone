// pages/collect/collect.js
Page({
    data: {
        familys:[
          {
            familyName:'贾家', 
            users: [
              {name:'贾宝玉'},
              {name:'贾元春'},
              {name:'贾迎春'},
              {name:'贾探春'},
              {name:'贾惜春'}
            ]
          },
          { 
            familyName:'王家', 
            users: [
              {name:'王熙凤'},
              {name:'王夫人'},
              {name:'薛姨妈'}
            ]
          },
          {
            familyName:'薛家', 
            users: [
              {name:'薛宝钗'},
              {name:'薛蟠'},
              {name:'薛宝琴'}
           ]
          },
          {
            familyName:'史家', 
            users: [
              {name:'贾母'},
              {name:'史湘云'}
            ]
          }
        ]
      },
     
      updateUser() {
     
        let f = 'familys[' + 0 + '].users['+ 0 +'].name'
        this.setData({
          [f]: '甄宝玉'
        })
      },
});