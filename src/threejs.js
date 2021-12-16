import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const threejsscene = document.getElementById('threejscontainer');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 50, threejsscene.clientWidth / threejsscene.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( threejsscene.clientWidth, threejsscene.clientHeight );
threejsscene.appendChild( renderer.domElement );

renderer.setClearColor(0x81abaf);
renderer.setPixelRatio(window.devicePixelRatio);

//shadows

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 18, 42 );

controls.update();

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );

}

export function createCylinder(rt,rb,h){
  const geometry = new THREE.CylinderGeometry( rt, rb, h, 32 );
  const material = new THREE.MeshPhongMaterial({color: 0xe4c11a});
  const cylinder = new THREE.Mesh( geometry, material );
  cylinder.position.set(0,0,0);

  scene.add(cylinder);

  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  // light.target = cylinder;
  scene.add(light);

  const edges = new THREE.EdgesGeometry( geometry );
  // const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  // scene.add( line );

}

animate()