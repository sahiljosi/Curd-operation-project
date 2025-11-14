const  router =  require ("express").Router()
    const userController = require ("../controllers/user")
   // console.log(userController)

// router.get("/",(req,res)=>{
//     res.send("hellow sir")
// })
 router.get("/",userController.homepageController)
 router.get("/user",userController.userDataController)  //api prefex api router  /user request frotned  userdata controller
router.post("/data",userController.DataController)
router.delete("/userdelete/:id",userController.deleteUserController)

  router.get("/showdata",userController.showDatacontroller)   //map backend to data outside on frontend use map
 router.get("/changedata/:id",userController.updtacontroller)
 router.put("/newupdatevalue/:id",userController.newupdatevaluecontroller)

module.exports = router     