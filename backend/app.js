const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');

require('dotenv/config');

const api = process.env.API_URL;
const User = require('./models/user');
const usersRouter = require('./routers/users');

mongoose.connect("mongodb+srv://carla:NOizg6RdrLUjCqet@cluster0.hj6or.mongodb.net/test",
    { useNewUrlParser: true,
    useUnifiedTopology: true, 
    dbName: 'kudo'})
.then(()=> {
    console.log("dat'base connection is ready!");
}
).catch((error)=>{
    console.log(error);
}

);

// Middleware
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(`${api}/users`, usersRouter);


app.listen(3000, ()=>{
    console.log("server is running!");
})