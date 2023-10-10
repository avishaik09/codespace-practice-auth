const  mongoose  = require("mongoose");

const {MONGODB_URL}=process.env

exports.connect=()=>{
    mongoose.connect(MONGODB_URL,{useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(
        console.log("DB connected succesfully")
    )
    .catch((error)=>{
        console.log("db connection failed");
        console.log(error)
        process.exit(1)
    }
    )
}