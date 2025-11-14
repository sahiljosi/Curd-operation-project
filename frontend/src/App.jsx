//  import React from 'react'
//  import Form from './Form'
//  import {BrowserRouter,Routes,Route} from "react-router-dom"

//  import update from './update'
 
 
 
//  const App = () => {
//    return (
//     <div>
//       <h1>Frontend</h1>

//       <BrowserRouter>
//       <Routes>
//         <Route path ='/' element={<Form />}/>
//         <Route path ='/update' element={<Update/>}/>
      
        
//         <update/>
        
       
//       </Routes>
//       </BrowserRouter>

     
//     </div>
     
  
//    )
//  }
 
//  export default App   





import React from "react";
import Form from "./Form";
//import Update from "./update"; // ✅ ye line missing thi
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Update from "./update"; 

const App = () => {
  
  return (
    <div>
      <h1>Frontend</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/update/:id" element={<Update />} /> {/* ✅ route fix */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
