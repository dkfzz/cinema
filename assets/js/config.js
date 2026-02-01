/**
 * 全网VIP视频解析接口配置
 * 包含12条常用解析线路
 */
const apiConfig = {
    currentApiIndex: 0,
    apis: [
        { name: "推荐线路", url: "https://jx.xmflv.com/?url=" },
        { name: "线路一", url: "https://jx.quankan.app/?url=" },
        { name: "线路二", url: "https://jx.m3u8.tv/jiexi/?url=" },
        { name: "线路三", url: "https://jx.aidouer.net/?url=" },
        { name: "线路四", url: "https://api.jiexi.la/?url=" },
        { name: "线路五", url: "https://jx.zhanlang2019.com/?url=" },
        { name: "线路六", url: "https://im1907.top/?jx=" },
        { name: "线路七", url: "https://www.playm3u8.cn/jiexi.php?url=" },
        { name: "线路八", url: "https://jx.yparse.com/index.php?url=" },
        { name: "线路九", url: "http://47.96.82.41/?url=" },
        { name: "搜索线路", url: "https://so.777.jp/so.php?url=" }
    ]
};

export default apiConfig;
