import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Chat from "./pages/Chat.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
function App() {
 

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </Router>
  )
}

export default App
