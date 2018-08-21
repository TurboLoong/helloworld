import * as THREE from  'three';
import P2P from '../../image/P2P.png';
import building from '../../image/building.png';
import company from '../../image/company.png';
import gear from '../../image/gear.png';

function init() {
    var canvas = document.getElementById('container');

    var camera = null, renderer = null;

    var textureLoader = new THREE.TextureLoader();

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(canvas.width, canvas.height);
    renderer.shadowMapEnabled = true;
    var scene = new THREE.Scene();

    createCamera(canvas);

    var meshP2P =  addImageRow(P2P);
    var meshBuilding =  addImageRow(building);
    var meshCompany =  addImageRow(company);

    scene.add(meshP2P);
    scene.add(meshBuilding);
    scene.add(meshCompany);

    var center = addImageRow(P2P);
    scene.add(center);

    var gear = addGear();
    scene.add(gear);
    // add subtle ambient lighting
    var ambiColor = "#0c0c0c";
    var ambientLight = new THREE.AmbientLight(ambiColor);
    scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // call the render function
    var step = 0;

    var controls = new function () {
        this.bouncingSpeed = 0.01;
    };
    addAxis();

    render();

    function render() {
        // bounce the sphere up and down
        step -= controls.bouncingSpeed;
        meshP2P.position.x = 1000 * (Math.cos(step + Math.PI * 2 / 3));
        meshP2P.position.z = 1000 * (Math.sin(step + Math.PI * 2 / 3));

        meshBuilding.position.x = 1000 * (Math.cos(step + Math.PI * 4 / 3));
        meshBuilding.position.z = 1000 * (Math.sin(step + Math.PI * 4 / 3));

        meshCompany.position.x = 1000 * (Math.cos(step + Math.PI * 6 / 3));
        meshCompany.position.z = 1000 * (Math.sin(step + Math.PI * 6 / 3));

        // center.position.y = Math.sin(step*4 + Math.PI * 6 / 3);
        // render using requestAnimationFrame
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function createCamera(canvas) {
        camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000);
        camera.position.x = 2000;
        camera.position.y = 1500;
        camera.position.z = 2000;
        camera.lookAt(scene.position);
        scene.add(camera);
    }

    function addImageRow(img) {
        var sphere = new THREE.PlaneBufferGeometry(450, 543);
        var map = textureLoader.load( img );
        var material = new THREE.MeshBasicMaterial( { map: map } );
        material.transparent = true;
        var mesh = new THREE.Mesh( sphere, material );
        mesh.rotation.y = Math.PI/4;
        // mesh.position.y = -15;
        return mesh;
    }

    function addGear() {
        var sphere = new THREE.PlaneBufferGeometry(1981, 1954);
        var map = textureLoader.load( gear );
        var material = new THREE.MeshLambertMaterial( { map: map} );
        material.transparent = true;
        material.blending = THREE.AdditiveBlending;
        var mesh = new THREE.Mesh( sphere, material );
        mesh.position.set(0, -10, 0);
        mesh.rotation.x = -Math.PI / 2;
        return mesh;
    }

    function addAxis() {
        var axes = new THREE.AxisHelper(1000);
        scene.add(axes);
    }
}

window.onload = init