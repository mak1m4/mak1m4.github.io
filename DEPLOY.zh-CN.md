# GitHub Pages 部署

## 使用范围

本配置用于个人网站 `https://你的用户名.github.io/`，仓库名称必须为 `你的用户名.github.io`（或另行配置根域名）。不支持直接换成普通项目仓库的 `/仓库名/` 子路径。

只上传 `portfolio-site` 文件夹内的内容。仓库根目录应直接出现 `package.json`、`src`、`public` 和 `.github`，不要在外面再套一层 `portfolio-site`，更不要上传整个 NewPortfolio、旧作品集或申请资料。

## 本地验证

安装 Node.js 24，在本文件所在目录执行：

```powershell
npm ci
npm test
npm run build
npm run verify:pages
```

依赖已通过锁文件固定，不依赖旁边的 OldPortfolio。构建自动为七个页面生成目录入口，以及 `404.html`；不需要服务器重写规则。详情页直接访问或刷新时可加载，`#film` 等锚点保留。GitHub Pages 可能为目录网址添加尾斜线，页面兼容该形式。

## 首次发布

1. 在 GitHub 创建公开仓库 `你的用户名.github.io`。如果这个仓库已经存在，先确认是否包含其他网站，不要直接覆盖。
2. 通过 GitHub Desktop 或 Git 命令将本目录作为仓库上传，默认分支使用 `main`。不要用网页拖拽全部素材（视频可能超过网页上传限制）。不要使用 Git LFS 托管 Pages 视频。
3. 打开仓库 Settings → Pages → Build and deployment → Source，选择 **GitHub Actions**。
4. 打开 Actions → **Deploy portfolio to GitHub Pages**。若首次推送发生在启用 Pages 之前，点击 **Run workflow** 重新运行。
5. 等待 build 和 deploy 成功，从部署记录打开网站。以后推送到 main 会自动更新。

工作流只部署 `dist`，不部署源文件目录、审计截图或本地依赖。它依次运行依赖安装、测试、构建、产物检查；任何一步失败都会阻止发布。

## 上线验收

- 使用无痕窗口打开首页；刷新三个 `/projects/…/` 详情页和 `/systems/`。
- 直接打开 Shape of Sound 的 `#film` 链接，检查锚点定位。
- 播放三个视频并拖动进度条；确认新版 Fuzzy 视频正确。
- 打开三个 Launch live work；摄像头仅在主动操作后授权。Gesture 的 MediaPipe 模型仍需访问外部 CDN。
- 用手机检查导航展开与关闭，图片加载、动效关闭和邮件链接。
- 访问不存在的地址，确认有返回首页的 404 页面。

本地检查不能替代实际 GitHub Actions 和公网设备验收。发布完成前不应把本地通过描述为已上线。

## 本次本地验证（2026-09-20）

- 从锁文件执行 `npm ci` 成功，依赖目录为独立目录，旧作品集未被修改。
- `npm test`：33/33 通过，包含 Pages 尾斜线网址及影片锚点的渲染检查。
- `npm run build` 与 `npm run verify:pages` 通过；7 个页面入口、3 个体验入口、404 及静态资源路径已检查。
- 构建产物 87 个文件，合计约 107.2 MiB；新版 Fuzzy 视频约 41.9 MiB，三个视频均低于 100 MiB。
- 依赖安装时 npm audit 报告 0 个漏洞。
- 尚未上传 GitHub；Actions 运行与公网访问需要发布后验收。

参考：[Vite GitHub Pages 部署](https://vite.dev/guide/static-deploy#github-pages)。
