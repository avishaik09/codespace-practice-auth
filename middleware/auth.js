const jwt=require('jsonwebtoken');

const auth=(req,res,next)=>{
    console.log(req.cookies);
    //grap token from cookie
const {token}=req.cookies

//if no token stop there
if(!token){
   res.status(403).send("please login first")
   
}
//decode the token and get id

try {
    const decode=jwt.verify(token,'shhhh');
    console.log(decode);
    req.user=decode
} catch (error) {
    console.log(error)
    res.status(401).send("Invalid token")
}
//query to db for that user id

return next();
}

module.exports=auth;