const express=require('express');
const router=express.Router();
const {contactget,contactpost,contactput,contactdelete}=require("../controller/contactcontroller");
router.route("/").get(contactget);
router.route("/").post(contactpost);
router.route("/:id").put(contactput);
router.route("/:id").delete(contactdelete);
    module.exports=router;