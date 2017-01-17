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