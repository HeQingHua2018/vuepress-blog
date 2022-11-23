(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{373:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"github-actions-实现自动部署静态博客"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-实现自动部署静态博客"}},[s._v("#")]),s._v(" GitHub Actions 实现自动部署静态博客")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("我使用vuepress搭建了一个静态博客，挂在了Github pages和"),t("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Coding pages"),t("OutboundLink")],1),s._v("上面。")]),s._v(" "),t("p",[s._v("coding pages在国内的访问速度比github pages要快很多，而且还可以被百度收录。")]),s._v(" "),t("p",[s._v("一开始的部署方式是使用"),t("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/deploy.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("sh部署脚本"),t("OutboundLink")],1),s._v("把代码提交到这两个平台的仓库分支，虽然已经很方便了，但是我还想把博客未打包的源码提交到Github主分支上。这就需要我操作两次命令，"),t("strong",[s._v("我就想能不能只需要一次操作就可以同时把源码、部署代码一次性提交到两个平台呢？")])]),s._v(" "),t("h2",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),t("p",[s._v("在了解GitHub Actions最近（2019.12）刚正式发布了之后，尝试使用它发现能够满足我的需求。"),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html?20191227113947#comment-last",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Actions 入门教程"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("首先，需要获取token，后面会用到。获取方法：github获取token"),t("a",{attrs:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("、coding获取token"),t("a",{attrs:{href:"https://dev.tencent.com/help/doc/account/access-token",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("然后，将这两个token同时储存到github仓库的"),t("code",[s._v("Settings/Secrets")]),s._v("里面。变量名可以随便取，但是注意要和后面的"),t("code",[s._v("ci.yml")]),s._v("文件内的变量名一致，这里取的是"),t("code",[s._v("ACCESS_TOKEN")]),s._v("和"),t("code",[s._v("CODING_TOKEN")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103124812.jpg",alt:"token设置",title:"token设置"}})]),s._v(" "),t("p",[s._v("GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的"),t("code",[s._v(".github/workflows")]),s._v("目录。")]),s._v(" "),t("p",[s._v("workflow 文件采用 "),t("a",{attrs:{href:"https://xugaoyi.com/pages/4e8444e2d534d14f/",target:"_blank",rel:"noopener noreferrer"}},[s._v("YAML 格式"),t("OutboundLink")],1),s._v("，文件名可以任意取，但是后缀名统一为"),t("code",[s._v(".yml")]),s._v("，比如"),t("code",[s._v("ci.yml")]),s._v("。一个库可以有多个 workflow 文件。GitHub 只要发现"),t("code",[s._v(".github/workflows")]),s._v("目录里面有"),t("code",[s._v(".yml")]),s._v("文件，就会自动运行该文件。")]),s._v(" "),t("p",[s._v("我的"),t("code",[s._v("ci.yml")]),s._v("文件：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CI\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在master分支发生push事件时触发。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作流")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行在虚拟机环境ubuntu-latest")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("strategy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matrix")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("10.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Use Node.js $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" matrix.node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("version "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤2")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作用：安装nodejs")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" matrix.node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("version "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" run deploy.sh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤3 （同时部署到github和coding）")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITHUB_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# toKen私密变量")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("CODING_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.CODING_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 腾讯云开发者平台（coding）私密token")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" npm run deploy "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行的命令  ")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# package.json 中添加 "deploy": "bash deploy.sh"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("这个配置文件会在我push提交代码到主分支时触发工作，运行环境是"),t("code",[s._v("ubuntu-latest")]),s._v("，工作步骤：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("一，获取仓库源码")])]),s._v(" "),t("li",[t("p",[s._v("二，安装nodejs，打包项目有用到nodejs")])]),s._v(" "),t("li",[t("p",[s._v("三，把token设置到环境变量，安装项目依赖，并运行"),t("code",[s._v("deploy.sh")]),s._v("文件，")])])]),s._v(" "),t("blockquote",[t("p",[s._v("ACCESS_TOKE 和 CODING_TOKEN 都是保存在github仓库的"),t("code",[s._v("Settings/Secrets")]),s._v("位置的私密变量，仓库代码中可以通过<secrets.变量名>来获取，保证了token的私密性。")])]),s._v(" "),t("p",[s._v("再来看看将要被运行的"),t("code",[s._v("deploy.sh")]),s._v("部署代码：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy to github")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'blog.xugaoyi.com'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GITHUB_TOKEN")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("githubUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git@github.com:xugaoyi/blog.git\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'来自github action的自动部署'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("githubUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://xugaoyi:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_TOKEN}")]),s._v("@github.com/xugaoyi/blog.git\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xugaoyi"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"894072666@qq.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${msg}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$githubUrl")]),s._v(" master:gh-pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到github")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy to coding")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.xugaoyi.com\\nxugaoyi.com'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义域名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CODING_TOKEN")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("codingUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git@git.dev.tencent.com:xugaoyi/xugaoyi.git\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("codingUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://xugaoyi:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CODING_TOKEN}")]),s._v("@git.dev.tencent.com/xugaoyi/xugaoyi.git\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${msg}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$codingUrl")]),s._v(" master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到coding")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" docs/.vuepress/dist\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("这个文件使用"),t("a",{attrs:{href:"https://ipcmen.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Shell命令"),t("OutboundLink")],1),s._v("写的，它会先运行打包命令，进入打包好的文件，创建一个自定义域名的CNAME文件（如果你没有自定义域名可去掉这个命令），判断是否有token环境变量，如果没有说明是在本地自己的电脑上运行的部署，使用ssh代码仓库地址，如果有token环境变量，说明是GitHub Actions自动触发的部署，此时使用的是可以通过toKen来获取代码提交权限的提交地址。最后通过git命令提交到各自的仓库，完成部署。")]),s._v(" "),t("blockquote",[t("p",[s._v("提示：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Shell 可以获取到环境变量。")])]),s._v(" "),t("li",[t("p",[s._v("我想给两个平台上部署的博客不一样的自定义域名，因此做了分开创建CNAME文件，分开提交。")])])])]),s._v(" "),t("p",[s._v("至此，我前面提到的需求就实现啦，只需要把源码push到github仓库这一个步骤，后面的博客打包、部署到github和coding等工作都由GitHub Actions来自动完成。")]),s._v(" "),t("p",[s._v("如下你想查看部署日志，你可以到github仓库的Actions这一项查看。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103124813.png",alt:"部署日志",title:"部署日志"}})]),s._v(" "),t("h2",{attrs:{id:"相关文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[s._v("#")]),s._v(" 相关文章")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://xugaoyi.com/pages/f44d2f9ad04ab8d3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《GitHub Actions 定时运行代码：每天定时百度链接推送》"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);