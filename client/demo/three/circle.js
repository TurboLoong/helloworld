import * as THREE from 'three';
import greenPng from '../../image/three-circle/img-green.png';
import redPng from '../../image/three-circle/img-red.png';
import highlightPng from '../../image/three-circle/img6.png';
import fontJson from '../../json/Benmo Wuyu_Regular.json';
import './lib/Lensflare';
function init() {
    var canvas = document.getElementById('container');

    var camera = null, renderer = null, step = 0;
    var circle2 = [];
    const radius = 1110;
    const points = [
        { text: '涉天然气', status: 'finished' },
        { text: '煤炭', status: 'finished' },
        { text: '旅游', status: 'finished' },
        { text: '交通', status: 'finished' },
        { text: '医疗', status: 'finished' },
        { text: '涉金融', status: 'finished' },
        { text: '盐业', status: 'finished' },
        { text: '房地产', status: 'finished' },
        { text: '广告', status: 'finished' },
        { text: '央企', status: 'finished' },
        { text: '药品', status: 'finished' },
        { text: '信用服务机构', status: 'finished' },
        { text: '环保', status: 'finished' },
        { text: '担保机构', status: 'finished' },
        { text: '社会组织', status: 'finished' },
        { text: '盈利性培训机构', status: 'finished' },
        { text: '演出', status: 'unfinished' },
        { text: '盈利性养老机构', status: 'unfinished' },
        { text: '商业银行', status: 'unfinished' },
        { text: '家政', status: 'unfinished' },
        { text: '食品企业', status: 'unfinished' },
        { text: '慈善', status: 'unfinished' },
        { text: '科研', status: 'unfinished' },
        { text: '盈利性幼儿园', status: 'unfinished' },
        { text: '招标代理', status: 'unfinished' },
        { text: '餐饮', status: 'unfinished' }
    ];
    let currPoints = points.slice(0, 7);
    let outerPoints = points.slice(7);
    var textureLoader = new THREE.TextureLoader();

    var scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight('#0c0c0c');
    scene.add(ambientLight);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(canvas.width, canvas.height);
    renderer.shadowMapEnabled = true;

    createCamera(canvas);
    createDirectionLight();

    addCircle2();
    render();

    function render() {
        animate();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function animate() {
        step -= 0.002;
        circle2Movement(step);
    }

    function addCircle2() {
        currPoints.forEach(value => {
            let target = addImageRow(value.status === 'finished' ? greenPng : redPng);
            target.position.y = 10;
            scene.add(target);

            let text = addText(value.text);
            scene.add(text);
            circle2.push({ target: target, text: text });
        });
    }

    function circle2Movement(step) {
        circle2.forEach((value, index) => {
            move(value.target, value.text, index);
        });
        function move(target, text, index) {
            target.position.x = radius * (Math.cos(step + Math.PI * index / 7 + 2 * Math.PI));
            target.position.z = radius * (Math.sin(step + Math.PI * index / 7 + 2 * Math.PI));
            text.position.x = radius * (Math.cos(step + Math.PI * index / 7 + 2 * Math.PI));
            text.position.z = radius * (Math.sin(step + Math.PI * index / 7 + 2 * Math.PI));
            // 如果target的z为负，移出target，并加入新的target
            // if (step + Math.PI * index / 7 < 0) {
            //     const first = currPoints.shift();
            //     const last = outerPoints.shift();
            //     currPoints.push(last);
            //     outerPoints.push(first);
            //     scene.remove(target);
            //     scene.remove(text);
            //     circle2.shift();
            // let lastTarget = addImageRow(last.status === 'finished' ? greenPng : redPng);
            // lastTarget.position.y = 10;
            // scene.add(lastTarget);

            // let lastText = addText(last.text);
            // scene.add(lastText);
            // circle2.push({ target: lastTarget, text: lastText });

            // }
        }
    }

    function addImageRow(img) {
        var plane = new THREE.PlaneBufferGeometry(119, 22);
        var map = textureLoader.load(img);
        var material = new THREE.MeshBasicMaterial({ map: map, transparent: true, alphaTest: 0.05 });
        var mesh = new THREE.Mesh(plane, material);
        mesh.rotation.y = Math.PI / 4;
        return mesh;
    }

    function addText(text) {
        const font = new THREE.Font(fontJson);
        const geometry = new THREE.TextGeometry(text, {
            font,
            size: 14,
            height: 1,
            curveSegments: 12,
            bevelEnabled: false
        });
        const material = new THREE.MeshBasicMaterial({ color: '#8B94FF' });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = Math.PI / 4;
        return mesh;
    }
    function createCamera(canvas) {
        camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 8000);
        camera.position.x = 2000;
        camera.position.y = 1000;
        camera.position.z = 2000;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);
    }
    function createDirectionLight() {
        let directionalLight = new THREE.DirectionalLight('#5620C4', 2);
        directionalLight.position.set(2, 1.2, 10).normalize();
        scene.add(directionalLight);
    }
}

window.onload = init;