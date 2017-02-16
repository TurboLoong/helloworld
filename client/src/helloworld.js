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

var graph = new Graph();
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
console.log('min--' + min);

function riskIsland(startX, startY) {
    var islandBooks = initialIslandBook();
    islandBooks[startX][startY] = 1;
    var next = [];
    next[0] = [];
    next[1] = [];
    next[2] = [];
    next[3] = [];
    next[0][0]=0;
    next[0][1]=1;
    next[1][0]=1;
    next[1][1]=0;
    next[2][0]=1;
    next[1][1]=0;next[1][0]=1;
    next[1][1]=0;
    function node(x, y) {
        this.x = x;
        this.y = y;
    }
    var que = new Queue(),
        startNode = new Node(startX, startY);
    que.enqueue(startNode);
    while (!que.isEmpty()){

    }

}
function initialIslandBook() {
    var books = [];
    for(var i=0;i<50;i++){
        books[i]=[];
        for(var j=0;j<50;j++){
            books[i][j]=0;
        }
    }
    return books;
}
