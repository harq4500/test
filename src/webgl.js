
const webglcontainer = document.getElementById('webglcontainer');
const canvas = document.createElement("canvas");

canvas.width = webglcontainer.clientWidth;
canvas.height = webglcontainer.clientHeight;
webglcontainer.appendChild(canvas);
const gl = canvas.getContext('webgl');

if(!gl){
  throw new Error('WebGL not supported!');
}

gl.clearColor(0.0,0.0,0.0,1);
gl.clear(gl.COLOR_BUFFER_BIT);


// 1. vertex data
/*
 [
    x, y, z,
    x, y, z
 ]
 */
const vertexData = [
  -0.5, 0.8, -0.5,
  0.5, -0.5, 0,
  -0.5, -1, 0
]

// 2. create buffer
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

// 3. load vertex data into buffer
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

// 4. create vertex  shader 
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
  attribute vec3 position;
  void main() {
      gl_Position = vec4(position, 1);
  }
`);
gl.compileShader(vertexShader);

// 5. create fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(fragmentShader, `
  void main() {
    gl_FragColor = vec4(1, 0, 0, 1);
  }
`);
gl.compileShader(fragmentShader);

// 6. create program
const program = gl.createProgram();

// 7. attach shaders to program
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// 8. enable vertex attributes
const positionLocation = gl.getAttribLocation(program, `position`);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
gl.useProgram(program);

// 9. draw

gl.drawArrays(gl.TRIANGLES, 0, 3);


export function createCylinderWebGl(){

}