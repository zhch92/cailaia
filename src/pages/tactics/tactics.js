const common = require('../common.js')
var util = require('../../utils/md5.js')

const ctx = wx.createCanvasContext('myCanvas')
const ctx1 = wx.createCanvasContext('earningsCanvas2')
const ctx2 = wx.createCanvasContext('myCanvas2')
let screenWidth = 280;
wx.getSystemInfo({
    success: function(res) {
        return screenWidth = res.windowWidth;
    }
})

Page({
    data: {
        date: 1,
        detail: '下载财来啊APP 查看历史持仓记录',
        shade: false,
        arry1: [{ x: 20, y: 80 }, { x: 40, y: 90 }, { x: 90, y: 50 }, { x: 160, y: 50 }],
        arry2: [{ x: 20, y: 30 }, { x: 40, y: 90 }, { x: 90, y: 110 }, { x: 160, y: 80 }]

    },
    onLoad: function(options) {
        console.log(options.strategyId)
        let msg = 'key:www.cailaia.com';
        let signatureMsg = util.md5(msg);
        const $this=this;
        console.log(signatureMsg)
        common.tableDraw(ctx, screenWidth - 20, '#cccccc', 'red', 'green', 7, 12, this.data.arry1, this.data.arry2)
        common.tableDraw(ctx2, screenWidth - 80, '#cccccc', 'red', 'green', 2, 4, this.data.arry2, this.data.arry1)
        common.trigonDraw(ctx1)

       wx.request({
            url: 'http://s.cailaia.cn/vtrade/v1/strategy/'+options.strategyId+'',
            // data: {
            //     // 'strategyId': 5
            //     'userToken':'aDG86YCvJhCix+F5kB4zaEEP11CDhgz4ldULa9jZruS5jEUpkcBoV9jml4tVK6V1W3tUcq7BOVmo6Dsot7KrEprwZUQmXwsV'
            
            // },

            header: {
                'content-type': 'application/json',
                'signatureMsg': signatureMsg,
                'userToken':'aDG86YCvJhCix+F5kB4zaEEP11CDhgz4ldULa9jZruS5jEUpkcBoV9jml4tVK6V1W3tUcq7BOVmo6Dsot7KrEprwZUQmXwsV'
            },
            success: function(res) {
                console.log(res.data)
                let resData=res.data;
                $this.setData({
                    strategyList: [...resData.data]
                })
            }
        })

    },
    
    
    switchDate: function(e) {
        let numStr = e.target.dataset.num;
        let num = Number(numStr);
        this.setData({
            date: num,
            arry1: [{ x: 20, y: 20 + num }, { x: 40, y: 110 + num }, { x: 90, y: 50 + num }, { x: 160, y: 50 + num }],
            arry2: [{ x: 20, y: 30 + num }, { x: 40, y: 90 + num }, { x: 90, y: 110 + num }, { x: 160, y: 80 + num }]

        })
        common.tableDraw(ctx, screenWidth - 20, '#cccccc', 'red', 'green', 7, 12, this.data.arry1, this.data.arry2)
        common.tableDraw(ctx2, screenWidth - 80, '#cccccc', 'red', 'green', 2, 4, this.data.arry2, this.data.arry1)
    },
    showShade: function(e) {
        let str = e.target.dataset.str;

        this.setData({
            detail: `下载财来啊APP 查看${str}`,
            shade: true
        })
    },
    colseShade: function() {
        this.setData({
            shade: false
        })
    }
})
