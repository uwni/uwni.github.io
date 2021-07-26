---
title : Ma LA 2
date : 2020-07-07
description : 出典自 Steven J.Leon 著 Linear Algebra with Applications (Ninth Edition) Page.16
categories: ["LA-Questions"]
tags: ["線性代數"]
math: true
---
## 題目

設 $A\boldsymbol x = \boldsymbol b$ 是增廣矩陣具有最簡形

$$
\begin{bmatrix}
 \begin{array}{rrrrr|r}
 1 & 2 & 0 & 3 & 1 & -2 \\\ 
 0 & 0 & 1 & 2 & 4 & 5 \\\ 
 0 & 0 & 0 & 0 & 0 & 0 \\\ 
 0 & 0 & 0 & 0 & 0 & 0
 \end{array}
\end{bmatrix}
$$

的線性方程組.

(a) 求出方程組的所有解.

(‌b) 如果 $\boldsymbol a_1 = \begin{bmatrix} 1\\\ 1\\\ 3\\\ 4 \end{bmatrix}$, $\boldsymbol a_3 = \begin{bmatrix}\begin{array}{r} 2\\\ -1\\\ 1\\\ 3 \end{array}\end{bmatrix}$, 確定 $\boldsymbol b$.

---

## 解

### (a)  
依最簡形構造方程組如下

$$
\begin{aligned}
    &\begin{cases}
        \begin{aligned}
            x_1 + 2x_2 &&     &+ 3x_4 + x_5 = 0 \\\ 
                       && x_3 &+ 2x_4 + x_5 = 0
        \end{aligned}
    \end{cases}
    \\\\\\\ 
    \Rightarrow \qquad
    &\begin{cases}
        \begin{alignedat}{5}
            x_1 &= -x_2 &-3&x_4&  &-&x_5& -2 \\\ 
            x_3 &=      &-2&x_4& &-4&x_5& +5
        \end{alignedat}
    \end{cases}
\end{aligned}
$$

不妨設自由變量 $x_2, x_4, x_5$ 分別爲 $r, s, t$ .
因此 $\boldsymbol x = \begin{bmatrix} -2r-3s-t-2\\\ r\\\ -2s-4t+5\\\ s\\\ t \end{bmatrix}$

### (b)

設該方程爲形如

$$
\boldsymbol a_1x_1 + 
\boldsymbol a_2x_2 + 
\boldsymbol a_3x_3 + 
\boldsymbol a_4x_4 + 
\boldsymbol a_5x_5 = \boldsymbol b \tag{1}
$$

(1) 式代入

$$
\boldsymbol a_1 = \begin{bmatrix} 1\\\ 1\\\ 3\\\ 4 \end{bmatrix} \quad
\boldsymbol a_3 = \begin{bmatrix}\begin{array}{r} 2\\\ -1\\\ 1\\\ 3 \end{array}\end{bmatrix}
$$

得

$$
\begin{bmatrix} 1\\\ 1\\\ 3\\\ 4 \end{bmatrix}x_1 + 
\boldsymbol a_2x_2 + 
\begin{bmatrix}\begin{array}{r} 2\\\ -1\\\ 1\\\ 3 \end{array}\end{bmatrix}x_3 + 
\boldsymbol a_4x_4 + 
\boldsymbol a_5x_5 = \boldsymbol b
\tag{2}
$$

觀察 (2) 式，可使用**特殊值法**解題，令自由變量 $r = s = t = 0$ , 可得到解集中的一組解:

$$
\boldsymbol x = \begin{bmatrix}\begin{array}{r} -2\\\ 0\\\ 5\\\ 0\\\ 0 \end{array}\end{bmatrix}
$$

將這個解代入 (2) 式，則 $x_2, x_4, x_5$ 三項都被消去，大大節省了運算量. 可得

$$
    \boldsymbol b = 
    -2\begin{bmatrix}\begin{array}{r}  1\\\  1\\\ 3\\\ 4 \end{array}\end{bmatrix} +
     5\begin{bmatrix}\begin{array}{r}  2\\\ -1\\\ 1\\\ 3 \end{array}\end{bmatrix} =
    \begin{bmatrix}\begin{array}{r}  -2\\\  -2\\\ -6\\\ -8 \end{array}\end{bmatrix} +
    \begin{bmatrix}\begin{array}{r}  10\\\  -5\\\  5\\\ 15 \end{array}\end{bmatrix} =
    \begin{bmatrix}\begin{array}{r}   8\\\  -7\\\  -1\\\ 7 \end{array}\end{bmatrix}
$$

## 關聯內容
如不採用**特殊值法**，可以直接將解集代入矩陣方程 (2) 中，自由變量 $r, s, t$ 最終都會被消去而得到相同的答案. 但如此一來，最後的步驟就是解一個自變量爲 $\boldsymbol a_2, \boldsymbol a_4, \boldsymbol a_5, \boldsymbol b$ 的 4 元 4 次線性方程組，顯然取特殊值 0 的方法在計算上簡單的多.
