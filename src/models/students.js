const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  personal:{
    type:Map,
    of:String
  },

contact:{
  type:Map,
  of:String
},
education:[{}],
experience:[{}],
reference:[{}]
});

//we will create a new collection
const Employee=new mongoose.model('Employee',studentSchema)
module.exports=Employee;