    let arr = [];
    let init = { "status": 1, "errCode": null, "data": [{ "tradeFlag": "0", "prodCode": "1B0967", "id": "79697", "prodName": "基本600", "prodCif": "MRI", "financeMic": "SS", "mnemonicCode": "jb600", "_version_": 1521493700105994251 }, { "tradeFlag": "0", "prodCode": "000967", "id": "92589", "prodName": "基本600", "prodCif": "MRI", "financeMic": "SS", "mnemonicCode": "jb600", "_version_": 1535079717697224704 }, { "tradeFlag": "1", "prodCode": "600600", "id": "83216", "prodName": "青岛啤酒", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "qdpj", "_version_": 1521493700306272282 }, { "tradeFlag": "1", "prodCode": "600017", "id": "74743", "prodName": "日照港", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "rzg", "_version_": 1521493699810295810 }, { "tradeFlag": "1", "prodCode": "600732", "id": "74746", "prodName": "*ST新梅", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "*STxm", "_version_": 1521493699811344384 }, { "tradeFlag": "1", "prodCode": "600733", "id": "74754", "prodName": "S前锋", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "Sqf", "_version_": 1521493699812392963 }, { "tradeFlag": "1", "prodCode": "600138", "id": "74776", "prodName": "中青旅", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "zql", "_version_": 1521493699814490116 }, { "tradeFlag": "1", "prodCode": "600735", "id": "74798", "prodName": "新华锦", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "xhj", "_version_": 1521493699815538690 }, { "tradeFlag": "1", "prodCode": "600636", "id": "75782", "prodName": "三爱富", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "saf", "_version_": 1521493699867967510 }, { "tradeFlag": "1", "prodCode": "600275", "id": "76316", "prodName": "武昌鱼", "prodCif": "ESA.M", "financeMic": "SS", "mnemonicCode": "wcy", "_version_": 1521493699904667654 }] }
    wx.getStorage({
        key: 'history',
        success: function(res) {
            let str = res.data;
            return arr = res.data;
        }
    })
    Page({
        data: {
            searchResult: [],
            searchResultNo: false,
            searchHint: true,
            inputValue: '',
            history: []
        },
        onShow: function() {
            console.log(arr)
            if (arr.length > 0) {
                this.setData({
                    searchHint: false,
                    history: [...arr]
                })
            } else {
                this.setData({
                    searchHint: true,
                })

            }
        },

        bindKeyInput: function(e) {
            let val = e.detail.value;
            if (val == '') {
                this.setData({
                    searchHint: true,
                    searchResultNo: false,

                })

            } else {
                this.setData({
                    searchResultNo: false,
                    searchHint: false
                });

                if (val == 600) {
                    this.setData({
                        searchResult: [...init.data],
                    });
                    // wx.request({
                    //     url: 'http://10.10.10.202/vtrade/v1/strategy/?pageNum=1&pageSize=10',
                    //     header: {
                    //         'content-type': 'application/json',
                    //         'signatureMsg':'495B28BD8422B42B729D364FF0700264'
                    //     },
                    //     success: function(res) {
                    //         console.log(res.data)
                    //     }
                    // })

                } else {
                    this.setData({
                        searchResultNo: true
                    })
                }
            }


        },
        clearHistory: function(e) {
            let indexVal = e.target.dataset.index;
            let newArr = arr.slice(0, indexVal)
            let newArr1 = arr.slice( indexVal+1)
            arr=[...newArr,...newArr1];
            wx.setStorage({
                key: "history",
                data: arr
            })
            this.setData({
                history:arr
            });


        },

        clearHistoryAll: function(e) {
            wx.clearStorage();
            this.setData({
                    searchHint: true,

                })

            this.setData({
                history: []
            })
            arr = []
        },
        bindSkip: function(e) {
            const $dom = e.target;
            let id = $dom.dataset.id;
            let prodName = $dom.dataset.name;
            let prodCode = $dom.dataset.code;
            let obj = { 'id': id, 'prodName': prodName, 'prodCode': prodCode };
            let idArr = []
            for (let i = 0; i < arr.length; i++) {
                idArr.push(arr[i].id)
            }
            if (idArr.indexOf(id) === -1) {
                arr.push(obj)
            }
            if (arr.length>10) {
                arr=[...arr.slice(0,9)]
            }
            wx.setStorage({
                key: "history",
                data: arr
            })



            // wx.navigateTo({
            //     url: 'stock?id=1'
            // })
        }
    })
