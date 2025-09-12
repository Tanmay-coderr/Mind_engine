import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Ai from "./pages/Ai";
import Helpline from "./pages/Helpline";
import Footer from "./components/footer";
import Test from "./pages/Test";
import Result from "./pages/Result";
function App(){
  return(<>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/helpline" element={<Helpline/>}></Route>
      <Route path="/ai" element={<Ai/>}></Route>
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />



    </Routes>
  <Footer />
  </BrowserRouter>
  </>);
}

export default App