import apiConfig from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const apiContainer = document.getElementById('api-selector');
    const urlInput = document.getElementById('video-url');
    const playBtn = document.getElementById('play-btn');
    const playerFrame = document.getElementById('player-frame');
    const playerContainer = document.getElementById('player-container');
    const currentApiLabel = document.getElementById('current-api-name');

    let selectedApi = apiConfig.apis[0];

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
                    playVideo();
                }
            });
            apiContainer.appendChild(btn);
        });
        currentApiLabel.textContent = `当前线路: ${selectedApi.name}`;
    }

    // 播放逻辑
    function playVideo() {
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
    playBtn.addEventListener('click', playVideo);

    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            playVideo();
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
});
