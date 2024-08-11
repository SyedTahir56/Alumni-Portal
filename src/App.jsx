import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Unievents from "./Components/Unievents";
import Scholarships from "./Components/Scholarships";
import Extended from "./Components/Extended"
import Gallery from "./Components/Home/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/Unievents" element ={ <Unievents/>}/>
      <Route path="/scholarships" element={<Scholarships/>}/>
      <Route path="/Extended" element={<Extended/>}/>
      <Route path="/Extended" element= {<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
