/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */
import {
    Scene,
    WebGLRenderer,
    MeshNormalMaterial,
    OrthographicCamera,
    PerspectiveCamera,
    Mesh,
    CubeGeometry,
    MeshBasicMaterial
} from '../lib/three/three.min';

var renderer, camera, scene, object;
var width, height;
function initRenderer() {
    let ele = document.getElementById('canvas');
    width = ele.clientWidth;
    height = ele.clientHeight;
    renderer = new WebGLRenderer({
        canvas: ele
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1.0);
}

function initScene() {
    scene = new Scene();
}

function initCamera() {
    camera = new PerspectiveCamera(45, width/height, 1, 10);
    camera.position.set(0, 0, 200);
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });
    scene.add(camera);
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
    initScene();
    initCamera();
    initObject();
    render();
}
threeStart();