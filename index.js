
const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/users')
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json());
app.use('/user' , userRouter);


app.get('/' , (req , res)=> {
        res.send("app runing")
}) 

app.listen(process.env.APP_PORT)