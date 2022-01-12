import "./app.css"
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Quiz from "./components/quiz/Quiz"
import Sort from "./Sort";
import Home from "../src/components/Home"
import Signup from "./components/Authentication/Signin"
import Signin from "./components/Authentication/Signup"
let App=()=> {
  

  return (
    <div className='app'>
       <>
      <Router>

          <Routes>
             <Route exact path = "/" element={<Home />}>
            </Route>
             <Route path = "/sort" element={<Sort />}>
            </Route>
             <Route path="/quiz" element={<Quiz/>}  >
            </Route>
             <Route path="/signup" element={<Signup/>}  >
            </Route>
            <Route path="/signin" element={<Signin/>}  >
            </Route>
          </Routes>
      </Router>
      
      </>
    </div>
    
  )
}

export default App
