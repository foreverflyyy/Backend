const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const {check} = require('express-validator')
const authMiddleWare = require('./middleWare/authMiddleWare.js')
const roleMiddleWare = require('./middleWare/roleMiddleWare.js')

router.post('/registrashion', [
   check('username', 'Your name not must have zero symbols!').notEmpty(),
   check('password', 'Password must be more 4 and less 10 symbols').isLength({min:4, max: 10})
   ], controller.registrashion, )
router.post('/login', controller.login)
router.get('/users', roleMiddleWare(['ADMIN']), controller.getUsers)

module.exports = router