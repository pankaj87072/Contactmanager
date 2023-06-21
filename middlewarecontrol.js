const {constant}=require("../constants");
const errorhandler = (err,req,res,next)=>{
 const statuscode=res.statusCode ? res.statusCode:500;
 switch (statuscode) {
    case constant.validation_failed:
          res.json({title:"VALIDATION FAILED",message:err.message,statckTrace:err.stack});
        break;
    case constant.NOT_FOUND:
      res.json({title:"NOT FOUND",message:err.message,statckTrace:err.stack});
    case constant.FORBIDDEN:
      res.json({title:"FORBIDDEN",message:err.message,statckTrace:err.stack});
    case constant.UNAUTHORIZED:
      res.json({title:"UNAUTHORIZED",message:err.message,statckTrace:err.stack});
    case constant.SERVER_ERROR:
      res.json({title:"SERVER ERROR",message:err.message,statckTrace:err.stack});
    default:
    console.log("NO ERROR THANKYOU!");
        break;
 }
 
 
};
module.exports=errorhandler;