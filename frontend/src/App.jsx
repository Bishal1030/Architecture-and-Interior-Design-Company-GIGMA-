import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Services />
          <Projects />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;