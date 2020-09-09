const express = require ("express");
const server = express()




const port = process.env.PORT || 3006

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})