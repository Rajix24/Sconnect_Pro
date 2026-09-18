const http = require("http")
const serverStatic = require("serve-static")
const finalhandler = require("finalhandler")
require("dotenv").config()



const serve = serverStatic("public")



const router = require("./src/core/router")

const server = http.createServer((req, res)=>{
  serve(req, res, (error) =>{
    if(error){
      return finalhandler(req, res)(error)
    }
    router.lookup(req, res)

  })
})


server.listen(process.env.SERVER_PORT,process.env.SERVER_HOST , ()=>{  
    console.log(`Server is running on ${process.env.SERVER_PORT}`)
})