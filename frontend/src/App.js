import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Components/Register";

function App() {
  
  return (
   
    <Router>
      <Routes>
        <Route path='/' exact element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
