---
title : Ma LA 1
date : 2020-07-06
description : 出典自 Steven J.Leon 著 Linear Algebra with Applications (Ninth Edition) Page.16
math: true
categories: ["LA-Questions"]
tags: ["線性代數"]
---
## 題目

用高斯-若爾當消元法解方程組 :

$$
\begin{alignedat}{4}
-&x_1 +&x_2  -&&x_3 +&3&x_4 = 0 \\\ 
3&x_1 +&x_2  -&&x_3 -&&x_4 = 0 \\\ 
2&x_1 -&x_2 -&2&x_3 -&&x_4 = 0 
\end{alignedat}
$$

## 解

構造方程組的**增廣矩陣 (augmented matrix)** 如下

$$
\begin{bmatrix} 
\begin{array}{rrrr|r} 
-1 & 1 & -1 & 3 & 0 \\\ 
3 & 1 & -1 & -1 & 0 \\\ 
2 & -1 & -2 & -1 & 0 
\end{array} 
\end{bmatrix}
$$

使用**初等行運算 III**, 以首行 
$
(\begin{array}{rrrr|r} 
-1 & 1 & -1 & 3 & 0
\end{array})
$
爲**主行 (pivotal row)** , 主行分別乘以 3 和 2 後分別加在第 2 和第 3
行上，以置 0 第二和第三行的首非 0 元.

$$
\begin{bmatrix} 
\begin{array}{rrrr|r} 
-1 & 1 & -1 & 3 & 0 \\\ 
0 & 4 & -4 & 8 & 0 \\\ 
0 & 1 & -4 & 5 & 0 
\end{array} 
\end{bmatrix}
$$

再以次行作爲主行，以相同的方法置 0 第 3 行的首非 0 元.

$$
\begin{bmatrix} 
\begin{array}{rrrr|r} 
-1 & 1 & -1 & 3 & 0 \\\ 
0 & 4 & -4 & 8 & 0 \\\ 
0 & 0 & -3 & 3 & 0 
\end{array} 
\end{bmatrix}
$$

使用**初等行運算 II**, 零各行首變量歸一, 得到**行階梯形**:

$$
\begin{bmatrix} 
\begin{array}{rrrr|r} 
1 & -1 & 1 & -3 & 0 \\\ 
0 & 1 & -1 & 2 & 0 \\\ 
0 & 0 & 1 & -1 & 0 
\end{array} 
\end{bmatrix}
$$

第 3 行乘 1 加至第 2 行, 得

$$
\begin{bmatrix} 
\begin{array}{rrrr|r}
1 & -1 & 1 & -3 & 0 \\\ 
0 & 1 & 0 & 1 & 0 \\\ 
0 & 0 & 1 & -1 & 0
\end{array} 
\end{bmatrix}
$$

第 3 行乘 -1 加至第 1 行, 並第二行乘 1 加至第一行得行最簡形如下:

$$
\begin{bmatrix}
\begin{array}{rrrr|r}
1 & 0 & 0 & -1 & 0 \\\ 
0 & 1 & 0 & 1 & 0 \\\ 
0 & 0 & 1 & -1 & 0
\end{array}
\end{bmatrix}
$$

顯然的, $x_4$ 爲**自由變量 (free variable)**，方程組的解集爲

$$
\begin{array}{rrr} 
x_1 &= &x_4 \\\ 
x_2 &= &-x_4 \\\ 
x_3 &= &x_4 
\end{array}
$$

不妨設 $x_4=r$ ,則有任意滿足 $\boldsymbol x = (x_1,x_2,x_3,x_4) = (r, -r ,r ,r)$
形式的 4 元組均是方程組的解. 如 $(1,-1,1,1)$ 就是方程組的一個解.

## 關聯內容

> **初等行運算**
> 
> &nbsp; Ⅰ. 交換兩行 \
> &nbsp; Ⅱ. 以非零實數乘以某行 \
> &nbsp; Ⅲ. 將某行替換爲它與其他行倍數的和

{{< definition >}}
利用行運算 I、II 和 III 將線性方程組的增廣矩陣化爲行階梯形的過程稱爲**高斯消元法**(Gauss elimination).
{{< /definition >}}

{{< definition >}}
利用基本行運算將矩陣化爲行最簡形的過程稱爲**高斯-若爾當消元法**(Gauss-Jordan elimination).
{{< /definition >}}

{{< definition >}}
若一個矩陣滿足
{{< /definition >}}

1. 每一非零行中的首非零元爲 1.
2. 第 $k$ 行的元不全爲 0 時，第 $k+1$ 行首非零元前零的數量多於第 $k$ 行首非零元前零的數量.
3. 所有元素均爲零的行必在不全爲零的行之後.

則稱其爲**行階梯形矩陣**(row echelon form).

{{< definition >}}
若一個矩陣滿足
{{< /definition >}}

1. 矩陣是行階梯形的.
2. 每行的首非零元是該列唯一的非零元.

則稱該矩陣爲**行最簡形**(reduced row echelon form).

也請參見：[小學之上，線代之下]({{< ref "consistency-of-linear-systeme" >}})
