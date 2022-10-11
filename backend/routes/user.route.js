const express= require("express");
const router = express.Router();
const {getAddress,deleteAddress,addAddress} = require("../controllers/address.controller")


router.route("/addresses").get(getAddress).post(addAddress)
router.route("/addresses/:id").delete(deleteAddress)


module.exports=router;