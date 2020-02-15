---
layout: post
title: 【题解】杨辉三角的坍塌
date: 2019-05-11
Author: Teages 
tags: [Daily, Codes]
comments: true
toc: true
---
## 描述
~~~
总所周知，杨辉在公元10世纪提出了杨辉三角
那么如果杨辉三角坍塌了会是什么样的景象呢。。。
~~~


<!-- more -->

如图是一个杨辉三角
![一个杨辉三角](https://res.cloudinary.com/teages-blog/image/upload/v1557544646/Code-The-Collapse-of-Pascal%27s-Triangle/%E4%B8%80%E4%B8%AA%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92_wv7m8q.png)

像这样搭建好以后，一层层向下坍塌

最后能得到下面的结果
![一个坍塌的杨辉三角](https://res.cloudinary.com/teages-blog/image/upload/v1557544646/Code-The-Collapse-of-Pascal%27s-Triangle/%E4%B8%80%E4%B8%AA%E5%A1%8C%E4%BA%86%E7%9A%84%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92_jkbjim.png)

## 输入

两个数N T
T为杨辉三角的层数
N为杨辉三角最上面的数字
两个数以空格分割

## 输出

输出坍塌后各列的值

所有数值以空额分割

## 样例
#### 输入样例
~~~
12 1
~~~
#### 输出样例
~~~
1 1 12 11 65 54 209 155 441 286 637 351 637 286 441 155 209 54 65 11 12 1 1
~~~

## 提示
如果输入的是下面的(当N!=1的情况)</br>
输入为`5 N`</br>
则生成的杨辉三角如下</br>
![tip](https://res.cloudinary.com/teages-blog/image/upload/v1557545444/Code-The-Collapse-of-Pascal%27s-Triangle/%E6%8F%90%E7%A4%BA_nimb1n.png)

## 题解

>咕咕咕
