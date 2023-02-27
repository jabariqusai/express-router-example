const errorHandeling = (error , req , res , next) => {
  console.log('error' , error);
  const message = error.message || "something went wrong" ;
  const statusCode = error.statusCode || 500 ;
  console.log(message , statusCode);
  // next()
}
export default errorHandeling; 