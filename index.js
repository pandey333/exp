
const express = require("express");
const db= require("./controller/database")
const app = express();


db.authenticate()
.then(()=>console.log("database connect"))
.catch((error)=>console.log(`${error} error`))


app.listen(3000, console.log("running on the port 3000"));