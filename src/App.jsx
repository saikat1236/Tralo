
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Home from './components/Home.jsx';
import Search from './components/Search.jsx';
import Contact from './components/contact.jsx';
import ScrollToTop from './components/Scroll.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsOfService from './components/TermsOfService.jsx';

function App() {
  return (
    <Router>
        <ScrollToTop />
      <div className="flex flex-col overflow-hidden overscroll-none min-h-screen ">
        <Header />
        <div className='flex-grow ' >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
