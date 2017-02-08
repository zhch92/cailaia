//app.js

var util = require('./utils/md5.js');


App({
    onLaunch: function() {

        wx.login({
            success: function(res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session',
                        data: {
                            'appid': 'wx48087c7f3d3ce2d8',
                            'secret': '23b176b2b0097b3be0c5826261c3d34d',
                            'js_code': res.code,
                            'grant_type': 'authorization_code'
                        },
                        success: function(res) {
                            let memberName = res.data.openid;
                            let msg = 'memberName:13438387589,password:13438387589,key:www.cailaia.com';

                            let signatureMsg = util.md5(msg);
                            wx.request({
                                url: 'http://s.cailaia.cn/mbracct/v1/login',
                                data: {
                                    memberName: 13438387589,
                                    password: '13438387589',
                                },
                                method: 'POST',
                                header: {
                                    // 'content-type': 'application/json',
                                    'signatureMsg': signatureMsg
                                },

                                success: function(res) {
                                    console.log(res.data)
                                }
                            })

                            console.log(res.data)
                        }
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    }
})
