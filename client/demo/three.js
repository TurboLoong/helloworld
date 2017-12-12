/**
 * author: Administrator
 * date: 2017/8/11
 * descriptioin:
 */
import {
    Scene,
    WebGLRenderer,
    PlaneGeometry,
    MeshLambertMaterial,
    PerspectiveCamera,
    Mesh,
    BoxGeometry,
    MeshBasicMaterial,
    SphereGeometry,
    SpotLight,
    CameraHelper,
    OrthographicCamera,
    Group,
    SphereBufferGeometry,
    MeshBasicMaterial
} from '../lib/three/three.min';

var scene, camera, render, cube, plane, sphere, spotLight;
let cameraRig,
    activeCamera,
    cameraPerspective,
    activeHelper,
    cameraPerspectiveHelper,
    cameraOrtho,
    cameraOrthoHelper,
    mesh;
let frustumSize = 600;
let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH/SCREEN_HEIGHT;
function initRender() {
    render = new WebGLRenderer();
    render.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    render.shadowMap.enabled = true;
    document.body.appendChild(render.domElement);
}

function initScene() {
    scene = new Scene();
}

function initCamera() {
    camera = new PerspectiveCamera(60, 0.5 * aspect, 1, 10000);
    camera.position.z = 2500;
    camera.lookAt(scene.position);//将相机快门的位置设置为场景的位置
    scene.add(camera);

    cameraPerspective = PerspectiveCamera(50, 0.5*aspect, 150, 1000);
    cameraPerspectiveHelper = CameraHelper(cameraPerspective);
    scene.add(cameraPerspectiveHelper);

    activeCamera = cameraPerspective;
    activeHelper = cameraPerspectiveHelper;

    cameraOrtho = new OrthographicCamera( 0.5 * frustumSize * aspect / - 2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 150, 1000);
    cameraOrthoHelper = new CameraHelper(cameraOrtho);
    scene.add(cameraOrthoHelper);

    cameraRig = new Group();
    cameraRig.add(cameraPerspective);
    cameraRig.add(cameraOrtho);

    scene.add(cameraRig);
}

function initObject() {
    mesh = new Mesh(
        new SphereBufferGeometry(100, 16, 8),
        new MeshBasicMaterial({color: 0xffffff, wireframe: true})
    );
    scene.add(mesh);

    let mesh2 = new Mesh(
        new SphereBufferGeometry(50, 16, 8),
        new MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );
    mesh2.position.y = 150;
}

function start() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    sphere.position.x += 0.01;
    sphere.position.y += 0.01;
    // requestAnimationFrame(render);
    render.render(scene, camera);
}

initRender();
initScene();
initCamera();
start();