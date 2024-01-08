import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import About from "./pages/about/AboutIndex";
import Faaqs from "./pages/explore/Explore";
import Link from "./pages/importantLink/Link";
import Explore from "./pages/explore/Explore";
import Navbar from "./pages/component/Navbar";

function App() {


  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coursereview" element={<Course />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/faaqs" element={<Faaqs />} />
          <Route exact path="/link" element={<Link />} />
          <Route exact path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
