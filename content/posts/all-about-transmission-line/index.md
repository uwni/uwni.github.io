---
title: "傳輸線模型（未完稿）"
date: 2021-07-03T20:54:56+08:00
draft: false
image: cover.jpg
icon: true
math: true
keywords: ["傳輸線", "電報方程式", "電報員方程式", "分佈參數"]
categories: ["circuit-analysis"]
tags: ["電路"]
---
$$\gdef\dif{\mathop{}\\!\mathrm{d}}$$

## 序

傳輸線模型是最簡單的分佈參數電路. 雖說如此, 但因不是強電相關專業, 學電路時老師並沒有講到這裏. 所以也就只能自學. 因此鳴鈴想撰文釐清一下學習思路、總結一下學習成果.

在本節內容之前學到的電路, 無論是探究穩態的正弦交流或直流, 抑或者探究暫態過程的各種響應.
其電路的模型都是集總參數電路. 集總參數電路是由集總元件連接成的電路, 其中的詳細定義鳴鈴也不怎麼會背, 引用
一下[{{< fa "fab" "wikipedia-w">}}集總電路](https://zh.wikipedia.org/wiki/%E9%9B%86%E7%B8%BD%E9%9B%BB%E8%B7%AF)中的內容：

> 集總元件是指元件大小遠小於電路工作頻率相對之電磁波波長時, 對所有元件之統稱. 對於信號而言, 不論任何時刻, 元件特性始終保持固定, 與頻率無關. 相反地, 若元件大小與電路工作頻率相對之波長差不多或更大的時候, 則當信號通過元件之時, 元件本身各點之特性將因信號之變化而有所不同, 則此時不能將元件整體視為一特性固定之單一體, 而應稱為分布元件 （Distributed element）, 例如微波電路就是其中一個例子. 在此種電路中傳統之導線很可能會成為具有電感及電容串並聯特性之複雜組合.

總的來說, 不论集總还是分布, 都是在某些條件下, 電路元件的一種抽象化模型.
和質點、點電荷等概念類似, 集總參數是和空間分佈無關的.
而分佈參數就類似於密度的定義, 其分布是和空間相關的. 不如說在傳輸線的場景中, 分佈參數本身就是密度.

## 建模

Heaviside 所提出的傳輸綫是這樣一種模型, 對於平行直導線或同軸綫間, 不可避免存在不完全絕緣的電介質. 因此而產生綫間的漏電流. 對於導線間, 我們可以認爲綫間存在寄生的電容和電導連續分佈. 而沿着線上, 必然存在壓降且電流會在週遭形成磁場, 因此可以認爲導線上存在電阻和電感連續分佈.

對於空間中某個變量連續分佈的模型. 其實我們有現成的模型來解決, 那就是密度（廣義上的）. 如果我們沿着這個思想, 就可以構建沿着綫均勻分佈着無窮多無窮小的集總參數二端口網絡的模型. 如下圖所示

{{< tikz "distributed" "70%">}}
傳輸線模型
{{< /tikz >}}

如同大多數「密度」的定義, 我們需要求的是傳輸線的參數分佈服從怎樣的規律. 而這些規律又能得出怎樣的結論.
不難看出, 對於傳輸線而言, 其參數應當是一種綫密度, 即其分佈的空間爲 $\R$. 對於鳴鈴這種數學弱弱的人來說其實是很方便的.

## 列方程

因爲要考慮時變信號, 在 $t$ 時, 取傳輸線上 $x$ 處的某點處的傳輸線元素（鳴鈴仿照「線元」的說法稱之爲「傳輸線元」）. 稱上方的綫叫「來綫」下方的線叫「回線」. 左端來綫電流爲 $i(x, t)$, 線電壓爲 $u(x, t)$. 線電阻爲 $R$, 電感爲 $L$, 寄生電容爲 $C$, 電導爲 $G$，線元的長度爲 $\Delta x$. 則右端的綫電流爲 $i(x+\Delta x, t)$, 綫電壓爲 $u(x+\Delta x, t)$.

{{< tikz "dis-element" "55%">}}
傳輸線元
{{< /tikz >}}

~~宣告~~了這麼一堆變量，是要幹什麼呢？電路建模當然要列一下 KVL 和 KCL 啦:
$$
i(x, t) = i(x+\Delta x, t)  + Gu(x+\Delta x, t) + C\frac{\partial u}{\partial t} (x+\Delta x, t)
$$
$$
u(x, t) = u(x+\Delta x,t) + Ri(x, t) + L\frac{\partial i}{\partial t}(x, t)
$$
然後, 稍作變形, 成如下形式
$$
\frac{i(x+\Delta x, t) - i(x, t)}{\Delta x} = -\frac{G}{\Delta x}u(x+\Delta x, t) - \frac{C}{\Delta x}\frac{\partial u}{\partial t}(x+\Delta x, t) \tag{1}
$$
$$
\frac{u(x+\Delta x, t) - u(x, t)}{\Delta x} = -\frac{R}{\Delta x}i(x,t) - \frac{L}{\Delta x}\frac{\partial i}{\partial t}(x,t) \tag{2}
$$
看着這個形式，總感覺想到了什麼。是什麼呢？ 我們對 (1), (2) 式兩邊同時取極限: $\Delta x \to 0$. 首先, 對等號左邊:
$$
\lim_{\Delta x \to 0} \frac{i(x+\Delta x, t) - i(x, t)}{\Delta x} = \frac{\partial i}{\partial x} \tag{3}
$$
$$
\lim_{\Delta x \to 0} \frac{u(x+\Delta x, t) - u(x, t)}{\Delta x} = \frac{\partial u}{\partial x} \tag{4}
$$
其次，等號右邊，類比密度的定義 $\displaystyle\lim_{\Delta V \to 0} \frac{m}{\Delta V} = \rho$, 定義[^1]:
$$
\lim_{\Delta x \to 0} \frac{R}{\Delta x} \coloneqq \lambda_R \tag{5}
$$
$$
\lim_{\Delta x \to 0} \frac{L}{\Delta x} \coloneqq \lambda_L \tag{6}
$$
$$
\lim_{\Delta x \to 0} \frac{G}{\Delta x} \coloneqq \lambda_G \tag{7}
$$
$$
\lim_{\Delta x \to 0} \frac{C}{\Delta x} \coloneqq \lambda_C \tag{8}
$$

另外，設 $u$ 和 $\displaystyle\frac{\partial u}{\partial t}$在 $x$ 上連續[^2]則:
$$
\lim_{\Delta x \to 0} u(x+\Delta x, t) = u(x,t) \tag{9}
$$
$$
\lim_{\Delta x \to 0} \frac{\partial u}{\partial t}(x+\Delta x, t) = \frac{\partial u}{\partial t}(x, t) \tag{10}
$$

根據極限運算規則，將 (3) ~ (10) 代入 (1) 和 (2) 式中, 得到
$$
\begin{cases}
    \begin{aligned}
        &\frac{\partial i}{\partial x} = -\lambda_G u - \lambda_C \frac{\partial u}{\partial t} \cr
        &\frac{\partial u}{\partial x} = -\lambda_R i - \lambda_L \frac{\partial i}{\partial t}
    \end{aligned}
\end{cases}
$$
這便是電報方程[^3] (省略自變量).
[^3]: 《電路》: ISBN 978-7-04-019671-9 中稱其爲「均勻傳輸線方程」，但是不一定本文中只有 $\lambda$ 與 $x$ 無關，才可稱爲「均勻」. 若 $\lambda_R$ 和 $\lambda_G$ 爲 $0$ 則稱爲無損耗傳輸線.

## 解

下面來討論幾種邊界條件（主要是輸入電壓/電流）下的情況，從簡單到複雜來看:

### 直流

直流時，設 $i(x,t) = I(x)$ ,$u(x,t) = U(x)$, 從而 $\displaystyle\frac{\partial u}{\partial t} = 0$, $\displaystyle\frac{\partial i}{\partial t} = 0$. 代入電報方程得
$$
\begin{cases}
    \begin{aligned}
        &\frac{\dif I}{\dif x} = -\lambda_G U \cr
        &\frac{\dif U}{\dif x} = -\lambda_R I
    \end{aligned}
\end{cases}
$$
~~誒... 微分方程怎麼解來着？~~ 對於這個方程組可以互相消元成爲兩個獨立的微分方程:
$$
\begin{cases}
    \begin{aligned}
        &\frac{\dif^2 I}{\dif x^2} = \lambda_G\lambda_R I \cr
        &\frac{\dif^2 U}{\dif x^2} = \lambda_G\lambda_R U
    \end{aligned}
\end{cases}
$$

### 正弦穩態

這裏給出正弦穩態信號的解的過程. d

### 暫態響應

[^1]: 分別爲電阻、電感、電導、電容的線密度.
[^2]: 古典物理學中有一句格言：「自然界中，一切都是連續的。」
