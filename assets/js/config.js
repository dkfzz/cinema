/**
 * 全网VIP视频解析接口配置
 * 包含12条常用解析线路
 */
const apiConfig = {
    currentApiIndex: 0,
    apis: [
        { name: "✨ 纯净解析1 (推荐)", url: "https://jx.xmflv.com/?url=" },
        { name: "✨ 纯净解析2 (B站)", url: "https://jx.aidouer.net/?url=" },
        { name: "🚀 高速线路1", url: "https://www.ck-qi.com/chishi/player/?url=" },
        { name: "🚀 高速线路2", url: "https://jx.m3u8.tv/jiexi/?url=" },
        { name: "稳定通用1", url: "https://www.pangujiexi.com/jiexi/?url=" },
        { name: "稳定通用2", url: "https://vip.bljiex.com/?v=" },
        { name: "稳定通用3", url: "https://jx.yparse.com/index.php?url=" },
        { name: "备用线路1", url: "https://jx.618g.com/?url=" },
        { name: "备用线路2", url: "https://vip.parwix.com:4433/player/?url=" },
        { name: "备用线路3", url: "https://www.8090g.cn/?url=" }
    ]
};

export default apiConfig;
