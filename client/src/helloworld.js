/**
 * author: TurboLoong
 * date: 2016/11/28
 * descriptioin:
 */
"use strict"
angular
    .module('app', [])
    .controller('AppController', function($scope) {
      $scope.inputValue = 'fsdcscvcdda';

    });
/*var graph = new Graph();
 var myVertices = ['A','B','C','D','E','F','G','H','I'];
 for(var i = 0; i < myVertices.length; i++){
 graph.addVertex(myVertices[i]);
 }
 graph.addTwoWayEdge('A', 'B');
 graph.addTwoWayEdge('A', 'C');
 graph.addTwoWayEdge('A', 'D');
 graph.addTwoWayEdge('C', 'D');
 graph.addTwoWayEdge('C', 'G');
 graph.addTwoWayEdge('D', 'G');
 graph.addTwoWayEdge('D', 'H');
 graph.addTwoWayEdge('B', 'E');
 graph.addTwoWayEdge('B', 'F');
 graph.addTwoWayEdge('E', 'I');*/

/*var shortestPathA = graph.dfs('A', function (u) {
 /!*if(dis>min){
 return;
 }*!/
 if(u=='G'){
 /!*if(min>dis){
 min = dis;
 console.log(min);
 return
 }*!/

 }
 });*/

/*var graph = new Graph();
var myVertices = ['A','B','C','D','E','F'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addOneWayEdge('A', 'B', 2);
graph.addOneWayEdge('A', 'F', 10);
graph.addOneWayEdge('B', 'C', 3);
graph.addOneWayEdge('B', 'F', 7);
graph.addOneWayEdge('C', 'A', 4);
graph.addOneWayEdge('C', 'D', 4);
graph.addOneWayEdge('D', 'F', 5);
graph.addOneWayEdge('F', 'C', 3);
//求最短路径
var min = graph.DFS('A', 'F');
console.log('min--' + min);*/
/*var graph = new Graph();
var myVertices = ['A','B','C','D','E','F'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addOneWayEdge('A', 'B', 1);
graph.addOneWayEdge('A', 'C', 12);
graph.addOneWayEdge('B', 'C', 9);
graph.addOneWayEdge('B', 'D', 3);
graph.addOneWayEdge('C', 'E', 5);
graph.addOneWayEdge('D', 'C', 4);
graph.addOneWayEdge('D', 'E', 13);
graph.addOneWayEdge('D', 'F', 15);
graph.addOneWayEdge('E', 'F', 4);
var dis = graph.dijkstra();
console.log(dis);*/

/*var graph = new Graph();
var myVertices = ['A','B','C','D','E'];
for (var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addOneWayEdge('A', 'B', 2);
graph.addOneWayEdge('A', 'E', 10);
graph.addOneWayEdge('B', 'C', 3);
graph.addOneWayEdge('B', 'E', 7);
graph.addOneWayEdge('C', 'D', 4);
graph.addOneWayEdge('C', 'E', 6);
graph.addOneWayEdge('D', 'E', 5);
var dis = graph.BellmanFord('A');
console.log(dis);

var tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(17);
tree.insert(5);
tree.insert(19);
tree.insert(28);
tree.insert(46);
tree.insert(12);
tree.insert(7);
tree.insert(22);
tree.insert(25);
tree.insert(99);
tree.insert(36);
tree.insert(92);
tree.inOrderTraverse(function (key) {
    console.log(key);
});*/

var num =11118096;
var result = 0;

getResult(num, result);
function getResult(num, result) {
    result = formmater(num, result, 0);
    console.log(result);
}
function formmater(num, index) {
    num=parseInt(num/10000);
    if(num){
        index++;
        index = formmater(num, index);
    }
    return index
}