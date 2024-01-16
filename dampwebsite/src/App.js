import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Course from "./pages/course/Component/coursename";
import About from "./pages/about/AboutIndex";
import Faaqs from "./pages/faaqs/Faaqs";
import Explore from "./pages/explore/Explore";
import Navbar from "./pages/component/Navbar";
import EeriPage from "./pages/eeri/Eeri";
import HigherStudies from "./pages/HigherStudies/HigherStudies";
import Footer from "./pages/component/footer";
import InternationExposer from "./pages/InternationExposer/InternationExposer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coursereview" element={<Course />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/faaqs" element={<Faaqs />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/eeripage" element={<EeriPage />} />
          <Route exact path="/higherstudies" element={<HigherStudies />} />
          <Route exact path="/internationexposer" element={<InternationExposer />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
