    let arr = [];
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
                var $this = this;
                wx.request({
                    url: 'http://s.cailaia.cn/solrj/v1/finProd',
                    data: {
                        'q': val,
                    },

                    header: {
                        'content-type': 'application/json',
                        'signatureMsg': '495B28BD8422B42B729D364FF0700264'
                    },
                    success: function(res) {
                        let resData = res.data;
                        $this.setData({
                            searchResult: [...resData.data],
                        });
                    }
                })
            }
        },
        clearHistory: function(e) {
            let indexVal = e.target.dataset.index;
            let newArr = arr.slice(0, indexVal)
            let newArr1 = arr.slice(indexVal + 1)
            arr = [...newArr, ...newArr1];
            wx.setStorage({
                key: "history",
                data: arr
            })
            this.setData({
                history: arr
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
            if (arr.length > 10) {
                arr = [...arr.slice(0, 9)]
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
