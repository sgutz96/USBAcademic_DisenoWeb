import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x89dfec );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
//document.body.appendChild( renderer.domElement );
document.getElementById('canvas-container').appendChild( renderer.domElement );

const geometry = new THREE.CylinderGeometry( 6, 6, 20, 32 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); 
const cylinder = new THREE.Mesh( geometry, material ); scene.add( cylinder );
cylinder.rotation.z = Math.PI / 8; // Rotate the cylinder 45 degrees around the x-axis
scene.add( cylinder );

camera.position.z = 30;

function animate() {
    
 
    cylinder.rotation.y += 0.005;

  renderer.render( scene, camera );

}