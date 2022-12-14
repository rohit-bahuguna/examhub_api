
const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/users')
const questionRouter = require ('./routes/questions')
require('dotenv').config();
const PORT = process.env.PORT || 4000 ;

const app = express();
app.use(cors())
app.use(express.json());
 app.use('/user' , userRouter);
app.use('/questions' , questionRouter)

app.get('/' , (req , res)=> {
        res.send("app runing")
}) 

app.listen(PORT , ()=>{console.log('server is runing')})