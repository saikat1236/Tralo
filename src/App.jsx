
// import './App.css';
// import Header from './components/Header';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import Services from './components/Services';
// import Footer from './components/Footer';

// function App() {
 

//   return (
//     <Router>
//       <Header />
        
//         <Routes>
          
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services/>}/>
          
//         </Routes>
       
//     </Router>
//   );
// }

// export default App;



// src/App.jsx

import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Home from './components/Home.jsx';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-grow' >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
