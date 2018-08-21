import '../../lib/three/jquery-1.9.0'
import * as THREE from  'three';
import mapUrl from '../../image/moon_1024.jpg';
import bumpMapUrl from '../../image/cloud.png';
import lensflare0 from '../../image/lensflare0.png';
var renderer = null,
    scene = null,
    camera = null,
    cube = null,
    root = null,
    group = null,
    sphere = null,
    sphereTextured = null,
    geometry = null,
    lookAtMesh0 = null;

var duration = 10000;
var currentTime = Date.now();

var mouse = new THREE.Vector2();

var textureLoader = new THREE.TextureLoader();
function animate() {
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    // group.rotation.y += angle;
    lookAtMesh0.position.x = 1 + Math.cos(angle);
    lookAtMesh0.position.z = 1 + Math.cos(angle);
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

function createScene(canvas) {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

    renderer.setSize(canvas.width, canvas.height);

    scene = new THREE.Scene();

    createCamera(canvas);

    root = new THREE.Object3D;

    createLight();

    group = new THREE.Object3D;

    root.add(group);

    // createMaterials();

    geometry = new THREE.SphereGeometry(2, 20, 20);

    sphere = new THREE.Mesh(geometry, materials['phong']);

    sphere.visible = false;

    geometry = new THREE.SphereGeometry(2, 20, 20);

    sphereTextured = new THREE.Mesh(geometry, materials['phong-textured']);
    // sphereTextured.rotation.x = Math.PI / 6;
    sphereTextured.visible = true;

    createSphere();
    // group.add(sphere);
    // group.add(sphereTextured);
    scene.add(root);
}

function rotateScene(deltax) {
    root.rotation.y += deltax / 100;
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

    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
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

function createSphere() {
    var sphere = new THREE.SphereBufferGeometry( 0.5);
    var light0 = new THREE.PointLight( 0xff0040, 2, 50 );
    lookAtMesh0 = addImageRow();// new THREE.Mesh(sphere, new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    light0.add(lookAtMesh0);
    light0.position.copy(new THREE.Vector3(5, 7 , 5));
    scene.add(light0);
    // var lookAtMesh1 = new THREE.Mesh(sphere, new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    // lookAtMesh1.position.copy(new THREE.Vector3(5, 7 , -5));
    // group.add(lookAtMesh1);
    //
    //
    // var lookAtMesh2 = new THREE.Mesh(sphere, new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    // lookAtMesh2.position.copy(new THREE.Vector3(-5, 7 , -5));
    // group.add(lookAtMesh2);
    //
    // var lookAtMesh3 = new THREE.Mesh(sphere, new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    // lookAtMesh3.position.copy(new THREE.Vector3(-5, 7 , 5));
    // group.add(lookAtMesh3);
}

function createLight() {
    var ambiColor = "#ffffff";
    var ambientLight = new THREE.AmbientLight(ambiColor);
    scene.add(ambientLight);
}

function createCamera(canvas) {
    camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000);
    camera.position.z = 10;
    camera.position.y = 20;
    camera.position.x = -25;
    camera.lookAt(new THREE.Vector3(0, 7, 0));
    scene.add(camera);
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

function addImageRow() {
    var sphere = new THREE.SphereBufferGeometry(1);
    var map = textureLoader.load( lensflare0 );
    var material = new THREE.MeshBasicMaterial( { map: map } );
    material.transparent = true;
    material.blending = THREE.AdditiveBlending;
    var mesh = new THREE.Mesh( sphere, material );
    return mesh;
}

$(document).ready(
    function() {
        var canvas = document.getElementById('container');
        createScene(canvas);
        addMouseHandler(canvas);
        run();
    }
)

function createMaterials() {
    map = THREE.ImageUtils.loadTexture(mapUrl);
    bumpMap = THREE.ImageUtils.loadTexture(bumpMapUrl);
    materials['phong'] = new THREE.MeshPhongMaterial({ bumpMap: bumpMap });
    materials['phong-textured'] = new THREE.MeshPhongMaterial({ map: map, bumpMap: bumpMap });
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