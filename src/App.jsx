import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryNav from "./components/CategoryNav";
import Hotels from "./Hotel/Hotels";
import Navbar from './Components/Navbar';
import AllComponents from './All/AllComponent';
import Footer from './Components/Footer'
import EndArea from "./End/EndArea";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CategoryNav />
              <AllComponents />
            </>
          }
        />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/endArea/:id" element={<EndArea />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
