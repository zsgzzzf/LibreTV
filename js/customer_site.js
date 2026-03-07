const CUSTOMER_SITES = {
    modu: {
        api: 'https://moduzy.com/api.php/provide/vod',
        name: '魔都资源',
    },
    mozhuazy: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台',
    },
    yutu: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '玉兔',
        adult: true,
    },
    xiaojizy: {
        api: 'https://api.xiaojizy.live/provide/vod?ac=list',
        name: '小鸡资源',
    },
    rycj: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    fqzy: {
        api: 'https://fqzy.me/api.php/provide/vod',
        name: '番茄资源',
    },
    doubanzy: {
        api: 'https://doubanzy.cc/api.php/provide/vod',
        name: '豆瓣资源',
    },
    iqiyizy: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '爱奇艺资源',
    },
    dyttzy: {
        api: 'http://dyttzy5.tv/api.php/provide/vod',
        name: '电影天堂',
    },
    wolongzy: {
        api: 'http://wolongzy.cc/api.php/provide/vod',
        name: '卧龙资源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
