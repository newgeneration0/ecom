import { Route , Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SinglePage from "./components/SinglePage";
function App() {

    
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/singlepage/:id" element={<SinglePage/>}/>
      </Routes>

 
    </>
  );
}

export default App;
