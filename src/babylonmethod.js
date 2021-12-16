import * as BABYLON from 'babylonjs';

// const { Engine, Scene } = BABYLON;

const babyloncontainer = document.getElementById("babyloncontainer");
const canvas = document.createElement("canvas");

canvas.width = babyloncontainer.clientWidth;
canvas.height = babyloncontainer.clientHeight;
babyloncontainer.appendChild(canvas);


const engine = new BABYLON.Engine(canvas, true);

const createScene  = function(h,r) {
  const scene = new BABYLON.Scene(engine);
   scene.clearColor = new BABYLON.Color3.FromHexString('#81abaf');
   
  
   
   const light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

  //  const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", h, r * 2, r * 2, 32, 1, scene, false);
   const cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder",{
    height: h,
    diameter:r * 2,
    tessellation: 32,
    subdivisions:1,
    faceColors: [new BABYLON.Color3.FromHexString('#e4c11a'),new BABYLON.Color3.FromHexString('#e4c11a'),new BABYLON.Color3.FromHexString('#e4c11a')]
   });
  
   cylinder.position = new BABYLON.Vector3(0, 0, 0);
   const camera = new BABYLON.ArcRotateCamera("Camera",
   BABYLON.Tools.ToRadians(0),
   BABYLON.Tools.ToRadians(70),
   50.0,
   cylinder.position,
    scene);
   
   scene.activeCamera.attachControl(canvas);
   return scene;
};


export function babylonCreateCylinder(h,r){
  const scene = createScene(h,r);
  
  engine.runRenderLoop(() => {
    scene.render();
  });
  
}