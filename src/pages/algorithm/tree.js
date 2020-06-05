/**
 * author: Administrator
 * date: 2018/5/2
 * descriptioin:
 */
//树
//二叉搜索树
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor() {
        this.root = null;
    }

    preOrderTraverse = (node, callback) => {
        if (node !== null) {
            callback(node.key);
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
        }
    }
}

function BinarySearchTree() {
    var root = null;
    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) { //如果新节点的键小于当前节点的键，需要检查左侧节点
            if (node.left === null) { //如果没有左侧节点，就插入新节点
                node.left = newNode;
            } else {
                insertNode(node.left, newNode); //如果有，递归继续找到下一层
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }
    this.insert = function(key) {
        var newNode = new Node(key); //(1)创建Node类实例
        if (root === null) { //（2）如果是根节点
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
    //中序遍历,从小到大排序
    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    }

    //先序遍历，打印一个结构化的文档
    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }

    //后序遍历，计算一个目录和它的子目录中所有文件所占空间的大小
    var postOrderTraverseNode = function(node, callback) {
        if (node.key !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    var minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    this.minNode = function() {
        return minNode(root);
    }

    var maxNode = function(node) {
        if (node) {
            while (node && node.right) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    this.maxNode = function() {
        return maxNode(root);
    }

    var searchNode = function(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            searchNode(node.left, key);
        } else if (key > node.key) {
            searchNode(node.right, key);
        } else {
            return true;
        }
    }

    this.search = function(key) {
        return searchNode(root, key);
    }
    var removeNode = function(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) { //向左边找
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) { //向右边找
            node.right = removeNode(node.right, key);
        } else { //找到删除的节点
            if (node.left === null && node.right === null) { // 第一种情况——如果是一个叶子节点
                node == null;
                return node;
            }
            if (node.left === null) { //第二种情况——如果只有一个子节点的节点
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //第三种情况——一个有两个子节点的节点
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
            function findMinNode(node) {
                if (node) {
                    while (node && node.left !== null) {
                        node = node.left;
                    }
                    return node;
                }
                return null;
            }
        }
    }
    this.removeNode = function(key) {
        root = removeNode(root, key);
    }
}

// 优先队列
class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
class MaxPQ {
    constructor() {
        this.N = 0;
        this.nodes = [];
    }

    insert = (ele) => {
        this.nodes[++this.N] = ele;
        this.swim(this.N);
    }
    delMax = () => {
        let max = this.nodes[1];
        this.exch(1, this.N--);
        this.nodes[this.N + 1] = null;
        this.sink(1);
        return max;
    }

    exch = (i, j) => {
        let t = this.nodes[i];
        this.nodes[i] = this.nodes[j];
        this.nodes[j] = t;
    }
    less = (i, j) => {
        return this.nodes[i].priority < this.nodes[j].priority;
    }
    swim = (k) => {
        while (k > 1 && this.less(k/2, k)) {
            this.exch(k/2, k);
            k = k/2;
        }
    }
    sink = (k) => {
        while ( 2 * k <= this.N) {
            let j = 2 * k;
            if(j < this.N && this.less(j, j +1)) j++;
            if(!this.less(k, j)) break;
            this.exch(k, j);
            k = j
        }
    }
}

// 堆
