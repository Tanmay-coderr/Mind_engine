import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Ai from "./pages/Ai";
import Helpline from "./pages/Helpline";
import Footer from "./components/footer";
function App(){
  return(<>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/helpline" element={<Helpline/>}></Route>
      <Route path="/ai" element={<Ai/>}></Route>


    </Routes>
  <Footer />
  </BrowserRouter>
  </>);
}

export default App