/**
 * Created by admin on 2017/1/17.
 */
//queue
function Queue() {
  var items = [];
  this.enqueue = function (element) {
    items.push(element);
  }
  this.dequeue = function () {
    items.shift();
  }
  this.front = function () {
    return items[0]
  }
  this.isEmpty = function () {
    return items.length == 0;
  }
  this.clear = function () {
    items.length = 0;
  }
  this.size = function () {
    return items.length;
  }
}

//优先队列
function PriorityQueue() {
  var items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);
    if(this.isEmpty()){
      items.push(queueElement);
    }else{
      var added = false;
      for(var i = 0; i<items.length; i++){
        if(queueElement.priority<items[i].priority){
          items.splice(i, 0, queueElement); //插入
          added = true;
          break;
        }
      }
      if(!added){ //如果优先级最高
        items.push(queueElement);
      }
    }
  }
}

//环形队列
function hotPotato(nameList, num) {
  var queue = new Queue();
  for(var i = 0; i<nameList.length; i++){
    queue.enqueue(nameList[i]);
  }
  var eliminated = ''
  while (queue.size()>1){
    for(var i = 0; i < num; i++){
      queue.enqueue(queue.dequeue()); //队首出队后从队尾入队
    }
    eliminated = queue.dequeue(); //到达淘汰的位置
    console.log(eliminated + '已被淘汰');
  }
  return queue.dequeue();
}

//链表
function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }
  var length = 0;
  var head = null;
  this.append = function (element) {
    var node = new Node(element),
      current;
    if(head === null){
      head = node;
    }else{
      current = head.next;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function (posistion, element) {
    if(posistion>-1&&posistion<length){
      var current=head,previos, index=0;
      var node = new Node(element);
      if(posistion === 0){
        node.next = current;
        head = node;
      }else{
        while (index++<posistion){
          previos = current;
          current = current.next;
        }
        previos.next = node;
        node.next = current;
      }
      length++;
      return true
    }
    return false;
  }
  this.removeAt = function (posistion) {
    if(posistion>-1&&posistion<length){
      var current=head, prevois, index = 0;
      if(posistion === 0){
        head = current.next;
      }else{
        while (index++<posistion){
          prevois = current;
          current = current.next; //current为要移除的元素
        }
        prevois.next = current.next;
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  }
  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }
  this.indexOf = function (element) {
    var current = head, index = -1;
    while (current){
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  this.isEmpty = function () {
    return length === 0;
  }
  this.size = function () {
    return length;
  }
  this.getHead = function () {
    return head;
  }
  this.toString = function () {
    
  }
  
}

//双向链表

//集合{value:value}

//字典
function Dictionary() {
  var items = {};
  this.has = function (key) {
    return key in items;
  }
  this.set = function (key, value) {
    items[key] = value;
  }
  this.remove = function (key) {
    if(this.has[key]){
      delete items[key];
      return true;
    }
    return false;
  }
  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  }
  this.values = function() {
    var values = [];
    for (var k in items) { //{1}
      if (this.has(k)) {
        values.push(items[k]); //{2}
      }
    }
    return values;
  };
}
//散列表
var ValuePair = function (key, value) {
  this.key = key;
  this.value = value;
}
function HashTable() {
  var table = [];
  var loseloseHashCode = function (key) {
    var hash = 0;
    for(var i=0; i<key.length;i++){
      hash+=key.chartCodeAt(i);
      return hash%37;
    }
  }
  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if(table[position] == undefined){
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  }
}

//树
//二叉搜索树
function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;
  var insertNode = function (node, newNode) {
    if(newNode.key<node.key){ //如果新节点的键小于当前节点的键，需要检查左侧节点
      if(node.left === null){ //如果没有左侧节点，就插入新节点
        node.left = newNode;
      }else{
        insertNode(node.left, newNode); //如果有，递归继续找到下一层
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        insertNode(node.right, newNode);
      }
    }
  }
  this.insert = function (key) {
    var newNode = new Node(key); //(1)创建Node类实例
    if(root === null){ //（2）如果是根节点
      root = newNode;
    }else{
      insertNode(root, newNode);
    }
  }
  //中序遍历
  var inOrderTraverseNode = function (node, callback) {
    if(node !== null){
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  }

  //先序遍历
  var preOrderTraverseNode = function (node, callback) {
    if(node !== null){
      callback(node,key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  }

  //后序遍历
  var postOrderTraverseNode = function (node, callback) {
    if(node.key !== null){
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node, key);
    }
  }
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  }

  var minNode = function (node) {
      if(node){
          while(node&&node.left !== null){
              node = node.left;
          }
          return node.key;
      }
      return null;
  }
  this.minNode = function () {
    return minNode(root);
  }

  var maxNode = function (node) {
      if(node){
          while(node&&node.right){
              node = node.right;
          }
          return node.key;
      }
      return null;
  }
  this.maxNode = function () {
    return maxNode(root);
  }

  var searchNode = function (node, key) {
      if(node === null){
          return false;
      }
      if(key<node.key){
          searchNode(node.left, key);
      }else if(key > node.key){
          searchNode(node.right, key);
      }else{
          return true;
      }
  }

  this.search = function (key) {
    return searchNode(root, key);
  }
  var removeNode = function (node, key) {
    if(node === null){
      return null;
    }
    if(key < node.key){ //向左边找
      node.left = removeNode(node.left, key);
      return node;
    }else if(key > node.key){ //向右边找
      node.right = removeNode(node.right, key);
    }else{ //找到删除的节点
      if(node.left === null && node.right === null){ // 第一种情况——如果是一个叶子节点
        node == null;
        return node;
      }
      if(node.left === null){ //第二种情况——如果只有一个子节点的节点
        node = node.right;
        return node;
      }else if(node.right === null){
        node = node.left;
        return node;
      }
      //第三种情况——一个有两个子节点的节点
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
      function findMinNode(node) {
        if(node){
          while(node&&node.left !== null){
            node = node.left;
          }
          return node;
        }
        return null;
      }
    }
  }
  this.removeNode = function (key) {
    root = removeNode(root, key);
  }
}
//图的表示
//邻接矩阵，邻接表，关联矩阵
function Graph() {
  var vertices = [];
  var adjList = new Dictionary();
  var min = 100;
  var initializeColor = function () {
    var color = {};
    for(var i=0; i<vertices.length;i++){
      color[vertices[i]] = 'white';
    }
    return color;
}
  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  }
  //添加顶点之间的边（无向图）
  this.addOneWayEdge = function (v, w, dis) {
    var item = {};
    item[w] = dis;
    adjList.get(v).push(item);
  }
  this.addTwoWayEdge = function (v, w, dis) {
    var item = {};
    item[w] = dis;
    adjList.get(v).push(item);
    adjList.get(w).push(v);//如果是有向图，只需要添加一个顶点的边，即有一行不要
  }
  //图的遍历，广度优先，深度优先
  //图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索
  //务必访问每个顶点至多两次。
  /**
   *@author: Turbo Loong
   *@date: 2017/1/20
   *@disc: 广度优先搜索
   * (1)创建一个队列
   * (2)将v标注为被发现的,并将v入队列Q
   * (3)如果Q非空，则运行以下步骤：
   *  (a)将u从Q中出队列
   *  (b)将标注u为被发现的
   *  (c)将u所有未被访问过的邻点入队列
   *  (d)将u标注为已被探索的
   * 总结：入队，出队，置为黑
   */
  this.bfs = function (v, callback) {
    //初始化
    var color = initializeColor(),
      queue = new Queue();
    //起始顶点入队
    queue.enqueue(v);
    //如果队列不为空
    while(!queue.isEmpty()){
      //出队，获取邻居
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = 'grey'; //发现了顶点，但还未完成对其的探索
      //遍历邻点
      for(var i = 0; i < neighbors.length; i++){
        var w = neighbors[i];
        //如果还未被访问到，设为灰色，入队
        if(color[w] == 'white'){
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black'; //完成探索改顶点和其相邻顶点后，将该顶点标注为已探索过的。
      if(callback){
        callback(u);
      }
    }
  };
  
  //寻找最短路径
  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [],
      pred = [];
    queue.enqueue(v); //将源点入队

    for(var i = 0; i < vertices.length; i++){
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }
    while (!queue.isEmpty()){
      var u = queue.dequeue(), //访问队首
        neighbors = adjList.get(u);
      color[u] = 'grey';
      for(var i = 0; i < neighbors.length; i++){
        var w = neighbors[i];
        if(color[w] === 'white'){
          color[w] = 'grey';
          d[w] = d[u] + 1; //先寻找距离为1的，然后寻找距离为2的，以此类推
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
    }
    return {
      distances: d,
      predecessors: pred
    }
  }
  //深度优先
  this.dfs = function (s, callback) {
    var color = initializeColor();
    var d = {},
        pred = {};
    for(var i=0; i<vertices.length; i++){
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }
    dfsVisit(s, color, callback);

    return {
      distances: d,
      predecessors: pred
    }
    function dfsVisit(u, color, callback) {
      color[u] = 'grey';
      if(callback){
        callback(u);
      }
      var neighbors = adjList.get(u);
      for(var i=0; i<neighbors.length; i++){
        var w = neighbors[i];
        if(color[w] === 'white'){
          color[w] = 'grey';
          d[w] = d[u] + 1;
          pred[w] = u;
          dfsVisit(w, color, callback); //添加顶点入栈
        }
      }
      color[u] = 'black';
    }
  }

  this.DFS = function (s, d) {
    var color = initializeColor();
    DFSVisit(s, color, 0);
    return min;
    function DFSVisit(u, color, dis) {
      if(dis>min) return;
      if(u === d){
        if(dis<min) min = dis;
        return;
      }
      color[u] = 'grey';
      var neighbors = adjList.get(u);
      for(var i = 0; i< neighbors.length; i++){
        var w = neighbors[i];
        var key = Object.keys(w)[0];
        if(color[key] === 'white'){
          DFSVisit(key, color, dis+w[key]);
        }
      }
      color[u] = 'black';
    }
  }
}
