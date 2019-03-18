import './index.scss';
import permissions from './json/test1.json';
function getCheckedNodes(permissions, list) {
    permissions.forEach(item => {
        if (item.checked) {
            list = list.concat(item.parentNodes);
        }
        if (item.children) {
            getCheckedNodes(item.children, list);
        }
    });
    return list;
}
let list = [];
list = getCheckedNodes(permissions, list);
console.log(list);
// import './demo/three';
// import './demo/react';
// import './demo/area';
// import './demo/map';
// import './demo/zrender';
// import './demo/drawImage';
// import './demo/gaode';