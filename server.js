const http = require("http")
const hostName = "localhost"
const port = 4000
const route = require("./src/core/router")

const serve = http.createServer((req, res)=>{
  route(req, res)
})


serve.listen(port, hostName, ()=>{
    console.log("serveur is running ")
})
// const fs = require("fs")
