---
title: "Ma LA 3"
date: 2020-07-08T15:59:18+08:00
draft: false
description : 出典自 Steven J.Leon 著 Linear Algebra with Applications (Ninth Edition) Page.42
categories: ["LA-Questions"]
tags: ["線性代數"]
math: true
---
## 題目

設 $A$ 是 $2 \times 2$ 的矩陣，其中 $a_{11} \neq 0$，設 $\alpha = a_{21}/a_{11}$. 證明 $A$ 可分解爲積的形式
$$
\begin{aligned}
\begin{bmatrix}
1 & 0 \\\ 
\alpha & 1
\end{bmatrix}
\begin{bmatrix}
a_{11} & a_{12} \\\ 
0 & b
\end{bmatrix}
\end{aligned}
$$
並求 $b$ .

---

{{< proof >}}
直接對 $A = \begin{bmatrix} a_{11} & a_{12} \\\ a_{21} & a_{22} \end{bmatrix}$ 因式分解十分困難，因此先計算

$$
\begin{aligned}
\begin{bmatrix}
1 & 0 \\\ 
\alpha & 1
\end{bmatrix}
\begin{bmatrix}
a_{11} & a_{12} \\\ 
0 & b
\end{bmatrix} =
\begin{bmatrix}
a_{11} & a_{12} \\\ 
a_{11}\alpha & a_{12}\alpha+b
\end{bmatrix} 
\end{aligned}
$$

若令 $a_{21} = a_{11}\alpha$ , $a_{22} = a_{12}\alpha+b$

則有

$$
\begin{aligned}
\begin{bmatrix}
1 & 0 \\\ 
\alpha & 1
\end{bmatrix}
\begin{bmatrix}
a_{11} & a_{12} \\\ 
0 & b
\end{bmatrix} =
\begin{bmatrix}
a_{11} & a_{12} \\\ 
a_{21} & a_{22}
\end{bmatrix} = A
\end{aligned}
$$

又因題設條件 $\alpha = a_{21}/a_{11}$， 所以 $A$ 可以分解爲題中給出的形式，同時可求出 $b = a_{22} - \dfrac{a_{12}a_{21}}{a_{11}}$ .
{{< /proof >}}
