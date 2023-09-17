const User = require('./models/Users.js')
const Role = require('./models/Role.js')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('./config.js')

const generateAccessToken = (id, roles) => {
   const payload = {
      id,
      roles
   }
   return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class AuthController {
   async registrashion(req, res) {
   try {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
         return res.result(400).json({message: "Error connect", errors})
      }
      const {username, password} = req.body
      const candidate = await User.findOne({username})
      if(candidate){
         return res.status(400).json({message: "Stop, this username yet have!"})
      }
      const hashPassword = bcrypt.hashSync(password, 7)
      const userRole = await Role.findOne({value: "USER"})
      const user = new User({username, password: hashPassword, role: [userRole.value]})
      await user.save()
      return res.status(201).json({message: "Congratulation you followed!"})
   } catch(e){
      console.log(e)
   }
   }
   async login(req, res) {
      try {
         const {username, password} = req.body
         const user = await User.findOne({username})
         if(!user) {
            return res.status(400).json({message: "This login not exist!"})
         }
         const validPassword = bcrypt.compareSync(password, user.password)
         if(!validPassword) {
            return res.status(400).json({message: 'You enter not correct pass!'})
         }
         const token = generateAccessToken(user._id, user.roles)
         return res.json({token})
      } catch(e){
         console.log(e)
      }
   }
   async getUsers(req, res) {
   try {
      const users = await User.find()
      res.json(users)
   } catch(e){
      console.log(e)
   }
   }
}
module.exports = new AuthController()