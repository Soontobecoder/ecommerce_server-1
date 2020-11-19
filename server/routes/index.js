const router = require("express").Router()
const UserController = require("../controllers/userController")
const product = require("./products")
const cart = require('./cart')

router.post('/register', UserController.signUp)
router.post('/login', UserController.signIn)
router.use('/products', product)
router.use('/carts', cart)

module.exports = router