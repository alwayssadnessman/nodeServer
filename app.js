var express = require('express');
var os = require('os')
var app = express();
let IPv4;
let networkInterfaces = os.networkInterfaces()
for(let item in networkInterfaces){
    console.log(item)
    if(item === "Wi-Fi"){
        IPv4 = networkInterfaces[item][0].address
    }
}
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});
app.get("/getInfo",function(req,res){
    res.send({
        message:"success"
    })
})


app.use(express.static('static')); //  资源文件夹 名称

app.listen(3000);  // 端口号
console.log('----------local IP: '+IPv4);
console.log('服务器启动: 3000');