
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [user, setUser] = useState("");
  const [data,setData]= useState([])

  function handleForm(e) {
    e.preventDefault();

    const formData = { UserName: user };

    // send data to backend
    fetch('/api/data', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(""); // clear input after submit
      });
  }

  function handleData() {
    fetch("/api/showdata")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result) //arrary result data then ul list gos
      });
  }

  function handledelete(id){   
   // console.log(id) 
   fetch(`/api/userdelete/${id}`,{
    method:"DELETE" ,    // delete wala process
   }).then((res)=>{ return res.json()}).then((result)=>{
    console.log(result)
    setData(result.data)

   })
                                                        

  }

  // ✅ return must be inside component body
  return (
    <div>
      <form onSubmit={handleForm}>
        <label>UserName</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <br />

      <button onClick={handleData}>Show Db data</button>
      {
        data.map((item,index)=>(

    <ul>
        <span>{item.UserName}</span> 
         {/* <button onClick={handledelete}>Delete</button>   delete work process sabase pahele id send */}
         <button onClick={()=>{handledelete(index)}}>Delete</button>
         
        <Link to={`/update/${index}`}> <button>update</button> </Link>   

      </ul>
         
     ))}
       
    </div>
  );
  };

export default Form; 










 