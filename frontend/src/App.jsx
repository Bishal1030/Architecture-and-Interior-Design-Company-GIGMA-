import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          {/* Homepage Route - Includes Hero, Services, and Projects */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Projects />
                <Footer />
              </>
            }
          />
          {/* Other pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/portfolios" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
