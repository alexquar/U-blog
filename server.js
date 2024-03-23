const http = require('http')
const server = http.createServer( (req, res)=>{
console.log('request')
})

server.listen(3000,'localhost',()=>{
//listening for requests and fires a function at first
})