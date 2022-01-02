import React, { useState, useEffect } from 'react'
import "./app.css"
import Navbar from './components/Navbar'
import Front from './components/Front'
import Bars from './components/Bars'
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Quiz from "./components/quiz/Quiz"
import Sort from "./Sort";

let App=()=> {
  

  return (
    <div className='app'>
       <>
      <Router>
          <Routes>
            <Route path = "/" element={<Sort />}>
            </Route>
             <Route path="/quiz" element={<Quiz/>}  >
            </Route>
          </Routes>
      </Router>
      
      </>
    </div>
    
  )
}

export default App
