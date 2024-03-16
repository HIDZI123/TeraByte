/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/header.scss';
import './styles/home.scss';
import Upload from "./components/Upload";
import LoginSignup from './components/LoginSignup';
import '../src/styles/LoginSignup.css'
import './styles/upload.scss'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="#aboutt" element = {<Home/>} />
        <Route path="/login" element = {<LoginSignup/>} />
        <Route path="/upload" element = {<Upload/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
