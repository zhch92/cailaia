var util = require('../../utils/md5.js')

Page({
    data: {
        strategyList: []
    },
    onLoad: function() {
        let msg = 'pageNum:1,pageSize:10,key:www.cailaia.com';

        let signatureMsg = util.md5(msg);
        console.log(signatureMsg)
        const $this = this;
        wx.request({
            url: 'http://s.cailaia.cn/vtrade/v1/strategy/',
            data: {
                'pageNum': 1,
                'pageSize': 10
            },

            header: {
                'content-type': 'application/json',
                'signatureMsg': signatureMsg
            },
            success: function(res) {
                let resData=res.data;
                $this.setData({
                    strategyList: [...resData.data]
                })
            }
        })










    }

})
