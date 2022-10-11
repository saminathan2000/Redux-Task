const express= require("express");
const router = express.Router();
const {getAllProducts,searchProducts} = require("../controllers/product.controller")

router.route("/search").get(searchProducts)
router.route("/").get(getAllProducts)


module.exports=router;