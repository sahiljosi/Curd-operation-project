// const homepageController =(req,res )=>{
//     res.send("hellow sir kaise ho ")
// }

// const userDataController =(req,res)=>{
//     res.send("user data - sahil sir")
// }

// const dbData = []
// const DataController =(req,res)=>{
//    // console.log(req.body)
//    dbData.push(req.body)
//     // res.send("Successfuly submit")
//     res.json("successfully submit data")
// }
// const showDatacontroller =(req,res)=>{
//      dbData.json(dbData)

//   }




// module.exports = {
//     homepageController,
//     userDataController,
//     DataController,
//      showDatacontroller
// }  

const homepageController = (req, res) => {
  res.send("hellow sir kaise ho ");
};

const userDataController = (req, res) => {
  res.send("user data - sahil sir");
};

// temporary in-memory array (acts as fake database)
let dbData = [];

const DataController = (req, res) => {
  dbData.push(req.body); // push request data to array
  res.json({ message: "successfully submit data" }); // ✅ proper JSON response
};

const showDatacontroller = (req, res) => {
  res.json(dbData); // ✅ send the full array back as JSON
};


const deleteUserController =(req,res)=>{
    // console.log(req.params.id)    
       const userid = parseInt(req.params.id)  //ek array mai se delete kaaise karna hai use filter method or phir fild index
     let filterValue = dbData.filter((user,index)=>index !== userid)   //id and index arguments
       dbData = [...filterValue]
    console.log(filterValue)
     res.json( {message:"Successfully delete",data:filterValue}) //response nikalna use then catchs
}

const updtacontroller =(req,res)=>{

  //console.log(req.params.id)

  const index = req.params.id
     const singledata = dbData[index]  //db dta dta nikalna 
     res.json({data:singledata})   //frontend data some 
}
const newupdatevaluecontroller  =(req,res)=>{
  // console.log(req.params)  //backend value send 
  // console.log(req.body)

  const index = req.params.id
  const newValue = req.body.userName
  const newObj ={UserName:newValue}
  dbData.splice(index,1,newObj)    //splice method update the value  syntax arguments 1>index 2>remove[kitni alue remove karna hai] 3>new vlue
     res.json("Successfully update value..")
}
module.exports = {
  homepageController,
  userDataController,
  DataController,
  showDatacontroller,
  deleteUserController,
  updtacontroller,
  newupdatevaluecontroller
};
