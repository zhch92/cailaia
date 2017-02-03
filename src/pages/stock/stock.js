//index.js  
var util = require('../../utils/md5.js')
    //获取应用实例  
var app = getApp()
Page({
    data: {
        page: '1',
    },
    onLoad: function() {

        wx.request({
            url: 'https://xueqiu.com/',
            method: 'GET',
            data: {'category':5},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.data.items = res.data
            }
        })


        var password = 'pageNum:1,pageSize:10,key:www.cailaia.com';
        if (password === "" || password === null) {
            wx.showModal({
                title: '提示',
                content: '密码不能为空',
                confirmColor: '#118EDE',
                showCancel: false,
                success: function(res) {
                    if (res.confirm) {
                        //console.log('用户点击确定')  
                    }
                }
            });
            return false;
        } else {
            password = util.md5(password);
            console.log(password)
        }
    }

})
