# inspiration-draft.github.io

## 本地开发与预览

本仓库是静态 HTML/CSS/JavaScript，无专用开发服务器或包管理器。需要预览时，在仓库根目录运行：

```sh
python3 -m http.server 8767 --bind 127.0.0.1
```

使用同一台电脑上的浏览器访问 `http://127.0.0.1:8767/`；Playwright 也应使用该 loopback 地址。响应式测试请用浏览器或模拟器的视口仿真，不要为了手机经 Wi-Fi 访问而开放局域网。

测试服务器只允许绑定 `127.0.0.1` 或 `::1`。禁止绑定 `0.0.0.0`、`::` 或局域网网卡，也不要使用隧道或端口转发。测试完成后停止服务器（例如按 Ctrl+C）。

现有静态检查可运行 `node scripts/validate-mvp33.mjs`。以上规则只适用于本地开发/测试；GitHub Pages 生产部署保持不变。