const express = require('express')
const path = require('path')
const authRouter = require('./authRouter.js')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const app = express()


app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
   try{
      await mongoose.connect('mongodb+srv://user:user@cluster0.kzxiy.mongodb.net/third_try')
   app.listen(PORT, () => console.log('We are in 5000 PORT'))
   } catch(e){
      console.log(e)
   }
}
start()
