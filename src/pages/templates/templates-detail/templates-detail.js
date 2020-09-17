import './templates-detail.less'
import {templates} from '@/module/api/index'
Page({
    data: {
        detail: {}
    },
    onLoad(e){
        console.log('onLoad',e);
        wx.showLoading();
        this.getDetail({params: {id: Number(e.id)}});
    },
    onShow(e){
    },
    //请求新数据
    getDetail (params){
        templates.detail(params).then(res => {
        if (res.data) {
            this.setData({
                    detail: ''
                },
                () => {
                let detail = res.data;
                detail.intro =  detail.intro.replace(/\<img/gi, '<img style="width:100%;height:auto" ');
            this.setData({
                    detail,
                });
            })
        }
            wx.hideLoading();
        }).catch(() => {
            wx.hideLoading();
        })
    }

});
