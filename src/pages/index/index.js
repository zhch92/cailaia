var app = getApp();
var util = require('../../utils/md5.js');

var init = {
    "status": 1,
    "errCode": null,
    "data": [{
        "strategyId": 59,
        "strategyName": "实盘3实盘3",
        "orgPrice": "1.000",
        "discountPrice": "0.000",
        "hisYield": "1.000",
        "monthAvgYield": "0.0904",
        "buyFlag": false,
        "latestPosition": null,
        "profits": null,
        "staticImageUrl": '../../image/one.png'
    }, {
        "strategyId": 59,
        "strategyName": "实盘4实盘4",
        "orgPrice": "1.000",
        "discountPrice": "0.000",
        "hisYield": "1.000",
        "monthAvgYield": "0.0904",
        "buyFlag": false,
        "latestPosition": null,
        "profits": null,
        "staticImageUrl": '../../image/one.png'
    }]
};

Page({
    data: {
        strategyList: []
    },
    onLoad: function() {
        let msg = 'pageNum:1,pageSize:10,key:www.cailaia.com';

        let signatureMsg = util.md5(msg);
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
