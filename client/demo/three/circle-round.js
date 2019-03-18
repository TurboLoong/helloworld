import * as THREE from  'three';
import './lib/Lensflare';
import P2P from '../../image/P2P.png';
import building from '../../image/building.png';
import company from '../../image/company.png';
import startPng from '../../image/star.png';
import round0 from '../../image/round0.png';
import round1 from '../../image/round1.png';
import round2 from '../../image/round2.png';
import round3 from '../../image/round3.png';
import round4 from '../../image/round4.png';
import round2Line from '../../image/round2Line.png';
import bg from '../../image/bg.png';
import lensflare0 from '../../image/lensflare0.png';
import lensflare3 from '../../image/lensflare3.png';
import fontJson from '../../json/Benmo Wuyu_Regular.json';
const targets = [P2P, building, company];
function init() {
    var canvas = document.getElementById('container');

    var camera = null, renderer = null, step = 0;
    var center = {}, circle0 = {}, circle1 = {}, circle2 = {}, circle3 = {}, circle4 = {};

    var textureLoader = new THREE.TextureLoader();

    var scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight("#0c0c0c");
    scene.add(ambientLight);

    // addAxis();

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(canvas.width, canvas.height);
    renderer.shadowMapEnabled = true;

    createCamera(canvas);

    addCenter();
    addCircle0();
    addCircle1();
    addCircle2();
    addCircle3();
    addCircle4();

    // addBackground();

    // createSun(0.995, 0.5, 0.9, -2785, 1000, 50);

    createDirectionLight();
    render();

    function render() {
        // bounce the sphere up and down

        animate();

        // render using requestAnimationFrame
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function animate() {
        step -= 0.01;
        centerMovement(step);
        circle0Movement(step);
        circle1Movement(step);
        circle2Movement(step);
        circle3Movement(step);
        circle4Movement(step);
    }

    function createCamera(canvas) {
        camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 8000);
        camera.position.x = 2000;
        camera.position.y = 1000;
        camera.position.z = 2000;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);
    }

    // 画圈层
    function addCenter() {
        let target = addImageRow(P2P, { x: 52, y: 52 });
        target.scale.set(20, 20, 20);
        let star = addImageRow(startPng, {x: 200, y: 200});
        star.position.x = 4;
        star.position.z = 4;
        center.star = star;
        center.target = target;
        scene.add(star);
        scene.add(target);
    }

    function addCircle0() {
        circle0 = createPlaneGeo(round0, { x: 1401, y: 1401 });
        circle0.position.set(0, 300, 0);
        scene.add(circle0);
    }

    function addCircle1() {
        const height = 200;
        circle1.radius = 830;

        let plane = createPlaneGeo(round1, { x: 1681, y: 1656 });
        plane.position.y = height;
        circle1.plane = plane;
        scene.add(plane);
        circle1.stars = [];

        for (let i = 0; i < 3; i++) {
            let star = addImageRow(startPng, { x: 52, y: 52 });
            star.position.y = height;
            circle1.stars.push(star);
            scene.add(star);
        }
    }

    function addCircle2() {
        const height = 0;
        circle2.radius = 1110;

        let plane = createPlaneGeo(round2, { x: 2274, y: 2241 });
        plane.position.y = height;
        circle2.plane = plane;
        scene.add(plane);

        circle2.lines = [];
        // for(let i = 0; i < 2; i++) {
        let line = createPlaneGeo(round2Line, { x: 64, y: 222 });
        // line.rotation.x = Math.PI/2;
        line.position.x = circle2.radius + 300;
        circle2.lines.push(line);
        scene.add(line);
        // }

        let star = addImageRow(startPng, { x: 52, y: 52 });
        star.position.y = height;
        circle2.star = star;
        scene.add(star);

        circle2.targets = [];
        for (let i = 0; i < 3; i++) {
            let target = addImageRow(targets[i], { x: 450, y: 557 });
            target.position.y = height;
            circle2.targets.push(target);
            scene.add(target);
        }

        circle2.texts = [];
        ['房地产', '上市公司', 'P2P'].forEach(value => {
            let text = addText(value);
            circle2.texts.push(text);
            scene.add(text);
        });
    }

    function addCircle3() {
        const height = -200;
        circle3.radius = 690;

        let plane = createPlaneGeo(round3, { x: 1382, y: 1383 });
        plane.position.y = height;
        circle3.plane = plane;
        scene.add(plane);
        circle3.stars = [];

        for (let i = 0; i < 4; i++) {
            let star = addImageRow(startPng, { x: 52, y: 52 });
            star.position.y = height;
            circle3.stars.push(star);
            scene.add(star);
        }
    }

    function addCircle4() {
        circle4 = createPlaneGeo(round4, { x: 1161, y: 1161 });
        circle4.position.set(0, -400, 0);
        scene.add(circle4);
    }

    function centerMovement(step) {
        center.target.position.y = 200 * Math.sin(step * 2 + Math.PI * 6 / 3);
        center.star.position.y = 200 * Math.sin(step * 2 + Math.PI * 6 / 3) + 400;
    }

    function circle0Movement(step) {
        circle0.rotation.z = -(step + Math.PI);
    }

    function circle1Movement(step) {
        circle1.plane.rotation.z = step * 2 + Math.PI;
        const radius = circle1.radius;
        const rate = step + Math.PI * 2 / 3;
        circle1.stars.forEach(function(star, index) {
            star.position.x = radius * (Math.cos(-(rate + index * Math.PI / 3)));
            star.position.z = radius * (Math.sin(-(rate + index * Math.PI / 3)));
        });
    }

    function circle2Movement(step) {
        circle2.plane.rotation.z = -(step * 1.5 + Math.PI);
        const radius = circle2.radius;
        const rate = step + Math.PI * 2 / 3;
        circle2.star.position.x = radius * (Math.cos(rate + Math.PI / 3));
        circle2.star.position.z = radius * (Math.sin(rate + Math.PI / 3));

        let targets = circle2.targets;
        targets[0].position.x = radius * (Math.cos(step + Math.PI * 2 / 3));
        targets[0].position.z = radius * (Math.sin(step + Math.PI * 2 / 3));

        targets[1].position.x = radius * (Math.cos(step + Math.PI * 4 / 3));
        targets[1].position.z = radius * (Math.sin(step + Math.PI * 4 / 3));

        targets[2].position.x = radius * (Math.cos(step + Math.PI * 6 / 3));
        targets[2].position.z = radius * (Math.sin(step + Math.PI * 6 / 3));

        let lines = circle2.lines;
        let lineRadius = radius * 1.3;
        lines[0].rotation.y = -(step + Math.PI);
        lines[0].position.x = lineRadius * (Math.cos(step));
        lines[0].position.z = lineRadius * (Math.sin(step));

        let texts = circle2.texts;
        texts[0].position.x = radius * (Math.cos(step + Math.PI * 2 / 3));
        texts[0].position.z = radius * (Math.sin(step + Math.PI * 2 / 3));

        texts[1].position.x = radius * (Math.cos(step + Math.PI * 4 / 3));
        texts[1].position.z = radius * (Math.sin(step + Math.PI * 4 / 3));

        texts[2].position.x = radius * (Math.cos(step + Math.PI * 6 / 3));
        texts[2].position.z = radius * (Math.sin(step + Math.PI * 6 / 3));
    }

    function circle3Movement(step) {
        circle3.plane.rotation.z = step * 2 + Math.PI;
        const radius = circle3.radius;
        const rate = step + Math.PI * 2 / 3;
        circle3.stars.forEach(function(star, index) {
            star.position.x = radius * (Math.cos(-(rate + index * Math.PI / 3)));
            star.position.z = radius * (Math.sin(-(rate + index * Math.PI / 3)));
        });
    }

    function circle4Movement(step) {
        circle4.rotation.z = -(step*2 + Math.PI);
    }

    function addImageRow(img, size) {
        var plane = new THREE.PlaneBufferGeometry(size.x, size.y);
        var map = textureLoader.load(img);
        var material = new THREE.MeshBasicMaterial({ map: map, transparent: true, alphaTest: 0.05 });
        var mesh = new THREE.Mesh(plane, material);
        mesh.rotation.y = Math.PI / 4;
        return mesh;
    }

    function addBackground() {
        let mesh = addImageRow(bg, { x: 1820, y: 720 });
        mesh.receiveShadow = true;
        mesh.position.set(-2000, -800, -2000);
        mesh.scale.set(9, 9, 9);
        scene.add(mesh);
    }

    function addAxis() {
        var axes = new THREE.AxisHelper(2000);
        scene.add(axes);
    }

    function createPlaneGeo(png, size) {
        var geo = new THREE.PlaneBufferGeometry(size.x, size.y);
        var map = textureLoader.load(png);
        var material = new THREE.MeshBasicMaterial({ map: map, transparent: true, alphaTest: 0.05 });
        var mesh = new THREE.Mesh(geo, material);
        mesh.rotation.x = -Math.PI / 2;
        return mesh;
    }

    function createDirectionLight() {
        let directionalLight = new THREE.DirectionalLight('#5620C4', 2);
        directionalLight.position.set(2, 1.2, 10).normalize();
        scene.add(directionalLight);
    }

    function createSun(h, s, l, x, y, z) {
        let light = new THREE.PointLight(0xffffff, 1.5, 2000);
        light.color.setHSL(h, s, l);
        light.position.set(x, y, z);
        scene.add(light);
        let lensflare = new THREE.Lensflare();
        const textureFlare0 = textureLoader.load(lensflare0);
        const textureFlare3 = textureLoader.load(lensflare3);
        lensflare.addElement(new THREE.LensflareElement(textureFlare0, 200, 0, light.color));
        lensflare.addElement(new THREE.LensflareElement(textureFlare3, 60, 0.2));
        lensflare.addElement(new THREE.LensflareElement(textureFlare3, 70, 0.25));
        lensflare.addElement(new THREE.LensflareElement(textureFlare3, 120, 0.3));
        lensflare.addElement(new THREE.LensflareElement(textureFlare3, 70, 0.35));
        light.add(lensflare);
    }

    function addText(text) {
        const font = new THREE.Font( fontJson );
        const geometry = new THREE.TextGeometry(text, {
            font,
            size: 30,
            height: 1,
            curveSegments: 12,
            bevelEnabled: false
        });
        const material = new THREE.MeshBasicMaterial({color: '#8B94FF'});
        let mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.y = Math.PI / 4;
        mesh.position.y = 100;
        return mesh;
    }

    function createVedio() {
        let video = document.getElementById('video');
        let texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        var parameters = { color: 0xffffff, map: texture };
        let material = new THREE.MeshBasicMaterial(parameters);

        let geometry = new THREE.PlaneBufferGeometry(1280, 720, 4, 4);
        let mesh = new THREE.Mesh(geometry, material);
        // mesh.scale.set(5, 5, 3);
        mesh.rotation.x = -Math.PI / 12;
        mesh.position.z = -3000;
        mesh.position.z = 3000;
        mesh.position.y = 800;
        scene.add(mesh);
    }

    document.addEventListener('mousedown', onDocumentMouseDown, false);

    function onDocumentMouseDown(event) {
        let raycaster = new THREE.Raycaster();
        let mouse = new THREE.Vector2();
        event.preventDefault();
        mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = -( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(circle2.targets);
        if (intersects.length > 0) {
            scene.remove(center);
            center = intersects[0].object.clone();
            center.position.x = 0;
            center.position.y = 0;
            center.position.z = 0;
            center.scale.set(2, 2, 2);
            scene.add(center)
        }
    }
}

window.onload = init