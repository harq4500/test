const express = require('express')
const path = require('path');

const  addon = require('./addons/build/Release/MyAsyncBinding.node');
const app = express();

app.use(express.static("public"))

// app.get("/",(req,res)=>{
//   req.redirect("/index.html");
// })

app.get("/test",(req,res)=>{
  res.sendFile(path.join(__dirname, '/public/test.html'));

})

let data;
addon.GetCylinder(0.0, 0.0, 0.0, 1,   (err, result) =>{
  data = result;
});
app.get("/data",(req,res)=>{
 
      res.setHeader('Content-type', 'application/json');

      res.send(data);
  
})

app.listen(3000);
