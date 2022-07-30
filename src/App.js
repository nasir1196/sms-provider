import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import
{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App ()
{
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
