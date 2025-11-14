import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const update = () => {
    const {id} = useParams()
   // console.log(id)
       const navigate = useNavigate()

   const  [user,setuser] = useState("")

   useEffect(()=>{
     fetch(`/api/changedata/${id}`).then((res)=>{return res.json()}).then((result)=>{
        console.log(result)
        setuser(result.data.UserName)
    })
   },[])


    

    function handleForm(e){
      e.preventDefault()
      // console.log(user)

      const formData ={userName:user}   //direct remove 
      fetch(`/api/newupdatevalue/${id}`,{
        method:"PUT",   //use for upadte
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)   //direct use user
      }).then((res)=>{return res.json()}).then((result)=>{
        // console.log(result)
        if(result === "Successfully update value.."){
          navigate("/")

        }
      })
    }
      
    
  return (
    <div>
        <h1>update user</h1>
        <form action="" onSubmit={handleForm}>
            <label htmlFor="">User</label>
            <input type="text" name="" id=""  value={user} onChange={(e)=>{setuser(e.target.value)}}/>
        <input type="submit" value="Update" />
        </form>
    </div>
  )
}
     
export default update   


















 