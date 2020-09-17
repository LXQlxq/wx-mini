import './article-detail.less'
import {banner, articles} from '@/module/api/index'
Page({
    data: {
        detail: {}
    },
    onLoad(e){
        console.log('onLoad',e);
        wx.showLoading();
        this.getArticleDetail({params: {id: Number(e.id)}});
    },
    onShow(e){
    },
    //请求新数据
    getArticleDetail (params){
        articles.detail(params).then(res => {
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
