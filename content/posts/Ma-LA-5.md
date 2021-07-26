---
title: "Ma LA 5"
date: 2020-07-09T09:53:26+08:00
draft: false
description : 出典自 Steven J.Leon 著 Linear Algebra with Applications (Ninth Edition) Page.53
categories: ["LA-Questions"]
tags: ["線性代數"]
math: true
---
## 題目

令

$$
A = \begin{bmatrix}
0 & 1 & 0 & 0 \\\ 
0 & 0 & 1 & 0 \\\ 
0 & 0 & 0 & 1 \\\ 
0 & 0 & 0 & 0
\end{bmatrix}
$$

證明當 $n \geq 4$ 時 $A^n = O$ 

---

{{< proof >}}
$\forall n \geq 4$
$$
\begin{array}{rlll}
A^n = A^4 A^{n-4} 
    &= &\begin{bmatrix}
            0 & 1 & 0 & 0 \\\ 
            0 & 0 & 1 & 0 \\\ 
            0 & 0 & 0 & 1 \\\ 
            0 & 0 & 0 & 0
        \end{bmatrix} ^ 4 &A^{n-4}\\\ 
    &= &\begin{bmatrix}
            0 & 0 & 1 & 0 \\\ 
            0 & 0 & 0 & 1 \\\ 
            0 & 0 & 0 & 0 \\\ 
            0 & 0 & 0 & 0
        \end{bmatrix} ^ 2 &A^{n-4}\\\ 
    &= &\begin{bmatrix}
            0 & 0 & 0 & 0 \\\ 
            0 & 0 & 0 & 0 \\\ 
            0 & 0 & 0 & 0 \\\ 
            0 & 0 & 0 & 0
        \end{bmatrix} &A^{n-4} \\\ 
    &= &O
\end{array}
$$
{{< /proof >}}

---

## 關聯內容

{{< definition >}}
若 $A=(a_{ij})$ 爲一個 $m \times n$ 的矩陣，且 $B=(b_{ij})$ 爲一個 $n \times r$ 的矩陣，則乘積 $AB = C = (c_{ij})$ 爲一個 $m \times r$ 的矩陣，它的元素定義爲
$$ c_{ij} = \boldsymbol a_i \boldsymbol b_j = \sum_{k=1}^n a_{ik}b_{kj} $$
{{< /definition >}}


{{< theorem >}}
下述法則對任何標量 $\alpha$ 和 $\beta$ 及矩陣 $A, B$ 和 $C$ 都是成立的.
{{< /theorem >}}
1. $A + B = B + A$
2. $(A+B) + C = A + (B+C)$
3. $(AB)C = A(BC)$
4. $A(B+C) = AB + AC$
5. $(A+B)C =  AC + BC$
6. $(\alpha\beta)A = \alpha(\beta A)$
7. $\alpha(AB) = (\alpha A)B = A(\alpha B)$
8. $(\alpha + \beta)A = \alpha A + \beta A$
9. $\alpha (A + B) = \alpha A + \alpha B$


