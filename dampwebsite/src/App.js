import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/AboutIndex";
import Faaqs from "./pages/faaqs/Faaqs";
import Explore from "./pages/explore/Explore";
import Navbar from "./pages/component/Navbar";
import EeriPage from "./pages/eeri/Eeri";
import HigherStudies from "./pages/HigherStudies/HigherStudies";
import Footer from "./pages/component/footer";
import InternationExposer from "./pages/InternationExposer/InternationExposer";
import Departmentreview from "./pages/course/Component/Departmentreview";
import Minorreview from "./pages/course/Component/Minorreview";
import Secondreview from "./pages/course/Component/Secondreview";
import Thirdreview from "./pages/course/Component/Thirdreview";
import Fourthreview from "./pages/course/Component/Fourthreview";
import Institutereview from "./pages/course/Component/Institutereview";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/coursereview" element={<Course />} /> */}
          <Route exact path="/departmentreview" element={<Departmentreview />} />
          <Route exact path="/minorreview" element={<Minorreview />} />
          <Route exact path="/secondreview" element={<Secondreview />} />
          <Route exact path="/thirdreview" element={<Thirdreview />} />
          <Route exact path="/fourthreview" element={<Fourthreview />} />
          <Route exact path="/institutereview" element={<Institutereview />} />
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
