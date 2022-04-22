import request from "../../util/request"

// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: null,
        current: 0,
        commentList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: options.name
        })
        this.getDetailInfo(options.id)
        this.getCommentInfo(options.id)
    },
    getCommentInfo(id) {
        request({
            url: `/comments`
        }).then(res => {
            this.setData({
                commentList: res
            })
        })
    },
    getDetailInfo(id) {
        request({
            url: `/goods/${id}`
        }).then(res => {
            this.setData({
                info: res
            })
        })
    },
    handleTap(evt) {
        wx.previewImage({
            urls: this.data.info.slides.map(item => `http://localhost:5000${item}`),
            current: evt.currentTarget.dataset.current
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    handleActive(evt) {
        this.setData({
            current: evt.currentTarget.dataset.index
        })
    }
})