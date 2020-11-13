const { Product } = require("../models/index")

function authorization (req, res, next){
    // const { id } = req.params
    // // console.log(id)
    // Product.findByPk(id)
    // .then(data => {
    //     if(!data){
    //         throw {msg: "Product not found" , status: 404 }
    //     }
    //     else if(data.UserId === req.loggedInUser.id){
    //         next()
    //     }
    //     else{
    //         throw {msg: "Not Authorized", status: 401 }
    //     }
    // })
    // .catch(err => {
    //     next(err)
    // })
    if (req.loggedInUser.role === "admin"){
        next()
    }
    else {
        next({message: "Sorry, you are not authorized"})
    }
}

module.exports = authorization