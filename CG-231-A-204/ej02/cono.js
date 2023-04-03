function rotacion(grados){
    degree=(grados*Math.PI)/180
    return degree
};

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x5f00ff, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4;
camera.position.x = -1;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var geometry = new THREE.ConeGeometry(1, 1, 50);
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)

cone.translateY(0.35)
cone.translateX(1)
grados=rotacion(135)
cone.rotation.set(0,0,-grados)


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();