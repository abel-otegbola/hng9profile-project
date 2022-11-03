import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//components
import Footer from './components/footer/footer';

//views
import Home from './views/home/home';
import Contact from './views/contact/contact';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
