
import './App.css';
import CartSummary from './Components/CartSummary';
import {
  Routes,
  Route,
} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout"
function App() {
  return (
    <div
    style={{fontFamily: "'Titillium Web', sans-serif"}}
    className="App bg-white max-w-[1200px] mx-auto">
      <Routes>
        <Route path="/" element={<CartSummary/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
