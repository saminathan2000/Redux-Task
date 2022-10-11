const express= require("express");
const router = express.Router();
const {getCart,updateCart,checkout} = require("../controllers/cart.controller")


router.route("/").get(getCart).post(updateCart)
router.route("/checkout").post(checkout)

module.exports=router;