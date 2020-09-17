import './index.less';
import {banner, articles} from '@/module/api/index.js'
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
        this.getArticleData('refresh', {
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
        this.getBannerData();
        this.onPullDownRefresh();
    },
    onShow(e){
    },
    jumpToDetail(e){
        console.log('e===========', e)
        process.App.extend.router.push({
            name: 'articleDetail',
            query: {
                id: e.mark.item.id
            }
        })
    },
    getBannerData (){
        banner.getList({query:{targetType:1}}).then(res => {
            console.log('res.data', res.data);
	        if (res.data.length !== 0) {
                this.setData({
	                banner: res.data
                })
	        };
        }).catch((e) => {
            console.log('====', e)
        })
    },
    //请求新数据
    async getArticleData (type, params){
        wx.showLoading({
            title:'加载中',
            mask:true
        })
        try {
           let res = await articles.getList(params)
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
