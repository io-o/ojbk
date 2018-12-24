
# 初识小程序
 >  公司需要小程序，那就开始学习小程序，本来想选择mpvue开发， vue语法，开发很爽， 但是好几个月没有更新， 提issue也没回复，遂放弃，转原生。
***
-  组件内如何传值？ 
```
<view class="card_box" 
    id="card_box" data-tap="{{item.value}}" 
    wx:for="{{cardData}}" 
    bind:tap="tapRouter">
    <span class="card_span" >{{item.name}}</span>
  </view>
// index.js
 methods: {
    tapRouter(e) {
      let m = e.currentTarget.dataset.tap
      wx.navigateTo({
        url: `/pages/${m}/index`
      })
    }
  }
```
 > 绑定Id，通过data-tap传值，然后在e.currentTarget.dataset里面取值。
***
- 如何赋值？
```
  next () {
    this.data.current ++
    this.setData({
      current: this.data.current
    })
  }
```
 > 不能像Vue直接改变data里面的变量，必须通过thiss.setData()这个方法。
***
- px 和rpx 区别？
```
.img {
    width: 32px;
}
.img {
    width: 32rpx;
}
```
 > 在小程序实际显示16px， rpx会自动换算除以2，还会自适应。（小程序设计稿按照iphone6尺寸设计）
***
-全局样式小技巧？
```
page {
  font-size: 32rpx;
}
```
 >  在app.wxss设置page标签即可全局生效



***
- 苹方字体设置？
```
font-family: "PingFangSC-Thin"
```
***
- errocode: 40029 ?

> 服务器的appid要和新建项目时候填入的appid保持一致！
不能通过修改project.config.json中的AppID来实现：
必须重新创建新的小程序项目
















