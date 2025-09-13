import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Ai from "./pages/Ai";
import Helpline from "./pages/Helpline";
import Footer from "./components/footer";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Careercourse from "./pages/Careercourse";
import AcademicCourse from "./pages/AcademicCourse";
import RelationshipCourse from "./pages/RelationshipCourse";
import FinancialCourse from "./FinancialCourse";
import SignupPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Counselor from "./pages/Counselor";
function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/helpline" element={<Helpline />}></Route>
        <Route path="/ai" element={<Ai />}></Route>
        <Route path="/counselor" element={<Counselor />}></Route>


        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/careercourse" element={<Careercourse />} />
        <Route path="/academiccourse" element={<AcademicCourse />} />
        {/* <Route path="/financecourse" element={<FinanceCourse />} />
        <Route path="/relationshipcourse" element={<RelationshipCourse />} />
        <Route path="/generalcourse" element={<GeneralCourse />} /> */}
        <Route path="/relationshipcourse" element={<RelationshipCourse />} />
        <Route path="/financialcourse" element={<FinancialCourse />} />
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginPage />} />




      </Routes>
      <Footer />
    </BrowserRouter>
  </>);
}

export default App