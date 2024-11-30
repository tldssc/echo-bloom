import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: "echo-workspace",
  description: "Echo.的个人空间",
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/favicon.ico",
    author: "Echo.",
    authorAvatar: "/avatar.jpg",
    colorMode: "auto",
    colorModeSwitch: true,
    docsRepo: "https://github.com/tldssc/echo-bloom.git",
    docsBranch: "master",
    docsDir: "./docs",
    lastUpdatedText: "",
    // 导航栏配置
    navbar: [
      { text: "主页", link: "/" },
      { text: "博客", link: "/categories/spring/1.html" },
    ],
  }),
  host: "localhost",
  port: 8080,
  open: false,
  locales: {
    '/':{
      lang: 'zh-CN',
    }
  },
});
