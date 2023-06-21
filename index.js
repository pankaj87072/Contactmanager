const express=require("express");
const env=require("dotenv").config();
const errorhandler=require("./middleware/middlewarecontrol");
const app =express();
const port=process.env.PORT||5000;
console.log("working");
app.use(express.json());

app.use("/api/allcontacts",require("./routes/contactroute"));
app.use(errorhandler);
app.listen(port,()=>{
    console.log("I am working");
    console.log(`port number is ${port}`);
});