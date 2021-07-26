---
title: "𝜀₀𝑬 不是 𝑫"
date: 2021-06-10T00:39:17+08:00
draft: false
math: true
image: cover.jpg
tags: ["電磁學"]
---
$$
\gdef\dif{\mathop{}\\!\mathrm{d}}
$$

## 破題

《新概念物理教程. 電磁學》第四章中寫道
> ...
> $$\oiint\boldsymbol{D}\cdot\dif\boldsymbol{S} = \sum q_0 \tag{1}$$
> 比較兩式，似乎應有 $\boldsymbol{D} = \varepsilon_0\boldsymbol{E}_0$ ,即 $\boldsymbol{D}$ 與極化電荷無關. 我們在例題 7 和 8 中確實看到這種情況. 是否可以認爲電位移矢量  $\boldsymbol{D}$ 就是 $\boldsymbol{E}_0$ 的 $\varepsilon_0$ 倍呢？否！  
> ...

書中還説：
> 高斯定理只反映矢量場的一個側面，單靠他不能把矢量場的分佈完全確定下來. 反應矢量場另一個側面的是環路定理。

並介此來説明上述的結論。提到「側面」一詞總是令鳴鈴有種攪渾水的感覺。雖然鳴鈴相信其結論的正確性，但畢竟是沒有證明這若同時滿足了兩個「側面」則矢量場可被唯一確定（簡單猜測和唯一性定理有關，高斯定理和環路定理的微分形式可以推出 Poisson 方程，而後可以證明邊界條件下勢函數的梯度是唯一的，則電場是唯一的）。

因此呢，鳴鈴在圖書館坐了半個小時，想出了一個等效的證明，而且更加直觀。
求證：
$$\boldsymbol{D} = \varepsilon_0\boldsymbol{E}_0 \tag{2}$$
不總是成立

## 解

我的證法不是直接證明(2)式，而是證明它的一個等價命題.  
由 $\boldsymbol{D}$ 的定義
$$
\boldsymbol{D} = \varepsilon_0\boldsymbol{E} + \boldsymbol{P}
$$
由 $\boldsymbol{E} = \boldsymbol{E}_0 + \boldsymbol{E}'$
$$
\boldsymbol{D} = \varepsilon_0\boldsymbol{E}_0 + \varepsilon_0\boldsymbol{E}' + \boldsymbol{P}
$$
則，預證 (2) 式，等價於求證
$$
\boldsymbol{P} = -\varepsilon_0\boldsymbol{E}' \tag{3}
$$
不總是成立.

退極化場 $\boldsymbol{E}'$ 由 $q'$ 激發, 考慮任意有向面元 $\dif\boldsymbol{S} = \hat{\boldsymbol{n}}\dif{S}$ , 設面元上帶有 $\dif{q'}$ 的極化電荷, 由 Gauss 定理可知 $\boldsymbol{E}'\cdot\hat{\boldsymbol{n}} = 0$ . 但是，對於 $\boldsymbol{P}$ 而言，其穩態方向等於 $\boldsymbol{E}$ 的方向, 而 $\boldsymbol{E} = \boldsymbol{E}_0 + \boldsymbol{E}'$. 因此, 唯有 $\boldsymbol{E}' \parallel \boldsymbol{E}_0$ 時 (即 $\boldsymbol{E}_0 \perp\hat{\boldsymbol{n}}$), $\boldsymbol{P} \parallel \boldsymbol{E}'$ 成立. 因此在其他情況下 (3) 式不成立, 則 (2) 式也不成立.

## 思考

本文只從方向上粗淺的說明, 那麼該如何理解這個結論呢. 這個結論說明了: **電介質的形狀是決定極化的重要因素**.
因爲形狀決定了界面的法向, 而退極化場總是朝法向的, 退極化場是由極化電荷激發的, 而極化電荷則是由極化強度矢量決定的. 
而極化的方向並沒有義務正交於界面, 因此電介質形狀的不同就會導致極化強度不同. 
從而導致極化電荷的分佈乃至最終電場的不同.