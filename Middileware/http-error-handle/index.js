import HttpError from "../../class/http-error";

/**
 * 
 * @param {HttpError} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorhHndling = (err, req, res, next) => {
    console.log("TEEEEESTTTTT")
    const message = res.message || "somthing went Wrong  !"
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
        message,
        statusCode
    })

}
export default errorhHndling;