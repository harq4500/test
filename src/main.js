import {createCylinder} from './threejs'
import {babylonCreateCylinder} from './babylonmethod.js'

fetch('/data').then((resp)=>resp.json()).then((resp)=>{
  createCylinder(resp.surfaceArea / 2, resp.surfaceArea / 2, resp.volume);
  babylonCreateCylinder(resp.surfaceArea / 2, resp.surfaceArea / 2, resp.volume);
}).catch(console.error);




