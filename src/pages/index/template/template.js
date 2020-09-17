import './template.less';
import {templates} from '@/module/api/index.js'
// 微页面
Page({
    data: {
        show: false,
        banner:[],
        currentPage: 1,
        totalPage: 0,
        dataList: [[]]
    },
    onPullDownRefresh() {
        this.getData('refresh', {
            query: {
                page: 1,
                pageSize: 15
            }
        });
    },
    onReachBottom() {
        var hasMore = this.totalPage > this.currentPage;
        if (hasMore) {
            this.setData({
                show: true
            });
            var page = this.currentPage + 1;
            this.getArticleData('loadmore', {
                query: {
                    page,
                    pageSize: 15
                }
            });
        } else {
            wx.showToast({
                icon: 'none',
                title: '再拉也没有啦'
            });
        }
    },
    onLoad(e){
        this.onPullDownRefresh();
    },
    onShow(e){
    },
    jumpToDetail(e){
        console.log('e===========', e)
        process.App.extend.router.push({
            name: 'templatesDetail',
            query: {
                id: e.mark.item.id
            }
        })
    },
    //请求新数据
    async getData (type, params){
        wx.showLoading({
            title:'加载中',
            mask:true
        })
        try {
            let res = await templates.getList(params)
            if (res.data) {
                this.setData({
                    currentPage: res.data.currentPage,
                    totalPage: res.data.totalPage,
                    [`dataList[${res.data.currentPage - 1}]`]: res.data.data || [],
                });
            }
        } catch (e) {
            console.log('444', e)
        }

        wx.hideLoading();
    }
});
