var app = getApp();
var init={
  "status": 1,
  "errCode": null,
  "data": [
    {
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
    },
    {
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
    }
  ]
};

Page({
    data: {
        strategyList:[]
    },
    onLoad: function() {
        this.setData({
            strategyList:[...init.data]
        })

    }

})


