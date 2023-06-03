require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routerProduct = require("./routes/productRouter.js");
const cors = require('cors');

//setting
const app = express();
const port = process.env.PORT || 7000;

//middlewares
app.use(express.json());
app.use(cors({origin: '*'}));
app.use("/api", routerProduct);



//routes
app.get("/", (req, res)=> {
    res.send("Api Activa");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error)=> console.log(error));

// server listening
app.listen(port, ()=> console.log("server ok ...", port));