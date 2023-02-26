const errorHandeling = (error , req , res , next) => {
  const message = error.message || "something went wrong" ;
  const statusCode = error.statusCode || 500 ;
  console.log(message , statusCode);
  next()
}