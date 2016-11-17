/**
 * author: TurboLoong
 * date: 2016/11/17
 * descriptioin:
 */
var quickSort = require('./algorithm/algorithm-quicksort');
var arrObj = [{name:'b',id:12},{name:'c',id:21},{name:'a',id:2}];
console.log(quickSort.sortObj(arrObj, 'id', 'asc'));