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
    items.length == 0;
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
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!added){
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
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
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
    if(items.has[key]){
      delete items[key];
    }
  }
  this.get = function (key) {
    if(items.has[key]){
      return items[key];
    }
  }
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
function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;
  var insertNode = function (node, newNode) {
    if(newNode.key<node.key){
      if(node.left === null){
        node.left = newNode;
      }else{
        insertNode(node.left, newNode);
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        insertNode(node.right, newNode);
      }
    }
  }
  var inOrderTraverseNode = function (node, callback) {
    if(node !== null){
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }
  var preOrderTraverseNode = function (node, callback) {
    if(node !== null){
      callback(node,key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }
  var postOrderTraverseNode = function (node, callback) {
    if(node.key !== null){
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node, key);
    }
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
  var maxNode = function (node) {
    if(node){
      while(node&&node.right){
        node = node.right;
      }
      return node.key;
    }
    return null;
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
  var removeNode = function (node, key) {
    if(node === null){
      return null;
    }
    if(key < node.key){
      node.left = removeNode(node.left, key);
      return node;
    }else if(key > node.key){
      node.right = removeNode(node.right, key);
    }else{
      if(node.left === null && node.right === null){
        node == null;
        return node;
      }
      if(node.left === null){
        node = node.right;
        return node;
      }else if(node.right === null){
        node = node.left;
        return node;
      }

    }
  }
  this.insert = function (key) {
    var newNode = new Node(key);
    if(root === null){
      root = newNode;
    }else{
      insertNode(root, newNode);
    }
  }
  //中序遍历
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  }
  //先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  }
  //后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  }
  this.minNode = function () {
    return minNode(root);
  }
  this.maxNode = function () {
    return maxNode(root);
  }
  this.search = function (key) {
    return searchNode(root, key);
  }
  this.removeNode = function (key) {
    root = removeNode(root, key);
  }
}
//图的表示
//邻接矩阵，邻接表，关联矩阵
function Graph() {
  var vertices = []; //顶点
  var adjList = new Dictionary(); //用字典来存储邻接表
  //添加定点
  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  }
  //添加顶点之间的边（无向图）
  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);//如果是有向图，只需要添加一个顶点的边，及此行不要
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
  var initializeColor = function () {
    var color = {};
    for(var i=0; i<vertices.length;i++){
      color[vertices[i]] = 'white';
    }
    return color;
  }
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
  }
  //寻找最短路径
  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [],
      pred = [];
    queue.enqueue(v);

    for(var i = 0; i < vertices.length; i++){
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }
    while (!queue.isEmpty()){
      var u = queue.dequeue(),
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
  }
}
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for(var i = 0; i < myVertices.length; i++){
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

