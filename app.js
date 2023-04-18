const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors")
const credentials = require("./routes/credentials.routes")
// const appointment = require("./routes/appointment.routes")
// const slot = require("./routes/slot.routes")
// const api = require("./api");
const port = 3001;
const app= express();


let url = "mongodb://127.0.0.1:27017/formdb";
const mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;


const db = mongoose.connection;
db.on("error",console.error.bind(console,'MongoDB coonection error !!!'))

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/credentials',credentials);
// app.use('/appointment',appointment);
// app.use('/slot',slot)

app.listen(port , function(){
    console.log("server running at port :" + port);
})
