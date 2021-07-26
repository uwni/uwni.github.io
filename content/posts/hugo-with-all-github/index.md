---
title: "Hugo ❤ Github"
date: 2021-06-26T18:50:11+08:00
draft: false
math: true
image: github.jpg
categories: ["log"]
tags: ["blog", "hugo"]
icon: true
---

## 序

鳴鈴曾經建過的 blog 也不少，用過 [WordPress](https://www.wordpress.com), [Typecho](https://typecho.org) 等基於 {{< fa "fab" "php" >}}PHP 的 blog 軟體，最近也用過 [Hexo](https://hexo.io) 這種靜態頁面的 blog 軟體，最終因爲一些鳴鈴不願意透露的原因選擇了當前的 [Hugo](https://gohugo.io/). 
爲了省錢，敝站完全使用 {{< ti "brand-github" >}}Github 來構建，因此對於落魄的鳴鈴來講十分合適 (

如果你想將本文作爲教程使用，至少需要以下知識儲備：

- git 和 Github
- Hugo
- 靜態網頁開發

## Blog 程式

Hugo 類似於 $\LaTeX$ 將 `.tex` 檔案編譯爲 `.dvi` 或者 `.pdf`，其可以將十分利於人類讀寫的 {{< ti "markdown" >}}Markdown 檔案編譯爲 blog 所需的靜態網頁.

具體的使用方法可見於[此](https://gohugo.io/documentation/)

## 部署

在編輯完成 Blog 後，使用 `hugo server` 以編譯，hugo 會將網站輸出在 `\public` 目錄下。如果你有虛擬主機或者雲伺服器的話，便可以使用 Nginx 或者 Apache 之類的網頁伺服器來部署你的網頁了。

但鳴鈴使用 [Github Pages](https://pages.github.com/) 來承載網站，並使用 [Github Actions](https://github.com/features/actions) 來實現自動化部署到 Github Pages 上.

首先我們需要兩個 repositories, 一個用來放 Hugo 的 blog 源碼，另一個用來放編譯生成的網站(用作 Github Pages). 

### Github Pages

GitHub Pages 允許用家使用 Github Repository 託管自己的靜態網站。下面是使用步驟：

1. 建立名爲 `[Github ID].github.io` 的 repository ，其中 [Github ID] 替換爲你的 Github ID，以鳴鈴的博客舉例就是 `narisuzu.github.io`.
2. 將靜態網站 Push 至上述 repository 中
3. 在瀏覽器中欣賞你的網站~

那麼我們只需要在電腦上編譯好 Blog, 把 `\public` Push 至 `[Github ID].github.io` 就可以了. 或者乾脆不需要兩個 repo，只保留 `[Github ID].github.io`，將
源碼和 `\public` 原封不動的 Push 上去也大功告成。但鳴鈴沒有這樣做，因爲我們可以自動化地執行某些步驟...

### Github Actions

Github Actions 是 Github 推出的 [Continous Integration (CI)](https://zh.wikipedia.org/wiki/%E6%8C%81%E7%BA%8C%E6%95%B4%E5%90%88) 功能。
在此之前，鳴鈴使用過的 CI 產品有 {{< ti "brand-gitlab" >}}Gitlab + Gitlab CI 和 {{< ti "brand-bitbucket" >}}Bitbucket + Circle CI, 不過在這裏我們要使用 Github Actions. 

我們需要讓 Github Actions 來完成的工作是，在存有源碼的 repo 更新時自動編譯，並將編譯結果部署於 Github Pages，
我們可以使用 [hugo-setup](https://github.com/marketplace/actions/hugo-setup) 這個 Action 來實現我們自動化的需求. 

#### 配置文件

在源碼的根目錄新建 `.github/workflows/main.yml`
```yml
name: github pages # CI 的名稱

on:                # 指定在何時觸發
  push:
    branches:
      - master     # 選定觸發 CI 的 branch
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@master
        with:
          submodules: true  # Fetch Hugo 主題（如果你使用了子模塊來引入主題的話）
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo    # 安裝 Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          # extended: true

      - uses: actions/cache@v2
        with:
          path: /tmp/hugo_cache
          key: ${{ runner.os }}-hugomod-${{ hashFiles('**/go.sum') }}
          restore-keys: |
            ${{ runner.os }}-hugomod-

      - name: Build         # 編譯 Hugo 內容
        run: hugo --minify

      - name: Deploy        # 部署
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          external_repository: narisuzu/narisuzu.github.io # 部署至何 repo
          publish_branch: main  # 部署至何 branch
          publish_dir: ./public
          cname: blog.ling.moe # 客製化域名的 CNAME 記錄
```

在這裏，因爲我們將 Github Pages 和源碼分置於不同的 repo ，因此用到了 `external_repository: ` 以指定將編譯結果輸出至應用 Github Pages 的 repo。
但這會帶來一個問題：我們不能使用推薦的 `github_token` 了, 只能使用 `deploy_key` 或 `personal_token` 作爲存取令牌. 
這裏使用 `deploy_key` （P.s. 存取令牌的作用是讓運行 Github Action 的虛擬機有權限部署網站至 Github Pages 的 repo 中）

#### Deploy Key
使用以下代碼生成 RSA 公鑰和私鑰
```sh
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```
你將得到兩個文件 `gh-pages.pub` (公鑰) 和 `gh-pages` (私鑰). 而後

- 進入 Github Pages 所在 repo 的 Repository Settings，
將**公鑰**的內容添加至 Deploy Keys （記得要點選 "Allow write access" 以獲取寫入權限）
- 進入源碼的 repo  的 Repository Settings 中，
在 Secrets 中添加變量 `ACTIONS_DEPLOY_KEY`，其值爲**私鑰**. 

設定完成後，主體功能就配置完成了，這時將源碼 Push 後，如果沒有錯誤的話就能在 [Github ID].github.io 中看到你的博客了. 
パチパチパチなのです！

## 留言

敝站的留言功能由 [utterances 🔮](https://utteranc.es/) 提供，當然也是完全基於 Github 的。因此 utterances 只支持 Github 的登錄用戶留言，如果不能忍受這一點可以選擇其他產品如 disqus 等。

其利用了 Github 的 issues 作爲資料存儲，因此需要一個 public Github repository 以存放留言的 issues，爲了方便管理留言以免真正的 issue 和留言混在一起，鳴鈴推薦你新建一個專用的 repository 給 utterances 使用。blog 中每一個可以留言的頁面都將映射成一個 issue，而留言內容就存儲在對應 issue 的對話串中。因此你可以指定頁面的索引格式，用來設定 blog 的貼文以何種方式映射至 Github issues.

要想安裝 utterances ，首先你需要爲 repository 安裝 [utterances 插件](https://github.com/apps/utterances)，這個插件的作用是將用戶的留言儲存至相關頁面的 issue 中。

然後你需要在 blog 端配置 utterances 的客戶端，如果你的主題原生的支援 utterances ，你只需要按照主題作者提供的配置格式來配置即可。如若不然，你需要手動爲 hugo 添加 utterances 支援。

在 [utterances 官網](https://utteranc.es/)內你可以詳細配置你的客戶端 repository，條目索引，主題等設定項，而後在下方能獲得類似這樣的代碼片段: 
```html
<script src="https://utteranc.es/client.js"
        repo="[ENTER REPO HERE]"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

將這段代碼複製到 hugo 需要有留言區的頁面的 head 中即可，具體方法可以閱讀 hugo 的文檔或者參考有相關功能的主題。

## 優化

我們將網站和源碼分置了，這樣做的好處有以下幾點

1. 簡化項目結構，減小上傳的體積
2. 可以將源碼的 repo 設成私有（免費版 Github 不支持將 Github Pages repo 設爲私有）
3. 還沒有想到

那麼我們就不需要向源碼的repo中上傳任何編譯時生成的檔案了，因此新建 `.gitignore` 並寫入

```
/public/
/resources/_gen
```

以讓 git 忽略 `/public` 和 `/resources/_gen` 這兩個目錄.

## 擴展功能

鳴鈴使用了 hugo 提供的 [shortcode template](https://gohugo.io/templates/shortcode-templates/) 功能添加了一些 hugo 沒有提供，主題方亦沒有提供的功能。

### svg icon

在敝站中可以看到一些很可愛的行內小圖標，他們來自於 {{< ti "brand-tabler" >}}tabler icons 或 {{< fa "fab" "font-awesome-alt">}}fontawesome. 

要想在 hugo 中便捷地使用這些圖標，首先要在 head 中引入相關的 CSS：

```html
<!--引入 tabler icons-->
<link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css">

<!--引入 fontawesome-->
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
```

其後，在 `[hugo根目錄]/layouts/shortcodes` 下新建 `ti.html`，並寫入:
```html
{{ $iconid := (.Get 0) }}
<i class="ti ti-{{$iconid}}"></i>
```
就可以得到 tabler 圖標, 打開 [tabler官網](https://tabler-icons.io/)，查找你想要插入的圖標，而後複製圖標的名。

![tabler 圖標](tabler-selector.png)

在 `.md` 源碼中你想插入的位置處輸入 `{{</* ti "[圖標名]" */>}}` 即可插入。上圖的例子中你應該輸入 `{{</* ti "brand-tabler" */>}}`。

類似地，在 `[hugo根目錄]/layouts/shortcodes` 下新建 `fa.html`，寫入:

```html
{{ $fi := (.Get 0) }}
{{ $se := (.Get 1) }}
<i class="inline-icon {{$fi}} fa-{{$se}}"></i>
```

就可以得到 font awesome 圖標, 打開 [fontawesome 官網](https://fontawesome.com), 查找你想要插入的圖標，而後複製圖標的分類和名。
使用 `{{</* fa "[圖標分類]" "[圖標名]" */>}}` 來插入. 其中 `[圖標分類]` 指的是官網中 `fab` 或者 `fac` 之類的分類。

### 文本摺疊

對於長文本，摺疊的功能是必要的，鳴鈴使用了 HTML5 新增的 `<details></details>` 和 `<summary></summary>` 標籤以實現之.

{{< details "這裏可以展開哦" >}}
嘿嘿 (OwO
{{< /details >}}

在 `[hugo根目錄]/layouts/shortcodes` 下新建 `details.html`，寫入:
```html
{{ $summary := .Get 0 }}

<details>
    <summary>{{ $summary }}</summary>
    <p>{{ safeHTML .Inner | markdownify }}</p>
</details>
```
而後，在你想使用處貼入

```markdown
{{</* details "這裏可以展開哦" */>}}
嘿嘿 (OwO
{{</* /details */>}}
```

就能達到上面的效果啦~

### mermaid

[mermaid](https://mermaid-js.github.io) 可以爲你的 blog 添加一些圖。
在 `[hugo根目錄]/layouts/shortcodes` 下新建 `mermaid.html`，寫入:
```html
<div class="mermaid" align="{{ if .Get " align" }} {{ .Get "align" }} {{ else }} center {{ end }}">
    {{ safeHTML .Inner }}
</div>
```

而後可以通過下列代碼使用
```markdown
{{</* mermaid */>}}
//mermaid 源碼
{{</* /mermaid */>}}
```
## 問題記錄

### `draft: true` 帶來的問題

℞：草稿貼文是不會被編譯的，因此要注意使用站內引用 `{{</* ref */>}}` 時，不要引用草稿貼文。

P.s. 鳴鈴被此問題困擾了好久的說 ，`hugo server -D` 正常但 `hugo` 就報錯 (・–・;)ゞ

### webp 錯誤

℞：目前 Hugo 還不支援 webp 圖像，如果遇到 webp 的錯誤就換成 png/jpeg 吧. 

## 總結
哼哼，能夠完全基於免費的服務新建可靠，功能完備的 blog 還是滿有成就感的. 