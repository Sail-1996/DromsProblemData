const mongoose=require("mongoose");
const mongodbErrors=require("mongoose-mongodb-errors")
const dotenv = require('dotenv');
mongoose.plugin(mongodbErrors)
dotenv.config();
mongoose.connect(process.env.DATABASE_SERVER||" mongodb://localhost:27017/mong",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection");
}) 