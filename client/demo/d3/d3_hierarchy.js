import treeData from '../../json/tree.json';
import * as hierarchy from '../../lib/d3-hierarchy';
let root = hierarchy.hierarchy(treeData);
// root.eachAfter(d => {
//   console.log(d.data.name)
// });
const treeLayout = hierarchy.tree().nodeSize([10, 10]);
treeLayout(root);
console.log(root);
