import './App.css';
import Addcart from './Components/Addcart';
import Aftersubmit from "./Components/Aftersubmit";
import Cartitems from './Components/Cartitems';
import Registration from './Components/Registration';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<h1>Landingpage here</h1>} />
        <Route path="/registration" element={<Registration />}/>
        <Route path="/cart-items" element={<Addcart />} />
        <Route path="/successful-sell" element={<Aftersubmit />} />
        <Route path="/cart" element={<Cartitems />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </Router>
     
     
     
    </div>
  );
}

export default App;
