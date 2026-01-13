\# 数学核心素养AI（Netlify 版）



\&gt; 龚凤乾教授设计的前端页面，零改动即可上线。



\## 一键部署



\[!\[Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/你的用户名/你的仓库)



\## 手动部署（已有仓库）



1\. Fork 本仓库  

2\. 登录 \[Netlify](https://netlify.com) → 「Add new site」→ 「Import Git」  

3\. 选中仓库 → 直接点击 Deploy  

4\. 部署完成后，进入  

&nbsp;  Site settings → Environment variables → 添加  

&nbsp;  `DEEPSEEK\_API\_KEY` = 你的 DeepSeek API 密钥  

5\. 重新部署即可使用



\## 目录结构



.

├── index.html          # 前端页面（勿动）

├── netlify/

│   └── functions/

│       └── chat.js     # 代理 DeepSeek 的函数

├── netlify.toml        # 重定向 \& 构建设置

├── package.json        # 函数依赖

└── README.md



\## 使用



部署成功后，打开域名即可直接使用；前端会自动请求 `/api/chat` 完成对话。

