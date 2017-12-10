/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */

import style from '../../index.scss';
import {
    Scene,
    WebGLRenderer,
    MeshNormalMaterial,
    OrthographicCamera,
    Mesh,
    CubeGeometry

} from '../../lib/three/three.min';

var renderer, camera, scene, light, object;
var width, height;
function initRenderer() {
    width = document.getElementById('three_canvas').clientWidth;
    height = document.getElementById('three_canvas').clientHeight;
    renderer = new WebGLRenderer({
        canvas: document.getElementById('three_canvas')
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

function initCamera() {
    camera = new OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 200;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });
}
function initScene() {
    scene = new Scene();
}
function initObject() {
    var geometry = new CubeGeometry(100, 100, 100);
    object = new Mesh(geometry, new MeshNormalMaterial());
    scene.add(object);
}
function render() {
    requestAnimationFrame(render);
    object.rotation.x += 0.05;
    object.rotation.y += 0.05;
    renderer.render(scene, camera);
}
function threeStart() {
    initRenderer();
    initCamera();
    initScene();
    initObject();
    render();
}
window.onload = threeStart();