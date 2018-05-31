/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */
import '../lib/three/jquery-1.9.0'
import * as THREE from  'three';
import mapUrl from '../image/moon_1024.jpg';
import bumpMapUrl from '../image/cloud.png';

var renderer = null,
    scene = null,
    camera = null,
    cube = null,
    root = null,
    group = null,
    sphere = null,
    sphereTextured = null,
    geometry = null;

var duration = 10000;
var currentTime = Date.now();
function animate() {
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    group.rotation.y += angle;
}

function run() {
    requestAnimationFrame(run);
    renderer.render(scene, camera);
    animate();
}

var materials = {};
// var mapUrl = '';
var map = null;
// var bumpMapUrl = '../images/cloud.png';
var bumpMap = null;

function createMaterials() {
    map = THREE.ImageUtils.loadTexture(mapUrl);
    bumpMap = THREE.ImageUtils.loadTexture(bumpMapUrl);
    materials['phong'] = new THREE.MeshPhongMaterial({ bumpMap: bumpMap });
    materials['phong-textured'] = new THREE.MeshPhongMaterial({ map: map, bumpMap: bumpMap });
}

function setMaterialSpecular(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    materials['phong'].specular.setRGB(r, g, b);
    materials['phong-textured'].specular.setRGB(r, g, b);
}

var materialName = "phong-textured";
var textureOn = true;
function setMaterial(name) {
    materialName = name;
    if (textureOn) {
        sphere.visible = false;
        sphereTextured.visible = true;
        sphereTextured.material = materials[name];
    } else {
        sphere.visible = true;
        sphereTextured.visible = false;
        sphere.materials = materials[name];
    }
}

function toggleTexture() {
    textureOn = !textureOn;
    var names = materialName.split('-');
    if (!textureOn) {
        setMaterial(names[0]);
    } else {
        setMaterial(names[0] + '-textured');
    }
}

function createScene(canvas) {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

    renderer.setSize(canvas.width, canvas.height);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000);

    camera.position.z = 10;

    scene.add(camera);

    root = new THREE.Object3D;

    var light = new THREE.DirectionalLight(0xffffff, 2);

    light.position.set(.5, 0, 1);
    scene.add(light);
    // root.add(light);

    group = new THREE.Object3D;

    root.add(group);

    createMaterials();

    geometry = new THREE.SphereGeometry(2, 20, 20);

    sphere = new THREE.Mesh(geometry, materials['phong']);

    sphere.visible = false;

    geometry = new THREE.SphereGeometry(2, 20, 20);

    sphereTextured = new THREE.Mesh(geometry, materials['phong-textured']);
    sphereTextured.visible = true;
    setMaterial('phong-textured');

    group.add(sphere);
    group.add(sphereTextured);
    scene.add(root);
}

function rotateScene(deltax) {
    root.rotation.y += deltax / 100;
}

function scaleScene(scale) {
    root.scale.set(scale, scale, scale);
}

var mouseDown = false, pageX = 0;

function onMouseMove(evt) {
    if (!mouseDown) {
        return;
    }

    evt.preventDefault();

    var deltax = evt.pageX - pageX;

    pageX = evt.pageX - pageX;

    pageX = evt.pageX;
    rotateScene(deltax);
}

function onMouseDown(evt) {
    evt.preventDefault();
    mouseDown = true;
    pageX = evt.pageX;
}

function onMouseUp(evt) {
    evt.preventDefault();

    mouseDown = false;
}

function addMouseHandler(canvas) {
    canvas.addEventListener('mousemove', function(e) {
        onMouseMove(e)
    }, false)
    canvas.addEventListener('mousedown', function(e) {
        onMouseDown(e)
    }, false)
    canvas.addEventListener('mouseup', function(e) {
        onMouseUp(e)
    }, false)
}
$(document).ready(
    function() {
        var canvas = document.getElementById('container');
        createScene(canvas);
        addMouseHandler(canvas);
        run();
    }
)
