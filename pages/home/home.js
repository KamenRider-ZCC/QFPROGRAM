import request from "../../util/request"

// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        looplist: [],
        goodlist: []
    },
    current: 1,
    total: 0,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.renderSwiper()
        this.renderGoods()
    },
    renderGoods() {
        request({
            url: `/goods?_page=${this.current}&_limit=5`
        }, true).then(res => {
            this.total = Number(res.total)
            this.setData({
                goodlist: [...this.data.goodlist, ...res.list]
            })
        })
    },
    renderSwiper() {
        request({
            url: '/recommends'
        }).then(res => {
            this.setData({
                looplist: res
            })
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        setTimeout(() => {
            wx.stopPullDownRefresh()
        }, 1000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.goodlist.length === this.total) {
            return
        }
        this.current++
        this.renderGoods()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    handleEvent() { }
})