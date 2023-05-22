const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";
    if (err.name === "CastError"){
        const message = `Resources not found with this id... Invalid ${err.path} `;
        err = new ErrorHandler(message, 400);
    }
    if(err.code == 1100){
        const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }
    if(err.name === "JsonWebTokenError"){
        const message = `The url you are trying to access is invalid please try again`;
        err = new ErrorHandler(message,400);
    }

    if(err.name === "TokenExpiredError"){
        const message = `Your session has ended please try again`;
        err =  new ErrorHandler(message,400);
    }

    return res.status(err.statusCode).json({
        success:false,
        message:err.message

    })

}