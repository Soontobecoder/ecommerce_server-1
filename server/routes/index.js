const router = require("express").Router()
const UserController = require("../controllers/userController")
const product = require("./products")

router.post('/register', UserController.signUp)
router.post('/login', UserController.signIn)
router.use('/products', product)

module.exports = router