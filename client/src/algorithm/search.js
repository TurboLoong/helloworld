/**
 * author: TurboLoong
 * date: 2016/11/6
 * descriptioin:
 */
/**
 *@author: TurboLoong
 *@date: 2017/2/1
 *@des: 最短路径-Dijkstra；每次找到离源点最近的一个顶点，然后以该顶点为中心进行扩展，最终得到源点到其余所有点的最短路径。
 */
function Dijkstra() {
    var min,
        u, // 未知最短路径的最小值下标
        n, // 顶点个数
        inf, // 无穷大
        dis = [], // 路径列表
        book = [], // 访问标记
        e = [n][n]; // 顶点间距离的二维矩阵表示
    for (var i = 0; i < n - 1; i++) {
        min = inf;
        // 找到离1号顶点最近的顶点
        for (var j = 0; j < n; j++) {
            if (book[j] === 0 && dis[j] < min) {
                min = dis[j];
                u = j;
            }
        }
        book[u] = 1;
        for (var v = 0; v < n; v++) {
            if (e[u][v] < inf && dis[v] > dis[u] + e[u][v]) {
                dis[v] = dis[u] + e[u][v];
            }
        }
    }
}

/**
 *@author: TurboLoong
 *@date: 2017/2/1
 *@des: 最短路径——Bellman-Ford--解决负权边
 */
function BellmanFord() {
    var n, // 顶点个数
        m, // 边的条数
        dis = [], // 1号顶点到其余各个顶点的初始路程
        bak = [],
        check,
        v = [],
        u = [],
        w = []; // 从顶点v₁到顶点u₁的边的权值为w₁
    for (var k = 0; k < n - 1; k++) { // 进行n-1轮松弛
        for (var i = 0; i < n; i++) {
            bak[i] = dis[i];   // 将dis数组备份至bak数组中，用于后面检测dis数组是否发生变化
        }
        for (var i = 0; i < m; i++) { // 枚举每条边，进行一轮松弛
            if (dis[v[i]] > dis[u[i]] + w[i]) // 尝试对每一条边进行松弛
            { dis[v[i]] = dis[u[i]] + w[i]; }
        }
        // 松弛完毕后检测dis数组是否有更新
        check = 0;
        for (var i = 0; i < n; i++) {
            if (bak[i] != dis[i]) {
                check = 1;
                break;
            }
        }
        if (check == 0) {
            break; // 如果dis没有更新，提前退出循环
        }
    }
}

/**
 *@author: TurboLoong
 *@date: 2017/2/1
 *@des: 最短路径——Bellman-Ford的队列优化，每次仅对最短路估计值发生变化了的顶点的所有出边执行松弛操作
 */

/**
 *@author: TurboLoong
 *@date: 2017/2/1
 *@des: 并查集
 */
var f = []; // f初始化为下标等于值得数组；
// 合并两子集合的函数；在“认爹”的过程中，要遵守“靠左”原则和“擒贼先擒王”原则
function merge(u, v) {
    var t1, t2;
    t1 = getF(u);
    t2 = getF(v);
    if (t1 != t2) { // 判断两个节点是否在同一个集合中，即是否为同一个祖先
        f[t2] = t1; // “靠左”原则，左边变成右边的boss，即把右边的集合，作为左边集合的子集合，经过路径压缩后，将f[u]的根的值也赋值为v的祖先f[t1]
    }
    function getF(v) {
        if (f[v] == v) {
            return v;
        }
        f[v] = getF(f[v]);
        return f[v];

    }
}

// 建立堆排序,最小堆
function create() {
    var h = [];
    var i;
    // 从最后一个非叶结点的顶点为单位到第一个结点依次进行向上调整
    for (i = n / 2; i > 0; i--) {
        siftdown(i);
    }
    // 向下调整函数
    function siftdown(i) { // 传入一个需要向下调整的结点编号i
        var t, flag = 0; // flag用来标记是否需要继续向下调整
        while (i * 2 <= n && flag == 0) { // 当i结点有儿子
            if (h[i] > h[i * 2]) { // 比左儿子大
                t = i * 2;
            } else {
                t = i;
            }
            if (i * 2 + 1 <= n) { // 比较右儿子
                if (h[t] > h[i * 2 + 1]) { // 比右儿子大
                    t = i * 2 + 1;
                }
            }
            if (t != i) {
                swap(t, i);
                i = t;
            } else {
                flag = 1;
            }
        }
    }
    function swap(x, y) {
        var t;
        t = h[x];
        h[x] = h[y];
        h[y] = t;
    }
}
