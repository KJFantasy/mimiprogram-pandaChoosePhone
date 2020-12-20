//app.js
App({
  globalData: {
    globalPriceRange: [],
  },
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function (options) {},
  onShow: function (options) {},
  onHide: function () {},
  onError: function (msg) {},
  //options(path,query,isEntryPage)
  onPageNotFound: function (options) {},

  //重写分享方法
//   overShare: function () {
//     //监听路由切换
//     //间接实现全局设置分享内容
//     wx.onAppRoute(function (res) {
//       //获取加载的页面
//       let pages = getCurrentPages(),
//         //获取当前页面的对象
//         view = pages[pages.length - 1],
//         data;
//       if (view) {
//         data = view.data;
//         console.log("是否重写分享方法", data.isOverShare);
//         if (!data.isOverShare) {
//           data.isOverShare = true;
//           view.onShareAppMessage = function () {
//             //你的分享配置
//             return {
//               title: "熊猫选机",
//               path: "/pages/lookAround/lookAround",
//             };
//           };
//         }
//       }
//     });
//   },
});
