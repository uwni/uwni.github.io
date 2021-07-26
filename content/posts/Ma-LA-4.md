---
title: "Ma LA 4"
date: 2020-07-08T16:47:15+08:00
draft: false
math: true
categories: ["LA-Questions"]
tags: ["線性代數"]
---

證明行等價矩陣的性質：

Ⅰ. $A$ 與 $B$ 是行等價的，則 $B$ 與 $A$ 是行等價的.  
Ⅱ. $A$ 與 $B$ 是行等價的，且 $B$ 與 $C$ 是行等價的， 則 $A$ 與 $C$ 是行等價的.

---
### 1. 
{{< proof >}}
因为 $A$ 與 $B$ 行等價，故
$$
B = E_kE_{k-1} \cdots E_1 A
$$
因此有
$$
\begin{aligned}
          (E_kE_{k-1} \cdots E_1)^{-1}&B =& (E_kE_{k-1} \cdots E_1)^{-1}E_kE_{k-1} \cdots E_1 &A \\\ 
E_{1}^{-1}E_{2}^{-1} \cdots E_{k}^{-1}&B =&                                                   &A \\\ 
                                      &B =&                             E_kE_{k-1} \cdots E_1 &A
\end{aligned}
$$

因此 $A = E_{1}^{-1}E_{2}^{-1} \cdots E_{k}^{-1}B$，而 $E^{-1}$ 是 $E$ 同類型的初等矩陣.
{{< /proof >}}

### 2. 
{{< proof >}}
$$B = E_kE_{k-1} \cdots E_1A \tag{1}$$
$$C = F_jF_{j-1} \cdots F_1B \tag{2}$$
$(1)$ 式代入 $(2)$ 式
$$C = F_jF_{j-1} \cdots F_1E_kE_{k-1} \cdots E_1A 
$$
$A$ 經歷有限 ($k+j$) 次行運算得到 $C$，$A$ 與 $C$ 等價.
{{< /proof >}}

---

# 關聯內容

{{< theorem >}}
若 $E$ 爲一初等矩陣，則 $E$ 是非奇異的，且 $E^{-1}$ 爲一與其同類型的初等矩陣
{{< /theorem >}}