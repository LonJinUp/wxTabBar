// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    index:0,
    tabBar:[
      {
        name:'home',
        icon:'icon-home',
      },
      {
        name:'home',
        icon:'icon-all',
      },
      {
        name:'home',
        icon:'icon-bussiness-man',
      },
    ]
  },

  goto(e){
    if(e.currentTarget.dataset.index!=this.data.index){
      this.setData({
        index:e.currentTarget.dataset.index
      })
    }

  },  
  
  onLoad() {
    
  },

})
