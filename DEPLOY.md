# 极光影院 (Aurora Cinema) 部署与使用指南

极光影院 (Independent Edition) 是一个单文件 HTML 项目，名为 `standalone.html`。您可以通过多种方式使用它。

## 方式一：本地直接使用 (最简单)

1.  **电脑/安卓手机**: 直接双击或用浏览器打开 `standalone.html` 文件即可使用。
2.  **iOS (iPhone/iPad)**: 需要将文件保存到"文件"应用中，然后点击预览，或者使用 Documents 等第三方文件管理应用打开。

---

## 方式二：部署到 GitHub Pages (推荐 - 永久免费)

这是获取**永久公网链接**的最佳方式，适合分享给朋友或跨设备使用。

### 步骤：
1.  **注册/登录 GitHub**: 访问 [github.com](https://github.com)。
2.  **新建仓库 (Repository)**:
    - 点击右上角的 `+` -> `New repository`。
    - Repository name 填入任意名称 (例如 `cinema`)。
    - 勾选 `Public` (公开)。
    - 勾选 `Add a README file` (初始化)。
    - 点击 `Create repository`。
3.  **上传文件**:
    - 在新创建的仓库页面，点击 `Add file` -> `Upload files`。
    - 将 `standalone.html` 拖入上传区域。
    - **重命名技巧**: 建议将 `standalone.html` 重命名为 `index.html`，这样链接更短。
    - 点击底部的 `Commit changes` 保存。
4.  **开启 Pages 服务**:
    - 点击仓库顶部的 `Settings` (设置)。
    - 在左侧侧边栏找到 `Pages`。
    - 在 `Build and deployment` -> `Branch` 下，选择 `main` (或 `master`) 分支，文件夹选 `/ (root)`。
    - 点击 `Save` (保存)。
5.  **获取链接**:
    - 等待约 1-2 分钟，刷新页面。
    - 顶部会出现 "Your site is live at..." 的提示，那个链接就是您的**永久播放器地址**！

---

## 方式三：使用 Vercel / Netlify (备选 - 速度快)

如果您有账号，只需将 `standalone.html` 拖入部署面板即可，它们会自动生成一个测试域名。

## 常见问题

- **Q: 为什么视频无法播放？**
    - A: 可能是当前选中的"线路"失效或不支持该视频源。请尝试点击下方的"切换线路"按钮。
- **Q: 历史记录存在哪里？**
    - A: 记录保存在您当前浏览器的本地缓存中 (LocalStorage)。如果您清除浏览器缓存或更换设备，记录会丢失。
- **Q: 是否有广告？**
    - A: 极光影院本身无任何广告。但视频流来自第三方解析接口，极少数线路可能会在视频开头夹带原站广告，您可以尝试切换"纯净线路"。
