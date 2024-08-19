import './App.css';
import Addcart from './Components/Addcart';
import Aftersubmit from "./Components/Aftersubmit";
import Cartitems from './Components/Cartitems';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Addcart />} />
        <Route path="/Aftersubmit" element={<Aftersubmit />} />
        <Route path="/cart" element={<Cartitems />} />

      </Routes>
    </Router>
     
     
     
    </div>
  );
}

export default App;
