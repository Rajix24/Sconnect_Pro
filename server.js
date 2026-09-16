const http = require("http")
require("dotenv").config()
const router = require("./src/core/router")

const serve = http.createServer((req, res)=>{
  router.lookup(req, res)
})


serve.listen(process.env.SERVER_PORT,process.env.SERVER_HOST , ()=>{
    console.log(`Server is running on ${process.env.SERVER_PORT}`)
})