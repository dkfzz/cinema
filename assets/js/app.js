import apiConfig from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const apiContainer = document.getElementById('api-selector');
    const urlInput = document.getElementById('video-url');
    const playBtn = document.getElementById('play-btn');
    const playerFrame = document.getElementById('player-frame');
    const playerContainer = document.getElementById('player-container');
    const currentApiLabel = document.getElementById('current-api-name');

    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history');

    let selectedApi = apiConfig.apis[0];

    // 历史记录管理
    const HistoryManager = {
        KEY: 'aurora_player_history',
        MAX_ITEMS: 8,

        get() {
            try {
                return JSON.parse(localStorage.getItem(this.KEY) || '[]');
            } catch (e) {
                return [];
            }
        },

        add(url) {
            if (!url) return;
            let history = this.get();
            // 移除已存在的相同URL
            history = history.filter(item => item.url !== url);
            // 添加到头部
            history.unshift({
                url: url,
                time: new Date().toLocaleString()
            });
            // 限制数量
            if (history.length > this.MAX_ITEMS) {
                history = history.slice(0, this.MAX_ITEMS);
            }
            localStorage.setItem(this.KEY, JSON.stringify(history));
            this.render();
        },

        clear() {
            localStorage.removeItem(this.KEY);
            this.render();
        },

        render() {
            const history = this.get();
            if (history.length === 0) {
                historySection.style.display = 'none';
                return;
            }

            historySection.style.display = 'block';
            historyList.innerHTML = '';

            history.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'api-btn';
                // 简化的显示，截取并在末尾显示部分URL以区分
                const displayUrl = item.url.replace(/^https?:\/\/(www\.)?/, '').substring(0, 20) + '...';
                btn.innerHTML = `<i class="fas fa-film"></i> ${displayUrl}`;
                btn.title = `播放时间: ${item.time}\n完整链接: ${item.url}`;
                btn.style.fontSize = '0.8rem';

                btn.addEventListener('click', () => {
                    urlInput.value = item.url;
                    playVideo(false); // 播放时不重复添加历史
                });

                historyList.appendChild(btn);
            });
        }
    };

    // 初始化API按钮
    function initApiSelector() {
        apiContainer.innerHTML = '';
        apiConfig.apis.forEach((api, index) => {
            const btn = document.createElement('button');
            btn.className = `api-btn ${index === 0 ? 'active' : ''}`;
            btn.textContent = api.name;
            btn.dataset.url = api.url;
            btn.addEventListener('click', () => {
                // 移除其他激活状态
                document.querySelectorAll('.api-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedApi = api;
                currentApiLabel.textContent = `当前线路: ${api.name}`;

                // 如果已经有视频链接，自动刷新播放
                if (urlInput.value.trim()) {
                    playVideo(false);
                }
            });
            apiContainer.appendChild(btn);
        });
        currentApiLabel.textContent = `当前线路: ${selectedApi.name}`;
    }

    // 播放逻辑
    function playVideo(saveToHistory = true) {
        const url = urlInput.value.trim();
        if (!url) {
            showToast('请先粘贴视频播放地址');
            urlInput.focus();
            return;
        }

        // 简单的URL校验
        if (!url.startsWith('http')) {
            showToast('请输入正确的网址 (http/https开头)');
            return;
        }

        if (saveToHistory) {
            HistoryManager.add(url);
        }

        const parseUrl = selectedApi.url + url;

        // 增加加载动画效果
        playerContainer.classList.add('loading');
        playerFrame.style.opacity = '0';

        // 设置iframe
        playerFrame.src = parseUrl;

        playerFrame.onload = () => {
            playerContainer.classList.remove('loading');
            playerFrame.style.opacity = '1';
        };

        // 滚动到播放器
        playerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // 简单的吐司提示
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // 事件监听
    playBtn.addEventListener('click', () => playVideo(true));

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('确定要清空播放历史吗？')) {
            HistoryManager.clear();
        }
    });

    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            playVideo(true);
        }
    });

    // 聚焦时特效
    urlInput.addEventListener('focus', () => {
        document.querySelector('.input-group').classList.add('focused');
    });

    urlInput.addEventListener('blur', () => {
        document.querySelector('.input-group').classList.remove('focused');
    });

    initApiSelector();
    HistoryManager.render(); // 初始化加载历史
});
