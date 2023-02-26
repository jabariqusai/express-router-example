const logger= (req,res) =>{
console.info( req.method , req.originalUrl , new Date())
req.next()

}

export default logger
