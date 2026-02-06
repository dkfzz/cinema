/**
 * 全网VIP视频解析接口配置
 * 包含优化后的高速极速线路
 */
const apiConfig = {
    currentApiIndex: 0,
    apis: [
        { name: "✨ 纯净解析 (推荐)", url: "https://jx.xmflv.com/?url=" },
        { name: "🚀 极速线路 (B站)", url: "https://jx.m3u8.tv/jiexi/?url=" },
        { name: "⚡ 777解析", url: "https://jx.777jiexi.com/player/?url=" },
        { name: "🎯 Boikai解析", url: "https://www.playm3u8.cn/jiexi.php?url=" },
        { name: "💎 JSON解析", url: "https://jx.jsonplayer.com/player/?url=" },
        { name: "🐏 羊驼解析", url: "https://jx.yangtuo.org/v/?url=" },
        { name: "稳定通用1", url: "https://www.ck-qi.com/chishi/player/?url=" },
        { name: "稳定通用2", url: "https://vip.bljiex.com/?v=" },
        { name: "备用线路1", url: "https://jx.yparse.com/index.php?url=" },
        { name: "备用线路2", url: "https://www.8090g.cn/?url=" }
    ]
};

export default apiConfig;
