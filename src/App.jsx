import Login from "./pages/Login"
import Register from "./pages/Register"
import Product from "./pages/Product"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/product" element={<Product/>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
