const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const credentialsSchema = new mongoose.Schema(
    {
        userEmailId:String,
        userName:String,
        userContact:String,
        userPassword:String
    },
    {timestamps:true}
)
module.exports = mongoose.model("Credentials",credentialsSchema);